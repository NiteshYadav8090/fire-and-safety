
import { Service, Project, Certification, Client } from './types';

export const SERVICES: Service[] = [
  {
    id: 'extinguishers',
    title: 'Fire Extinguisher Supply',
    description: 'DCP, CO2, Water, and Foam based extinguishers for all fire classes.',
    icon: 'Flame',
    longDescription: 'We provide state-of-the-art fire extinguishers tailored for homes, offices, and heavy industrial environments. Our products comply with BIS and international standards including ISI markings.',
    benefits: ['Quick deployment', 'Low maintenance', 'High pressure reliability'],
    industries: ['Residential', 'Retail', 'Corporate Offices'],
    image: '/images/services/extinguishers.png'
  },
  {
    id: 'alarms',
    title: 'Detection & Alarm Systems',
    description: 'Advanced smoke, heat detectors and fire alarm panels.',
    icon: 'Bell',
    longDescription: 'Intelligent addressable and conventional fire alarm systems that detect danger before it escalates. Integrated with remote monitoring and emergency notification capabilities.',
    benefits: ['Early warning', 'Zonal pinpointing', 'Emergency alerts'],
    industries: ['Hospitals', 'Hotels', 'Warehouses'],
    image: '/images/services/alarms.png'
  },
  {
    id: 'hydrants',
    title: 'Hydrant & Sprinkler Systems',
    description: 'High-pressure water distribution for large-scale fire fighting.',
    icon: 'Droplets',
    longDescription: 'Design, installation, and commissioning of external hydrant systems and internal wet-riser systems with high-capacity fire pumps and piping networks.',
    benefits: ['Massive water volume', 'Auto-start pumps', 'Long range protection'],
    industries: ['Factories', 'Malls', 'High-rise Buildings'],
    image: '/images/services/hydrants.png'
  },
  {
    id: 'amc',
    title: 'Annual Maintenance (AMC)',
    description: 'Periodic inspection and maintenance of fire systems.',
    icon: 'Settings',
    longDescription: 'Ensure your safety equipment works when needed. Our AMC covers testing of detectors, refilling extinguishers, and pressure testing hydrants to meet government audits.',
    benefits: ['Compliance peace of mind', 'Equipment longevity', '24/7 Support'],
    industries: ['Schools', 'Societies', 'Banks'],
    image: '/images/services/amc.png'
  },
  {
    id: 'training',
    title: 'Safety Training',
    description: 'Practical fire drill and evacuation training for staff.',
    icon: 'GraduationCap',
    longDescription: 'Equipment is useless without trained users. We provide hands-on training for fire fighting, evacuation protocols, and first aid specifically for industrial workers.',
    benefits: ['Confidence in crisis', 'Reduced liability', 'SOP awareness'],
    industries: ['All Corporate', 'Manufacturing', 'Logistics'],
    image: '/images/services/training.png'
  },
  {
    id: 'noc',
    title: 'NOC & Consultancy',
    description: 'Government approvals and fire safety audit reports.',
    icon: 'FileCheck',
    longDescription: 'Expert guidance for obtaining Fire NOC from the department. We conduct detailed audits to ensure your building meets the latest local fire codes and National Building Codes.',
    benefits: ['Legal compliance', 'Safety certification', 'Risk assessment'],
    industries: ['New Construction', 'Commercial Complex'],
    image: '/images/services/noc.png'
  }
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Industrial Complex Alpha', location: 'Ahmedabad', industry: 'Manufacturing', image: '/images/projects/project-1.png' },
  { id: 2, title: 'Skyline Mall', location: 'Mumbai', industry: 'Retail', image: '/images/projects/project-2.png' },
  { id: 3, title: 'Unity Multi-Speciality Hospital', location: 'Pune', industry: 'Healthcare', image: '/images/projects/project-3.png' },
  { id: 4, title: 'Global Tech Park', location: 'Bangalore', industry: 'IT/Corporate', image: '/images/projects/project-4.png' },
];

export const GALLERY = [
  { id: 1, type: 'Installation', image: '/images/gallery/installation-1.png' },
  { id: 2, type: 'Training', image: '/images/gallery/training-1.png' },
  { id: 3, type: 'Equipment', image: '/images/gallery/equipment-1.png' },
  { id: 4, type: 'Audit', image: '/images/gallery/audit-1.png' },
  { id: 5, type: 'Training', image: '/images/gallery/training-2.png' },
  { id: 6, type: 'Installation', image: '/images/gallery/installation-2.png' },
];

export const BLOG_POSTS = [
  { id: 1, title: '5 Fire Safety Tips for Office Buildings', date: 'Oct 12, 2023', excerpt: 'Learn how to keep your workspace safe and evacuation-ready...' },
  { id: 2, title: 'Choosing the Right Fire Extinguisher', date: 'Sept 28, 2023', excerpt: 'Not all fires are the same. Understand the difference between CO2 and DCP...' },
  { id: 3, title: 'Why Annual Maintenance is Crucial', date: 'Aug 15, 2023', excerpt: 'Don\'t wait for an emergency to find out your pumps are not working...' },
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'ISO 9001:2015', issuer: 'International Standards Org', year: 'Valid until 2026', image: 'https://img.icons8.com/color/144/iso.png' },
  { title: 'Govt. Grade-A Contractor', issuer: 'Maharashtra Fire Services', year: 'Reg #4912', image: 'https://img.icons8.com/fluency/144/verified-badge.png' },
  { title: 'FPAI Membership', issuer: 'Fire Protection Association', year: 'Life Member', image: 'https://img.icons8.com/color/144/guarantee.png' },
];

export const CLIENTS: Client[] = [
  { name: 'Tata Steel', logo: '/images/clients/tata-steel.png' },
  { name: 'Reliance Ind.', logo: '/images/clients/reliance.png' },
  { name: 'L&T Construction', logo: '/images/clients/l-and-t.png' },
  { name: 'Adani Group', logo: '/images/clients/adani.png' },
];

export const CONTACT_INFO = {
  phone: '+91 94161 11612',
  whatsapp: '919416111612',
  email: 'zedkingsurvice@gmail.com',
  address: 'Karnal Rd, near New Bus Stand, Friends Colony, Kaithal, Haryana 136027',
  workingHours: 'Mon - Sat, 9:00 AM - 7:00 PM',
  emergency: '+91 94161 11612'
};

export const FAQ = [
  { q: "How often should fire extinguishers be serviced?", a: "Fire extinguishers should be inspected monthly by the owner and professionally serviced or refilled annually, or immediately after any discharge." },
  { q: "Do you help with Fire NOC applications?", a: "Absolutely. We provide end-to-end consultancy, including preparing documentation, conducting audits, and representing the client at the Fire Department for NOC issuance." },
  { q: "Is a site visit free of charge?", a: "Yes, we offer a free initial site inspection and fire safety risk assessment for factories, hospitals, and corporate offices within city limits." },
  { q: "Do you provide AMC for third-party installed systems?", a: "Yes, we can take over the maintenance of existing fire systems after an initial 'as-is' audit and health check-up of the equipment." },
];
