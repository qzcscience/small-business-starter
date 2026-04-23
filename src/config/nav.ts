export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: 'Products',
    children: [
      { label: 'Helium Leak Detector', href: '/products/helium-leak-detector-SFJ-231' },
      { label: 'Customized Vacuum Chamber Helium Leak Detection System', href: '/products/vacuum-chamber' },
      { label: 'Helium Recovery System', href: '/products/helium-recovery' },
      { label: 'Accessories', href: '/products/accessories' },
    ],
  },
  {
    label: 'Industry Solutions',
    children: [
      { label: 'Automotive Parts', href: '/solutions/automotive' },
      { label: 'HVAC', href: '/solutions/hvac' },
      { label: 'Server Liquid Cooling', href: '/solutions/liquid-cooling' },
      { label: 'Electric Power', href: '/solutions/electric-power' },
      { label: 'Lithium-ion Batteries', href: '/solutions/batteries' },
      { label: 'Others', href: '/solutions/others' },
    ],
  },
  { label: 'Our Customers', href: '/customers' },
  { label: 'Resources', href: '/resources' },
  { label: 'News', href: '/news' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
