export type Project = {
  slug: string
  title: string
  shortDescription: string
  about: string
  aboutTitle?: string
  highlights?: string[]
  highlightsTitle?: string
  beneficiaries?: string[]
  beneficiariesTitle?: string
  services?: string[]
  servicesTitle?: string
  process?: string[]
  processTitle?: string
  goal?: string
  goalTitle?: string
  impact?: string
  impactTitle?: string
  photoNotes?: string[]
  statusNote?: string
}

export const projects: Project[] = [
  {
    slug: 'shama',
    title: 'SHAMA – Education Support',
    shortDescription: 'Education support for school dropouts, women learners and first-generation students.',
    about:
      'SHAMA is Ababeel Foundation\'s education initiative enrolling divorced, single and widowed women for 10th Class, Intermediate and TOSS (Telangana Open School) exams.',
    servicesTitle: 'What We Provide',
    services: ['Exam fee support', 'Study material assistance', 'Guidance & mentoring', 'Parental counselling on education importance'],
    beneficiariesTitle: 'Who It Benefits',
    beneficiaries: ['School dropouts', 'Financially constrained families', 'First-generation learners'],
    goalTitle: 'Impact Goal',
    goal: 'Ensure no child drops out due to financial hardship.',
    photoNotes: ['Students studying', 'Writing exam'],
  },
  {
    slug: 'manna-salwa',
    title: 'MANNA SALWA – Food Security with Education Commitment',
    shortDescription: 'Monthly groceries with an education commitment so hunger does not force school dropouts.',
    about:
      'MANNA SALWA is a unique food security initiative where Ababeel Foundation provides groceries to families in return for a commitment that their children continue education.',
    processTitle: 'How It Works',
    process: ['Monthly grocery support', 'Family signs an education commitment', 'Regular follow-up on school attendance'],
    highlightsTitle: 'Why This Model',
    highlights: ['Addresses hunger', 'Prevents child labor', 'Encourages education without force'],
    impactTitle: 'Impact',
    impact: 'Nutrition today, education for tomorrow.',
    photoNotes: ['Grocery distribution', 'Family interaction (with dignity)'],
  },
  {
    slug: 'medical-camps',
    title: 'SEHAT – Supporting Every Human Affordable Treatment',
    shortDescription: 'Affordable and accessible healthcare support through camps, screening, medicines, and awareness.',
    about:
      'SEHAT (Supporting Every Human Affordable Treatment) is Ababeel Foundation\'s healthcare initiative for underserved communities.',
    servicesTitle: 'Services Offered',
    services: ['General health checkups', 'Blood pressure & sugar screening', 'Basic medicines', 'Health education & lifestyle counselling'],
    highlightsTitle: 'Focus Areas',
    highlights: ['Preventive healthcare', 'Early detection', 'Health awareness'],
    photoNotes: ['Doctors examining patients', 'Camp setup visuals'],
  },
  {
    slug: 'hunar',
    title: 'HUNAR – Skill & Business Training',
    shortDescription: 'Skill and business training to move youth and women from dependency to dignity.',
    about:
      'HUNAR focuses on teaching practical skills and business knowledge to help individuals become self-reliant.',
    servicesTitle: 'What We Teach',
    services: ['Basic vocational skills', 'Small business training', 'Financial literacy', 'Entrepreneurial mindset'],
    beneficiariesTitle: 'Who It Benefits',
    beneficiaries: ['Youth', 'Women', 'Unemployed adults'],
    goalTitle: 'Goal',
    goal: 'From dependency to dignity through skills.',
    photoNotes: ['Training sessions', 'Hands-on learning visuals'],
  },
  {
    slug: 'beyond-books',
    title: 'Beyond Books',
    shortDescription: 'Holistic education support beyond classroom learning.',
    about:
      'Beyond Books strengthens learning through mentorship, activity-based engagement and continuous encouragement for children at risk of dropping out.',
  },
  {
    slug: 'pehchaan',
    title: 'Pehchaan',
    shortDescription: 'Correction and creation of essential identity and civic documents for families.',
    about: 'Correction and creation of essential documents (Aadhaar, certificates, etc.)',
    servicesTitle: 'Services Offered',
    services: ['Aadhaar updates and corrections support', 'Certificate documentation guidance', 'Document readiness support for welfare and education access'],
  },
  {
    slug: 'upcycle',
    title: 'Upcycle',
    shortDescription: 'Upcycle initiatives and sustainable reuse programs.',
    about: 'Upcycle initiatives and sustainable reuse programs.',
    statusNote: 'Details coming soon.',
  },
]

export const coreProgramSlugs = ['shama', 'manna-salwa', 'medical-camps', 'hunar'] as const

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug) ?? null
