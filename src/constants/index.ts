import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,



  threejs, khushiinfra, streamverse,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - May 2023",
    points: [
      "Building and optimizing user interfaces with React.js for seamless user experiences.",
      "Collaborating with UI/UX designers to implement visually appealing and functional web applications.",
      "Ensuring accessibility and responsiveness across multiple devices and screen sizes.",
      "Reviewing pull requests and maintaining clean, scalable code.",
    ],
  },
  {
    title: "Mobile App Developer",
    companyName: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Developing high-performance mobile applications using React Native.",
      "Integrating APIs and third-party services for seamless functionality.",
      "Testing and debugging applications to improve performance and user engagement.",
      "Working closely with product managers to implement new features and improvements.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Creating and maintaining web applications with modern JavaScript frameworks.",
      "Optimizing website performance for speed and scalability.",
      "Ensuring security best practices in web applications.",
      "Implementing backend services and database management for full-stack solutions.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing end-to-end web applications with frontend and backend technologies.",
      "Building scalable server-side logic using Node.js and databases like MongoDB.",
      "Leading development teams and mentoring junior developers.",
      "Enhancing system architecture for better efficiency and maintainability.",
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "streamverse",
    description:
      "A web-basedplatform designed for movie enthusiasts, offering an extensive collection, detailed information, and a seamless viewing experience in high quality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: streamverse,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Khushi Infra Webpage",
    description:
      "A web-based platform for Khushi Infrastructure Private Limited, showcasing their projects, services, and expertise with a modern design, seamless navigation, and optimized performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: khushiinfra,
    sourceCodeLink: "https://github.com/",
  },
  /*{
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },*/
];

export { services, technologies, experiences, testimonials, projects };
