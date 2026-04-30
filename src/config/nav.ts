import { resourceNavItems } from '../data/resources';

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const vacuumChamberBaseHref = '/products/vacuum-chamber-leak-detection';

const vacuumChamberApplications: NavItem[] = [
  { label: 'Automotive Parts', href: `${vacuumChamberBaseHref}/automotive` },
  { label: 'HVAC', href: `${vacuumChamberBaseHref}/hvac` },
  { label: 'Server Liquid Cooling', href: `${vacuumChamberBaseHref}/liquid-cooling` },
  { label: 'Electric Power', href: `${vacuumChamberBaseHref}/electric-power` },
  { label: 'Lithium-ion Batteries', href: `${vacuumChamberBaseHref}/batteries` },
  { label: 'Others', href: `${vacuumChamberBaseHref}/others` },
];

export const navItems: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Helium Leak Detector', href: '/products/helium-leak-detector-SFJ-231' },
      {
        label: 'Vacuum Chamber Leak Detection System',
        href: vacuumChamberBaseHref,
        children: vacuumChamberApplications,
      },
      { label: 'Helium Recovery System', href: '/products/helium-recovery' },
      { label: 'Accessories', href: '/products/accessories' },
    ],
  },
  {
    label: 'Industry Solutions',
    href: vacuumChamberBaseHref,
    children: vacuumChamberApplications,
  },
  { label: 'Our Customers', href: '/customers' },
  { label: 'Resources', href: '/resources', children: resourceNavItems },
  { label: 'News', href: '/news' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
