export type Experience = {
  title: string;
  company: {
    name: string;
    websiteURL?: string;
  };
  location: string;
  startDate: Date;
  endDate: Date;
  details: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Principal Software Engineer',
    company: {
      name: 'Radiant Security',
      websiteURL: 'https://radiantsecurity.ai',
    },
    location: 'San Francisco, CA',
    startDate: new Date(2021, 10, 1),
    endDate: new Date(2023, 7, 1),
    details: `Radiant Security is an AI Powered SOC Co-pilot to detect attacks and mitigate through incidents. Ship things fast was my main goal since from day one. I started working on Radiant Security in the first days of existence as a Founder Frontend Engineer, when I started the company had zero repos on GH, and I was responsible for creating all the frontend workspace. Today there is an awesome frontend monorepo using Typescript, Next.js, TailwindCSS, and other useful tools, a UI library with 50+ components - basically, we build pages like building lego - many other features and 2k+ tests running in an automated CI. I'm proud to be part of this because I learned a lot and understand how a company starts from zero to first and more clients.`,
    skills: [
      'Next.js',
      'React.js',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Storybook',
      'UI library',
      'Vercel',
      'AWS',
      'NX',
      'CI',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    title: 'Professor of Frontend and Backend',
    company: {
      name: 'FIAP',
      websiteURL: 'https://fiap.com.br',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2023, 2, 1),
    endDate: new Date(2023, 3, 1),
    details: `I taught frontend from fundamentals (HTML, CSS, Sass, Javascript) until modern frameworks, techniques, and libraries (React, SWR, Forms, etc). The main focus is to start from zero and finish with many projects to be part of the portfolio.`,
    skills: [
      'Next.js',
      'React.js',
      'TailwindCSS',
      'HTML5',
      'Pure CSS',
      'Sass',
      'JavaScript',
      'Node.js',
      'Vercel',
      'Render',
      'Styled Components',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    company: {
      name: 'Boulevard',
      websiteURL: 'https://joinblvd.com',
    },
    location: 'Los Angeles, CA',
    startDate: new Date(2021, 7, 1),
    endDate: new Date(2021, 10, 1),
    details: `Boulevard has software for salons, medspas, nail salons and more. I was responsible for create and sustain the main React app, creating components and improving the design system.`,
    skills: [
      'React.js',
      'TailwindCSS',
      'Jest',
      'React Testing Library',
      'CI',
      'Elixir',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    company: {
      name: 'Origin',
      websiteURL: 'https://useorigin.com',
    },
    location: 'San Francisco, CA',
    startDate: new Date(2021, 7, 1),
    endDate: new Date(2021, 10, 1),
    details: `Origin is the all-in-one financial wellness platform. Employees can track financial milestones, take action to reach savings goals, and manage their money. Be part of the product giving feedbacks and questioning is essential and common in my workday, beyond develop I love to give insights and participate in the product sessions. On the technical side, my contribution is developing Origin's platforms using React, SWR, custom hooks, and many other technologies commonly used by the best companies. I also do code reviews, pair coding, and I lead refinements, plannings, and dailies. Other responsibilities are having a macro vision for the company ecosystem thinking in improvements for the whole company, e.g.: the creation of design system and design tokens, migration from monolith to micro frontends, architecture improvements before the company growth generates a bottleneck, improvements on hiring processes, improvements in apps security, and other things related. I have contributions in the backend discussions and also technical contributions updating the codebase whenever necessary.`,
    skills: [
      'React.js',
      'TailwindCSS',
      'Jest',
      'Enzyme',
      'React Testing Library',
      'CI',
      'Python',
      'TypeScript',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    company: {
      name: 'Itaú Unibanco',
      websiteURL: 'https://itau.com.br',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2020, 3, 1),
    details: `Itaú is the biggest bank in Latin America, with a huge amount of services to offer to clients. My main activity was to act as a cross helping several other teams with their doubts and help giving better solutions for demands. Working directly on the foundation team. I shared the experience of agile methods and created platforms to be able to use micro frontends using React, Redux, NextJS, and similar libraries. I also did inner sources to create and update Angular 8 components.`,
    skills: ['Angular', 'NX', 'CI', 'JavaScript', 'Storybook'],
  },
  {
    title: 'Senior Software Engineer / Tech Lead',
    company: {
      name: 'PagSeguro/PagBank',
      websiteURL: 'https://pagseguro.com.br',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2017, 3, 1),
    endDate: new Date(2019, 7, 1),
    details: `The mindset was to make the best product respecting the flow of value delivery. At PAGS my main actuation was frontend, but the backend was strong on the workdays. Help the team to decide the best technologies for each project, get requisites for new solutions, lead the other engineers, removing impediments, discussing with others leaders, and team the agile process to make things better and faster, I also made decisions at difficult and pressure moments. I have developed systems for the clients, using React, Nextjs, Redux, API Gateways, Java, PHP, GO, agile methods, and others tools, ideas, and libraries. Also, we used system monitors as New Relic and Splunk to know how was our system health and our microservices dependencies health. My focus was also to give the best experience to the final client. Always thinking on design system, unit, integrated, E2E and a lot of other tests, build process, reusable components, scalability, and the best performance on each render. I have worked built internal microservices with NodeJS using Typescript, Kafka, Amazon RDS, Amazon DynamoDB and other technologies.`,
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Apache Kafka',
      'SQL (Oracle)',
      'NoSQL',
      'Jest',
      'Enzyme',
    ],
  },
  {
    title: 'Mid-Level Frontend Engineer',
    company: {
      name: 'Netbiis',
      websiteURL: 'https://netbiis.com',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2015, 11, 1),
    endDate: new Date(2017, 2, 1),
    details: `Development the management system of Engel & Völkers with AngularJS. I have had direct contact with partners of different nationalities, strong English to communicate. In others projects for big players like TIM (phone company), I have had a strong usage of Angular 2 and Ionic 2 on projects for TIM (NYSE: TIMB).`,
    skills: ['Angular', 'Angular.js', 'Sass', 'JavaScript'],
  },
  {
    title: 'Mid-Level Fullstack Engineer',
    company: {
      name: 'RMC Brothers',
      websiteURL: 'https://rmcbrothers.com.br',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2014, 3, 1),
    endDate: new Date(2015, 11, 1),
    details: `Development and maintenance of many websites, systems, and apps from zero. Many projects with AngularJS and other Javascript frameworks like jQuery, Underscore, Breeze, LinqJS, and other libraries. On the backend side, I have participated in many .NET and PHP (WordPress) projects.`,
    skills: [
      'Angular.js',
      'Underscore.js',
      'JavaScript',
      'jQuery',
      'LinqJS',
      'C# (.NET)',
      'PHP',
      'Sass',
    ],
  },
  {
    title: 'Junior Fullstack Engineer',
    company: {
      name: 'Plaay',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2014, 3, 1),
    endDate: new Date(2015, 11, 1),
    details: `I have been the first employee the startup. I have created a platform of web music with an emphasis on social media, allowing the users to follow each other and see their friend's timeline songs. I have done maintenance of web services in PHP (CakePHP), including some crawlers to get data from other domains. Strong usage of social media APIs, like Facebook, Twitter, Google+, and YouTube. All the frontend application has been developed using Backbone, Underscore and other libraries.`,
    skills: [
      'Backbone.js',
      'Underscore.js',
      'JavaScript',
      'jQuery',
      'CakePHP',
      'Wordpress',
    ],
  },
  {
    title: 'Engineer Intern',
    company: {
      name: 'Agência Foster WPP',
      websiteURL: 'https://foster.com.br',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2012, 6, 1),
    endDate: new Date(2013, 6, 1),
    details: `I have worked with HTML5, CSS3, Javascript, jQuery and ASP.NET C#. I have done many newsletters, blog posts and templates for big players, like Danone, Goodyear, Bayer, ArcelorMittal, AC Camargo Cancer Center, Marfrig, and others.`,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'C# (.NET)', 'MSSQL'],
  },
  {
    title: 'Founder and Developer Freelancer',
    company: {
      name: 'Hebsix',
    },
    location: 'São Paulo, Brazil',
    startDate: new Date(2009, 0, 1),
    endDate: new Date(2012, 6, 1),
    details: `If you made it this far, thank you so much for reading part of my story. Here is the beginning of my carrier, where I had my first contact with web development. I was responsible for deal contracts for website creations, developing all the projects, delivering, and maintaining those ones.`,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP',
      'jQuery',
      'Photoshop',
      'Fireworks',
      'Flash',
    ],
  },
];

export type Education = {
  title: string;
  institution: string;
  degree: string;
  startYear: number;
  endYear: number;
};

export const educations: Education[] = [
  {
    title: 'Information Technology Management',
    institution: 'FIAP',
    degree: 'MBA',
    startYear: 2022,
    endYear: 2023,
  },
  {
    title: 'Digital Games',
    institution: 'FIAP',
    degree: "Associate's Degree",
    startYear: 2016,
    endYear: 2017,
  },
  {
    title: 'Data Processing',
    institution: 'Objetivo',
    degree: 'High School',
    startYear: 2009,
    endYear: 2011,
  },
];
