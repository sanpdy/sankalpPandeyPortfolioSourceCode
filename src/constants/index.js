import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  uark,
  threejs,
  python,
  cPlusPlus,
  scikit,
  tensorflow,
  java
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
    title: "Software Development",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "Web Development",
  },
  {
    title: "Teaching Assistant",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cPlusPlus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Scikit-Learn",
    icon: scikit,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },

];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "University of Arkansas",
    icon: uark,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Instruct students in C++ and fundamental programming concepts.",
      "Lead lab sessions for 15 students to reinforce theoretical knowledge with practical application",
      "Grade programming assignments, offering constructive feedback to enhance students' proficiency",
      "Conduct weekly office hours, aiding address questions and challenges in foundational concepts",
    ],
  },

];

const projects = [
  {
    name: "Maze Solver",
    description:
      "A user-friendly maze creation/solver tool with PyGame, implementing A* Search for optimal pathfinding. Visualized the process with color-coded pathways, showcasing proficiency in Python and GUI development.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "pink-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/sanpdy/mazeSolver/",
  },
  {
    name: "Banana Quest",
    description:
      "A real-time browser multiplayer game with Python back-end and TypeScript front-end. Implemented asynchronous communication, designed responsive front-end with TypeScript, and integrated HTTP POST requests for synchronized player movements, interactions, and chat functionality.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/sanpdy/paradigmsProj4/",
  },

  {
    name: "Shakespearean Text Generator",
    description:
      "Text generator using TensorFlow's LSTM model, trained on Shakespearean data with RMSprop optimizer for four epochs. Features temperature-based sampling for controlled randomness in versatile text generation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/sanpdy/ShakespeareBot/",
  },
];

export { services, technologies, experiences, projects };