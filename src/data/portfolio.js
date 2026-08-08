export const portfolioData = {
  personal: {
    name: 'Pranjal Shrivastava',
    title: 'Full Stack Developer',
    location: 'Indore, Madhya Pradesh, India',
    email: 'shrivastavapranjal81@gmail.com',
    phone: '+91 9399931346',
    bio: 'Building scalable web experiences with modern frontend and backend technologies',
    summary: 'Full Stack Developer with 1+ year of experience building SaaS and E-commerce applications. Skilled in React.js, Vue.js, Next.js, Node.js, PHP, MySQL, and REST APIs. Experienced in feature development, API integration, performance optimization, and production support.',
    social: {
      github: 'https://github.com/pranjal78666',
      linkedin: 'https://linkedin.com/in/pranjal78666',
      email: 'shrivastavapranjal81@gmail.com'
    }
  },

  experience: [
    {
      id: 1,
      company: 'Galaxy Weblinks Inc.',
      location: 'Indore, Madhya Pradesh',
      position: 'Associate Software Engineer',
      type: 'Hybrid',
      startDate: 'Aug 2025',
      endDate: 'Present',
      description: 'Full Stack Developer at Galaxy Weblinks Inc., contributing to SaaS and E-commerce platforms.',
      responsibilities: [
        'Contributed to ThinkCEO (Next.js, TypeScript) and ImprintCity (Vue.js, Node.js, PHP, MySQL)',
        'Developed frontend and backend features including invoice management, media management, user workflows, and role-based modules',
        'Built REST APIs and implemented business logic for MySQL-backed applications',
        'Integrated PCNA, SanMar, and HPG vendor APIs using PHP automation scripts',
        'Implemented product import, variant generation, color mapping, size grouping, and catalog synchronization',
        'Optimized application performance and resolved production issues',
        'Debugged large-scale codebases and maintained stable production releases',
        'Collaborated with QA, Design, Product, and Backend teams using Agile practices',
        'Used Git and Linux for development, version control, testing, deployment, and code reviews'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'React.js',
        'Vue.js',
        'Node.js',
        'PHP',
        'MySQL',
        'REST APIs',
        'Prisma',
        'Git',
        'Linux'
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: 'ThinkCEO',
      category: 'Research & Consulting Platform',
      description: 'Developed the Transactions Module covering Member, Analyst, Media, and Call Invoice Management workflows.',
      longDescription: 'ThinkCEO is a comprehensive research and consulting platform built with modern web technologies. I contributed to the development of critical transaction management features.',
      startDate: 'Aug 2025',
      endDate: 'Nov 2025',
      highlights: [
        'Built invoice and media management modules',
        'Implemented pagination, search, and filtering capabilities',
        'Developed role-based access control (RBAC)',
        'Integrated REST APIs and Stripe Payment Intents',
        'Refactored large components into reusable, maintainable modules',
        'Improved code organization and component architecture'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'React.js',
        'MySQL',
        'Prisma',
        'React Hook Form',
        'Yup',
        'Stripe Payment Intents',
        'REST APIs'
      ],
      image: null,
      liveUrl: 'https://thinkceo.com/',
      githubUrl: null
    },
    {
      id: 2,
      name: 'ImprintCity',
      category: 'Custom Merchandise & Printing E-commerce Platform',
      description: 'A scalable e-commerce platform for custom merchandise and printing services with vendor API integrations.',
      longDescription: 'ImprintCity is a full-featured e-commerce platform connecting custom merchandise suppliers with a comprehensive product management system. I developed critical features including vendor integrations, product synchronization, and performance optimization.',
      startDate: 'Nov 2025',
      endDate: 'Present',
      highlights: [
        'Developed and maintained the platform using Vue.js, Node.js, PHP, and MySQL',
        'Integrated PCNA, SanMar, and HPG vendor APIs for real-time product sync',
        'Built PHP automation scripts for bulk product import and catalog management',
        'Implemented variant generation, color mapping, and size grouping logic',
        'Created dynamic Vue.js product pages with customization workflows',
        'Resolved production issues involving product publishing and data consistency',
        'Performed Lighthouse audits and implemented performance optimizations',
        'Created database validation scripts for duplicate detection and cleanup'
      ],
      technologies: [
        'Vue.js',
        'Node.js',
        'PHP',
        'MySQL',
        'REST APIs',
        'E-commerce',
        'Product Catalog',
        'Vendor Integrations'
      ],
      image: null,
      liveUrl: 'https://staging.imprintcity.com',
      githubUrl: null
    }
  ],

  education: [
    {
      id: 1,
      school: 'Shri Govindram Seksaria Institute of Technology and Science (SGSITS)',
      location: 'Indore',
      degree: 'B.Tech',
      field: 'Computer Science Engineering',
      startDate: '2021',
      endDate: '2025',
      description: 'Bachelor of Technology in Computer Science Engineering'
    }
  ],

  skills: {
    frontend: [
      'React.js',
      'Next.js',
      'Vue.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Responsive Design'
    ],
    backend: [
      'Node.js',
      'PHP',
      'REST APIs',
      'API Integration',
      'Vendor API Integration'
    ],
    databases: [
      'MySQL',
      'MongoDB'
    ],
    tools: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Linux',
      'Cursor AI',
      'Claude AI',
      'Vite'
    ],
    practices: [
      'Agile',
      'Debugging',
      'Performance Optimization',
      'Production Support',
      'Code Review',
      'Database Optimization'
    ]
  },

  services: [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Building modern frontend + backend web applications from scratch using React, Next.js, Node.js, and PHP.',
      icon: '⚙️'
    },
    {
      id: 2,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React.js, Next.js, Vue.js, and modern CSS.',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Backend & API Development',
      description: 'Developing robust REST APIs, business logic, and database-backed applications with Node.js and PHP.',
      icon: '📡'
    },
    {
      id: 4,
      title: 'E-commerce Development',
      description: 'Building custom e-commerce workflows, product catalogs, variants, and third-party integrations.',
      icon: '🛒'
    },
    {
      id: 5,
      title: 'API Integration',
      description: 'Integrating third-party and vendor APIs with automation workflows for scalable applications.',
      icon: '🔗'
    },
    {
      id: 6,
      title: 'Performance Optimization',
      description: 'Debugging, Lighthouse audits, database optimization, and frontend performance improvements.',
      icon: '⚡'
    }
  ],

  stats: [
    {
      label: '1+ Year',
      description: 'Professional Experience'
    },
    {
      label: 'Full Stack',
      description: 'Frontend & Backend'
    },
    {
      label: 'SaaS & E-commerce',
      description: 'Specialization'
    },
    {
      label: 'REST APIs',
      description: 'Integration Expert'
    }
  ]
};
