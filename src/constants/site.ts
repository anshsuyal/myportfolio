export const about = {
  intro:
    "Aspiring Software Engineer with a strong interest in Full Stack Development. Currently focused on mastering JavaScript, React.js, Node.js, Express.js, and MongoDB while building real-world projects that emphasize performance, scalability, and clean architecture.",
  goals:
    "I enjoy turning practical product ideas into clean, scalable interfaces and production-ready backends. My current focus is React, Node.js, Express.js, MongoDB, and cloud deployment workflows.",
  highlights: [
    "MERN stack development",
    "Real-time apps with Socket.io",
    "JWT auth & REST APIs",
  ],
} as const;

export const SITE = {
  name: "Ansh Suyal",
  role: "Full Stack Developer",
  tagline:
    "I build scalable MERN stack applications with secure APIs, responsive interfaces, and real-time product experiences.",
  email: "sharmaansh9386@gmail.com",
  phone: "+91-9467497707",
  location: "Dehradun, Uttarakhand",
  resumeUrl: "/Ansh_Sharma_Resume_1.pdf",
  formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "",
  social: {
    github: "https://github.com/anshsuyal",
    linkedin: "https://www.linkedin.com/in/ansh-suyal",
    twitter: "https://twitter.com",
  },
} as const;

export type ProjectCategory = "all" | "web" | "fullstack" | "realtime";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  github: string;
  live: string;
  category: Exclude<ProjectCategory, "all">;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Real-Time Chat Application",
    description:
      "A production-ready chat platform with instant messaging, JWT authentication, image sharing through Cloudinary, and Render deployment with MongoDB Atlas.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80",
    stack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Cloudinary",
    ],
    github: "https://github.com/anshsuyal/ChatApplication.git",
    live: "#contact",
    category: "realtime",
  },
  {
    id: "2",
    title: "Data Structures & Algorithms",
    description:
      "A comprehensive repository of optimized Data Structures and Algorithms solutions in C++, covering beginner to advanced topics for coding interview preparation and competitive programming.",
    image:
      "https://i.pinimg.com/736x/2f/16/24/2f16241e1a821f29a47302f3e6f8303d.jpg",
    stack: [
      "C++",
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "LeetCode",
    ],
    github: "https://github.com/anshsuyal/Datastructureandalgorithm",
    live: "https://github.com/anshsuyal/Datastructureandalgorithm",
    category: "DSA",
  },
  {
    id: "3",
    title: "AI Customer Support Chatbot",
    description:
      "A production-ready AI-powered customer support platform with an embeddable chat widget, secure JWT authentication, MongoDB chat storage, Cloudinary media uploads, and a modern dashboard for businesses.",
    image:
      "https://i.pinimg.com/736x/8c/18/ac/8c18ac254bdec9cfeb17ef8b6c48a198.jpg",
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/anshsuyal/Ai-Assistanent.git",
    live: "#experience",
    category: "AI",
  },
];

export const skillCategories = [
  {
    key: "languages",
    label: "Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "C++ / TypeScript ", level: 78 },
      { name: "Python / SQL", level: 76 },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React.js / Next.js", level: 88 },
      { name: "Redux Toolkit", level: 84 },
      { name: "Tailwind CSS / HTML / CSS", level: 90 },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { name: "Node.js / Express.js", level: 86 },
      { name: "RESTful APIs", level: 88 },
      { name: "JWT Authentication", level: 84 },
    ],
  },
  {
    key: "database",
    label: "Database & Cloud",
    items: [
      { name: "MongoDB / Atlas", level: 86 },
      { name: "MySQL", level: 74 },
      { name: "Render / Cloudinary", level: 80 },
    ],
  },
  {
    key: "tools",
    label: "Tools & Concepts",
    items: [
      { name: "Git / GitHub / Postman", level: 86 },
      { name: "CRUD / MVC Pattern", level: 84 },
      { name: "Agile / Web Security", level: 78 },
    ],
  },
] as const;

export const experience = [
  {
    id: "e1",
    title: "Web Developer - IT Cell Intern",
    org: "NSS (National Service Scheme)",
    period: "Nov 2023 - Nov 2024",
    description:
      "Managed and maintained the official NSS website in Dehradun, ensuring reliable uptime, accurate content updates, and smoother navigation for 5,000+ monthly visitors.",
    achievements: [
      "Developed event and announcement pages, reducing content turnaround time by 40%",
      "Resolved 20+ technical bugs and improved usability through regular reviews",
      "Improved average session duration and engagement by 25% through better content layout",
    ],
  },
  {
    id: "e2",
    title: "Bachelor of Computer Applications",
    org: "Graphic Era Hill University",
    period: "Jun 2023 - Jun 2026",
    description:
      "Pursuing BCA with a strong foundation in programming, databases, software engineering, and full-stack web development.",
    achievements: [
      "Current CGPA: 8.11 / 10",
      "Coursework aligned with web development and data fundamentals",
    ],
  },
  {
    id: "e3",
    title: "IT Trainee",
    org: "Berg Technologies Pvt. Ltd.",
    period: "Apr 2026 - Jun 2026",
    description:
      "Worked on data management, website quality assurance, and business operations while gaining hands-on experience in production IT workflows.",
    achievements: [
      "Performed data validation and management tasks",
      "Conducted website QV testing and bug reporting",
      "Collaborated with cross-functional teams",
      "Improved understanding of IT operations and QV processes",
    ],
  },
] as const;

export const certifications = [
  {
    name: "Ethical Hacking & Bug Bounty",
    issuer: "Indian Cyber Clubs",
    year: "2024",
  },
  { name: "C++ Programming", issuer: "SWAYAM (NPTEL)", year: "2024" },
] as const;

export const services = [
  {
    title: "MERN Web Apps",
    description:
      "Full-stack product builds with React, Node.js, Express.js, MongoDB, routing, auth, and deployment.",
    icon: "stack" as const,
  },
  {
    title: "Responsive UI Development",
    description:
      "Clean, mobile-first interfaces with Tailwind CSS, reusable components, and polished interaction states.",
    icon: "palette" as const,
  },
  {
    title: "API Development",
    description:
      "RESTful APIs with secure JWT authentication, CRUD workflows, validation, and maintainable MVC structure.",
    icon: "api" as const,
  },
  {
    title: "Real-Time Features",
    description:
      "Socket.io messaging, notifications, live interactions, and media sharing flows for modern web apps.",
    icon: "ai" as const,
  },
  {
    title: "Website Maintenance",
    description:
      "Bug fixes, content updates, performance checks, Git-based workflows, and practical production support.",
    icon: "code" as const,
  },
] as const;

export const testimonials = [
  {
    id: "t1",
    quote:
      "Maintained 100% uptime for an active public website serving 5,000+ monthly visitors.",
    name: "NSS Website",
    role: "Reliability and content operations",
  },
  {
    id: "t2",
    quote:
      "Reduced content turnaround time by 40% by developing reusable event and announcement pages.",
    name: "IT Cell Internship",
    role: "Frontend delivery and team collaboration",
  },
  {
    id: "t3",
    quote:
      "Built real-time product features with Socket.io, JWT auth, MongoDB Atlas, and Cloudinary media uploads.",
    name: "MERN Projects",
    role: "Full-stack engineering",
  },
] as const;

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
