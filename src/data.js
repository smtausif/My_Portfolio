import myAvatar from './media/Myphoto.jpg'
import myResume from './media/finalResume.pdf'

export const PROFILE = {
    name: 'SM Tausif',
    title: 'CS Major · Full-stack in progress',
    blurb: 'I build clean, fast apps with just enough flair to stand out. Shipping > talking.',
    location: 'Toronto, Canada',
    avatar: myAvatar
  }
  
  export const LINKS = {
    github: 'https://github.com/smtausif',          
    linkedin: 'https://www.linkedin.com/in/s-m-tausif-960524262', 
    email: 'smtausif2000@gmail.com.com',                           
    resume: myResume,                                      
  }
  
  export const PROJECTS = [
    {
      title: '💼 TRACKwo — Freelancer Command Center',
      slug: 'trackwo',
      stack: ['Next.js 15', 'Prisma 6', 'Lucia Auth', 'Tailwind', 'PostgreSQL'],
      desc: 'The ultimate cockpit for freelancers. Manage clients, track project runway, and automate invoice generation with professional PDFs.',
      overview: 'TRACKwo was built to solve the fragmentation in freelance workflows. It stitches together CRM, time-tracking, and financial automation into one high-performance dashboard using the latest Next.js 15 Turbopack features.',
      features: [
        'Insightful dashboard with 6-month revenue charting and KPI status donuts.',
        'Full Invoice generation engine with line items, tax automation, and PDF exports via pdf-lib.',
        'Secure authentication flows (Login/Signup/Reset) powered by Lucia Auth.',
        'Real-time project tracking with CSV exports and per-project financial rollups.',
        'Responsive CRM-light system for archiving, hand-off, and client task boards.'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
      url: 'https://freelan-manager.vercel.app',
      repo: 'https://github.com/smtausif/freelan-manager' 
    },
    {
      title: '🐾 Pet Adoption Hub',
      slug: 'pet-adoption',
      stack: ['HTML5', 'Tailwind', 'Node', 'Express', 'MongoDB'],
      desc: 'Browse pets, book adoption appointments with unique codes, and manage them in an admin panel with secure auth and email checks.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1400&auto=format&fit=crop',
      url: 'https://pet-adoption-qp10.onrender.com',
      repo: 'https://github.com/smtausif/pet_adoption' 
    },
    {
      title: 'Sprite Flight (Unity)',
      slug: 'sprite-flight',
      stack: ['Unity', 'C#'],
      desc: 'Fast arcade dodger: weave a tiny plane through stars and meteors with hit-pause juice, score multipliers, and escalating speed ramps.',
      image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1400&auto=format&fit=crop',
      repo: 'https://github.com/smtausif/spriteflight' 
    },
    {
      title: 'Mental Wellness Chatbot',
      slug: 'wellness-bot',
      stack: ['React', 'Node', 'Express', 'Ollama (local LLM)'],
      desc: 'Private, on-device mental-wellness assistant with daily check-ins, coping tips, and a calming UI — no cloud account needed.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
      url: 'https://mental-wellness-chatbot.onrender.com',
      repo: 'https://github.com/smtausif/mental-wellness-chatbot' 
    },
    {
      title: '⚔️ RPG Teams and Guilds',
      slug: 'rpg-teams',
      stack: ['C++17', 'CLI', 'Rule of 5', 'Templates'],
      desc: 'Teams/Guilds sim with a combat engine (Berserk, Heal), dynamic rosters, and deterministic logs. Shows templates, polymorphism, and full Rule of 5.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop', // NEW LINK FIXED
      repo: 'https://github.com/smtausif/rpg-teams-guilds'
    },
    {
      title: '📖 Dictionary Application',
      slug: 'dictionary-app',
      stack: ['C++17', 'CSV', 'Rule of 5'],
      desc: 'CLI dictionary that loads CSV data, searches words with multiple senses, and includes performance timing. Safe dynamic memory via Rule of 5.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1400&auto=format&fit=crop',
      repo: 'https://github.com/smtausif/dictionary-application'
    }
  ]

export const EXPERIENCES = [
  {
    title: "Full Stack Developer - CO-op",
    company: "SkillShift+",
    location: "Ontario, Canada",
    duration: "April 2025 - August 2025",
    desc: "Spearheading the architecture and commercial launch of a comprehensive educational portal featuring 35+ structured programs and AI-driven career readiness tools.",
    metrics: [
      "Architected a robust B2B subscription infrastructure using Stripe and Supabase, implementing multi-tenant logic to support tiered access for 10 to 100+ institutional seats per client.",
      "Engineered an automated 'Certificate Vault' and an AI-powered 'Interview Coach' module, resulting in a 35% increase in student engagement and course completion rates.",
      "Optimized complex PostgreSQL relational schemas via Prisma, implementing indexing and query caching that reduced database latency by 40% for high-concurrency API routes.",
      "Integrated Single Sign-On (SSO) and custom entitlement logic, allowing institutional clients to manage employee access and progress tracking seamlessly through a dedicated admin dashboard.",
      "Refined frontend architecture using Next.js App Router and Tailwind CSS to achieve a clean, professional UI/UX comparable to industry leaders like Coursera, prioritizing high-speed content delivery.",
      "Managed the full-stack deployment pipeline on Vercel, ensuring 99.9% uptime and implementing secure environment variable management for production-scale reliability."
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Supabase", "Stripe", "Vercel", "Tailwind CSS"]
  },
  {
    title: "Product Developer - C0-op",
    company: "HuntigoX",
    location: "Canada",
    duration: "Jan 2026 - April 2026",
    desc: "Driving the development and market-entry strategy for a high-impact startup platform connecting students with real-world project opportunities and employers.",
    metrics: [
      "Developed a high-performance, mobile-first MVP using React and Node.js, ensuring 100% responsiveness and cross-browser compatibility across mobile, tablet, and desktop environments.",
      "Led the end-to-end UI/UX design process in Figma, creating a modern design system that improved user retention rates by 25% during initial alpha testing phases.",
      "Integrated complex RESTful APIs to synchronize real-time data flow between the frontend application and backend Node.js microservices, handling sensitive user data with industry-standard encryption.",
      "Executed a multi-channel digital outreach and storytelling campaign on LinkedIn and Instagram, scaling the platform's early-access waitlist to over 500+ verified student registrations.",
      "Implemented advanced frontend state management and custom hooks to streamline user workflows, reducing the average time-to-action for new users by 15%.",
      "Collaborated in a fast-paced remote environment, leveraging Agile methodologies to iterate on product features based on direct user feedback and market research."
    ],
    stack: ["React", "Node.js", "Figma", "REST APIs", "Tailwind CSS", "Git", "State Management"]
  }
]