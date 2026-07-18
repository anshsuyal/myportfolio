import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Real-Time Chat Application",
    shortDescription:
      "A production-ready chat platform with instant messaging and JWT authentication.",
    fullDescription:
      "A full-featured real-time chat application built for seamless communication. It supports instant messaging, user authentication, and secure image sharing. The application ensures low-latency updates through WebSockets and is deployed on Render with MongoDB Atlas.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80",
    stack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    features: [
      "Real-time messaging",
      "JWT Authentication",
      "Image sharing",
      "Online status indicators",
      "Responsive design",
    ],
    challenges: [
      "Handling real-time state synchronization across multiple connected clients.",
      "Optimizing image uploads for fast delivery.",
    ],
    solutions: [
      "Implemented Socket.io rooms to broadcast messages only to relevant participants.",
      "Integrated Cloudinary for optimized image storage and delivery.",
    ],
    category: ["realtime", "fullstack", "featured"],
    featured: true,
    links: {
      github: "https://github.com/anshsuyal/ChatApplication",
      live: "#",
    },
  },
  {
    id: "2",
    title: "Jarvis AI Assistant",
    shortDescription:
      "A modern AI-powered virtual assistant built with React, Node js , Gemini API , Express js , Mongo Db , JWT web token , Authentication etc",
    fullDescription:
      "Jarvis is a responsive AI assistant web application that provides an interactive chat interface for communicating with AI models. It features a modern UI, responsive design, clean component architecture, and an intuitive user experience. The project focuses on building a professional AI assistant frontend with reusable React components and scalable code organization.",

    image:
      "https://i.pinimg.com/1200x/0b/10/ae/0b10aed237a4092f5b6ebf89bccdffbb.jpg",
    stack: ["React.js", "JavaScript (ES6+)", "CSS3", "Vite"],

    features: [
      "Modern AI chat interface",
      "Responsive design for desktop and mobile",
      "Reusable React components",
      "Clean and intuitive UI",
      "Fast performance with Vite",
      "Well-structured project architecture",
    ],

    challenges: [
      "Designing a responsive and visually appealing chat interface.",
      "Managing component state efficiently while keeping the codebase maintainable.",
    ],

    solutions: [
      "Built reusable React components with modular CSS.",
      "Used React Hooks for state management and organized the project into scalable folders.",
    ],

    category: ["frontend", "AI", "backend"],

    featured: true,

    links: {
      github: "https://github.com/anshsuyal/jarvis",
      live: "https://github.com/anshsuyal/jarvis",
    },
  },
  {
    id: "3",
    title: "CareerConnect",
    shortDescription:
      "A full-stack job portal connecting job seekers with employers.",

    fullDescription:
      "CareerConnect is a modern full-stack job portal built using the MERN stack. It enables job seekers to explore and apply for jobs while allowing recruiters to post job openings and manage applications. The platform includes secure authentication, responsive UI, role-based access, and a scalable backend architecture.",

    image:
      "https://i.pinimg.com/736x/da/39/41/da39411a2fd1e232e333745eb9350f55.jpg", // Replace with your project screenshot

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Axios",
    ],

    features: [
      "User authentication with JWT",
      "Role-based access (Job Seeker & Recruiter)",
      "Create, update, and delete job postings",
      "Apply for jobs",
      "Responsive design",
      "Protected routes",
      "RESTful API integration",
      "Dashboard for recruiters",
    ],

    challenges: [
      "Implementing secure authentication and authorization.",
      "Managing role-based permissions.",
      "Designing scalable API endpoints.",
      "Keeping frontend and backend state synchronized.",
    ],

    solutions: [
      "Implemented JWT authentication with protected routes.",
      "Used middleware for role-based authorization.",
      "Designed REST APIs following MVC architecture.",
      "Managed asynchronous data using Axios and React state.",
    ],

    category: ["fullstack", "featured"],

    featured: true,

    links: {
      github: "https://github.com/anshsuyal/careerconnect",
      live: "https://careerconnect-git-main-anshsuyals-projects.vercel.app/",
    },
  },
  {
    id: "4",
    title: "Portfolio Website",
    shortDescription: "A modern, interactive developer portfolio.",
    fullDescription:
      "A highly interactive and visually engaging personal portfolio website built to showcase my projects and skills. It features custom animations, glassmorphism design, and a responsive layout tailored for a premium user experience.",
    image:
      "https://i.pinimg.com/1200x/39/22/86/3922861c315e781d32f1e725099fe0ac.jpg",
    stack: ["React.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Smooth scroll animations",
      "Glassmorphism UI",
      "Dark mode design",
      "Fully responsive",
      "SEO optimized",
    ],
    challenges: ["Ensuring smooth animations on lower-end devices."],
    solutions: [
      "Utilized Framer Motion with hardware acceleration and implemented a reduced motion hook for accessibility.",
    ],
    category: ["frontend", "featured"],
    featured: true,
    links: {
      github: "https://github.com/anshsuyal/myportfolio.git",
      live: "https://myportfolio-lemon-two-89.vercel.app/#hero",
    },
  },
  {
    id: "4",
    title: "TaxiWeb",
    shortDescription:
      "A modern taxi booking web application with responsive UI and seamless booking experience.",
    fullDescription:
      "TaxiWeb is a responsive taxi booking platform designed to provide users with a smooth and intuitive cab reservation experience. The application features a modern UI, multiple service sections, responsive layouts, and optimized performance to deliver a professional transportation booking interface.",

    image:
      "https://i.pinimg.com/736x/56/23/f8/5623f821e289f880e000429475abd36d.jpg",

    stack: ["React.js", "Tailwind CSS", "JavaScript", "React Router", "Vite"],

    features: [
      "Modern and responsive landing page",
      "Taxi booking interface",
      "Service showcase section",
      "Interactive navigation",
      "Mobile-first responsive design",
      "Fast loading performance",
      "Clean and reusable component architecture",
      "Call-to-action booking sections",
    ],

    challenges: [
      "Creating a fully responsive layout across different screen sizes.",
      "Building reusable React components for better maintainability.",
      "Optimizing page performance while maintaining an attractive UI.",
    ],

    solutions: [
      "Used Tailwind CSS utility classes for responsive design.",
      "Organized the project into reusable React components.",
      "Optimized assets and component rendering for faster performance.",
    ],

    category: ["frontend", "featured"],

    featured: true,

    links: {
      github: "https://github.com/anshsuyal/Taxiweb.git",
      live: "https://taxiweb-blond.vercel.app/",
    },
  },
  {
  id: "5",

  title: "AI Customer Support Chatbot",

  shortDescription:
    "A production-ready AI chatbot SaaS with an embeddable chat widget for websites.",

  fullDescription:
    "A full-stack AI customer support chatbot built with Next.js, MongoDB, and Scalekit. It allows businesses to embed an AI chatbot on any website, manage organizations, store conversations securely, and customize chatbot settings through a modern dashboard.",

  image: "https://i.pinimg.com/736x/f0/b7/ec/f0b7ec3524b19ef0b3ff7ffcc325ece1.jpg",

  stack: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Scalekit",
    "AI",
    "Vercel"
  ],

  features: [
    "AI-powered customer support",
    "Embeddable chat widget",
    "Multi-tenant SaaS architecture",
    "Scalekit authentication",
    "MongoDB chat storage",
    "Responsive dashboard",
    "Vercel deployment"
  ],

  challenges: [
    "Building a scalable multi-tenant architecture.",
    "Creating a reusable embeddable chatbot.",
    "Managing secure authentication and chat data."
  ],

  solutions: [
    "Implemented Scalekit organizations.",
    "Built a lightweight embeddable widget.",
    "Stored chats securely in MongoDB."
  ],

  category: ["fullstack", "ai", "featured"],

  featured: true,

  links: {
    github: "https://github.com/anshsuyal/SupportChatAi.git",
    live: "https://github.com/anshsuyal/SupportChatAi.git"
  }
}
];
