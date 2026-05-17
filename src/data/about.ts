export interface AboutContentBlock {
  title: string;
  body: string[];
}

export interface AboutSection {
  label: string;
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  highlights: string[];
  blocks: AboutContentBlock[];
}

export const ABOUT_BASE_PATH = '/about';

const createAboutHref = (slug: string) => `${ABOUT_BASE_PATH}/${slug}`;

export const aboutSections: AboutSection[] = [
  {
    label: 'Company Overview',
    slug: 'company-overview',
    href: createAboutHref('company-overview'),
    eyebrow: 'Company Profile',
    title: 'Company Overview',
    description:
      'Learn about Wayeal as an industrial instrumentation manufacturer focused on helium leak detection and production-line testing solutions.',
    summary:
      'Wayeal develops and supplies helium leak detection instruments, vacuum chamber systems, helium recovery systems, and related testing solutions for industrial quality control.',
    highlights: [
      'Industrial instrumentation manufacturer based in Hefei, China',
      'Focused on helium mass spectrometry leak detection and automated testing systems',
      'Serving applications in automotive, HVAC, energy, electronics, and sealed components',
    ],
    blocks: [
      {
        title: 'Industrial Focus',
        body: [
          'Wayeal supports manufacturers that need reliable leak testing for sealed products, pressure-bearing components, and production-line quality control.',
          'The company combines instrument development, system integration, application engineering, and after-sales support to help customers select practical testing workflows.',
        ],
      },
      {
        title: 'Application Coverage',
        body: [
          'Typical application areas include automotive parts, lithium-ion batteries, HVAC and refrigeration, server liquid cooling, electric power equipment, and other precision sealed assemblies.',
        ],
      },
    ],
  },
  {
    label: 'History & Milestones',
    slug: 'history-milestones',
    href: createAboutHref('history-milestones'),
    eyebrow: 'Company Development',
    title: 'History & Milestones',
    description:
      'Review Wayeal development milestones in industrial instruments, leak detection products, and application expansion.',
    summary:
      'Wayeal has grown through continuous product development, application experience, and expansion into industrial leak testing markets.',
    highlights: [
      'Continuous investment in precision instrument capability',
      'Expansion from product development to system-level industrial solutions',
      'Ongoing application work for export and domestic manufacturing customers',
    ],
    blocks: [
      {
        title: 'Development Path',
        body: [
          'This section presents the major stages of Wayeal development, from technical foundation and product development to wider industrial application.',
          'Milestones should be updated with confirmed dates, product releases, certifications, and important market achievements as source material becomes available.',
        ],
      },
      {
        title: 'Milestone Content',
        body: [
          'The page is structured for a timeline layout, making it easy to add founding events, production expansions, R&D achievements, product launches, and international market updates.',
        ],
      },
    ],
  },
  {
    label: 'Virtual Factory Tour',
    slug: 'virtual-factory-tour',
    href: createAboutHref('virtual-factory-tour'),
    eyebrow: 'Factory View',
    title: 'Virtual Factory Tour',
    description:
      'Explore Wayeal manufacturing, assembly, testing, and application support capabilities through a virtual factory tour.',
    summary:
      'The virtual factory tour is designed to show how Wayeal organizes production, quality control, testing, and customer application support.',
    highlights: [
      'Manufacturing and assembly environment',
      'Product testing and quality control areas',
      'Application engineering and customer demonstration scenarios',
    ],
    blocks: [
      {
        title: 'Tour Experience',
        body: [
          'This page should introduce factory areas that matter to buyers and engineers, including instrument assembly, vacuum system integration, testing stations, and application demonstration spaces.',
          'When video or photo assets are available, they can be placed into the page without changing the route structure.',
        ],
      },
      {
        title: 'What Buyers Can Evaluate',
        body: [
          'The tour should help visitors understand production capability, test workflow, equipment scale, and the engineering process behind customized leak detection systems.',
        ],
      },
    ],
  },
  {
    label: 'Corporate Culture',
    slug: 'corporate-culture',
    href: createAboutHref('corporate-culture'),
    eyebrow: 'Culture',
    title: 'Corporate Culture',
    description:
      'Understand the values, engineering mindset, and service principles behind Wayeal industrial testing solutions.',
    summary:
      'Wayeal culture emphasizes technical reliability, practical engineering, customer responsibility, and continuous improvement.',
    highlights: [
      'Engineering-driven product development',
      'Customer-oriented application support',
      'Long-term commitment to quality and improvement',
    ],
    blocks: [
      {
        title: 'Engineering Values',
        body: [
          'Wayeal approaches leak detection as an engineering problem that requires stable instruments, practical fixtures, reliable methods, and clear communication with customers.',
          'The company culture supports careful technical review, hands-on testing, and iterative improvement from real production feedback.',
        ],
      },
      {
        title: 'Customer Commitment',
        body: [
          'For industrial buyers, culture is reflected in response speed, honest method selection, commissioning support, and the ability to work through application details after delivery.',
        ],
      },
    ],
  },
  {
    label: 'Organization & Team',
    slug: 'organization-team',
    href: createAboutHref('organization-team'),
    eyebrow: 'People & Structure',
    title: 'Organization & Team',
    description:
      'See how Wayeal organizes R&D, manufacturing, application engineering, sales, and service teams around industrial customer needs.',
    summary:
      'Wayeal is organized around the full customer workflow, from technical consultation and product configuration to manufacturing, commissioning, and support.',
    highlights: [
      'R&D and product engineering',
      'Manufacturing, assembly, and quality control',
      'Application engineering, sales, and after-sales support',
    ],
    blocks: [
      {
        title: 'Team Structure',
        body: [
          'This page introduces the departments and technical teams that support Wayeal products and systems, with an emphasis on roles that affect customer project success.',
          'The content can later include leadership profiles, department photos, engineering team introductions, and service network details.',
        ],
      },
      {
        title: 'Project Support',
        body: [
          'Industrial leak detection projects often require cross-functional work across product engineering, fixture design, process review, manufacturing, and on-site service.',
        ],
      },
    ],
  },
  {
    label: 'Certifications & Patents',
    slug: 'certifications-patents',
    href: createAboutHref('certifications-patents'),
    eyebrow: 'Compliance & IP',
    title: 'Certifications & Patents',
    description:
      'Browse Wayeal certifications, intellectual property, and qualification materials for industrial procurement review.',
    summary:
      'This section is prepared for certificates, patents, compliance materials, and qualification references used in supplier evaluation.',
    highlights: [
      'Certification and compliance document area',
      'Patent and intellectual property references',
      'Procurement-friendly qualification presentation',
    ],
    blocks: [
      {
        title: 'Certification Materials',
        body: [
          'The page should present confirmed certifications and qualification documents in a clear structure for international buyers, distributors, and procurement teams.',
          'Document cards can be added for certificates such as CE, ISO, product compliance files, or customer-requested qualification materials when verified source files are available.',
        ],
      },
      {
        title: 'Patent Portfolio',
        body: [
          'Patent content should be listed with confirmed titles, numbers, and filing details to avoid unsupported claims while still showing Wayeal technical development capability.',
        ],
      },
    ],
  },
  {
    label: 'Academic & Research Collaboration',
    slug: 'academic-research-collaboration',
    href: createAboutHref('academic-research-collaboration'),
    eyebrow: 'Research Collaboration',
    title: 'Academic & Research Collaboration',
    description:
      'Learn about Wayeal collaboration with academic, research, and technical institutions for precision instruments and testing applications.',
    summary:
      'Wayeal supports collaboration with academic and research partners where technical development, application testing, and instrument innovation overlap.',
    highlights: [
      'Research-oriented technical cooperation',
      'Application testing and method validation',
      'Links between instrument development and industrial needs',
    ],
    blocks: [
      {
        title: 'Collaboration Direction',
        body: [
          'This page focuses on cooperation with universities, laboratories, research institutes, and technical organizations connected to precision instruments and industrial testing.',
          'The wording should stay evidence-based and can be expanded with named partners, project summaries, or laboratory photos when approved materials are available.',
        ],
      },
      {
        title: 'Research Value',
        body: [
          'Academic and research collaboration can support measurement methods, instrument performance, application validation, and talent development for advanced manufacturing.',
        ],
      },
    ],
  },
  {
    label: 'ESG',
    slug: 'esg',
    href: createAboutHref('esg'),
    eyebrow: 'Responsibility',
    title: 'ESG Priorities for Global Customers',
    description:
      'Review Wayeal ESG priorities for global customers, covering environmental compliance, product quality, responsible supply chain, customer service, privacy, and business ethics.',
    summary:
      'Based on Wayeal 2025 ESG report, these seven priorities address the ESG topics international buyers commonly check before supplier approval.',
    highlights: [],
    blocks: [
      {
        title: 'International Market Readiness',
        body: [
          'Wayeal reports exports to more than 30 countries and regions, with overseas business supported by a Thailand office, an overseas marketing team, direct sales, and trading partners.',
        ],
      },
      {
        title: 'Environmental Compliance and Green Manufacturing',
        body: [
          'ISO 14001 certification coverage reached 100% in 2025. Wayeal also reports Green Factory certification and zero environmental pollution accidents during the reporting period.',
        ],
      },
      {
        title: 'Climate and Resource Efficiency',
        body: [
          'The 2025 ESG report discloses Scope 1 GHG emissions of 171.99 metric tons of CO2 equivalent (tCO2e), Scope 2 GHG emissions of 3,471.52 tCO2e, and total Scope 1 and Scope 2 GHG emissions of 3,643.51 tCO2e.',
        ],
      },
      {
        title: 'Product Quality and Reliability',
        body: [
          'Wayeal reports a 99.9% product qualification rate, a 0% product recall rate, zero major product and service safety or quality liability incidents, and 35 monitored quality indicators with a 100% completion rate.',
        ],
      },
      {
        title: 'Responsible Supply Chain',
        body: [
          'Supplier access and evaluation include technical capability, quality systems, delivery capability, cost control, labor and human rights, health and safety, environmental and climate protection, material compliance, conflict minerals, and business ethics.',
        ],
      },
      {
        title: 'Customer Service and Privacy Protection',
        body: [
          'Wayeal reports 98% average customer revisit satisfaction in 2025, a complaint-response workflow, defined service response targets, and no customer privacy leakage incidents during the reporting period.',
        ],
      },
      {
        title: 'Governance, Compliance and Business Ethics',
        body: [
          'Anti-corruption and compliance training coverage reached 100% in 2025. Wayeal also reports anti-bribery controls, whistleblower protection, internal control reviews, and transparent information disclosure practices.',
        ],
      },
    ],
  },
];

export type AboutSectionSlug = (typeof aboutSections)[number]['slug'];

export const aboutNavItems = aboutSections.map(({ label, href }) => ({
  label,
  href,
}));

export const getAboutSection = (slug: string) =>
  aboutSections.find((section) => section.slug === slug);
