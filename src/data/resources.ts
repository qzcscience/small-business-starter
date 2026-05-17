import { siteVideos, type SiteVideo } from './videos';
import heliumSprayMethodImage from '../assets/images/resources/helium-spray-method-image2-4k.png?url';

export interface ResourceDownload {
  title: string;
  standard: string;
  href: string;
  fileName: string;
  extension: string;
}

export interface ResourceImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ResourceKeyValue {
  label: string;
  value: string;
}

export interface ResourceArticleCard {
  title: string;
  description: string;
}

export interface ResourceArticleStep {
  title: string;
  description: string;
}

export interface ResourceArticleCallout {
  title: string;
  text: string;
  bullets?: string[];
}

export interface ResourceArticleSection {
  title: string;
  eyebrow?: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: ResourceArticleCard[];
  steps?: ResourceArticleStep[];
  callout?: ResourceArticleCallout;
}

export interface ResourceArticle {
  heroImage?: ResourceImage;
  quickFacts?: ResourceKeyValue[];
  intro?: string[];
  sections: ResourceArticleSection[];
  cta?: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
}

export interface ResourceNode {
  label: string;
  slug: string;
  href: string;
  description: string;
  article?: ResourceArticle;
  downloads?: ResourceDownload[];
  videos?: SiteVideo[];
  children?: ResourceNode[];
}

export interface ResourceCategory extends ResourceNode {
  children?: ResourceNode[];
}

export const RESOURCE_BASE_PATH = '/resources';

