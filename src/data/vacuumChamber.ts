import defaultSkuImage from '../assets/images/products/SFJ-231/Wayeal SFJ-231.png';
import sfz344FrontLeftImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/sfz-344-condenser-system-front-left.png?url';
import sfz344FrontRightImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/sfz-344-condenser-system-front-right.png?url';
import sfz344FrontViewImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/sfz-344-condenser-system-front-view.png?url';
import sfz344TopLayoutImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/sfz-344-condenser-system-top-layout.png?url';
import sfz344SystemImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/01-car-ac-condenser-system-placeholder.svg?url';
import sfz344LoadingImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/02-vacuum-chamber-loading-placeholder.svg?url';
import sfz344WorkflowImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/03-nitrogen-helium-workflow-placeholder.svg?url';
import sfz344RecoveryImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/04-helium-recovery-module-placeholder.svg?url';
import sfz344PrincipleImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/chamber-principle-diagram.png?url';
import sfz344WorkflowDiagram from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/system-workflow-mermaid.svg?url';
import sfz344LiquidCoolingWorkflowDiagram from '../assets/images/products/vacuum-chamber/sfz-344-liquid-cooling-plate/system-workflow-mermaid.svg?url';

export const VACUUM_CHAMBER_BASE_PATH = '/products/vacuum-chamber-leak-detection';

export interface VacuumChamberSkuSpec {
  label: string;
  value?: string;
  children?: VacuumChamberSkuSpec[];
}

export interface VacuumChamberSkuImage {
  src: string;
  alt?: string;
}

export interface VacuumChamberSkuSpecSection {
  title: string;
  specs: VacuumChamberSkuSpec[];
}

export interface VacuumChamberSkuPrincipleSection {
  title: string;
  paragraphs: string[];
}

export interface VacuumChamberSkuWorkflow {
  main: string[];
  grossLeakDecision: string;
  grossLeakNg: string[];
  grossLeakOk: string[];
  heliumLeakDecision: string;
  heliumLeakNg: string[];
  heliumLeakOk: string[];
  legend: string;
}

export interface VacuumChamberSkuSourceContent {
  technicalSpecs: VacuumChamberSkuSpec[];
  principleImage: VacuumChamberSkuImage;
  workingPrinciple: VacuumChamberSkuPrincipleSection[];
  workflow: VacuumChamberSkuWorkflow;
  workflowDiagram?: VacuumChamberSkuImage;
  optionalConfigurations: VacuumChamberSkuSpec[];
}

