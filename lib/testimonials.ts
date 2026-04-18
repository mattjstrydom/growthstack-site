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
      'We went from 0 qualified meetings to 12 in just 2 weeks. GrowthStack nailed our ICP and the response rates blew us away. I wish we had done this from day one.',
    metrics: [
      { value: '12', label: 'meetings in 2 wks' },
      { value: '11.3%', label: 'response rate' },
      { value: '$4K/mo', label: 'saved vs SDR' },
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
      'We were struggling to crack the UK and EU markets with outbound. GrowthStack understood our regional nuances and delivered 28 qualified leads in the first month.',
    metrics: [
      { value: '28', label: 'leads / month' },
      { value: '10.2%', label: 'response rate' },
      { value: '£1,200', label: 'monthly spend' },
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
      'Our cold email response rate went from 2% to 8.7% in the first month. GrowthStack automated what we\'d been doing manually for months and built a system that actually scales.',
    metrics: [
      { value: '25', label: 'meetings / month' },
      { value: '8.7%', label: 'response rate' },
      { value: '6 mo', label: 'contract signed' },
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
      'As a non-technical founder, I needed someone to handle outbound end-to-end. GrowthStack had professional campaigns live in 10 days. That first month changed everything.',
    metrics: [
      { value: '8', label: 'meetings month 1' },
      { value: '90%', label: 'close rate' },
      { value: 'MRR', label: 'now recurring' },
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
      'The integration between their tools is seamless. No more context switching between Clay, n8n, and HubSpot. We scaled from pilot to 45 opportunities a month within two quarters.',
    metrics: [
      { value: '45', label: 'opps / month' },
      { value: '9.2%', label: 'response rate' },
      { value: '$8K/mo', label: 'at scale' },
    ],
    image: '/headshots/elena-petrov.jpg',
    stars: 5,
  },
];
