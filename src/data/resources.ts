import { siteVideos, type SiteVideo } from './videos';
import heliumSprayMethodImage from '../assets/images/resources/helium-spray-method-image2-4k.png?url';
import heliumSnifferProbeMethodImage from '../assets/images/resources/helium-sniffer-probe-method-corrected-4k.png?url';
import vacuumChamberHeliumLeakDetectionMethodImage from '../assets/images/resources/vacuum-chamber-helium-leak-detection-method-v2-suction-flow-enhanced-4k.png?url';
import methodComparisonImage from '../assets/images/resources/helium-pressure-decay-bubble-test-comparison.svg?url';

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
        description:
          'A short guide to leak rate meaning, common units, quick conversions, and common specification traps.',
        article: {
          quickFacts: [
            { label: 'Simple meaning', value: 'Gas flow through a leak under a pressure difference' },
            { label: 'Core formula', value: 'Leak rate = pressure change x volume / time' },
            { label: 'Main units', value: 'Pa·m³/s, mbar·L/s, atm·cc/s, sccm' },
            { label: 'Reading the number', value: 'A smaller leak rate means a tighter part' },
          ],
          intro: [
            'Leak rate tells how much gas passes through a leak in a set time. Because gas is compressible, useful leak-rate units combine pressure, volume, and time.',
            'For helium leak testing, Pa·m³/s and mbar·L/s are common in vacuum work. atm·cc/s and sccm are common in U.S. leak-test specifications and flow-style discussions.',
          ],
          sections: [
            {
              eyebrow: 'Definition',
              title: 'What leak rate means',
              paragraphs: [
                'Leak rate = pressure change x volume / time. If a sealed 1 m³ evacuated vessel rises by 1 Pa in 1 second, the leak rate is 1 Pa·m³/s.',
                'The same idea in mbar·L/s: if a 1 L vessel changes by 1 mbar in 1 second, the leak rate is 1 mbar·L/s.',
              ],
              callout: {
                title: 'Customer takeaway',
                text: 'Always compare leak rates with the gas, pressure difference, and temperature in mind. The same physical leak can read differently under different test conditions.',
              },
            },
            {
              eyebrow: 'Unit names',
              title: 'Common units',
              cards: [
                {
                  title: 'Pa·m³/s',
                  description:
                    'SI-style leak-rate unit. Common in vacuum and helium leak detection specifications.',
                },
                {
                  title: 'mbar·L/s',
                  description:
                    'Very common helium leak testing unit. 1 Pa·m³/s = 10 mbar·L/s.',
                },
                {
                  title: 'atm·cc/s',
                  description:
                    'Atmosphere cubic centimeters per second. It is close to mbar·L/s, but not exactly the same.',
                },
                {
                  title: 'sccm',
                  description:
                    'Standard cubic centimeters per minute. 1 atm·cc/s = 60 sccm.',
                },
              ],
            },
            {
              eyebrow: 'Quick reference',
              title: 'Useful conversions and common mistakes',
              bullets: [
                '1 Pa·m³/s = 10 mbar·L/s = about 9.87 atm·cc/s = about 592 sccm.',
                '1 mbar·L/s = about 0.987 atm·cc/s = about 59.2 sccm.',
                '1 atm·cc/s = 1.013 mbar·L/s = 0.101 Pa·m³/s = 60 sccm.',
                '1 Torr·L/s = 1.333 mbar·L/s.',
                'ppm is concentration, not leak rate. It is useful for sniffer or accumulation tests, but it depends on sampling flow, volume, and timing.',
                'g/a (g/year) and %/year are application units. They must be tied to the product gas, internal volume, pressure, and acceptance rule.',
              ],
            },
          ],
          cta: {
            title: 'Need to convert a leak rate?',
            description:
              'Use the Wayeal converter for quick comparisons between Pa·m³/s, mbar·L/s, atm·cc/s, Torr·L/s, and sccm.',
            label: 'Open Unit Converter',
            href: '/resources/useful-tools/leak-rate-unit-converter',
          },
        },
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
        label: 'Helium Sniffer Probe Method',
        slug: 'helium-sniffer-probe-method',
        href: `${RESOURCE_BASE_PATH}/glossary/helium-sniffer-probe-method`,
        description:
          'A practical explanation of helium sniffer probe testing for locating leaks on pressurized workpieces with a helium mass spectrometer leak detector.',
        article: {
          heroImage: {
            src: heliumSnifferProbeMethodImage,
            alt: 'Helium sniffer probe method process overview and operating principle for a pressurized workpiece connected to a helium mass spectrometer leak detector',
            caption:
              'In the helium sniffer probe method, the workpiece is filled with helium or a helium mixture. Escaping helium is drawn into the sniffer probe and measured by the helium mass spectrometer leak detector.',
          },
          quickFacts: [
            { label: 'Best fit', value: 'Pressurized workpieces that cannot be evacuated for vacuum testing' },
            { label: 'Primary purpose', value: 'Pinpointing the physical leak location' },
            { label: 'Tracer gas', value: 'Helium inside the workpiece, sampled from the outside' },
            { label: 'Detector signal', value: 'Helium concentration response converted into a leak indication' },
          ],
          intro: [
            'The helium sniffer probe method is a pressure-side tracer gas technique for finding where helium escapes from a part. The workpiece is pressurized with helium or a helium-containing test gas, and an operator moves the sniffer probe along welds, joints, seals, ports, and suspected leak paths. If helium exits through a defect, the probe draws that local gas sample into the helium mass spectrometer leak detector.',
            'This method is direct and practical: it does not require a vacuum chamber, and it gives repair teams a physical location to inspect. Its measurement quality depends on probe handling, background helium control, airflow, part pressure, and the geometry of the leak path, so a disciplined scan sequence matters as much as the instrument itself.',
          ],
          sections: [
            {
              eyebrow: 'Method selection',
              title: 'When the helium sniffer probe method is the right choice',
              paragraphs: [
                'Use sniffer probe testing when the product can be safely pressurized but cannot be evacuated, cannot fit into a chamber, or needs field-friendly leak localization after assembly, repair, or service. It is especially useful for weld seams, brazed joints, flange faces, threaded connections, tube joints, valve blocks, manifolds, and sealed enclosures.',
                'The method is designed to locate a leak point. If the production requirement is a highly repeatable total leak-rate measurement, vacuum chamber testing or another integral method is usually the stronger final acceptance process. Sniffer testing remains valuable as a diagnostic and repair-confirmation method because it tells the operator where to act.',
              ],
              cards: [
                {
                  title: 'No vacuum environment required',
                  description:
                    'The part is tested from the outside while helium is inside the workpiece, making the method useful for pressure-rated assemblies and field checks.',
                },
                {
                  title: 'Leak location instead of only pass/fail',
                  description:
                    'The probe can be moved around suspected points so the operator can narrow the leak to a weld, joint, seal, port, or connection.',
                },
                {
                  title: 'Operator technique matters',
                  description:
                    'Probe distance, angle, scan speed, nozzle geometry, suction capacity, ambient helium, and ventilation all affect the displayed signal.',
                },
                {
                  title: 'Good fit for repair loops',
                  description:
                    'After a leak is found and repaired, the same scan sequence can be repeated to confirm that the response has disappeared.',
                },
              ],
            },
            {
              eyebrow: 'Operating principle',
              title: 'From escaping helium to detector signal',
              paragraphs: [
                'The workpiece is first charged with helium or a helium mixture to the approved test pressure. Under normal conditions, helium remains inside the sealed volume and the detector display stays below the reject threshold. If a defect is open, helium escapes from the pressurized side into the surrounding air.',
                'The sniffer probe creates a controlled sample flow at the probe tip. When the tip passes near the escaping helium plume, the sample is transported through the sniffer line to the helium mass spectrometer leak detector. The detector separates helium from the gas stream, amplifies the signal, and presents a leak-rate indication, concentration response, audio alarm, or pass/fail result.',
              ],
              callout: {
                title: 'Customer takeaway',
                text: 'A sniffer result is strongest when the probe captures the helium plume before it is diluted. Keep the scan close, slow, repeatable, and protected from unstable background helium.',
              },
            },
            {
              eyebrow: 'Workflow',
              title: 'Typical helium sniffer probe workflow',
              steps: [
                {
                  title: 'Confirm pressure capability',
                  description:
                    'Verify that the workpiece, seals, tooling, and safety controls can withstand the planned positive pressure before helium filling begins.',
                },
                {
                  title: 'Start with a controlled gross search',
                  description:
                    'For initial testing, avoid immediately filling with high-concentration or high-pressure helium. A large leak can release a large amount of helium, waste gas, contaminate the area, and make small-leak inspection unstable.',
                },
                {
                  title: 'Pressurize and stabilize',
                  description:
                    'Fill the workpiece with helium or a helium mixture, allow the system to stabilize, and confirm the ambient helium background is low enough for the required threshold.',
                },
                {
                  title: 'Scan in a defined sequence',
                  description:
                    'Move the probe slowly around suspected leak locations. Use a consistent order, typically from lower areas to upper areas and from far positions toward near positions.',
                },
                {
                  title: 'Confirm the leak location',
                  description:
                    'When the detector indicates helium, reduce probe speed and distance, then scan the nearby area repeatedly to locate the strongest and most repeatable response.',
                },
                {
                  title: 'Recover, ventilate, repair, and retest',
                  description:
                    'After testing, recover helium when the process supports it or exhaust it safely outdoors. Ventilate the test area, repair the leak, and repeat the same scan route.',
                },
              ],
            },
            {
              eyebrow: 'Sensitivity',
              title: 'Why sniffer sensitivity depends on technique',
              paragraphs: [
                'Sniffer mode is useful for leak localization, but it is less accurate and less sensitive than vacuum-mode helium testing because the escaping helium is diluted by ambient air before the probe samples it. The signal is therefore influenced by both the leak itself and the way the probe is moved.',
                'The referenced Wayeal training material lists a minimum detectable leak rate of 2.5 × 10^-9 Pa·m³/s for sniffer mode and 5 × 10^-13 Pa·m³/s for vacuum mode. The practical gap comes from sample dilution, background helium, airflow, probe distance, and operator-dependent scanning.',
              ],
              bullets: [
                'Leak geometry: a narrow jet, porous leak, crack, or seam leak can produce a different plume shape.',
                'Probe distance: around 1 cm from the surface is a practical starting point; too far reduces sensitivity, while too close can draw in dust or block the tip.',
                'Probe angle: the tip should face the likely helium plume instead of sweeping past it at an inconsistent angle.',
                'Scan speed: slower movement improves capture probability; reduce speed further when the detector begins to respond.',
                'Nozzle shape and suction capacity: probe hardware affects how much local gas reaches the detector.',
                'Background helium and airflow: ventilation is needed, but fans or drafts can push helium away from the probe path.',
              ],
            },
            {
              eyebrow: 'Precautions',
              title: 'Operational precautions from field practice',
              bullets: [
                'Confirm that the workpiece is rated for positive pressure before the test, including weak points such as thin walls, sight windows, seals, and repaired areas.',
                'Use a lower-risk initial fill strategy for unknown parts. After large leaks are repaired, increase helium concentration or pressure as needed to inspect smaller leaks.',
                'Keep the probe approximately 1 cm from the surface during normal scanning, then reduce distance and speed around a suspected point to confirm the exact location.',
                'If the detector shows a leak, do not assume the defect is exactly under the probe tip. Search around the response zone because helium can drift before being sampled.',
                'Inspect in a controlled order, such as bottom to top and far to near, so residual helium from one area does not confuse the next location.',
                'Keep the test area well ventilated and prevent helium contamination from accumulating around the workpiece, probe, or detector inlet.',
                'After inspection, recover helium where available or exhaust the workpiece gas safely outdoors according to the site procedure.',
                'Check or replace probe filters when dust, oil mist, or surface contamination may be drawn into the sniffer tip.',
                'Use a calibrated sniffer leak standard or known reference leak to verify that the detector and probe respond before production or shift testing.',
                'Repeat the scan after repair because a large leak can mask smaller leaks nearby.',
              ],
            },
            {
              eyebrow: 'Applications',
              title: 'Where customers use this method',
              cards: [
                {
                  title: 'HVAC and refrigeration',
                  description:
                    'Condensers, evaporators, compressors, refrigerant lines, valves, brazed joints, and service repair points.',
                },
                {
                  title: 'Automotive and EV thermal systems',
                  description:
                    'Cooling plates, manifolds, battery trays, heat exchangers, welded housings, and pressure-side fluid circuits.',
                },
                {
                  title: 'Electric power equipment',
                  description:
                    'Gas-insulated tanks, switchgear components, welded enclosures, sealed poles, fittings, and connection interfaces.',
                },
                {
                  title: 'Maintenance and troubleshooting',
                  description:
                    'Field inspections, rebuild stations, repaired seams, final assembly joints, and fixture or adapter checks.',
                },
              ],
            },
            {
              eyebrow: 'Wayeal support',
              title: 'How Wayeal helps turn sniffer testing into a stable process',
              paragraphs: [
                'A reliable sniffer process is built from more than the detector. Wayeal can help define the helium concentration, fill pressure, probe type, scan route, reject threshold, calibration routine, ventilation approach, and operator training plan around the actual workpiece.',
                'For a new application, the useful starting information is the part material, internal volume, maximum allowable pressure, expected leak locations, target leak rate, available helium handling method, cycle time, and whether the process will be manual, semi-automatic, or robot-assisted.',
              ],
            },
          ],
          cta: {
            title: 'Need to locate leaks on a pressurized part?',
            description:
              'Share your workpiece drawings, pressure limit, target leak rate, suspected leak locations, and current test process. Wayeal can help choose between sniffer probe testing, helium spray testing, vacuum chamber testing, and integrated production leak detection.',
            label: 'Discuss Your Application',
            href: '/contact',
          },
        },
      },
      {
        label: 'Vacuum Chamber Helium Leak Detection Method',
        slug: 'vacuum-chamber-helium-leak-detection-method',
        href: `${RESOURCE_BASE_PATH}/glossary/vacuum-chamber-helium-leak-detection-method`,
        description:
          'How vacuum chamber helium leak detection tests sealed workpieces by evacuating the chamber, filling the part with helium, and measuring leaked helium with a mass spectrometer leak detector.',
        article: {
          heroImage: {
            src: vacuumChamberHeliumLeakDetectionMethodImage,
            alt: 'Vacuum chamber helium leak detection method workflow showing chamber evacuation, workpiece evacuation, helium filling, V2 sampling, and helium leak detector judgement',
            caption:
              'In the vacuum chamber helium leak detection method, the chamber is evacuated around the workpiece, the workpiece is filled with helium, and any leaked helium is pulled through the V2 sampling line to the helium leak detector for PASS or FAIL judgement.',
          },
          quickFacts: [
            { label: 'Best fit', value: 'Sealed workpieces that can be connected to vacuum and helium lines' },
            { label: 'Primary purpose', value: 'High-sensitivity integral leak testing in a vacuum chamber' },
            { label: 'Tracer gas path', value: 'Helium escapes from the workpiece into the evacuated chamber' },
            { label: 'Result logic', value: 'Detector signal within limit = PASS; above limit = FAIL' },
          ],
          intro: [
            'The vacuum chamber helium leak detection method is an integral test for sealed parts that need a sensitive, repeatable pass/fail result. The workpiece is loaded into a vacuum chamber and connected to external gas and vacuum lines. By creating vacuum around the part and then filling the part with helium, the system gives any real leak path a clear pressure-driven direction into the chamber.',
            'For production customers, the method is useful when the question is not only where a leak might be, but whether the complete workpiece meets the required leak-rate limit. It is commonly used with automated chambers, fixtures, valves, vacuum pumps, helium supply lines, and a helium mass spectrometer leak detector as one controlled process.',
          ],
          sections: [
            {
              eyebrow: 'Operating principle',
              title: 'How the vacuum chamber method works',
              paragraphs: [
                'The workpiece is loaded into the vacuum chamber and connected to the external gas and vacuum lines. The chamber is first evacuated by the chamber vacuum pump through V3, creating a low-pressure environment around the workpiece.',
                'Next, the workpiece is evacuated through V4 by the workpiece vacuum pump. After evacuation, helium is charged into the workpiece through V5 from the helium cylinder. The workpiece is then filled with helium under test pressure.',
                'If the workpiece has a leak, helium escapes from the leak point into the vacuum chamber. The leaked helium inside the chamber is drawn toward the V2 sampling line and flows through V2 to the helium leak detector.',
                'The helium leak detector measures the helium signal and determines the test result. If the detected leak rate is within the acceptable limit, the result is PASS. If the helium signal exceeds the limit, the system triggers an alarm and the result is FAIL.',
              ],
              callout: {
                title: 'Customer takeaway',
                text: 'The method turns a complete sealed workpiece into a controlled measurement: helium is inside the part, vacuum is outside the part, and the detector measures the total helium escaping into the chamber.',
              },
            },
            {
              eyebrow: 'Workflow',
              title: 'Typical vacuum chamber helium leak test sequence',
              steps: [
                {
                  title: 'Load and connect the workpiece',
                  description:
                    'Place the workpiece in the chamber, seal the chamber door, and connect the part to the required vacuum, helium filling, and exhaust or recovery lines.',
                },
                {
                  title: 'Evacuate the chamber through V3',
                  description:
                    'Use the chamber vacuum pump to remove air from the chamber and create a low-pressure environment around the outside of the workpiece.',
                },
                {
                  title: 'Evacuate the workpiece through V4',
                  description:
                    'Use the workpiece vacuum pump to remove air from the internal volume so the helium filling step is stable and repeatable.',
                },
                {
                  title: 'Fill the workpiece with helium through V5',
                  description:
                    'Charge helium from the helium cylinder into the workpiece until the defined test pressure or process condition is reached.',
                },
                {
                  title: 'Sample leaked helium through V2',
                  description:
                    'If helium escapes into the vacuum chamber, the sampling path draws it through the V2 sampling line to the helium mass spectrometer leak detector.',
                },
                {
                  title: 'Judge PASS or FAIL',
                  description:
                    'Compare the measured helium leak rate with the acceptance limit. A stable signal within the limit is PASS; a signal above the limit triggers an alarm and is FAIL.',
                },
              ],
            },
            {
              eyebrow: 'Method selection',
              title: 'Why use vacuum chamber helium leak detection',
              cards: [
                {
                  title: 'High sensitivity',
                  description:
                    'The chamber vacuum reduces background gas and helps small amounts of leaked helium reach the detector with less dilution than open-air sampling.',
                },
                {
                  title: 'Integral judgement',
                  description:
                    'The test evaluates the complete sealed workpiece instead of only one weld, seam, tube joint, or suspected point at a time.',
                },
                {
                  title: 'Good production fit',
                  description:
                    'The sequence can be automated with chamber doors, tooling, valves, vacuum pumps, helium filling, detector measurement, alarms, and data logging.',
                },
                {
                  title: 'Repeatable acceptance',
                  description:
                    'Controlled pressure, chamber volume, evacuation level, stabilization time, and calibrated detector response make the pass/fail decision easier to standardize.',
                },
              ],
            },
            {
              eyebrow: 'Process design',
              title: 'Important engineering considerations',
              bullets: [
                'The workpiece must tolerate the selected helium test pressure and connection method.',
                'The chamber must be sized for the part, fixture, sealing clearance, loading method, and target cycle time.',
                'Fixture seals and adapters must be separated from true workpiece leaks during commissioning and troubleshooting.',
                'Vacuum pump capacity, chamber volume, evacuation target, and stabilization time strongly affect cycle time.',
                'The leak detector range, calibration routine, reject threshold, and alarm logic should match the customer specification.',
                'Helium consumption and recovery strategy should be evaluated when production volume or part volume is high.',
                'A gross leak pre-check can protect the process from helium waste, long pump-down times, and unstable background signals.',
                'The test sequence should define what happens after FAIL, including retest, repair, helium exhaust, and operator guidance.',
              ],
            },
            {
              eyebrow: 'Applications',
              title: 'Where customers use this method',
              cards: [
                {
                  title: 'EV batteries and thermal systems',
                  description:
                    'Battery trays, cooling plates, manifolds, heat exchangers, welded housings, and sealed coolant circuits.',
                },
                {
                  title: 'HVAC and refrigeration',
                  description:
                    'Condensers, evaporators, compressors, valves, brazed assemblies, refrigerant circuits, and pressure vessels.',
                },
                {
                  title: 'Electric power equipment',
                  description:
                    'Gas-insulated tanks, switchgear components, sealed pole parts, welded enclosures, and pressure-retaining assemblies.',
                },
                {
                  title: 'Vacuum and semiconductor equipment',
                  description:
                    'Vacuum modules, welded chambers, gas panels, sealed packages, process assemblies, and high-integrity components.',
                },
              ],
            },
            {
              eyebrow: 'Wayeal support',
              title: 'How Wayeal helps turn the method into a stable station',
              paragraphs: [
                'A reliable vacuum chamber helium leak detection station is more than a chamber and a detector. Wayeal can help define the chamber size, fixture concept, valve sequence, vacuum pump selection, helium filling strategy, detector configuration, calibration plan, reject limit, data output, and operator workflow.',
                'For a new application, the useful starting information is the workpiece drawing, material, internal volume, allowable pressure, target leak rate, expected production takt time, automation level, helium recovery requirement, and whether the station needs manual loading, semi-automatic handling, or full line integration.',
              ],
            },
          ],
          cta: {
            title: 'Need a vacuum chamber helium leak test process?',
            description:
              'Share your workpiece drawings, target leak rate, test pressure, cycle time, and automation requirements. Wayeal can help configure the chamber, tooling, valves, pumps, leak detector, and helium handling around your production process.',
            label: 'Discuss Your Application',
            href: '/contact',
          },
        },
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
        description:
          'Selection notes for matching leak test configuration to part geometry, target leak rate, automation level, helium handling, and production flow.',
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
        description:
          'Compare helium leak testing, pressure decay, bubble testing, and other inspection methods before selecting equipment for production.',
        children: [
          {
            label: 'Helium vs Pressure Decay vs Bubble Test',
            slug: 'helium-vs-pressure-decay-vs-bubble-test',
            href: `${RESOURCE_BASE_PATH}/technical-guides/method-comparison/helium-vs-pressure-decay-vs-bubble-test`,
            description:
              'A practical comparison of sensitivity, speed, automation fit, and inspection confidence.',
            article: {
              heroImage: {
                src: methodComparisonImage,
                alt: 'Comparison schematic for helium leak testing, pressure decay testing, and bubble testing',
                caption:
                  'Helium leak testing, pressure decay testing, and bubble testing each solve a different production leak testing problem.',
              },
              quickFacts: [
                { label: 'Highest sensitivity', value: 'Helium leak testing with tracer gas and a leak detector' },
                { label: 'Best low-cost screen', value: 'Pressure decay for gross to medium leaks on stable parts' },
                { label: 'Best visual location', value: 'Bubble testing with water immersion or soap solution' },
                { label: 'Production rule', value: 'Screen large leaks first, then use helium for final validation' },
              ],
              intro: [
                'Choosing between helium leak testing vs pressure decay vs bubble test methods depends on the required leak rate, part volume, test pressure, cycle time, and whether the line needs a quantitative result or a visible leak location.',
                'For industrial leak test method selection, the safest approach is to match the test method to the failure risk. Bubble testing is simple and visual, pressure decay is practical for many production leak testing stations, and helium tracer gas testing is used when small leaks, repeatability, or automated final inspection matter most.',
              ],
              sections: [
                {
                  eyebrow: 'Method overview',
                  title: 'Quick comparison',
                  cards: [
                    {
                      title: 'Helium leak testing',
                      description:
                        'Measures escaping helium tracer gas with a leak detector. It is the best fit for high-sensitivity final inspection, vacuum chamber systems, sniffer leak location, and parts where pressure decay may miss small or distributed leaks.',
                    },
                    {
                      title: 'Pressure decay testing',
                      description:
                        'Pressurizes the part, isolates it, and measures pressure loss over a fixed time. It is useful for gross to medium leak screening when the part volume is stable, the test pressure is defined, and the acceptance limit does not require ultra-low leak rates.',
                    },
                    {
                      title: 'Bubble testing',
                      description:
                        'Uses water immersion or soap solution so escaping gas forms visible bubbles. It is simple and low cost, but it is usually manual, less repeatable, and better for leak location or repair checks than automated quantitative production control.',
                    },
                  ],
                },
                {
                  eyebrow: 'Selection guide',
                  title: 'When each method fits',
                  bullets: [
                    'Choose helium leak testing when the target leak rate is small, the part is high value, the leak path may be very fine, or the production line needs repeatable quantitative inspection.',
                    'Choose helium vacuum chamber or accumulation testing when the whole part must be checked instead of only a few visible joints.',
                    'Choose helium sniffer testing when operators or robots need to locate a leak after a failed integral test.',
                    'Choose pressure decay when the part has a known internal volume, stable temperature behavior, and a gross or medium leak limit that can be detected through pressure loss.',
                    'Use pressure decay as a pre-screen before helium testing when a large leak could waste helium, slow the cycle, or contaminate the test area.',
                    'Choose bubble testing when the priority is visible leak location, quick troubleshooting, operator training, or confirming a repair at a simple workstation.',
                  ],
                },
                {
                  eyebrow: 'Line design',
                  title: 'A practical production workflow',
                  paragraphs: [
                    'Many production lines do not rely on one method alone. A gross leak or proof test can remove open defects before sensitive tracer gas testing. This protects helium consumption, keeps the test area cleaner, and reduces false confidence from parts that cannot hold pressure or tracer gas.',
                    'After the gross screen, helium leak testing can serve as the final inspection method for parts that need tighter limits, documented leak-rate values, or stable automation. Bubble testing can remain useful downstream for repair benches because it shows operators where the escaping gas is visible.',
                  ],
                },
                {
                  eyebrow: 'Decision rule',
                  title: 'Do not choose by equipment cost alone',
                  callout: {
                    title: 'Customer takeaway',
                    text: 'Select the method by the required leak rate, internal volume, material stiffness, temperature stability, test pressure, cycle time, automation level, and whether the process needs leak location or only pass/fail inspection.',
                    bullets: [
                      'For critical sealing, refrigerant circuits, battery components, power equipment, or vacuum assemblies, helium testing usually provides the strongest inspection confidence.',
                      'For stable parts with larger allowable leaks, pressure decay can be a cost-effective production screen.',
                      'For simple visible leak finding, bubble testing is useful, but it should not be treated as a high-sensitivity quantitative method.',
                    ],
                  },
                },
              ],
              cta: {
                title: 'Need help selecting a leak test method?',
                description:
                  'Share your part volume, test pressure, target leak rate, cycle time, and automation requirements. Wayeal can help compare helium leak testing, pressure decay, and visual leak location workflows for your application.',
                label: 'Discuss Your Application',
                href: '/contact',
              },
            },
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
        description:
          'Leak testing approach for high-voltage switchgear, RMU, GIS, circuit breaker, and other gas-insulated power equipment.',
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
        description:
          'Browse product overview materials for Wayeal helium leak detectors, vacuum chamber systems, helium recovery, and related leak testing solutions.',
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
        description:
          'Review Wayeal ISO, CE, UL, NRTL, and quality certification documents for compliance checks, supplier qualification, and procurement records.',
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
      'Calculators and converters for leak rate units, helium leak testing specifications, pressure decay references, and application planning.',
    children: [
      {
        label: 'Leak Rate Unit Converter',
        slug: 'leak-rate-unit-converter',
        href: `${RESOURCE_BASE_PATH}/useful-tools/leak-rate-unit-converter`,
        description: 'Convert common leak rate units used in helium, pressure decay, and vacuum testing.',
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
