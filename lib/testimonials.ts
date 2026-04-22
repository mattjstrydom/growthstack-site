export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  location: string;
  quote: string;
  metrics: Metric[];
  image: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aisha Chen',
    company: 'TechFlow AI',
    role: 'Founder & CEO',
    location: 'San Francisco, CA',
    quote:
      'GrowthStack gave us the first CRM and pipeline setup our team could actually trust. Instead of founder memory and scattered follow-up, we finally had clear stages, ownership, and reporting.',
    metrics: [
      { value: '10 days', label: 'to live system' },
      { value: '1', label: 'source of truth' },
      { value: 'Clear', label: 'pipeline ownership' },
    ],
    image: '/headshots/aisha-chen.jpg',
    stars: 5,
  },
  {
    id: 2,
    name: 'James Richardson',
    company: 'Velocity Commerce Ltd',
    role: 'Head of Growth',
    location: 'London, United Kingdom',
    quote:
      'The biggest change was not volume. It was clarity. We could finally see where deals were stalling, what the team owned, and which parts of HubSpot needed fixing.',
    metrics: [
      { value: '3', label: 'core dashboards' },
      { value: 'Fewer', label: 'manual updates' },
      { value: 'Weekly', label: 'founder visibility' },
    ],
    image: '/headshots/james-richardson.jpg',
    stars: 5,
  },
  {
    id: 3,
    name: 'Sofia Ramirez',
    company: 'NextGen Logistics',
    role: 'VP Sales',
    location: 'Miami, FL',
    quote:
      'They cleaned up the handoffs between marketing, sales, and the CRM. The result was a pipeline process the team could actually follow instead of working around HubSpot.',
    metrics: [
      { value: 'Cleaner', label: 'handoffs' },
      { value: 'Live', label: 'stage visibility' },
      { value: 'Less', label: 'CRM friction' },
    ],
    image: '/headshots/sofia-ramirez.jpg',
    stars: 5,
  },
  {
    id: 4,
    name: 'David Okafor',
    company: 'Integrated Analytics',
    role: 'Founder',
    location: 'New York, NY',
    quote:
      'As a founder, I needed the commercial system built properly, not just another campaign. GrowthStack gave us the operating layer we were missing and made the next steps obvious.',
    metrics: [
      { value: '10 days', label: 'to foundation' },
      { value: 'Usable', label: 'HubSpot setup' },
      { value: 'Clear', label: 'next actions' },
    ],
    image: '/headshots/david-okafor.jpg',
    stars: 5,
  },
  {
    id: 5,
    name: 'Elena Petrov',
    company: 'CloudVault Enterprise',
    role: 'Head of Growth',
    location: 'Boston, MA',
    quote:
      'The best part was how the tooling finally worked as one system. HubSpot, workflows, and reporting stopped feeling disconnected, which made activation much easier to add later.',
    metrics: [
      { value: '1', label: 'connected stack' },
      { value: 'Faster', label: 'team execution' },
      { value: 'Ready', label: 'for activation' },
    ],
    image: '/headshots/elena-petrov.jpg',
    stars: 5,
  },
];
