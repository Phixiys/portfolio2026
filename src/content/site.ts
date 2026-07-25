// Central site content. Edit copy, stats, contact details and asset paths here.

export const site = {
  name: 'Sasa Ristic',
  wordmark: 'SASA RISTIC',
  location: 'Stockholm',

  // Home hero
  eyebrow: 'Senior Frontend Engineer · Stockholm, SE',
  heroFinalText: 'Frontend engineering with an eye for detail.',
  heroLead:
    "Interfaces that feel considered, fast, and a little bit warm. Eleven years building digital products for some of Sweden's most demanding brands — always starting from the business problem, not the code.",

  stats: [
    { value: '11', suffix: '+', label: 'Years shipping' },
    { value: '8', suffix: '', label: 'Companies' },
    { value: '20', suffix: '+', label: 'Brands delivered' },
  ] as { value: string; suffix: string; label: string }[],

  // Work
  work: {
    eyebrow: '02 — Experience',
    title: 'Eleven years, eight teams',
    intro: 'Senior frontend across real estate, SaaS, commerce and enterprise. Most recent first.',
  },

  // About
  about: {
    eyebrow: '03 — About',
    title: 'Technology, in service of the problem',
    paragraphs: [
      "I'm a Stockholm-based senior frontend engineer. For over a decade I've helped teams ship interfaces that are fast, accessible and genuinely useful — from enterprise platforms for Swedbank Pay and Vattenfall to SaaS products and international commerce experiences.",
      "My throughline: never tech for tech's sake. I work close to the business and design to make sure each solution moves a real number — conversion, velocity, accessibility — not just a line of code. Lately that's meant leading WCAG accessibility work and driving a full TypeScript migration that paid off in team speed.",
    ],
    // Optional portrait. Drop a 4:5 photo at public/portrait.jpg and set this path.
    portrait: '' as string,
  },

  // Contact
  contact: {
    eyebrow: '04 — Contact',
    title: "Let's talk",
    lead: 'Hiring, contracting, or just want to compare notes on accessible frontend? I read everything.',
    channels: [
      { label: 'Email', value: 'hej@ristic.nu', href: 'mailto:hej@ristic.nu' },
      { label: 'LinkedIn', value: '/in/sasaristic', href: 'https://www.linkedin.com/in/sasaristic' },
      { label: 'GitHub', value: '@sasaristic', href: 'https://github.com/sasaristic' },
    ],
  },

  // Résumé PDF — drop the real file at public/resume.pdf
  resumePath: '/resume.pdf',

  footer: {
    left: '© 2026 Sasa Ristic · Stockholm',
    right: 'Built with care · </>',
  },
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
