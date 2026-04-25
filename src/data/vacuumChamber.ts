import defaultSkuImage from '../assets/images/products/SFJ-231/Wayeal SFJ-231.png';

export const VACUUM_CHAMBER_BASE_PATH = '/products/vacuum-chamber-leak-detection';

export interface VacuumChamberSkuSpec {
  label: string;
  value: string;
}

export interface VacuumChamberSku {
  slug: string;
  sku: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  specs: VacuumChamberSkuSpec[];
}

export interface VacuumChamberEquipmentGroup {
  slug: string;
  label: string;
  summary: string;
  skus: VacuumChamberSku[];
}

export interface VacuumChamberApplication {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: VacuumChamberEquipmentGroup[];
}

const commonImage = defaultSkuImage.src;

export const vacuumChamberApplications: VacuumChamberApplication[] = [
  {
    slug: 'automotive',
    label: 'Automotive Parts',
    eyebrow: 'Automotive Leak Testing',
    title: 'Automotive Parts Leak Detection Systems',
    description:
      'Vacuum chamber helium leak detection systems for battery trays, thermal management modules, fuel components, and precision automotive parts.',
    groups: [
      {
        slug: 'battery-tray',
        label: 'Battery Tray Leak Detection',
        summary: 'Systems for EV battery trays, covers, and structural housings.',
        skus: [
          {
            slug: 'vcld-auto-bt-1200',
            sku: 'VCLD-AUTO-BT-1200',
            name: 'Battery Tray Vacuum Chamber Leak Detection System',
            image: commonImage,
            shortDescription: 'Configurable chamber system for EV battery tray helium leak testing.',
            description:
              'Designed for large automotive battery tray assemblies that require stable vacuum pumping, helium detection, and repeatable fixture positioning.',
            specs: [
              { label: 'Application', value: 'EV battery tray and cover assemblies' },
              { label: 'Test method', value: 'Vacuum chamber helium leak detection' },
              { label: 'Configuration', value: 'Custom chamber and tooling' },
            ],
          },
          {
            slug: 'vcld-auto-bt-compact',
            sku: 'VCLD-AUTO-BT-COMPACT',
            name: 'Compact Battery Housing Leak Detection System',
            image: commonImage,
            shortDescription: 'Compact chamber platform for smaller battery housings and covers.',
            description:
              'A compact vacuum chamber platform for lower-volume or smaller-format battery housing inspection.',
            specs: [
              { label: 'Application', value: 'Battery housing and cover parts' },
              { label: 'Test method', value: 'Helium accumulation and vacuum testing' },
              { label: 'Configuration', value: 'Single-station chamber' },
            ],
          },
        ],
      },
      {
        slug: 'thermal-management',
        label: 'Thermal Management Parts',
        summary: 'Leak testing for liquid cooling plates, manifolds, and connectors.',
        skus: [
          {
            slug: 'vcld-auto-tm-600',
            sku: 'VCLD-AUTO-TM-600',
            name: 'Thermal Management Component Leak Detection System',
            image: commonImage,
            shortDescription: 'Vacuum chamber solution for automotive cooling circuits and modules.',
            description:
              'Built for thermal management parts where sealing reliability is critical for coolant circuits.',
            specs: [
              { label: 'Application', value: 'Cooling plates, manifolds, and connectors' },
              { label: 'Test method', value: 'Vacuum chamber helium leak detection' },
              { label: 'Configuration', value: 'Custom fixture-ready chamber' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'hvac',
    label: 'HVAC',
    eyebrow: 'HVAC Leak Testing',
    title: 'HVAC Component Leak Detection Systems',
    description:
      'Vacuum chamber systems for condensers, evaporators, compressors, and refrigerant circuit components.',
    groups: [
      {
        slug: 'heat-exchangers',
        label: 'Heat Exchangers',
        summary: 'Chamber systems for evaporators, condensers, and coils.',
        skus: [
          {
            slug: 'vcld-hvac-hx-800',
            sku: 'VCLD-HVAC-HX-800',
            name: 'HVAC Heat Exchanger Leak Detection System',
            image: commonImage,
            shortDescription: 'Helium leak testing platform for HVAC heat exchanger assemblies.',
            description:
              'A vacuum chamber system for HVAC heat exchanger production lines requiring repeatable refrigerant leak testing.',
            specs: [
              { label: 'Application', value: 'Evaporators, condensers, and coils' },
              { label: 'Test method', value: 'Vacuum chamber helium leak detection' },
              { label: 'Configuration', value: 'Production-line chamber' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'liquid-cooling',
    label: 'Server Liquid Cooling',
    eyebrow: 'Data Center Cooling',
    title: 'Server Liquid Cooling Leak Detection Systems',
    description:
      'Leak detection systems for cold plates, CDUs, quick connectors, and liquid cooling assemblies used in AI data centers.',
    groups: [
      {
        slug: 'cold-plates',
        label: 'Cold Plates and CDUs',
        summary: 'Testing systems for liquid cooling plates and coolant distribution units.',
        skus: [
          {
            slug: 'vcld-dc-cp-400',
            sku: 'VCLD-DC-CP-400',
            name: 'Cold Plate Leak Detection System',
            image: commonImage,
            shortDescription: 'Vacuum chamber leak testing for server cold plates and cooling modules.',
            description:
              'A chamber-based helium leak detection solution for compact liquid cooling parts used in server and AI hardware.',
            specs: [
              { label: 'Application', value: 'Cold plates and cooling modules' },
              { label: 'Test method', value: 'Vacuum chamber helium leak detection' },
              { label: 'Configuration', value: 'Compact production chamber' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'electric-power',
    label: 'Electric Power',
    eyebrow: 'Power Equipment Testing',
    title: 'Electric Power Equipment Leak Detection Systems',
    description:
      'Leak detection systems for gas-insulated equipment, sealed switchgear, and power industry components.',
    groups: [
      {
        slug: 'gas-insulated-equipment',
        label: 'Gas-Insulated Equipment',
        summary: 'Leak testing systems for sealed electrical power equipment.',
        skus: [
          {
            slug: 'vcld-power-gis-1000',
            sku: 'VCLD-POWER-GIS-1000',
            name: 'Gas-Insulated Equipment Leak Detection System',
            image: commonImage,
            shortDescription: 'Vacuum chamber leak testing for sealed power equipment components.',
            description:
              'Configured for gas-insulated equipment parts that require reliable sealing before final assembly.',
            specs: [
              { label: 'Application', value: 'GIS parts and sealed switchgear components' },
              { label: 'Test method', value: 'Vacuum chamber helium leak detection' },
              { label: 'Configuration', value: 'Custom chamber and tooling' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'batteries',
    label: 'Lithium-ion Batteries',
    eyebrow: 'Battery Leak Testing',
    title: 'Lithium-ion Battery Leak Detection Systems',
    description:
      'Leak detection systems for battery cells, modules, packs, and related sealed components.',
    groups: [
      {
        slug: 'battery-cells',
        label: 'Battery Cells and Packs',
        summary: 'Systems for cell, module, and pack leak testing workflows.',
        skus: [
          {
            slug: 'vcld-batt-cell-300',
            sku: 'VCLD-BATT-CELL-300',
            name: 'Battery Cell Leak Detection System',
            image: commonImage,
            shortDescription: 'Helium leak testing system for lithium-ion battery cell inspection.',
            description:
              'Designed for sealed lithium-ion battery components that need reliable leak detection before downstream assembly.',
            specs: [
              { label: 'Application', value: 'Battery cells, modules, and packs' },
              { label: 'Test method', value: 'Vacuum chamber helium leak detection' },
              { label: 'Configuration', value: 'Cell and module fixture options' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'others',
    label: 'Others',
    eyebrow: 'Custom Leak Testing',
    title: 'Custom Vacuum Chamber Leak Detection Systems',
    description:
      'Custom systems for semiconductor, aerospace, vacuum coating, medical, and other precision sealed components.',
    groups: [
      {
        slug: 'custom-components',
        label: 'Custom Components',
        summary: 'Configurable systems for non-standard sealed component testing.',
        skus: [
          {
            slug: 'vcld-custom-900',
            sku: 'VCLD-CUSTOM-900',
            name: 'Custom Vacuum Chamber Leak Detection System',
            image: commonImage,
            shortDescription: 'Custom chamber and tooling for specialized leak detection applications.',
            description:
              'A configurable platform for specialized sealed parts where chamber size, tooling, and handling need to match the process.',
            specs: [
              { label: 'Application', value: 'Custom sealed components' },
              { label: 'Test method', value: 'Vacuum chamber helium leak detection' },
              { label: 'Configuration', value: 'Engineered to order' },
            ],
          },
        ],
      },
    ],
  },
];

export const vacuumChamberSkus = vacuumChamberApplications.flatMap((application) =>
  application.groups.flatMap((group) =>
    group.skus.map((sku) => ({
      ...sku,
      applicationSlug: application.slug,
      applicationLabel: application.label,
      equipmentSlug: group.slug,
      equipmentLabel: group.label,
    })),
  ),
);

export type VacuumChamberSkuWithContext = (typeof vacuumChamberSkus)[number];

export function getVacuumChamberApplicationBySlug(slug: string) {
  return vacuumChamberApplications.find((application) => application.slug === slug);
}

export function getVacuumChamberSkuBySlug(slug: string) {
  return vacuumChamberSkus.find((sku) => sku.slug === slug);
}
