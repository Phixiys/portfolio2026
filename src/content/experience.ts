export type Role = {
  company: string;
  role: string;
  dates: string;
  period: string;
  place: string;
  mode: string;
  summary: string;
  tags: string[];
};

// Most recent first. Edit here to update the Work page.
export const experience: Role[] = [
  {
    company: 'Svensk Fastighetsförmedling',
    role: 'Senior Front End Developer',
    dates: '2023 — 2025',
    period: '2 yr 4 mo',
    place: 'Stockholm, SE',
    mode: 'Hybrid',
    summary:
      'Modernised the digital platform for one of Sweden’s leading real-estate agencies. Led WCAG accessibility work to make it inclusive for every user, and partnered tightly with the business so each solution answered a real need.',
    tags: ['.NET', 'JSON', 'Accessibility', '+8 more'],
  },
  {
    company: 'Netigate',
    role: 'Senior Front End Developer',
    dates: '2021 — 2022',
    period: '1 yr 5 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built out a SaaS platform around the features customers actually asked for, and drove the migration to TypeScript — a bet on maintainability that paid off in velocity for the whole team.',
    tags: ['React', 'TypeScript', 'JSON', '+8 more'],
  },
  {
    company: 'Improove',
    role: 'Senior Front End Developer',
    dates: '2021',
    period: '9 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built commerce experiences on Salesforce Commerce Cloud for international brands like Urbanears, Marshall and Plantagen — focused on conversion and customer journey over technology for its own sake.',
    tags: ['Salesforce', 'JSON', '+5 more'],
  },
  {
    company: 'Comprend',
    role: 'Front End Developer',
    dates: '2019 — 2021',
    period: '1 yr 4 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Delivered enterprise web solutions for heavyweight brands — Swedbank Pay, Vattenfall, Capio and Billerud — working cross-functionally with design and stakeholders to build the thing that solved the real problem.',
    tags: ['JavaScript', 'JSON', '+7 more'],
  },
  {
    company: 'Rebel and Bird',
    role: 'Front End Developer',
    dates: '2019',
    period: '6 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built a progressive web app for Match Center Media with performance and user experience at the core, working closely with stakeholders around real content and media needs.',
    tags: ['React', 'JSON', '+4 more'],
  },
  {
    company: 'NoA Ignite Sweden',
    role: 'Front End Developer',
    dates: '2018 — 2019',
    period: '6 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built large-scale digital platforms and e-commerce for brands like Coop, LeoVegas and Sector Alarm — enterprise scale, with a UX that actually converted.',
    tags: ['CSS', 'JSON'],
  },
  {
    company: 'tretton37',
    role: 'Front End Developer',
    dates: '2017 — 2018',
    period: '1 yr 7 mo',
    place: 'Greater Stockholm',
    mode: 'On-site',
    summary:
      'Developed applications within innovation and product-development projects, working closely with dev teams to deliver scalable, user-centred solutions.',
    tags: ['CSS', 'JSON'],
  },
  {
    company: 'ISPY AB',
    role: 'Front End Developer',
    dates: '2014 — 2017',
    period: '2 yr 4 mo',
    place: 'Greater Stockholm',
    mode: 'On-site',
    summary:
      'Designed and built digital solutions for finance and pension clients, focused on user experience and visual communication — an early lesson that technology and communication belong together.',
    tags: ['CSS', 'JSON'],
  },
];
