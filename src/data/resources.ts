export interface ResourceDownload {
  title: string;
  standard: string;
  href: string;
  fileName: string;
  extension: string;
}

export interface ResourceNode {
  label: string;
  slug: string;
  href: string;
  description: string;
  downloads?: ResourceDownload[];
  children?: ResourceNode[];
}

export interface ResourceCategory extends ResourceNode {
  children?: ResourceNode[];
}

export const RESOURCE_BASE_PATH = '/resources';

export const resources: ResourceCategory[] = [
  {
    label: 'Glossary',
    slug: 'glossary',
    href: `${RESOURCE_BASE_PATH}/glossary`,
    description:
      'Definitions and method notes for common helium leak testing terms, units, and inspection workflows.',
    children: [
      {
        label: 'Leak Rate Units',
        slug: 'leak-rate-units',
        href: `${RESOURCE_BASE_PATH}/glossary/leak-rate-units`,
        description: 'Understand atm cc/s, mbar l/s, Pa m3/s, and how leak rate units are compared.',
      },
      {
        label: 'Spray Probe Method (喷氦法)',
        slug: 'spray-probe-method',
        href: `${RESOURCE_BASE_PATH}/glossary/spray-probe-method`,
        description: 'A quick reference for the helium spray probe method used around vacuumized parts.',
      },
      {
        label: 'Sniffer Method (吸枪法)',
        slug: 'sniffer-method',
        href: `${RESOURCE_BASE_PATH}/glossary/sniffer-method`,
        description: 'A field-friendly overview of probe-based leak localization on pressurized parts.',
      },
      {
        label: 'Vacuum Method (真空法)',
        slug: 'vacuum-method',
        href: `${RESOURCE_BASE_PATH}/glossary/vacuum-method`,
        description: 'Key concepts behind testing parts in vacuum chambers or vacuum-connected fixtures.',
      },
    ],
  },
  {
    label: 'Technical Guides',
    slug: 'technical-guides',
    href: `${RESOURCE_BASE_PATH}/technical-guides`,
    description:
      'Practical selection and comparison guides for engineers planning leak testing equipment and methods.',
    children: [
      {
        label: 'Buying Guides',
        slug: 'buying-guides',
        href: `${RESOURCE_BASE_PATH}/technical-guides/buying-guides`,
        description: 'Selection notes for matching test configuration to part geometry and production flow.',
        children: [
          {
            label: 'Inside vs Outside Box Testing',
            slug: 'inside-vs-outside-box-testing',
            href: `${RESOURCE_BASE_PATH}/technical-guides/buying-guides/inside-vs-outside-box-testing`,
            description:
              'Compare fixture strategy, cycle time, sensitivity, and practical constraints for box testing.',
          },
        ],
      },
      {
        label: 'Method Comparison',
        slug: 'method-comparison',
        href: `${RESOURCE_BASE_PATH}/technical-guides/method-comparison`,
        description: 'Compare leak testing methods before selecting equipment for production.',
        children: [
          {
            label: 'Helium vs Pressure Decay vs Bubble Test',
            slug: 'helium-vs-pressure-decay-vs-bubble-test',
            href: `${RESOURCE_BASE_PATH}/technical-guides/method-comparison/helium-vs-pressure-decay-vs-bubble-test`,
            description:
              'A practical comparison of sensitivity, speed, automation fit, and inspection confidence.',
          },
        ],
      },
    ],
  },
  {
    label: 'Case Studies',
    slug: 'case-studies',
    href: `${RESOURCE_BASE_PATH}/case-studies`,
    description:
      'Application examples showing how leak testing workflows are configured for real industrial parts.',
    children: [
      {
        label: 'EV Battery · Pouch Cell Testing',
        slug: 'ev-battery-pouch-cell-testing',
        href: `${RESOURCE_BASE_PATH}/case-studies/ev-battery-pouch-cell-testing`,
        description: 'Leak testing considerations for battery cell sealing, sensitivity, and throughput.',
      },
      {
        label: 'Refrigeration · Compressor Line',
        slug: 'refrigeration-compressor-line',
        href: `${RESOURCE_BASE_PATH}/case-studies/refrigeration-compressor-line`,
        description: 'Production line checks for compressor assemblies and refrigerant circuit integrity.',
      },
      {
        label: 'Power · HV Switchgear',
        slug: 'power-hv-switchgear',
        href: `${RESOURCE_BASE_PATH}/case-studies/power-hv-switchgear`,
        description: 'Leak testing approach for high-voltage switchgear and gas-insulated equipment.',
      },
    ],
  },
  {
    label: 'Downloads',
    slug: 'downloads',
    href: `${RESOURCE_BASE_PATH}/downloads`,
    description:
      'Catalogs, certificates, and reference documents for product evaluation and supplier qualification.',
    children: [
      {
        label: 'Product Catalogs',
        slug: 'product-catalogs',
        href: `${RESOURCE_BASE_PATH}/downloads/product-catalogs`,
        description: 'Browse product overview materials for helium leak detectors and related systems.',
        downloads: [
          {
            title: 'Wayeal One-stop Leak Detection Solutions',
            standard: 'Catalog',
            href: '/downloads/resources/product-catalogs/wayeal-one-stop-leak-detection-solutions.pdf',
            fileName: 'wayeal-one-stop-leak-detection-solutions.pdf',
            extension: 'PDF',
          },
        ],
      },
      {
        label: 'Certifications (CE / UL / ISO)',
        slug: 'certifications-ce-ul-iso',
        href: `${RESOURCE_BASE_PATH}/downloads/certifications-ce-ul-iso`,
        description: 'Certification references for compliance review and procurement documentation.',
        downloads: [
          {
            title: 'Wayeal ISO 9001 Quality Management System Certificate',
            standard: 'ISO 9001',
            href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-9001-quality-management-system.pdf',
            fileName: 'wayeal-iso-9001-quality-management-system.pdf',
            extension: 'PDF',
          },
          {
            title: 'Wayeal ISO 14001 Environmental Management System Certificate',
            standard: 'ISO 14001',
            href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-14001-environmental-management-system.pdf',
            fileName: 'wayeal-iso-14001-environmental-management-system.pdf',
            extension: 'PDF',
          },
          {
            title: 'Wayeal ISO 45001 Occupational Health and Safety Management System Certificate',
            standard: 'ISO 45001',
            href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-45001-occupational-health-safety-management-system.pdf',
            fileName: 'wayeal-iso-45001-occupational-health-safety-management-system.pdf',
            extension: 'PDF',
          },
          {
            title: 'Wayeal ISO 50001 Energy Management System Certificate',
            standard: 'ISO 50001',
            href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-50001-energy-management-system.pdf',
            fileName: 'wayeal-iso-50001-energy-management-system.pdf',
            extension: 'PDF',
          },
          {
            title: 'Wayeal ISO/IEC 20000-1:2018 Information Technology Service Management System Certificate',
            standard: 'ISO/IEC 20000-1:2018',
            href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-iec-20000-1-information-technology-service-management-system.pdf',
            fileName: 'wayeal-iso-iec-20000-1-information-technology-service-management-system.pdf',
            extension: 'PDF',
          },
          {
            title: 'SFJ-231 CE Certificate',
            standard: 'CE',
            href: '/downloads/products/SFJ-231/SFJ-231-CE-Certificate.pdf',
            fileName: 'SFJ-231-CE-Certificate.pdf',
            extension: 'PDF',
          },
          {
            title: 'SFJ-231 NRTL Certificate',
            standard: 'NRTL',
            href: '/downloads/products/SFJ-231/SFJ-231-NRTL-Certificate.pdf',
            fileName: 'SFJ-231-NRTL-Certificate.pdf',
            extension: 'PDF',
          },
        ],
      },
    ],
  },
  {
    label: 'Videos',
    slug: 'videos',
    href: `${RESOURCE_BASE_PATH}/videos`,
    description:
      'Video resources for product walkthroughs, application examples, and leak testing method explainers.',
  },
  {
    label: 'Useful Tools',
    slug: 'useful-tools',
    href: `${RESOURCE_BASE_PATH}/useful-tools`,
    description:
      'Calculators and converters for leak rate units, industrial standards, and application planning.',
    children: [
      {
        label: 'Leak Rate Unit Converter',
        slug: 'leak-rate-unit-converter',
        href: `${RESOURCE_BASE_PATH}/useful-tools/leak-rate-unit-converter`,
        description: 'Convert common leak rate units used in helium, pressure decay, and vacuum testing.',
      },
      {
        label: 'Industry Leak Standard Calculator',
        slug: 'industry-leak-standard-calculator',
        href: `${RESOURCE_BASE_PATH}/useful-tools/industry-leak-standard-calculator`,
        description: 'Estimate practical leak thresholds for industrial parts and quality specifications.',
      },
    ],
  },
];

export const resourceNavItems = resources.map(({ label, href }) => ({
  label,
  href,
}));

export const getResourceCategory = (slug: string) =>
  resources.find((resource) => resource.slug === slug);

export interface ResourceRoute {
  node: ResourceNode;
  ancestors: ResourceNode[];
  slug: string[];
  isLeaf: boolean;
}

const collectResourceRoutes = (
  nodes: ResourceNode[],
  ancestors: ResourceNode[] = [],
): ResourceRoute[] =>
  nodes.flatMap((node) => {
    const routeAncestors = [...ancestors, node];
    return [
      {
        node,
        ancestors: routeAncestors,
        slug: routeAncestors.map((ancestor) => ancestor.slug),
        isLeaf: !node.children?.length,
      },
      ...collectResourceRoutes(node.children || [], routeAncestors),
    ];
  });

export const resourceRoutes = collectResourceRoutes(resources);

export const getResourceRouteBySlug = (slug: string[]) => {
  const routePath = slug.join('/');
  return resourceRoutes.find((route) => route.slug.join('/') === routePath);
};
