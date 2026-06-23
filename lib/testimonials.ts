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

export const testimonials: Testimonial[] = [];
