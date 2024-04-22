import {
  mobile,
  backend,
  creator,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  nike,
  sushi,
  natours,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Designer",
    icon: mobile,
  },
  {
    title: "Gamer",
    icon: backend,
  },
  {
    title: "F1 fan",
    icon: creator,
  },
];

const technologies = [
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

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "Technomads",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2022 - Nov 2022",
    points: [
      "Worked on backend development under a senior developer, focusing on RESTful API design and implementation.",
      "Gained experience with MongoDB and Mongoose for database operations.",
      "Collaborated with backend and Blockchain developers to create an efficient NFT management system.",
      "Developed a feature to generate an Excel sheet for game rounds containing essential NFT data.",
    ],
  },
  {
    title: "Backend Developer & Project Lead",
    company_name: "Tanthetaa",
    icon: creator,
    iconBg: "#383E53",
    date: "Dec 2022 - April 2023",
    points: [
      "Led backend development for both user-side and admin-side in collaboration with React.js developers.",
      "Implemented a comprehensive CRUD pattern in REST API, incorporating JWT authentication and MongoDB.",
      "Managed a two-level chain system for user referral codes and handled various aspects of email communication and transaction storage.",
      "Managed and led backend development, collaborating with a Flutter developer.",
      "Utilized Twilio for SMS functionality, solved request limit issues using body-parser, and incorporated socket.io for building a chat room.",
      "Developed a robust Restful API for the company's website using Express.js, MongoDB, and Multer.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "ExternalShield",
    icon: web,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Led the development of an NFT marketplace platform using Node.js, Express.js, and MongoDB.",
      "Designed a user-friendly interface for buying, selling, and trading non-fungible tokens (NFTs).",
      "Integrated IPFS for decentralized storage of NFT metadata and assets.",
      "Led the development of a dynamic e-learning platform using Node.js, Express.js, and React.js.",
      "Integrated real-time chat functionality and video conferencing for seamless collaboration between students and instructors.",
      "Implemented user authentication and role-based access control for enhanced security.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#383E53",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rashmi proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rashmi does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rashmi optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Lando Norris",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "Nike Tailwind",
    description:
      "This project offers an immersive journey into Tailwind CSS while building a captivating Nike website. Whether you're a newbie or a seasoned developer, Nike App equips you with the tools to delve deep into Tailwind CSS and its seamless integration with React.js",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/rashmipullur/nike",
    web_link: "https://nike--tailwind.vercel.app/",
  },
  {
    name: "Natours",
    description:
      "Discover Natours, an innovative tour booking app built with Node.js, Express, and MongoDB. Seamlessly manage bookings, explore interactive maps, and read user reviews. With secure authentication and Stripe integration, Natours offers a safe and convenient platform for booking your next adventure.",
    tags: [
      {
        name: "pug",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/rashmipullur/natours",
    web_link: "https://natours-uytu.onrender.com/",
  },
  {
    name: "Sushi Store",
    description:
      "🍣 Explore a dynamic sushi website featuring a delectable array of popular dishes, trendy sushi creations, and refreshing drinks. Crafted with HTML and CSS, this site boasts smooth animations that enhance the user experience, inviting visitors to savor the culinary delights in style. 🍥",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sushi,
    source_code_link: "https://github.com/rashmipullur/sushi",
    web_link: "https://sushii-store.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
