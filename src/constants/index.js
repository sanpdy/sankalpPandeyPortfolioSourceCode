import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  uark,
  python,
  cPlusPlus,
  scikit,
  tensorflow,
  java,
  hidalga
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
    title: "Computer Vision",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "Software Development",
  },
  {
    title: "Web Development",
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
    date: "January 2024 - May 2024",
    points: [
      "Instructed students in C++ and fundamental programming concepts.",
      "Led lab sessions for 15 students to reinforce theoretical knowledge with practical application.",
      "Graded programming assignments, offering constructive feedback to enhance students' proficiency.",
      "Conducted weekly office hours, addressing questions and challenges in foundational concepts.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "University of Arkansas",
    icon: uark,
    iconBg: "#383E56",
    date: "February 2024 - Present",
    points: [
      "Designed VR simulations in Unity3D to induce emotional responses for research purposes.",
      "Developed and deployed C# scripts for data collection from Vive Pro Eye using Wave SDK.",
      "Trained emotion recognition models using PyTorch, improving classification accuracy through advanced preprocessing techniques.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Hidalga Technologies",
    icon: hidalga,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developed and maintained backend APIs to interface with Supabase for database management and data storage.",
      "Optimized backend functionalities with PHP, enhancing performance and reliability.",
      "Administered MySQL databases, improving data structures by adding new columns and implementing efficient sorting mechanisms.",
      "Utilized Azure cloud services for scalable application hosting and resource management.",
      "Automated workflows using GitHub Actions for CI/CD, streamlining testing and deployment processes.",
    ],
  },
];


const projects = [
  {
    name: "Photon Laser Tag",
    description:
      "A laser tag software that emulates the original Photon Laser Tag. Interfaces with the original hardware.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyqt6",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/jjmen98/Software-Engineering-Spring-2024",
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
  {
    name: "VisionFlow",
    description:
      "Pipeline for reconstructing images from predicted fMRI signals using Vision Transformers (ViT) and Variational Autoencoders (VAE). Trained on the COCO dataset, achieving a 33% improvement in reconstruction accuracy with custom loss functions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "vision-transformer",
        color: "orange-text-gradient",
      },
      {
        name: "deep-learning",
        color: "green-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/sanpdy/VisionFlow",
  },
  {
    name: "San Francisco Crime Classification",
    description:
      "Machine learning pipeline for classifying crimes in San Francisco using historical police data (2003–2015). Achieved 31.5% mean accuracy and 25.1% F1 score with a CatBoost Classifier trained on feature-engineered datasets.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "catboost",
        color: "green-text-gradient",
      },
      {
        name: "data-visualization",
        color: "pink-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/sanpdy/SanFranciscoCrimeClassification",
  },
];

export { services, technologies, experiences, projects };