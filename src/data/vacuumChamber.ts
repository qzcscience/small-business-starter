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
import sfz344BellowsWorkflowDiagram from '../assets/images/products/vacuum-chamber/sfz-344-bellows/system-workflow-mermaid.svg?url';
import sfz344ManifoldWorkflowDiagram from '../assets/images/products/vacuum-chamber/sfz-344-manifold/system-workflow-mermaid.svg?url';
import sfz344RmuPrincipleImage from '../assets/images/products/vacuum-chamber/sfz-344-rmu/rmu-system-principle.png?url';
import sfz344RmuWorkflowDiagram from '../assets/images/products/vacuum-chamber/sfz-344-rmu/system-workflow-mermaid.svg?url';
import sfz344CircuitBreakerPrincipleImage from '../assets/images/products/vacuum-chamber/sfz-344-circuit-breaker/circuit-breaker-system-principle.png?url';
import sfz344CircuitBreakerWorkflowDiagram from '../assets/images/products/vacuum-chamber/sfz-344-circuit-breaker/system-workflow-mermaid.svg?url';
import sfz344EvaporatorCondenserPrincipleImage from '../assets/images/products/vacuum-chamber/sfz-344-evaporator-condenser/system-principle.png?url';
import sfz344EvaporatorCondenserWorkflowDiagram from '../assets/images/products/vacuum-chamber/sfz-344-evaporator-condenser/system-workflow-mermaid.svg?url';

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
            slug: 'SFZ-344-Evaporator-Condenser',
            sku: 'SFZ-344 Evaporator & Condenser',
            name: 'SFZ-344 Evaporator & Condenser Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for evaporator and condenser helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for HVAC evaporators, condensers, and heat exchanger coils, designed around workpiece size, target leak rate, cycle time, handling method, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'HVAC evaporators, condensers, and heat exchanger coils' },
              { label: 'Test method', value: 'Nitrogen gross leak check + vacuum chamber helium fine leak test' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Three-in-one station, helium recovery, barcode scanning, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 evaporator and condenser helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 evaporator and condenser helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 evaporator and condenser vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 evaporator and condenser helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 evaporator and condenser vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and evaporator condenser fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Nitrogen gross leak and helium fine leak workflow placeholder for evaporators and condensers',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 evaporator and condenser system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '1.0×10⁻⁶ Pa·m³/s (2 g/year)' },
                { label: 'Chamber Quantity', value: '1' },
                {
                  label: 'Chamber Size',
                  value: 'Shall be determined by customer products, for example 1300 (W) × 800 (H) × 400 (D) mm',
                },
                { label: 'Number of Workpieces Tested per Chamber', value: '1~4, determined by the customer workpiece size' },
                { label: 'Cycle Time', value: 'Shall be determined by the customer' },
                {
                  label: 'Testing Parameters:',
                  children: [
                    { label: 'Nitrogen Pressure', value: '0~4.0 MPa, adjustable within this range' },
                    { label: 'Helium Pressure', value: '0~1.5 MPa, adjustable within this range' },
                  ],
                },
                { label: 'Leak Detector Start Testing Pressure', value: '≤ 30 Pa inside the vacuum chamber' },
                { label: 'Workpiece Evacuation Pressure', value: '≤ 2000 Pa, adjustable upward' },
                { label: 'Helium Recovery Rate', value: '98%' },
              ],
              principleImage: {
                src: sfz344EvaporatorCondenserPrincipleImage,
                alt: 'SFZ-344 evaporator and condenser helium leak detection system working principle diagram',
              },
              workingPrinciple: [
                {
                  title: 'Three-in-one Station',
                  paragraphs: [
                    'One or more operators complete the workpiece gross leak detection, vacuuming, and helium filling operations at the nitrogen filling gross leak detection, vacuuming, and helium filling three-in-one station.',
                    'When the workpiece runs to the three-in-one station via the assembly line, it is manually connected to the three-in-one connector, and the device automatically pressurizes the workpiece for gross leak detection. After the leak detection is completed, the device automatically pre-vacuums the qualified workpiece. When the workpiece is evacuated to the set vacuum level, the device automatically fills the workpiece with helium.',
                    'When the pressure inside the workpiece reaches the set pressure, the connector is manually unplugged. If any of the leak detection, vacuuming, or helium filling procedures fails, the system will alarm.',
                  ],
                },
                {
                  title: 'Helium Leak Detection Station',
                  paragraphs: [
                    'After the helium-filled workpiece runs along the assembly line to the leak detection station, one or more operators put the helium-filled workpiece into the vacuum chamber for leak detection.',
                    'After the vacuum leak detection is completed, the workpiece is manually taken out of the vacuum chamber and placed on the assembly line. The workpiece runs along the assembly line and enters the recovery station.',
                  ],
                },
                {
                  title: 'Helium Recovery Station',
                  paragraphs: [
                    'The helium recovery operation inside the workpiece is carried out at the recovery station by one or more operators.',
                    'The workpiece is conveyed to the recovery station either by the production line or by manual handling. The operator connects the device to the workpiece using a quick connector and presses the button. The device then automatically recovers the helium from the workpiece.',
                    'After the recovery process is completed, the system automatically provides a notification. The operator disconnects the quick connector, and the workpiece proceeds to the next process step.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Load workpiece to three-in-one station and connect the coupler',
                  'Charge high-pressure nitrogen into the workpiece',
                  'Gross leak detection',
                ],
                grossLeakDecision: 'Gross leak detection',
                grossLeakNg: [
                  'System alarm and vent nitrogen',
                  'Disconnect connectors and take out workpiece from conveyor',
                ],
                grossLeakOk: [
                  'Vent nitrogen, evacuate workpiece, and charge helium',
                  'Load workpiece into chamber and start leak detection',
                ],
                heliumLeakDecision: 'Helium leak detection',
                heliumLeakNg: [
                  'System alarm',
                  'Mark NG',
                ],
                heliumLeakOk: [
                  'Take out workpiece from chamber and put it into helium recovery station',
                  'Connect the recovery coupler and recycle helium',
                  'Disconnect the connectors',
                ],
                legend: 'OK: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344EvaporatorCondenserWorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 evaporator and condenser vacuum chamber helium leak detection',
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
          {
            slug: 'sfz-344-bellows',
            sku: 'SFZ-344 Bellows',
            name: 'SFZ-344 Bellows Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for liquid cooling bellows helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for server liquid cooling bellows, designed around part size, leak rate, takt time, chamber quantity, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'Liquid cooling bellows and flexible cooling assemblies' },
              { label: 'Test method', value: 'Gross leak pressure-hold check + vacuum chamber helium micro leak test' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Dual-chamber operation, helium recovery, barcode scanning, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 liquid cooling bellows helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 liquid cooling bellows helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 liquid cooling bellows vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 liquid cooling bellows helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 liquid cooling bellows vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and liquid cooling bellows fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Pressure-hold gross leak and helium micro leak workflow placeholder for liquid cooling bellows',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 liquid cooling bellows system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '3.0 × 10⁻⁷ Pa·m³/s' },
                { label: 'Chamber Quantity', value: '2' },
                { label: 'Chamber Size', value: 'Determined by customer products, for example 1000 (length) × 600 (width) × 300 (height) mm' },
                { label: 'Workpieces Per Chamber', value: '1-4, determined by the customer fixture and workpiece size' },
                {
                  label: 'Cycle Time:',
                  children: [
                    { label: 'Single Chamber', value: 'For example 80 s/chamber, excluding manual handling time' },
                    { label: 'Interleaved Dual-Chamber Operation', value: 'For example 40 s/chamber, excluding manual handling time' },
                    { label: 'Note', value: 'Cycle time is configurable based on customer requirements. The above figures are for reference only.' },
                  ],
                },
                {
                  label: 'Testing Parameters:',
                  children: [
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
                  title: 'Gross Leak Pressure-Hold Leak Detection',
                  paragraphs: [
                    'Place the workpiece into the vacuum chamber and complete the sealing process. Press the start button once, and the chamber door will close automatically. Valve V3 opens while all other valves remain closed. The vacuum chamber is pre-evacuated first. After the chamber reaches the preset vacuum level, the workpiece enters a pressure-holding stage for several seconds.',
                    'If no gross leak is present, the pressure remains stable, and the system continues evacuating both the chamber and the workpiece to the target vacuum level.',
                    'If the pressure cannot be maintained within the preset time, the system determines that a gross leak exists in the workpiece and automatically triggers an audible and visual alarm. The system must then be stopped, the reset button pressed, and the workpiece removed after opening the chamber door.',
                  ],
                },
                {
                  title: 'Helium Micro Leak Detection',
                  paragraphs: [
                    'If no gross leak is detected, the system automatically opens V4 to evacuate the workpiece. At this stage, both the vacuum chamber and the workpiece are evacuated simultaneously.',
                    'When the chamber pressure reaches 30 Pa and the workpiece pressure reaches 2000 Pa, the helium leak detector starts automatically to measure and record the helium background level inside the chamber.',
                    'The measured leak rate during testing will be compensated by subtracting this background value, ensuring that the displayed value represents the actual leak rate of the workpiece.',
                    'After the background measurement is completed, V4 closes and V5 opens to charge the workpiece with low-pressure helium for fine leak testing.',
                    'The system automatically determines whether the workpiece passes the test and provides corresponding prompts or audible and visual alarms.',
                  ],
                },
                {
                  title: 'Helium Recovery',
                  paragraphs: [
                    'After completion of the fine leak test, the system automatically enters the helium recovery process.',
                    'Once recovery is completed, the system closes V1, V3, V4, and V5, and pauses the leak detector. Valves V6 and V7 then open to vent both the vacuum chamber and the workpiece. The workpiece can subsequently be removed, completing the test cycle.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Manually carry liquid cooling bellows into the chamber, manually seal the workpiece with fixture',
                  'Press start button; vacuum chamber door closes',
                  'Automatically evacuate vacuum chamber, then perform workpiece gross leak pressure-hold check',
                ],
                grossLeakDecision: 'Gross leak check passed?',
                grossLeakNg: [
                  'Alarm; automatically vent workpiece, fill chamber and open chamber door',
                  'Remove leaking workpiece',
                ],
                grossLeakOk: [
                  'Pre-evacuate workpiece to the set pressure',
                  'Chamber reaches set vacuum level; leak detection valve opens, fill helium into workpiece and perform micro leak detection',
                ],
                heliumLeakDecision: 'Micro leak check passed?',
                heliumLeakNg: [
                  'Alarm; automatically recover helium, fill chamber and open door',
                  'Remove leaking workpiece',
                ],
                heliumLeakOk: [
                  'Automatically recover helium, fill chamber and open door',
                  'Remove qualified workpiece',
                ],
                legend: 'Qualified: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344BellowsWorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 liquid cooling bellows vacuum chamber helium leak detection',
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
          {
            slug: 'sfz-344-manifold',
            sku: 'SFZ-344 Manifold',
            name: 'SFZ-344 Manifold Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for liquid cooling manifold helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for server liquid cooling manifolds, designed around part size, leak rate, takt time, chamber quantity, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'Liquid cooling manifolds and manifold assemblies' },
              { label: 'Test method', value: 'Nitrogen gross leak pressure-hold detection + vacuum chamber helium micro leak test' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Dual-chamber operation, helium recovery, barcode scanning, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 liquid cooling manifold helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 liquid cooling manifold helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 liquid cooling manifold vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 liquid cooling manifold helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 liquid cooling manifold vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and liquid cooling manifold fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Nitrogen gross leak and helium micro leak workflow placeholder for liquid cooling manifolds',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 liquid cooling manifold system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '5.0 × 10⁻⁷ Pa·m³/s' },
                { label: 'Chamber Quantity', value: '1' },
                { label: 'Chamber Size', value: 'Determined by customer products, for example 2500 (width) × 1100 (depth) × 300 (height) mm' },
                { label: 'Number of Workpieces Tested per Chamber', value: '1-2, determined by the customer fixture and workpiece size' },
                {
                  label: 'Cycle Time:',
                  children: [
                    { label: 'Single Chamber', value: '300 s/chamber, including manual handling time ≤ 50 s, one chamber testing two 5 L manifold workpieces; equivalent to 150 s/pc' },
                    { label: 'Note', value: 'Cycle time is configurable based on customer requirements. The above figures are for reference only.' },
                  ],
                },
                {
                  label: 'Testing Parameters:',
                  children: [
                    { label: 'Nitrogen Pressure', value: '0-1.0 MPa, with adjustable pressure within this range' },
                    { label: 'Helium Pressure', value: '0-1.0 MPa, with adjustable pressure within this range' },
                  ],
                },
                { label: 'Leak Detector Start Testing Pressure (Inside the Vacuum Chamber)', value: '≤ 30 Pa' },
                { label: 'Workpiece Evacuation Pressure', value: '≤ 2000 Pa (pressure is adjustable upwards)' },
                { label: 'Helium Recovery Rate', value: '98%' },
              ],
              principleImage: {
                src: sfz344PrincipleImage,
                alt: 'Vacuum chamber helium leak detection and recovery principle diagram',
              },
              workingPrinciple: [
                {
                  title: 'Nitrogen Gross Leak Pressure-Hold Detection',
                  paragraphs: [
                    'Place the workpiece into the vacuum chamber and complete the manual connection. Press the start button once, and the chamber door will close automatically. Valve V3 opens while all other valves remain closed. The vacuum chamber is pre-evacuated, and V1 opens to fill the workpiece with high-pressure nitrogen to the set pressure. The workpiece then enters a pressure-holding stage for several seconds.',
                    'If no gross leak is present, the pressure remains stable, and the system continues to the next testing stage.',
                    'If the pressure cannot be maintained within the preset time, the system determines that a gross leak exists in the workpiece and automatically triggers an audible and visual alarm. The system must then be stopped, the reset button pressed, and the workpiece removed after opening the chamber door.',
                  ],
                },
                {
                  title: 'Helium Micro Leak Detection',
                  paragraphs: [
                    'If no gross leak is detected, the system automatically opens V4 to evacuate the workpiece. At this stage, both the vacuum chamber and the workpiece are evacuated simultaneously.',
                    'When the chamber pressure reaches 30 Pa and the workpiece pressure reaches 2000 Pa, the helium leak detector starts automatically to measure and record the helium background level inside the chamber.',
                    'The measured leak rate during testing will be compensated by subtracting this background value, ensuring that the displayed value represents the actual leak rate of the workpiece.',
                    'After the background measurement is completed, V4 closes and V5 opens to charge the workpiece with low-pressure helium for micro leak testing.',
                    'The system automatically determines whether the workpiece passes the test and provides corresponding prompts or audible and visual alarms.',
                  ],
                },
                {
                  title: 'Helium Recovery',
                  paragraphs: [
                    'After completion of the micro leak test, the system automatically enters the helium recovery process.',
                    'Once recovery is completed, the system closes V1, V3, V4, and V5, and pauses the leak detector. Valves V6 and V7 then open to vent both the vacuum chamber and the workpiece. The workpiece can subsequently be removed, completing the test cycle.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Manually place the liquid cooling manifold on the tray, then manually connect the manifold and fixture piping',
                  'Manually push the fixture plate into the chamber, then press the start button',
                  'Automatically evacuate the vacuum chamber while filling high-pressure gas into the manifold workpiece to perform gross leak detection',
                ],
                grossLeakDecision: 'Gross leak check passed?',
                grossLeakNg: [
                  'Alarm; automatically vent the manifold workpiece, fill the chamber and open the chamber door',
                  'Remove leaking workpiece',
                ],
                grossLeakOk: [
                  'After nitrogen discharge, pre-evacuate the manifold workpiece to the set value',
                  'When the chamber reaches the set vacuum level, the leak detection valve opens; helium is filled into the manifold workpiece for micro leak detection',
                ],
                heliumLeakDecision: 'Micro leak check passed?',
                heliumLeakNg: [
                  'Alarm; automatically recover helium, fill the chamber and open the chamber door',
                  'Remove leaking workpiece',
                ],
                heliumLeakOk: [
                  'Automatically recover helium, fill the chamber and open the chamber door',
                  'Manually remove qualified workpiece',
                ],
                legend: 'Qualified: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344ManifoldWorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 liquid cooling manifold vacuum chamber helium leak detection',
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
            slug: 'SFZ-344-RMU',
            sku: 'SFZ-344-RMU',
            name: 'SFZ-344 RMU Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for RMU, GIS, and sealed switchgear helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for RMU, GIS, and sealed switchgear components, designed around part size, test pressure, leak rate, takt time, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'RMU, GIS parts, sealed switchgear, and gas-insulated power equipment' },
              { label: 'Test method', value: 'Vacuum evacuation gross leak check + vacuum chamber helium fine leak test' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Helium recovery, sniffer leak location workflow, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 RMU helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 RMU helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 RMU vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 RMU helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 RMU vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and RMU fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Vacuum evacuation, helium leak test, and SF6 charging workflow placeholder for RMU components',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 RMU system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '1×10⁻⁶ Pa·m³/s' },
                { label: 'Chamber Quantity', value: '1' },
                { label: 'Chamber Size', value: 'Shall be determined by customer products' },
                { label: 'Number of Workpieces Tested per Chamber', value: '1' },
                { label: 'Cycle Time', value: 'Shall be determined by the customer' },
                {
                  label: 'Testing Parameters:',
                  children: [
                    { label: 'Helium Pressure', value: '0-0.05 MPa, with adjustable pressure within this range' },
                  ],
                },
                {
                  label: 'SF6 or SF6-free gas charging pressure (absolute pressure)',
                  value: '0.05-0.15 MPa, adjustable within this range',
                },
                { label: 'Leak Detector Start Testing Pressure', value: '≤ 30 Pa inside the vacuum chamber' },
                { label: 'Workpiece Evacuation Pressure', value: '≤ 1000 Pa, adjustable upward' },
                { label: 'Helium Recovery Rate', value: '98%' },
              ],
              principleImage: {
                src: sfz344RmuPrincipleImage,
                alt: 'SFZ-344 RMU vacuum chamber helium leak detection system principle diagram',
              },
              workingPrinciple: [
                {
                  title: 'Vacuum Evacuation for Gross Leak Detection',
                  paragraphs: [
                    'During leak detection, place the workpiece on the pallet, manually push the pallet and workpiece into the vacuum chamber, connect the workpiece to the system, and press the dual-start button. The chamber door closes automatically, and the remaining processes are completed by the system.',
                    'After the chamber door is securely closed, the system opens Valve V3 and closes the other valves to evacuate the vacuum chamber and workpiece simultaneously. It monitors the vacuum levels inside both the workpiece and the chamber, keeping the pressure difference between them within 0.05 MPa.',
                    'When the vacuum chamber reaches 100 Pa and the workpiece is evacuated to 30000 Pa, the system holds pressure for 30 seconds. The pressure and holding time are adjustable. It then measures the vacuum-level changes of both the workpiece and chamber.',
                    'If the vacuum-level change in the chamber does not exceed the set value, for example 100 Pa, the workpiece is treated as free of gross leaks and the system continues evacuation for medium and micro leak detection.',
                    'If the vacuum-level change exceeds the set value, the system identifies a gross leak, triggers audible and visual alarms, inflates the workpiece and chamber synchronously, and opens a selection interface for termination or manual leak location.',
                    'For manual location, the chamber door opens and the workpiece can be inflated with nitrogen at the specified pressure while maintaining the pressure-difference requirement. After manual inspection, the operator confirms deflation and the system ends the detection with a prompt.',
                  ],
                },
                {
                  title: 'Medium and Micro Leak Detection',
                  paragraphs: [
                    'If no gross leaks are detected and both the vacuum chamber and workpiece meet the required vacuum levels, for example 30 Pa absolute pressure for the chamber and 30000 Pa absolute pressure for the workpiece, the system proceeds to medium and micro leak detection.',
                    'For medium leak detection, low-pressure helium, for example 0.01 MPa, is filled into the workpiece. If no medium leak is detected, helium at the set pressure is filled into the workpiece to simulate the actual operating environment for micro leak testing.',
                    'For unqualified workpieces with medium or micro leaks, the system triggers an alarm, fills the vacuum chamber to atmospheric pressure, and simultaneously inflates the workpiece with helium to 150000 Pa absolute pressure while keeping the internal-external pressure difference within 0.05 MPa.',
                    'The detection program is terminated and the workpiece is removed from the chamber. The operator can switch to sniffer leak detection mode to inspect suspicious points such as joints and welds for precise leak location.',
                    'If no micro leaks are detected, the system automatically proceeds to the next procedure.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Close chamber door',
                  'Evacuate chamber to 100 Pa',
                  'Evacuate workpiece to 30000 Pa',
                ],
                grossLeakDecision: '30 s gross leak check',
                grossLeakNg: [
                  'Workpiece and chamber vent to air pressure',
                  'Open door',
                ],
                grossLeakOk: [
                  'Chamber pressure reaches 30 Pa',
                  'Helium background test',
                  'Helium charging to 50000 Pa',
                ],
                heliumLeakDecision: 'Helium leak test in vacuum mode',
                heliumLeakNg: [
                  'Chamber vent and door open',
                  'Helium charging to 150000 Pa',
                  'Take out workpiece and use sniffer',
                ],
                heliumLeakOk: [
                  'Helium recovery to 1000 Pa',
                  'SF6 charging in pressure steps',
                  'Take out workpiece',
                ],
                legend: 'OK: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344RmuWorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 RMU vacuum chamber helium leak detection',
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
          {
            slug: 'SFZ-344-Circuit-Breaker',
            sku: 'SFZ-344-Circuit-Breaker',
            name: 'SFZ-344 Circuit Breaker Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for circuit breaker and sealed power equipment helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for circuit breakers and sealed electric-power components, designed around part size, SF6 or SF6-free gas filling pressure, target leak rate, cycle time, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'Circuit breakers and sealed electric-power components' },
              { label: 'Test method', value: 'Vacuum gross leak check + vacuum chamber helium fine leak test + SF6 or SF6-free gas filling' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Helium recovery, SF6 or SF6-free gas charging, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 circuit breaker helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 circuit breaker helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 circuit breaker vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 circuit breaker helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 circuit breaker vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and circuit breaker fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Vacuum evacuation, helium leak test, and SF6 charging workflow placeholder for circuit breaker components',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 circuit breaker system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '3.0×10⁻⁸ Pa·m³/s (0.1%/year)' },
                { label: 'Chamber Quantity', value: '1' },
                {
                  label: 'Chamber Size',
                  value: 'Shall be determined by customer products, for example 900 (W) × 600 (H) × 400 (D) mm',
                },
                { label: 'Number of Workpieces Tested per Chamber', value: '1' },
                { label: 'Cycle Time', value: 'Shall be determined by the customer' },
                {
                  label: 'Testing Parameters:',
                  children: [
                    { label: 'Helium Pressure', value: '0.15-0.18 MPa, with adjustable pressure within this range' },
                  ],
                },
                {
                  label: 'SF6 or SF6-free gas charging pressure (absolute pressure)',
                  value: '0-0.2 MPa, adjustable within this range',
                },
                { label: 'Leak Detector Start Testing Pressure', value: '≤ 30 Pa inside the vacuum chamber' },
                { label: 'Workpiece Evacuation Pressure', value: '≤ 2000 Pa, adjustable upward' },
                { label: 'Helium Recovery Rate', value: '98%' },
              ],
              principleImage: {
                src: sfz344CircuitBreakerPrincipleImage,
                alt: 'SFZ-344 circuit breaker vacuum chamber helium leak detection system principle diagram',
              },
              workingPrinciple: [
                {
                  title: 'Gross Leak Detection Under Vacuum and Pressure Holding',
                  paragraphs: [
                    'Place the workpiece into the vacuum chamber and complete the connections. Press the Start button once. The vacuum chamber door will close automatically. Open V3 and close all other valves to pre-evacuate the vacuum chamber.',
                    'After the chamber reaches a certain vacuum level, the workpiece will undergo a pressure holding test for several seconds. If there is no large leak, the pressure will remain stable. The system will then continue evacuating both the vacuum chamber and the workpiece to the preset value.',
                    'If the pressure cannot be maintained within the specified time, it indicates a large leak in the workpiece. The system will automatically trigger an audible and visual alarm. At this point, stop the system, press the Reset button, open the chamber door, and remove the workpiece.',
                  ],
                },
                {
                  title: 'Micro Leak Detection',
                  paragraphs: [
                    'If no large leak is detected, the system will automatically open V4 to evacuate the workpiece. At this stage, both the vacuum chamber and the workpiece are evacuated simultaneously.',
                    'When the vacuum chamber pressure reaches 30 Pa and the workpiece pressure reaches 2000 Pa, the leak detector will start automatically to measure the helium background level inside the chamber and record the value.',
                    'During the leak test, the measured leak rate will be automatically compensated by subtracting the background value, ensuring that the displayed value represents the actual leak rate of the workpiece.',
                    'The system will then close V4 and open V5 to fill the workpiece with helium for fine leak testing. The system automatically determines whether the workpiece passes or fails and provides prompts or audible and visual alarms accordingly.',
                  ],
                },
                {
                  title: 'Helium Recovery',
                  paragraphs: [
                    'After the fine leak test is completed, the system automatically enters the helium recovery process.',
                  ],
                },
                {
                  title: 'SF6 Filling',
                  paragraphs: [
                    'After the helium inside the workpiece has been recovered, the vacuum chamber remains under vacuum. The system automatically opens the SF6 filling interface, and SF6 gas is charged into the workpiece.',
                    'Once the filling process is completed, open the chamber door, remove the workpiece, and the inspection process is finished.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Manually load workpiece into chamber and connect the connectors',
                  'Press start, chamber door close',
                  'Evacuate the chamber and detect the workpiece pressure',
                ],
                grossLeakDecision: 'Gross leak check',
                grossLeakNg: [
                  'Alarm, vent workpiece, door open',
                  'Take out NG workpiece',
                ],
                grossLeakOk: [
                  'Evacuate workpiece',
                  'Chamber and workpiece vacuum level reach; workpiece He charging',
                ],
                heliumLeakDecision: 'Helium leak check',
                heliumLeakNg: [
                  'Alarm; helium recovery; door open',
                  'Take out NG workpiece',
                ],
                heliumLeakOk: [
                  'Helium recovery',
                  'Evacuate workpiece',
                  'SF6 charging',
                  'Door open, take out workpiece',
                ],
                legend: 'OK: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344CircuitBreakerWorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 circuit breaker vacuum chamber helium leak detection',
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
          {
            slug: 'SFZ-344-Load-Break-Switch',
            sku: 'SFZ-344-Load-Break-Switch',
            name: 'SFZ-344 Load Break Switch Helium Leak Detection System',
            image: sfz344FrontLeftImage,
            shortDescription:
              'Configurable SFZ-344 vacuum chamber platform for load break switch and sealed power equipment helium leak testing.',
            description:
              'A configurable vacuum chamber helium leak detection solution for load break switches and sealed electric-power components, designed around part size, SF6 or SF6-free gas filling pressure, target leak rate, cycle time, and helium recovery requirements.',
            specs: [
              { label: 'Application', value: 'Load break switches and sealed electric-power components' },
              { label: 'Test method', value: 'Vacuum gross leak check + vacuum chamber helium fine leak test + SF6 or SF6-free gas filling' },
              { label: 'Platform', value: 'SFZ-344 configurable vacuum chamber system' },
              { label: 'Options', value: 'Helium recovery, SF6 or SF6-free gas charging, industrial PC, MES integration' },
            ],
            images: [
              {
                src: sfz344FrontLeftImage,
                alt: 'SFZ-344 load break switch helium leak detection system front-left view',
              },
              {
                src: sfz344FrontRightImage,
                alt: 'SFZ-344 load break switch helium leak detection system front-right view',
              },
              {
                src: sfz344FrontViewImage,
                alt: 'SFZ-344 load break switch vacuum chamber helium leak detection system front view',
              },
              {
                src: sfz344TopLayoutImage,
                alt: 'SFZ-344 load break switch helium leak detection system top layout',
              },
              {
                src: sfz344SystemImage,
                alt: 'SFZ-344 load break switch vacuum chamber helium leak detection system placeholder',
              },
              {
                src: sfz344LoadingImage,
                alt: 'Vacuum chamber loading and load break switch fixture placeholder',
              },
              {
                src: sfz344WorkflowImage,
                alt: 'Vacuum evacuation, helium leak test, and SF6 charging workflow placeholder for load break switch components',
              },
              {
                src: sfz344RecoveryImage,
                alt: 'Helium recovery module placeholder for SFZ-344 load break switch system',
              },
            ],
            videoSrc: 'https://www.youtube-nocookie.com/embed/snoiqqyFoIQ?rel=0',
            sourceContent: {
              technicalSpecs: [
                { label: 'Leak Rate Standard', value: '3.0×10⁻⁷ Pa·m³/s (0.1%/year)' },
                { label: 'Chamber Quantity', value: '1' },
                {
                  label: 'Chamber Size',
                  value: 'Shall be determined by customer products, for example 1050 (W) × 950 (H) × 1600 (D) mm',
                },
                { label: 'Number of Workpieces Tested per Chamber', value: '1' },
                { label: 'Cycle Time', value: 'Shall be determined by the customer' },
                {
                  label: 'Testing Parameters:',
                  children: [
                    { label: 'Helium Pressure', value: '0.15-0.18 MPa, with adjustable pressure within this range' },
                  ],
                },
                {
                  label: 'SF6 or SF6-free gas charging pressure (absolute pressure)',
                  value: '0-0.2 MPa, adjustable within this range',
                },
                { label: 'Leak Detector Start Testing Pressure', value: '≤ 30 Pa inside the vacuum chamber' },
                { label: 'Workpiece Evacuation Pressure', value: '≤ 2000 Pa, adjustable upward' },
                { label: 'Helium Recovery Rate', value: '98%' },
              ],
              principleImage: {
                src: sfz344CircuitBreakerPrincipleImage,
                alt: 'SFZ-344 load break switch vacuum chamber helium leak detection system principle diagram',
              },
              workingPrinciple: [
                {
                  title: 'Gross Leak Detection Under Vacuum and Pressure Holding',
                  paragraphs: [
                    'Place the workpiece into the vacuum chamber and complete the connections. Press the Start button once. The vacuum chamber door will close automatically. Open V3 and close all other valves to pre-evacuate the vacuum chamber.',
                    'After the chamber reaches a certain vacuum level, the workpiece will undergo a pressure holding test for several seconds. If there is no large leak, the pressure will remain stable. The system will then continue evacuating both the vacuum chamber and the workpiece to the preset value.',
                    'If the pressure cannot be maintained within the specified time, it indicates a large leak in the workpiece. The system will automatically trigger an audible and visual alarm. At this point, stop the system, press the Reset button, open the chamber door, and remove the workpiece.',
                  ],
                },
                {
                  title: 'Micro Leak Detection',
                  paragraphs: [
                    'If no large leak is detected, the system will automatically open V4 to evacuate the workpiece. At this stage, both the vacuum chamber and the workpiece are evacuated simultaneously.',
                    'When the vacuum chamber pressure reaches 30 Pa and the workpiece pressure reaches 2000 Pa, the leak detector will start automatically to measure the helium background level inside the chamber and record the value.',
                    'During the leak test, the measured leak rate will be automatically compensated by subtracting the background value, ensuring that the displayed value represents the actual leak rate of the workpiece.',
                    'The system will then close V4 and open V5 to fill the workpiece with helium for fine leak testing. The system automatically determines whether the workpiece passes or fails and provides prompts or audible and visual alarms accordingly.',
                  ],
                },
                {
                  title: 'Helium Recovery',
                  paragraphs: [
                    'After the fine leak test is completed, the system automatically enters the helium recovery process.',
                  ],
                },
                {
                  title: 'SF6 Filling',
                  paragraphs: [
                    'After the helium inside the workpiece has been recovered, the vacuum chamber remains under vacuum. The system automatically opens the SF6 filling interface, and SF6 gas is charged into the workpiece.',
                    'Once the filling process is completed, open the chamber door, remove the workpiece, and the inspection process is finished.',
                  ],
                },
              ],
              workflow: {
                main: [
                  'Manually load workpiece into chamber and connect the connectors',
                  'Press start, chamber door close',
                  'Evacuate the chamber and detect the workpiece pressure',
                ],
                grossLeakDecision: 'Gross leak check',
                grossLeakNg: [
                  'Alarm, vent workpiece, door open',
                  'Take out NG workpiece',
                ],
                grossLeakOk: [
                  'Evacuate workpiece',
                  'Chamber and workpiece vacuum level reach; workpiece He charging',
                ],
                heliumLeakDecision: 'Helium leak check',
                heliumLeakNg: [
                  'Alarm; helium recovery; door open',
                  'Take out NG workpiece',
                ],
                heliumLeakOk: [
                  'Helium recovery',
                  'Evacuate workpiece',
                  'SF6 charging',
                  'Door open, take out workpiece',
                ],
                legend: 'OK: Pass, NG: Failure',
              },
              workflowDiagram: {
                src: sfz344CircuitBreakerWorkflowDiagram,
                alt: 'Mermaid workflow diagram for SFZ-344 load break switch vacuum chamber helium leak detection',
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
