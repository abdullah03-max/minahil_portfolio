// Central content data for Minahil Yaseen's portfolio.
// Edit this file to update copy across the entire site.

export const personalInfo = {
  name: 'Minahil Yaseen',
  firstName: 'Minahil',
  lastName: 'Yaseen',
  title: 'Software Engineer',
  location: 'Burewala, Punjab, Pakistan',
  email: 'malachaudhary10@gmail.com',
  phone: '0371-1967477',
  github: 'https://github.com/Minahilyasin',
  linkedin: 'https://www.linkedin.com/in/minahilyaseen',
}

export const heroContent = {
  subtitle:
    'Building modern web and mobile applications with exceptional user experiences, scalable architectures, and clean code practices.',
  ctaPrimary: 'View My Work',
  ctaSecondary: 'Download Resume',
  ctaTertiary: 'Contact Me',
}

export const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Technologies Mastered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

export const aboutContent = {
  paragraph:
    'Software Engineering student at COMSATS University with hands-on experience building full-stack web and mobile applications — from interactive frontends to the APIs and databases running underneath them.',
  specializations: [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'Flutter',
    'MongoDB',
    'Firebase',
    'Supabase',
  ],
  foundations: [
    'Object-Oriented Programming',
    'Software Design',
    'REST APIs',
    'Data Structures & Algorithms',
  ],
}

export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout-template',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'Python'],
  },
  {
    title: 'Mobile',
    icon: 'smartphone',
    skills: ['Flutter', 'Dart'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase'],
  },
  {
    title: 'Tools & Practices',
    icon: 'git-branch',
    skills: ['Git', 'GitHub', 'REST APIs', 'Agile', 'Scrum', 'DSA'],
  },
]

export interface ExperienceItem {
  role: string
  org: string
  period: string
  achievements: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer Intern',
    org: 'Tech Solutions Pvt Ltd',
    period: 'Jun 2025 – Sep 2025',
    achievements: [
      'Developed responsive web interfaces using React.js and Tailwind CSS',
      'Improved page load speed by 25%',
      'Built REST APIs with Node.js and Express',
      'Reduced response time by 30%',
      'Collaborated in an Agile team environment',
    ],
  },
  {
    role: 'Freelance Web & Mobile App Developer',
    org: 'Self-employed',
    period: 'Jan 2024 – Present',
    achievements: [
      'Developed websites and mobile apps for varied client industries',
      'Delivered complete UI/UX to deployment solutions',
      'Managed multiple client projects simultaneously',
      'Maintained strong, long-term client relationships',
    ],
  },
  {
    role: 'Lead Developer — Final Year Project',
    org: 'University Tech Society, COMSATS',
    period: '2023 – 2024',
    achievements: [
      'Led a team of 3 developers from concept to delivery',
      'Built a full-stack e-commerce platform',
      'Implemented authentication and an admin dashboard',
      'Earned top faculty evaluation scores',
    ],
  },
]

export interface Project {
  title: string
  description: string
  stack: string[]
  features: string[]
  github: string
  demo: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Full Stack E-Commerce Platform',
    description:
      'A complete online storefront with product catalog, cart, secure checkout, and order tracking.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Authentication & role-based access',
      'Real-time cart and inventory sync',
      'Admin dashboard for orders and products',
      'Stripe-ready checkout flow',
    ],
    github: 'https://github.com/Minahilyasin',
    demo: '#',
    image: '/ecommerce.png',
  },
  {
    title: 'Business Management Dashboard',
    description:
      'An analytics dashboard giving small business owners a live view of sales, staff, and inventory.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    features: [
      'Interactive charts and KPI widgets',
      'Role-based team management',
      'Exportable reports',
      'Dark-mode first design',
    ],
    github: 'https://github.com/Minahilyasin',
    demo: '#',
    image: '/dashboard.png',
  },
  {
    title: 'Mobile Business App',
    description:
      'A cross-platform companion app that lets owners manage operations from anywhere.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    features: [
      'Offline-first data sync',
      'Push notifications for orders',
      'Biometric login',
      'Cross-platform iOS & Android build',
    ],
    github: 'https://github.com/Minahilyasin',
    demo: '#',
    image: '/mobile.png',
  },
  {
    title: 'Task Management System',
    description:
      'A collaborative task tracker for teams, with boards, deadlines, and progress analytics.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    features: [
      'Drag-and-drop kanban boards',
      'Team assignment & deadlines',
      'Activity timeline',
      'REST API with JWT auth',
    ],
    github: 'https://github.com/Minahilyasin',
    demo: '#',
    image: '/task.png',
  },
  {
    title: 'Restaurant Management System',
    description:
      'An end-to-end ordering and table management system for restaurants and cafes.',
    stack: ['React.js', 'Express.js', 'MySQL'],
    features: [
      'Table & order management',
      'Live kitchen order queue',
      'Menu and pricing management',
      'Sales reporting',
    ],
    github: 'https://github.com/Minahilyasin',
    demo: '#',
    image: '/restaurant.png',
  },
  {
    title: 'Portfolio & Client Management Platform',
    description:
      'A platform for freelancers to showcase work, manage client requests, and track projects.',
    stack: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Dynamic project showcase',
      'Client request & messaging system',
      'Project status tracking',
      'Animated, responsive UI',
    ],
    github: 'https://github.com/Minahilyasin',
    demo: '#',
    image: '/portfolio.png',
  },
]

export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Fast, responsive websites and web apps built with modern frameworks and clean architecture.',
    icon: 'code-2',
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps with Flutter that feel native on iOS and Android alike.',
    icon: 'smartphone',
  },
  {
    title: 'Backend Development',
    description:
      'Reliable, scalable server-side systems built with Node.js and Express.',
    icon: 'server-cog',
  },
  {
    title: 'API Development',
    description:
      'Well-documented REST APIs designed for performance, security, and easy integration.',
    icon: 'plug-zap',
  },
  {
    title: 'Database Design',
    description:
      'Efficient schemas and data models across SQL and NoSQL databases.',
    icon: 'database-zap',
  },
  {
    title: 'UI/UX Implementation',
    description:
      'Pixel-accurate, animated interfaces that turn designs into delightful experiences.',
    icon: 'palette',
  },
]

export interface EducationItem {
  institution: string
  degree: string
  period: string
}

export const education: EducationItem[] = [
  {
    institution: 'COMSATS University',
    degree: 'BS Software Engineering',
    period: '2022 – 2026',
  },
  {
    institution: 'Superior College',
    degree: 'Intermediate (ICS)',
    period: '2020 – 2022',
  },
]
