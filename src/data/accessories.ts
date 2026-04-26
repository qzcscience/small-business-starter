export interface AccessorySku {
  slug: string;
  name: string;
  images: {
    src: string;
    alt: string;
  }[];
  description: string;
}

export interface AccessoryGroup {
  slug: string;
  label: string;
  summary: string;
  skus: AccessorySku[];
}

const accessoryImageModules = import.meta.glob<string>(
  '../assets/images/products/accessories/*.png',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
);

function getAccessoryImage(fileName: string) {
  return accessoryImageModules[`../assets/images/products/accessories/${fileName}`] || '';
}

const description = 'Accessory for helium leak detection systems.';

function accessoryImages(name: string, fileNames: string[]) {
  return fileNames.map((fileName) => ({
    src: getAccessoryImage(fileName),
    alt: name,
  }));
}

export const accessoryGroups: AccessoryGroup[] = [
  {
    slug: 'accessories-consumables',
    label: 'Accessories & Consumables',
    summary: 'Accessories, spare parts, probes, chambers, tooling, and consumables for helium leak detection systems.',
    skus: [
      {
        slug: '20-micron-inlet-filter',
        name: '20 Micron inlet Filter',
        images: accessoryImages('20 Micron inlet Filter', ['20-micron-inlet-filter.png']),
        description,
      },
      {
        slug: 'bellow',
        name: 'Bellow',
        images: accessoryImages('Bellow', ['bellow.png', 'bellow-1.png']),
        description,
      },
      {
        slug: 'calibration-master',
        name: 'Calibration master',
        images: accessoryImages('Calibration master', ['calibration-master.png']),
        description,
      },
      {
        slug: 'customized-tooling',
        name: 'Customized tooling',
        images: accessoryImages('Customized tooling', ['customized-tooling.png']),
        description,
      },
      {
        slug: 'digital-display-sniffer-probe',
        name: 'Digital display sniffer probe',
        images: accessoryImages('Digital display sniffer probe', ['digital-display-sniffer-probe.png']),
        description,
      },
      {
        slug: 'helium-concentration-meter',
        name: 'Helium concentration meter',
        images: accessoryImages('Helium concentration meter', ['helium-concentration-meter.png']),
        description,
      },
      {
        slug: 'helium-pressure-chamber',
        name: 'Helium pressure Chamber',
        images: accessoryImages('Helium pressure Chamber', ['helium-pressure-chamber.png']),
        description,
      },
      {
        slug: 'ion-source',
        name: 'Ion Source',
        images: accessoryImages('Ion Source', ['ion-source-1.png', 'ion-source-2.png', 'ion-source.png']),
        description,
      },
      {
        slug: 'kf25-clamp',
        name: 'KF25 Clamp',
        images: accessoryImages('KF25 Clamp', ['kf25-clamp.png']),
        description,
      },
      {
        slug: 'leak-detection-chamber',
        name: 'Leak detection chamber',
        images: accessoryImages('Leak detection chamber', ['leak-detection-chamber.png']),
        description,
      },
      {
        slug: 'pirani-vacuum-gauge',
        name: 'Pirani vacuum gauge',
        images: accessoryImages('Pirani vacuum gauge', ['pirani-vacuum-gauge.png']),
        description,
      },
      {
        slug: 'sniffer-probe',
        name: 'Sniffer probe',
        images: accessoryImages('Sniffer probe', ['sniffer-probe.png']),
        description,
      },
      {
        slug: 'spray-probe-helium-bag',
        name: 'Spray probe+Helium bag',
        images: accessoryImages('Spray probe+Helium bag', ['spray-probe-helium-bag.png']),
        description,
      },
      {
        slug: 'switching-power-supply',
        name: 'Switching power supply',
        images: accessoryImages('Switching power supply', ['switching-power-supply.png']),
        description,
      },
      {
        slug: 'wireless-remote-control',
        name: 'Wireless remote control',
        images: accessoryImages('Wireless remote control', ['wireless-remote-control.png']),
        description,
      },
    ],
  },
];

export const accessories = accessoryGroups.flatMap((group) => group.skus);
