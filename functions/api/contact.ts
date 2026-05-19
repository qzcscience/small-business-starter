interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
}

type PagesContext = {
  request: Request;
  env: Env;
};

const successPath = '/contact/success/';
const fallbackToEmail = 'Oliver@wayeal.com.cn';
const fallbackFromEmail = 'Wayeal Website <onboarding@resend.dev>';

const sanitize = (value: FormDataEntryValue | null) =>
  typeof value === 'string' ? value.trim() : '';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const fail = (message: string, status = 400) =>
  new Response(message, {
    status,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

async function verifyTurnstile(token: string, secret: string, remoteIp: string | null) {
  const body = new FormData();
  body.set('secret', secret);
  body.set('response', token);
  if (remoteIp) body.set('remoteip', remoteIp);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });

  if (!response.ok) return false;

  const result = (await response.json()) as TurnstileResponse;
  return result.success === true;
}

async function handlePost({ request, env }: PagesContext) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return fail('Please submit the contact form fields.');
  }

  const honeypot = sanitize(formData.get('bot-field'));

  if (honeypot) {
    return Response.redirect(new URL(successPath, request.url), 303);
  }

  const name = sanitize(formData.get('name'));
  const email = sanitize(formData.get('email'));
  const phone = sanitize(formData.get('phone'));
  const message = sanitize(formData.get('message'));
  const sourcePage = sanitize(formData.get('source-page')) || '/contact';
  const turnstileToken = sanitize(formData.get('cf-turnstile-response'));

  if (!name || name.length > 120) return fail('Please provide your name.');
  if (!email || !isEmail(email) || email.length > 160) return fail('Please provide a valid email address.');
  if (phone.length > 80) return fail('Please shorten the phone field.');
  if (!message || message.length < 10 || message.length > 5000) {
    return fail('Please provide a message between 10 and 5000 characters.');
  }
  if (!turnstileToken) return fail('Security verification is required.');
  if (!env.TURNSTILE_SECRET_KEY) return fail('Turnstile is not configured.', 500);
  if (!env.RESEND_API_KEY) return fail('Email delivery is not configured.', 500);

  const remoteIp = request.headers.get('CF-Connecting-IP');
  let isHuman = false;
  try {
    isHuman = await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET_KEY, remoteIp);
  } catch {
    return fail('Security verification is temporarily unavailable.', 502);
  }
  if (!isHuman) return fail('Security verification failed.');

  const to = env.CONTACT_TO_EMAIL || fallbackToEmail;
  const from = env.CONTACT_FROM_EMAIL || fallbackFromEmail;
  const submittedAt = new Date().toISOString();
  const text = [
    'New Wayeal contact form submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Source page: ${sourcePage}`,
    `Submitted at: ${submittedAt}`,
    '',
    message,
  ].join('\n');
  const html = `
    <h2>New Wayeal contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
    <p><strong>Source page:</strong> ${escapeHtml(sourcePage)}</p>
    <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
    <hr>
    <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
  `;

  let emailResponse: Response;
  try {
    emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Wayeal website inquiry from ${name}`,
        text,
        html,
      }),
    });
  } catch {
    return fail('Email delivery failed. Please email us directly.', 502);
  }

  if (!emailResponse.ok) {
    return fail('Email delivery failed. Please email us directly.', 502);
  }

  return Response.redirect(new URL(successPath, request.url), 303);
}

export const onRequest = (context: PagesContext) => {
  if (context.request.method !== 'POST') {
    return fail(`Method ${context.request.method} is not allowed.`, 405);
  }

  return handlePost(context);
};
