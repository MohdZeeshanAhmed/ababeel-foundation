import darulArqamImage from '../assets/darul-arqam-classroom.jpg'
import shamaImage from '../assets/shama-classroom.jpg'
import mannaSalwaImage from '../assets/gallery-4.jpeg'
import medicalCampsImage from '../assets/IMG_1936.JPG.jpeg'
import hunarImage from '../assets/IMG_6156.JPG.jpeg'
import beyondBooksImage from '../assets/about-team-field.jpeg'
import pehchaanImage from '../assets/IMG_4122.JPG.jpeg'
import upcycleImage from '../assets/gallery-3.jpeg'

export type Project = {
  slug: string
  title: string
  shortDescription: string
  about: string
  image: string
  imageAlt: string
  story?: string[]
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
    slug: 'darul-arqam',
    title: 'Darul Arqam',
    shortDescription:
      'A school for orphaned and underprivileged students combining Islamic education with modern learning tools.',
    about:
      'Darul Arqam is a learning space where Islamic education goes hand in hand with computers, a modern library, interactive smart panels, spoken English and personality development.',
    image: darulArqamImage,
    imageAlt: 'Darul Arqam students reading together in class',
    story: [
      'A school full of possibilities means students do not just receive lessons, they receive the environment to learn, grow and show up with dignity.',
      'For orphaned and underprivileged students, access to a safe classroom, books, guided teaching and modern tools changes what feels possible in their future.',
    ],
    servicesTitle: 'What Students Receive',
    services: [
      'Islamic education alongside academic support',
      'Computer access and modern learning tools',
      'A fully equipped library and smart panels',
      'Spoken English and personality development',
    ],
    beneficiariesTitle: 'Who It Serves',
    beneficiaries: ['Orphaned students', 'Underprivileged girls', 'Families seeking dignified long-term education support'],
    goalTitle: 'Why It Matters',
    goal: 'Everything students need to learn, grow and participate with dignity is provided at no cost.',
  },
  {
    slug: 'shama',
    title: 'SHAMA – Education Support',
    shortDescription: 'Education support for school dropouts, women learners and first-generation students.',
    about:
      'SHAMA is Ababeel Foundation\'s education initiative enrolling women and girls into 10th Class, Intermediate and TOSS (Telangana Open School) pathways completely free of cost.',
    image: shamaImage,
    imageAlt: 'Women learners seated together in an Ababeel Foundation classroom',
    story: [
      'SHAMA covers admissions, exam fees, coaching and consistent follow-up so financial pressure does not end a girl\'s education.',
      'When one woman learns, an entire household shifts. Sponsoring one learner can move a full generation forward.',
    ],
    servicesTitle: 'What We Provide',
    services: [
      'Admissions and exam fee support',
      'Study material assistance',
      'Guidance, coaching and mentoring',
      'Parental counselling on the importance of continuing education',
    ],
    beneficiariesTitle: 'Who It Benefits',
    beneficiaries: ['School dropouts', 'Women restarting education', 'Financially constrained families', 'First-generation learners'],
    goalTitle: 'Impact Goal',
    goal: 'Ensure no child drops out due to financial hardship.',
    photoNotes: ['Classroom sessions', 'Study circles', 'Exam readiness support'],
  },
  {
    slug: 'manna-salwa',
    title: 'MANNA SALWA – Food Security with Education Commitment',
    shortDescription: 'Monthly groceries with an education commitment so hunger does not force school dropouts.',
    about:
      'MANNA SALWA is a structured exchange where Ababeel Foundation provides groceries to families in return for a commitment that their daughters remain enrolled in school and attend regularly.',
    image: mannaSalwaImage,
    imageAlt: 'Ababeel Foundation volunteer supporting children during community outreach',
    story: [
      'This is not one-day charity. Food security is tied to school continuity so financial stress does not push girls out of the classroom or into underage marriage.',
      'Families can be sponsored through a monthly grocery kit that supports education at home in a practical, accountable way.',
    ],
    processTitle: 'How It Works',
    process: ['Monthly grocery support', 'Family signs an education commitment', 'Regular follow-up on school attendance'],
    highlightsTitle: 'Why This Model',
    highlights: ['Addresses hunger', 'Reduces dropout risk', 'Supports girls staying in school', 'Encourages education without force'],
    impactTitle: 'Impact',
    impact: 'Nutrition today, education for tomorrow.',
    photoNotes: ['Family support visits', 'Dignified distribution moments'],
  },
  {
    slug: 'medical-camps',
    title: 'SEHAT – Supporting Every Human Affordable Treatment',
    shortDescription: 'Affordable and accessible healthcare support through camps, screening, medicines, and awareness.',
    about:
      'SEHAT (Supporting Every Human Affordable Treatment) is Ababeel Foundation\'s healthcare initiative for underserved communities, combining free camps, consultations, medicines and preventive guidance.',
    image: medicalCampsImage,
    imageAlt: 'Doctor checking a patient during an Ababeel Foundation medical camp',
    story: [
      'Along with free medicines and consultations, the initiative guides parents on preventing deficiencies in children and providing supplements where needed.',
      'It also supports elderly patients with simple, practical guidance on chronic conditions such as diabetes, hypertension and hypothyroidism.',
    ],
    servicesTitle: 'Services Offered',
    services: ['General health checkups', 'Blood pressure & sugar screening', 'Basic medicines', 'Health education & lifestyle counselling'],
    highlightsTitle: 'Focus Areas',
    highlights: ['Preventive healthcare', 'Early detection', 'Health awareness', 'Chronic disease management guidance'],
    photoNotes: ['Doctors examining patients', 'Camp setup visuals', 'Community health counselling'],
  },
  {
    slug: 'hunar',
    title: 'HUNAR – Skill & Business Training',
    shortDescription: 'Skill and business training to move youth and women from dependency to dignity.',
    about:
      'HUNAR focuses on teaching practical skills and business knowledge so women and youth can move from learning to earning with dignity.',
    image: hunarImage,
    imageAlt: 'Ababeel Foundation session focused on training and guided learning',
    story: [
      'Women who already have skills such as handcraft, calligraphy and stitching are trained further to meet quality standards and market demand.',
      'The work they produce can then be sold through exhibitions and online platforms so income becomes more stable, fair and sustainable.',
    ],
    servicesTitle: 'What We Teach',
    services: ['Basic vocational skills', 'Small business training', 'Financial literacy', 'Entrepreneurial mindset'],
    beneficiariesTitle: 'Who It Benefits',
    beneficiaries: ['Youth', 'Women', 'Unemployed adults'],
    goalTitle: 'Goal',
    goal: 'From dependency to dignity through skills.',
    photoNotes: ['Training sessions', 'Hands-on learning visuals', 'Skill-building workshops'],
  },
  {
    slug: 'beyond-books',
    title: 'Beyond Books',
    shortDescription: 'Holistic education support beyond classroom learning.',
    about:
      'Beyond Books strengthens learning through Saturday sessions, outings and practical exposure for students who may otherwise never see those opportunities.',
    image: beyondBooksImage,
    imageAlt: 'Ababeel Foundation learning session with students gathered for an activity',
    story: [
      'Students are introduced to how businesses work, the basics of money and entrepreneurship, how politics and society function, and skills such as art, self-defense and communication.',
      'Parents are included as well, so growth does not stop when the session ends and learning can continue at home.',
    ],
    highlightsTitle: 'What Makes It Different',
    highlights: [
      'Exposure beyond textbooks',
      'Practical life skills and communication',
      'Mentorship through sessions and outings',
      'Parent involvement in the learning journey',
    ],
  },
  {
    slug: 'pehchaan',
    title: 'Pehchaan',
    shortDescription: 'Correction and creation of essential identity and civic documents for families.',
    about:
      'Pehchaan helps families correct and complete essential documents so small errors in identity records do not block access to opportunities.',
    image: pehchaanImage,
    imageAlt: 'Ababeel Foundation volunteer assisting a woman with document support',
    story: [
      'Many people miss ration cards, health cards, scholarships and job opportunities because of small errors in Aadhaar cards, birth certificates or PAN records.',
      'This program fixes those gaps by guiding families through corrections they may otherwise delay because of cost, confusion or lack of awareness.',
    ],
    servicesTitle: 'Services Offered',
    services: ['Aadhaar updates and corrections support', 'Certificate documentation guidance', 'Document readiness support for welfare and education access'],
    highlightsTitle: 'Why It Matters',
    highlights: ['Unlocks access to government schemes', 'Reduces avoidable documentation delays', 'Protects education and employment opportunities'],
  },
  {
    slug: 'upcycle',
    title: 'Upcycle',
    shortDescription: 'Redistribution of donated goods so useful items reach families who actually need them.',
    about:
      'Upcycle offers doorstep pickup of donated clothes, kitchenware, bedding, furniture, toys and electronics, then redistributes them to families based on real needs.',
    image: upcycleImage,
    imageAlt: 'Children smiling during an Ababeel Foundation community support moment',
    story: [
      'This drive helps redistribute what already exists, making change possible without additional cost.',
      'Useful belongings get a second life while families of students receive support that is practical, immediate and dignified.',
    ],
    servicesTitle: 'What We Collect',
    services: [
      'Clothes and bedding',
      'Kitchenware and household goods',
      'Furniture and toys',
      'Electronics that can still be used responsibly',
    ],
    impactTitle: 'Impact',
    impact: 'Giving new life to old things while reducing waste and supporting families with dignity.',
  },
]

export const coreProgramSlugs = ['shama', 'manna-salwa', 'medical-camps', 'hunar'] as const

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug) ?? null
