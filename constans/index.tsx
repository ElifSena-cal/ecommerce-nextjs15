export const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

export type FooterSection = {
  title: string
  links: string[]
};

export const footerSections: FooterSection[] = [
  {
    title: 'About Us',
    links: ['Who We Are', 'Our Story', 'Careers'],
  },
  {
    title: 'Customer Service',
    links: ['Contact Us', 'FAQ', 'Support'],
  },
  {
    title: 'Products',
    links: ['Product 1', 'Product 2', 'Product 3'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Return Policy'],
  },
];

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/category1', label: 'Cat1' },
  { href: '/category2', label: 'Cat2' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export type SliderItem = {
  id: string;
  title: string;
  image: string;
};