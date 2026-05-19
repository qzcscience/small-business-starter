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
      'Learn about Wayeal as a listed precision scientific instrument supplier serving industrial testing, online monitoring, laboratory analysis, and medical instrumentation markets.',
    summary:
      'Founded in 2003 and listed on the Shanghai Stock Exchange STAR Market in 2020 under stock code 688600, Wayeal is a global professional supplier of precision scientific instruments.',
    highlights: [
      'Founded in 2003; listed on the STAR Market in 2020',
      'Serving four major fields of precision scientific instruments',
      'About 1,100 employees; business coverage in more than 30 countries',
    ],
    blocks: [
      {
        title: 'Company Profile',
        body: [
          'Anhui Wanyi Science and Technology Co., Ltd. (Wayeal) was founded in 2003 and listed on the Shanghai Stock Exchange STAR Market in 2020 as the first STAR Market listed company in Anhui Province (stock code: 688600). As a global professional supplier of precision scientific instruments, Wayeal serves four major fields: industrial testing instruments, online monitoring instruments, laboratory analytical instruments, and medical instruments. The company has about 1,100 employees, with business coverage in more than 30 countries.',
          'Wayeal continues to follow a strategy of R&D innovation and product leadership. The company has established scientific research platforms including a postdoctoral research workstation, an academician workstation, and a National Enterprise Technology Center, and has been recognized as a National Specialized and Sophisticated Little Giant Enterprise and a National Intellectual Property Demonstration Enterprise. Guided by the brand philosophy "More Trustable, With Forever", Wayeal integrates advanced manufacturing resources worldwide, globalizes component procurement, standardizes production and manufacturing, and provides customers with high-quality products and services.',
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
      'Review Wayeal development milestones from its 2003 founding through product innovation, STAR Market listing, life science expansion, and 2025 ESG report achievements.',
    summary:
      'Wayeal has developed from a Hefei-based technology company into a listed precision scientific instrument supplier, advancing through foundation, rapid development, and future-oriented growth stages.',
    highlights: [
      'Foundation stage from 2003 to 2009 established helium leak detection and environmental monitoring products',
      'Rapid development from 2010 to 2019 expanded qualifications, revenue, new energy applications, and analytical instruments',
      'Future-oriented stage from 2020 onward includes STAR Market listing, life science and medical instruments, and 2025 national recognition',
    ],
    blocks: [
      {
        title: 'Foundation and Product Expansion',
        body: [
          'Wayeal was founded in 2003. Its first helium mass spectrometer leak detector was launched in 2005, followed by a vacuum chamber leak detection and recovery system in 2007 and analytical instrument and environmental monitoring products in 2009.',
          'The company entered a faster growth stage after its formal renaming as Anhui Wanyi Science and Technology Co., Ltd. in 2010, with CEMS1000 recognized as a national key new product in 2013 and revenue exceeding RMB 100 million in 2014.',
        ],
      },
      {
        title: 'Strategic Development',
        body: [
          'In 2016, Wayeal leak detection products expanded rapidly in the new energy market. In 2020, the company listed on the Shanghai Stock Exchange STAR Market, shifted from equipment manufacturing toward integrated solution services, and introduced internationalization and Digital Wayeal strategies.',
          'Recent milestones include life science instruments in 2023, medical instruments in 2024, approval for a Yangtze River Delta wireless minimally invasive surgery system innovation consortium in 2025, and a 2025 national-level Manufacturing Single Champion recognition for helium mass spectrometer leak detectors.',
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
      'Watch the Wayeal factory tour video series covering helium leak detector production and vacuum chamber system production.',
    summary:
      'Watch a three-part Wayeal factory tour covering helium leak detector production and vacuum chamber system production.',
    highlights: [
      'Part 1: Helium leak detector production',
      'Part 2: Vacuum chamber systems production',
      'Part 3: Vacuum chamber systems production',
    ],
    blocks: [],
  },
  {
    label: 'Corporate Culture',
    slug: 'corporate-culture',
    href: createAboutHref('corporate-culture'),
    eyebrow: 'Culture',
    title: 'Corporate Culture',
    description:
      'A quick look at the ideas behind Wayeal culture.',
    summary:
      'Wayeal keeps things simple: listen closely, build reliable products, support customers well, and keep improving together.',
    highlights: [
      'Customer needs come first',
      'Quality and service go together',
      'Brand philosophy: More Trustable, With Forever',
    ],
    blocks: [
      {
        title: 'What We Aim For',
        body: [
          'We listen closely to customers, solve real problems, and help every project create more value.',
          'Our goal is to become a trusted precision instrument company that people respect over the long term.',
        ],
      },
      {
        title: 'How We Work',
        body: [
          'We stay customer-focused, value the people who make things happen, act honestly, and keep improving.',
          'Quality and service are part of one promise, from design and delivery to long-term support.',
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
      'See how Wayeal organizes business divisions, R&D platforms, manufacturing, quality, supply chain, sales, service, and functional teams around customer and product needs.',
    summary:
      'Wayeal has 1,085 employees, including 313 R&D personnel, and organizes its business through specialized divisions, research platforms, manufacturing, quality, strategy, digital process, finance, talent, legal, and securities functions.',
    highlights: [
      '1,085 employees and 100% labor contract signing rate reported in 2025',
      '313 R&D personnel, representing 28.85% of employees',
      'Business divisions covering industrial testing, environmental and semiconductor, analytical instruments, and medical instruments',
    ],
    blocks: [
      {
        title: 'Operating Structure',
        body: [
          'The ESG report lists Wayeal operating units including the Industrial Environment and Semiconductor Division, Industrial Intelligent Testing Division, Analytical Instrument Division, Minimally Invasive and Dialysis Division, Advanced Technology Research Institute, R&D platform, procurement center, manufacturing center, and quality management center.',
          'Supporting functions include strategy and marketing, process and digitalization, finance, organizational talent development, public relations and legal affairs, audit, and securities, forming a structure that connects governance, product development, production, delivery, and compliance.',
        ],
      },
      {
        title: 'People and Capability',
        body: [
          'Wayeal reports 635 employees with bachelor degree or above, 302 technical personnel, 204 production personnel, 182 sales personnel, and 313 R&D personnel in 2025.',
          'The company uses performance management, training, equity incentives, social insurance coverage, and employee development programs to support technical capability, project execution, and long-term organizational stability.',
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
      'Review Wayeal qualifications, honors, quality management systems, intellectual property, and innovation credentials for supplier and procurement evaluation.',
    summary:
      'Wayeal has built national-level innovation platforms and quality systems, with honors including National Enterprise Technology Center, National Specialized and Sophisticated Little Giant Enterprise, National Intellectual Property Demonstration Enterprise, and National High-tech Enterprise.',
    highlights: [
      'National Enterprise Technology Center and National Postdoctoral Research Workstation',
      'ISO 9001, ISO 10012, and ISO 13485 management system certifications reported',
      '837 cumulative IP applications and 375 cumulative granted items reported in 2025',
    ],
    blocks: [
      {
        title: 'Qualification and Honors',
        body: [
          'Wayeal is recognized as a National Specialized and Sophisticated Little Giant Enterprise, National Intellectual Property Demonstration Enterprise, National Intellectual Property Advantage Enterprise, National High-tech Enterprise, and National Torch Program Key High-tech Enterprise.',
          'The company has established innovation platforms including a National Enterprise Technology Center, National Postdoctoral Research Workstation, Academician Workstation, and provincial engineering and innovation platforms.',
        ],
      },
      {
        title: 'Quality Systems and IP',
        body: [
          'Wayeal reports ISO 9001 quality management, ISO 10012 measurement management, and ISO 13485 medical device quality management certifications, with quality management covering R&D quality, supplier quality, manufacturing quality, and customer quality.',
          'In 2025, Wayeal reported 103 new IP applications and 38 newly granted items, with cumulative totals of 837 applications and 375 granted items across invention patents, utility models, design patents, and software copyrights.',
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
      'Learn about Wayeal collaboration with research institutes, universities, hospitals, industry associations, and technical communities for precision instrument innovation and application validation.',
    summary:
      'Wayeal supports industry-academia-research collaboration, technical exchange, joint laboratories, professional training, and industry forums to advance precision instruments, vacuum measurement, analytical testing, and intelligent scientific instruments.',
    highlights: [
      'Joint laboratory for key vacuum measurement equipment in nuclear fusion applications',
      'Participation in ACCSI 2025, BCEIA, ARAB LAB LIVE 2025, analytica Vietnam 2025, and other industry events',
      'Technical training and exchange programs for chromatography, food testing, and scientific instrument applications',
    ],
    blocks: [
      {
        title: 'Joint Research Platforms',
        body: [
          'In 2025, Wayeal and the Hefei Comprehensive National Science Center Energy Research Institute jointly established a laboratory for key vacuum measurement equipment used in nuclear fusion applications.',
          'The cooperation focuses on tritium-compatible leak detector technology, vacuum leak detection in deuterium-rich environments, and vacuum measurement equipment resistant to neutron irradiation and electromagnetic interference.',
        ],
      },
      {
        title: 'Industry Exchange',
        body: [
          'Wayeal participated in professional exhibitions and forums across environmental protection, semiconductor, new energy, automotive, electric power, home appliances, medical instruments, and laboratory analysis, including ACCSI 2025, BCEIA, ARAB LAB LIVE 2025, analytica Vietnam 2025, Analitica Latin America, CIBF 2025, AMTS 2025, and IC China 2025.',
          'The company also organized and supported technical exchange programs such as ion chromatography training, liquid chromatography practical training, scientific instrument ecosystem activities, and academic meetings that connect product development with real application needs.',
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
      'Based on Wayeal 2025 ESG report, these seven priorities summarize the responsibility topics international buyers commonly review during supplier evaluation.',
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