export interface VacuumChamberSku {
  slug: string;
  sku: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  specs: VacuumChamberSkuSpec[];
  images?: VacuumChamberSkuImage[];
  videoSrc?: string;
  specSections?: VacuumChamberSkuSpecSection[];
  sourceContent?: VacuumChamberSkuSourceContent;
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
      'Vacuum chamber helium leak detection systems for AC condensers, automotive heat exchangers, battery trays, thermal management modules, fuel components, and precision automotive parts.',
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
        label: 'AC Condensers and Thermal Management Parts',
        summary:
          'Leak testing for automotive AC condensers, evaporators, cooling plates, manifolds, and connectors.',
        skus: [
          {
            slug: 'sfz-344-car-ac-condenser',
            sku: 'SFZ-344-CAR-AC-CONDENSER',
            name: 'Automotive AC Condenser Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for automotive AC condenser and heat exchanger helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for automotive AC condensers and heat exchangers, designed around the workpiece size, target leak rate, takt time, handling method, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'Automotive AC condensers, evaporators, and heat exchangers' },
              { label: 'Test method', value: 'Nitrogen gross leak check + vacuum chamber helium fine leak test' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Helium recovery, barcode scanning, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 automotive AC condenser helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 automotive AC condenser helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 automotive AC condenser vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 automotive AC condenser helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 automotive AC condenser vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and condenser fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Nitrogen gross leak and helium fine leak workflow placeholder',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '2 g/year (equivalent to approximately 1×10⁻⁶ Pa·m³/s)' },
                { label: 'Chamber Quantity', value: '1' },
                { label: 'Chamber Size', value: 'Determined by customer products' },
                { label: 'Workpieces Per Chamber', value: '1, 2, or 3, determined by the customer workpiece and fixture layout' },
                { label: 'Cycle Time', value: 'Determined by the customer production requirement' },
                {
                  label: 'Testing Parameters:',
                  children: [
                    { label: 'Nitrogen Pressure', value: '3.0-4.5 MPa, adjustable within this range' },
                    { label: 'Helium Pressure', value: '2.0-3.0 MPa, adjustable within this range' },
                  ],
                },
                { label: 'Leak Detector Start Pressure', value: '≤ 30 Pa inside the vacuum chamber' },
                { label: 'Workpiece Evacuation Pressure', value: '≤ 2000 Pa, adjustable upward' },
                { label: 'Helium Recovery Rate', value: '98%' },
              ],
              principleImage: {
                src: sfz344PrincipleImage,
                alt: 'Vacuum chamber helium leak detection and recovery principle diagram',
              },
              workingPrinciple: [
                {
                  title: 'N2 Charging Gross Leak Detection',
                  paragraphs: [
                    'During leak detection, first place the workpiece into the vacuum chamber.',
                    'After completing the connections, press the start button: the vacuum chamber door will close automatically, valve V3 will open, and all other valves will close to pre-evacuate the vacuum chamber. Simultaneously with the pre-evacuation of the vacuum chamber, valve V1 opens to fill the workpiece with high-pressure gas at the set pressure, which is maintained for several seconds.',
                    'If there is no gross leak in the workpiece, the pressure will remain stable. If the pressure fails to hold within the set time, it indicates a gross leak in the workpiece, and the system will automatically trigger an audible and visual alarm. In this case, stop the system, press the reset button, open the chamber door, and remove the workpiece.',
                  ],
                },
                {
                  title: 'Helium Leak Detection',
                  paragraphs: [
                    'If no gross leak is detected, the system will automatically open valve V4 to evacuate the workpiece, with both the vacuum chamber and the workpiece being evacuated simultaneously.',
                    'When the pressure in the vacuum chamber reaches 30 Pa and the pressure in the workpiece reaches 2000 Pa, the leak detector will start automatically to measure and record the helium background level inside the vacuum chamber. During leak detection, the system subtracts this background value from the measured leak rate to ensure the displayed value reflects the actual leak rate of the workpiece. Valve V4 is then closed, and valve V5 opens to fill the workpiece with helium for fine leak detection.',
                    "The system will automatically determine the workpiece's qualification status and issue a prompt or an audible and visual alarm accordingly.",
                  ],
                },
                {
                  title: 'Helium Recovery',
                  paragraphs: [
                    'After the completion of fine leak detection, the system automatically enters the recovery process.',
                    'Once recovery is finished, the system closes valves V1, V3, V4, and V5, pauses the leak detector, opens valves V6 and V7 to vent the vacuum chamber and the workpiece, and the workpiece can be removed to conclude the leak detection cycle.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Manually connect workpiece connector with chamber',
                  'Press start, chamber door close',
                  'Evacuate the chamber; high pressure N2 charging',
                ],
                grossLeakDecision: 'Gross leak check',
                grossLeakNg: [
                  'Alarm, vent workpiece, door open',
                  'Take out NG workpiece',
                  'Stick NG label on workpiece',
                ],
                grossLeakOk: [
                  'Vent workpiece, and evacuate workpiece',
                  'Chamber and workpiece vacuum level reach; workpiece He charging',
                ],
                heliumLeakDecision: 'Helium leak check',
                heliumLeakNg: [
                  'Alarm; helium recovery; door open',
                  'Take out NG workpiece',
                  'Stick NG label on workpiece',
                ],
                heliumLeakOk: [
                  'Helium recovery; door open',
                  'Take out OK workpiece',
                  'Stick OK label on workpiece',
                ],
                legend: 'OK: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344WorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 automotive AC condenser vacuum chamber helium leak detection',
              },
              optionalConfigurations: [
                { label: 'Helium Leak Detector', value: 'Wayeal / Inficon / Leybold' },
                { label: 'Vacuum Pump', value: 'Leybold / Edwards / Atlas Copco' },
                { label: 'Compressor', value: 'Ingersoll Rand / Desran' },
                { label: 'Solenoid Valve', value: 'GSR / COAX / CKD / SMC' },
                { label: 'Vacuum Gauge', value: 'Wayeal / Inficon / Leybold' },
                { label: 'Pressure Sensor', value: 'Micro Sensor / Airtac / WIKA' },
                { label: 'Vacuum Valve', value: 'Wayeal / CKD' },
                { label: 'Safety Light Curtain', value: 'Lion / SENSORC' },
                { label: 'PLC (Programmable Logic Controller)', value: 'Schneider / Siemens / Mitsubishi / Omron / Inovance' },
                { label: 'Touch Screen Panel', value: 'Weinview / Schneider Electric' },
                { label: 'Handheld Barcode Scanner', value: 'Honeywell / Keyence' },
                { label: 'Industrial PC', value: 'Advantech' },
                { label: 'Printer', value: 'TSC' },
                { label: 'Electrical Components', value: 'Schneider / Panasonic / IDEC, etc.' },
              ],
            },
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
            slug: 'sfz-344-liquid-cooling-plate',
            sku: 'SFZ-344-Liquid-Cooling-Plate',
            name: 'Liquid Cooling Plate Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for liquid cooling plate helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for server liquid cooling plates and cold plate assemblies, designed around part size, leak rate, takt time, chamber quantity, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'Liquid cooling plates, cold plates, and cooling modules' },
              { label: 'Test method', value: 'Nitrogen gross leak check + vacuum chamber helium fine leak test' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Dual-chamber operation, helium recovery, barcode scanning, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 liquid cooling plate helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 liquid cooling plate helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 liquid cooling plate vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 liquid cooling plate helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 liquid cooling plate vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and liquid cooling plate fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Nitrogen gross leak and helium fine leak workflow placeholder for liquid cooling plates',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 liquid cooling plate system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '5.0 × 10⁻⁷ Pa·m³/s' },
                { label: 'Chamber Quantity', value: '2' },
                { label: 'Chamber Size', value: 'Determined by customer products' },
                { label: 'Workpieces Per Chamber', value: '2, determined by the customer workpiece and fixture layout' },
                {
                  label: 'Cycle Time:',
                  children: [
                    { label: 'Single Chamber', value: '150 s/chamber' },
                    { label: 'Dual-Chamber Synchronous Operation', value: '80 s/chamber (2 pcs each chamber, 40 s/pc)' },
                  ],
                },
                {
                  label: 'Testing Parameters:',
                  children: [
                    { label: 'Nitrogen Pressure', value: '0-1.0 MPa, adjustable within this range' },
                    { label: 'Helium Pressure', value: '0-1.0 MPa, adjustable within this range' },
                  ],
                },
                { label: 'Leak Detector Start Pressure', value: '≤ 30 Pa inside the vacuum chamber' },
                { label: 'Workpiece Evacuation Pressure', value: '≤ 2000 Pa, adjustable upward' },
                { label: 'Helium Recovery Rate', value: '98%' },
              ],
              principleImage: {
                src: sfz344PrincipleImage,
                alt: 'Vacuum chamber helium leak detection and recovery principle diagram',
              },
              workingPrinciple: [
                {
                  title: 'N2 Charging Gross Leak Detection',
                  paragraphs: [
                    'During leak detection, first place the workpiece into the vacuum chamber.',
                    'After completing the connections, press the start button: the vacuum chamber door will close automatically, valve V3 will open, and all other valves will close to pre-evacuate the vacuum chamber. Simultaneously with the pre-evacuation of the vacuum chamber, valve V1 opens to fill the workpiece with high-pressure gas at the set pressure, which is maintained for several seconds.',
                    'If there is no gross leak in the workpiece, the pressure will remain stable. If the pressure fails to hold within the set time, it indicates a gross leak in the workpiece, and the system will automatically trigger an audible and visual alarm. In this case, stop the system, press the reset button, open the chamber door, and remove the workpiece.',
                  ],
                },
                {
                  title: 'Helium Leak Detection',
                  paragraphs: [
                    'If no gross leak is detected, the system will automatically open valve V4 to evacuate the workpiece, with both the vacuum chamber and the workpiece being evacuated simultaneously.',
                    'When the pressure in the vacuum chamber reaches 30 Pa and the pressure in the workpiece reaches 2000 Pa, the leak detector will start automatically to measure and record the helium background level inside the vacuum chamber. During leak detection, the system subtracts this background value from the measured leak rate to ensure the displayed value reflects the actual leak rate of the workpiece. Valve V4 is then closed, and valve V5 opens to fill the workpiece with helium for fine leak detection.',
                    "The system will automatically determine the workpiece's qualification status and issue a prompt or an audible and visual alarm accordingly.",
                  ],
                },
                {
                  title: 'Helium Recovery',
                  paragraphs: [
                    'After the completion of fine leak detection, the system automatically enters the recovery process.',
                    'Once recovery is finished, the system closes valves V1, V3, V4, and V5, pauses the leak detector, opens valves V6 and V7 to vent the vacuum chamber and the workpiece, and the workpiece can be removed to conclude the leak detection cycle.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Manually transport the workpiece into the chamber',
                  'Press the start, vacuum chamber door close',
                  'Automatically evacuate the vacuum chamber, and fill high-pressure N2 into the workpiece',
                ],
                grossLeakDecision: 'Gross Leak Detection',
                grossLeakNg: [
                  'Alarm, automatic deflation of workpiece, inflation and door opening of vacuum chamber',
                  'Take out the leaking workpiece',
                ],
                grossLeakOk: [
                  'After N2 discharge, pre-evacuate the workpiece to the set value',
                  'When the vacuum chamber reaches the set vacuum degree, open the leak detection valve, fill helium into the workpiece for fine leak detection',
                ],
                heliumLeakDecision: 'Helium Leak Detection',
                heliumLeakNg: [
                  'Alarm, automatic helium recovery, inflation and door opening of vacuum chamber',
                  'Take out the leaking workpiece',
                ],
                heliumLeakOk: [
                  'Automatic helium recovery, inflation and door opening of vacuum chamber',
                  'Manually take out the qualified workpiece',
                ],
                legend: 'Qualified: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344LiquidCoolingWorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 liquid cooling plate vacuum chamber helium leak detection',
              },
              optionalConfigurations: [
                { label: 'Helium Leak Detector', value: 'Wayeal / Inficon / Leybold' },
                { label: 'Vacuum Pump', value: 'Leybold / Edwards / Atlas Copco' },
                { label: 'Compressor', value: 'Ingersoll Rand / Desran' },
                { label: 'Solenoid Valve', value: 'GSR / COAX / CKD / SMC' },
                { label: 'Vacuum Gauge', value: 'Wayeal / Inficon / Leybold' },
                { label: 'Pressure Sensor', value: 'Micro Sensor / Airtac / WIKA' },
                { label: 'Vacuum Valve', value: 'Wayeal / CKD' },
                { label: 'Safety Light Curtain', value: 'Lion / SENSORC' },
                { label: 'PLC (Programmable Logic Controller)', value: 'Schneider / Siemens / Mitsubishi / Omron / Inovance' },
                { label: 'Touch Screen Panel', value: 'Weinview / Schneider Electric' },
                { label: 'Handheld Barcode Scanner', value: 'Honeywell / Keyence' },
                { label: 'Industrial PC', value: 'Advantech' },
                { label: 'Printer', value: 'TSC' },
                { label: 'Electrical Components', value: 'Schneider / Panasonic / IDEC, etc.' },
              ],
            },
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