const heliumSprayMethodVideos = siteVideos.filter((video) => video.videoId === 'KhgjPk0dUFU');

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
        label: 'Helium Spray Method',
        slug: 'helium-spray-method',
        href: `${RESOURCE_BASE_PATH}/glossary/helium-spray-method`,
        description:
          'A practical guide to using helium spray testing to localize leaks on evacuated parts with a helium mass spectrometer leak detector.',
        videos: heliumSprayMethodVideos,
        article: {
          heroImage: {
            src: heliumSprayMethodImage,
            alt: 'Helium spray method workflow and operating principle for an evacuated workpiece connected to a helium mass spectrometer leak detector',
            caption:
              'In the helium spray method, the workpiece is evacuated and helium is applied outside suspected leak areas. A leak path draws helium into the detector and produces a measured response.',
          },
          quickFacts: [
            { label: 'Best fit', value: 'Vacuum-capable workpieces and assemblies' },
            { label: 'Primary purpose', value: 'Precise leak localization after evacuation' },
            { label: 'Tracer gas', value: 'Helium applied externally with a spray gun' },
            { label: 'Detector signal', value: 'Mass spectrometer response and pass/fail result' },
          ],
          intro: [
            'The helium spray method is a vacuum-side tracer gas technique for finding where a leak is located, not only whether a part leaks. The workpiece, vessel, pipe, or sealed assembly is connected to a helium mass spectrometer leak detector and evacuated. Helium is then sprayed onto suspected external surfaces. If a leak path exists, helium is pulled through the defect and detected by the instrument.',
            'For potential customers, the method is valuable because it connects engineering evidence to practical repair decisions. Instead of replacing parts blindly, teams can test weld seams, flanges, threaded connections, brazed joints, seals, ports, and tooling interfaces in a controlled sequence and mark the locations that actually generate a detector response.',
          ],
          sections: [
            {
              eyebrow: 'Method selection',
              title: 'When the helium spray method is the right choice',
              paragraphs: [
                'Use helium spray testing when the part can safely tolerate evacuation and the leak path must be localized from the outside. It is especially useful after a gross leak check, during prototype troubleshooting, after repair, or when a vacuum chamber or production station needs a diagnostic method before final process approval.',
                'Compared with sniffer testing on a pressurized part, the spray method generally gives stronger sensitivity because helium is drawn into the evacuated volume instead of escaping into ambient air and being diluted before the probe can collect it. Sniffer testing remains useful for pressure-side parts and field checks, but the spray method is preferred when the part geometry and process allow vacuum-side testing.',
              ],
              cards: [
                {
                  title: 'Vacuum vessels and chambers',
                  description:
                    'Locate leaks around doors, viewports, feedthroughs, vacuum flanges, welds, valves, and pump connections.',
                },
                {
                  title: 'Heat exchangers and sealed circuits',
                  description:
                    'Check brazed seams, headers, tube joints, welded ports, and repair areas after the circuit is connected to a detector.',
                },
                {
                  title: 'Power and electrical equipment',
                  description:
                    'Inspect sealed tanks, gas-insulated components, vacuum interrupter assemblies, and welded or bolted interfaces.',
                },
                {
                  title: 'Production troubleshooting',
                  description:
                    'Confirm whether a recurring leak signal comes from the workpiece, fixture seal, adapter, vacuum line, or test tooling.',
                },
              ],
            },
            {
              eyebrow: 'Workflow',
              title: 'Typical helium spray test workflow',
              steps: [
                {
                  title: 'Connect and evacuate the workpiece',
                  description:
                    'Seal the workpiece to the leak detector or test fixture, then evacuate it to a pressure range where the detector can operate with stable sensitivity.',
                },
                {
                  title: 'Stabilize the background',
                  description:
                    'Allow the leak detector reading to settle, confirm the system is not saturated by residual helium, and verify that fixture seals are not dominating the signal.',
                },
                {
                  title: 'Spray suspected areas systematically',
                  description:
                    'Apply helium from a spray gun to weld seams, joints, connectors, and sealing faces in a controlled order instead of flooding the whole part at once.',
                },
                {
                  title: 'Watch the response and mark peaks',
                  description:
                    'A real leak produces a delayed but repeatable rise in the helium signal. The maximum response helps localize the leak zone.',
                },
                {
                  title: 'Repair, clean down, and retest',
                  description:
                    'After the first leak is found and repaired, repeat the inspection to find smaller leaks that may have been masked by the original large leak.',
                },
              ],
            },
            {
              eyebrow: 'Operating principle',
              title: 'What happens inside the detector',
              paragraphs: [
                'The pressure difference between atmosphere and the evacuated workpiece drives helium through any open leak path. The helium travels through the internal volume, fixture, and vacuum line to the mass spectrometer leak detector. The detector separates helium from the gas stream and converts the helium signal into a leak-rate reading or pass/fail indication.',
                'Response time depends on internal volume, line length, conductance, pumping speed, leak size, and the amount of helium applied. Small parts and short lines respond quickly; large cavities and long pipe runs may need a deliberate waiting time before the peak appears.',
              ],
              callout: {
                title: 'Customer takeaway',
                text: 'A stable helium spray method is not only an instrument function. It is a complete test setup: detector sensitivity, vacuum connection, helium flow control, part geometry, operator technique, background control, and retest discipline all matter.',
              },
            },
            {
              eyebrow: 'Sensitivity',
              title: 'Spray method versus sniffer method',
              paragraphs: [
                'The Wayeal SFJ-231 supports both vacuum-mode and sniffer-mode leak detection. Vacuum-side testing can reach much lower detectable leak rates than sniffer-mode localization because the detector is connected directly to the evacuated test volume.',
                'Sniffer sensitivity is affected by leak shape, probe distance, probe angle, scanning speed, nozzle shape, suction capacity, and the helium background concentration in the surrounding air. Those same practical factors still matter during spray testing, but the vacuum connection gives the spray method a more direct measurement path when the part can be evacuated.',
              ],
              bullets: [
                'Use spray testing when the workpiece can be evacuated and leak localization accuracy is important.',
                'Use sniffer testing when the workpiece must be pressurized or cannot be placed under vacuum.',
                'Use a vacuum chamber or integral method when the goal is a total leak-rate result rather than locating the exact leak point.',
              ],
            },
            {
              eyebrow: 'Result stability',
              title: 'Factors that affect the helium signal',
              bullets: [
                'Helium flow rate and spray duration: too little helium can miss a small leak; too much can saturate the area and make localization slower.',
                'Distance and angle of the spray gun: keep the application controlled and repeatable around each suspected point.',
                'Workpiece volume and connection length: large internal volumes and long vacuum lines delay the detector response.',
                'Background helium: poor ventilation or repeated heavy spraying can raise the room background and reduce confidence.',
                'Fixture and adapter integrity: a leak at the test connection can look like a product defect unless it is checked separately.',
                'Operator scan sequence: a consistent route makes the result easier to interpret and repeat after repair.',
              ],
            },
            {
              eyebrow: 'Precautions',
              title: 'Operational precautions from field practice',
              bullets: [
                'Confirm that the workpiece can withstand negative pressure before evacuation, especially thin-wall parts, tanks, and assemblies with flexible sections.',
                'Find and repair large leaks first. A large leak can mask smaller leaks and flood the detector response.',
                'When two suspected leak points are close together, cover one point and use the finest spray nozzle on the other point to separate the signals.',
                'If the leak detector changes slowly after spraying one point and the reading is inconsistent, suspect a larger nearby leak or a delayed response path.',
                'After any leak is found, repeat the test several times after repair to confirm that the signal is gone and no secondary leaks remain.',
                'Keep the test area well ventilated, but do not direct airflow across the helium spray path in a way that pushes helium away from the suspect point.',
                'Avoid contaminating the test environment with excessive helium. High background makes subsequent small-leak detection slower and less reliable.',
                'For large cavities or long pipelines, use a known reference leak or controlled helium introduction at the far end to estimate detector response time before judging each spray point.',
                'Follow a defined sequence, typically top to bottom and near to far, so the operator does not chase residual helium from a previous location.',
                'During rough search, use a broader spray pattern to cover area quickly; after the leak zone is found, switch to a smaller nozzle to locate the exact point.',
              ],
            },
            {
              eyebrow: 'Applications',
              title: 'Where customers use this method',
              cards: [
                {
                  title: 'HVAC and refrigeration',
                  description:
                    'Evaporators, condensers, compressor housings, refrigerant lines, valves, and brazed heat-transfer assemblies.',
                },
                {
                  title: 'EV and battery thermal systems',
                  description:
                    'Cooling plates, manifolds, welded housings, connector blocks, and liquid-cooling circuits after assembly or repair.',
                },
                {
                  title: 'Vacuum and semiconductor equipment',
                  description:
                    'Vacuum chambers, process modules, flange stacks, gas panels, weldments, and high-vacuum connection points.',
                },
                {
                  title: 'Electric power equipment',
                  description:
                    'Gas-insulated tanks, switchgear components, welded enclosures, sealed pole parts, and connector interfaces.',
                },
              ],
            },
            {
              eyebrow: 'Wayeal support',
              title: 'How Wayeal helps turn the method into a usable process',
              paragraphs: [
                'A good helium spray result comes from matching the detector, fixture, vacuum connection, operator sequence, and acceptance criteria to the actual product. Wayeal can support method selection, detector configuration, tooling review, commissioning, operator training, and troubleshooting for production or laboratory use.',
                'For customers planning a new process, the useful starting information is the part material, dimensions, internal volume, target leak rate, allowable vacuum level, production takt time, expected leak locations, and whether the final process should be manual, semi-automatic, or integrated into a production line.',
              ],
            },
          ],
          cta: {
            title: 'Need to localize leaks on your part?',
            description:
              'Share your workpiece drawings, target leak rate, cycle time, and current leak-test problem. Wayeal can help choose between helium spray, sniffer, vacuum chamber, and integrated production testing.',
            label: 'Discuss Your Application',
            href: '/contact',
          },
        },
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
    videos: siteVideos,
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
