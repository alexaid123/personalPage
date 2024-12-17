'use client'

import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  description: string;
  projects: string[];
  color: string;
}

export const Skills: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      name: "React",
      icon: "⚛️",
      description: "Building interactive UIs with React.",
      projects: ["Project 1", "Project 2", "Project 3"],
      color: "bg-gradient-to-r from-indigo-500 to-blue-600",
    },
    {
      name: "TypeScript",
      icon: "📄",
      description: "Strongly typed JavaScript for scalable applications.",
      projects: ["Project A", "Project B"],
      color: "bg-gradient-to-r from-green-400 to-teal-600",
    },
    {
      name: "Node.js",
      icon: "🌳",
      description: "Building backend APIs with Node.js.",
      projects: ["Backend API", "Real-Time App"],
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description: "Rapid styling with utility-first CSS framework.",
      projects: ["Landing Page", "Dashboard UI"],
      color: "bg-gradient-to-r from-pink-500 to-pink-700",
    },
    {
      name: "Vue.js",
      icon: "🔮",
      description: "Progressive JavaScript framework for building UIs.",
      projects: ["Vue Dashboard", "Vue Storefront"],
      color: "bg-gradient-to-r from-teal-400 to-green-500",
    },
    {
      name: "GraphQL",
      icon: "📊",
      description: "Optimized data fetching with GraphQL.",
      projects: ["GraphQL API", "GraphQL Query UI"],
      color: "bg-gradient-to-r from-purple-600 to-indigo-800",
    },
    {
      name: "MongoDB",
      icon: "💾",
      description: "NoSQL database for scalable data storage.",
      projects: ["MongoDB-backed App", "MongoDB Analytics"],
      color: "bg-gradient-to-r from-amber-400 to-yellow-600",
    },
    {
      name: "Express.js",
      icon: "📝",
      description: "Minimal and flexible Node.js web application framework.",
      projects: ["Express API", "Express Web App"],
      color: "bg-gradient-to-r from-blue-500 to-indigo-700",
    },
    {
      name: "Next.js",
      icon: "🌍",
      description: "React framework for building static and dynamic web apps.",
      projects: ["Next.js Portfolio", "Next.js Blog"],
      color: "bg-gradient-to-r from-indigo-600 to-blue-800",
    },
    {
      name: "Docker",
      icon: "🐋",
      description: "Containerization platform for developing, shipping, and running applications.",
      projects: ["Dockerized App", "Microservices Architecture"],
      color: "bg-gradient-to-r from-green-500 to-blue-500",
    },
    {
      name: "Kubernetes",
      icon: "⚙️",
      description: "Container orchestration for deploying scalable applications.",
      projects: ["Kubernetes Cluster", "CI/CD with Kubernetes"],
      color: "bg-gradient-to-r from-blue-700 to-indigo-900",
    },
    {
      name: "Python",
      icon: "🐍",
      description: "High-level programming language for general-purpose programming.",
      projects: ["Machine Learning App", "Python Web Scraper"],
      color: "bg-gradient-to-r from-yellow-300 to-green-400",
    },
    {
      name: "Sass",
      icon: "💅",
      description: "CSS preprocessor for better styling management.",
      projects: ["Stylish Website", "Sass-based Dashboard"],
      color: "bg-gradient-to-r from-pink-400 to-red-600",
    },
    {
      name: "Redis",
      icon: "⚡",
      description: "In-memory data structure store, used as a database and cache.",
      projects: ["Cache Management", "Redis Queue System"],
      color: "bg-gradient-to-r from-red-500 to-orange-600",
    },
    {
      name: "Jest",
      icon: "🧪",
      description: "JavaScript testing framework for unit tests.",
      projects: ["Jest Test Suite", "Unit Testing API"],
      color: "bg-gradient-to-r from-gray-500 to-gray-700",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description: "Utility-first CSS framework for rapid UI building.",
      projects: ["Tailwind App", "Tailwind Design System"],
      color: "bg-gradient-to-r from-teal-400 to-cyan-600",
    },
    {
      name: "Webpack",
      icon: "⚡",
      description: "Module bundler for JavaScript applications.",
      projects: ["Webpack Config", "Webpack Build System"],
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      name: "Firebase",
      icon: "🔥",
      description: "Backend-as-a-Service platform.",
      projects: ["Firebase Auth", "Firebase Real-Time Database"],
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      name: "AWS",
      icon: "☁️",
      description: "Cloud computing platform by Amazon.",
      projects: ["AWS EC2 App", "AWS S3 Storage Solution"],
      color: "bg-gradient-to-r from-blue-600 to-blue-800",
    },
    {
      name: "Git",
      icon: "🦸",
      description: "Version control system for code.",
      projects: ["Git Versioning", "GitHub Repository"],
      color: "bg-gradient-to-r from-emerald-600 to-teal-600",
    },
  ];

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSkill(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="mx-auto max-w-4xl py-20">
    <h3 className="text-3xl mb-8 font-bold text-white">Technologies & Skills</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl cursor-pointer ${skill.color}`}
          onClick={() => openModal(skill)}
        >
          <div className="flex items-center mb-3">
            <i className="mui-icon text-white text-3xl mr-3">{skill.icon}</i>
            <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
          </div>
          <p className="text-white mt-2">{skill.description}</p>
        </div>
      ))}
    </div>

    {modalOpen && selectedSkill && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={handleModalClick}
      >
        <div
          className={`rounded-2xl p-8 w-80 md:w-96 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl relative ${selectedSkill.color}`}
        >
          <button
            className="absolute top-2 right-2 text-2xl text-white hover:text-gray-400"
            onClick={closeModal}
          >
            ✕
          </button>
          <h2 className="text-3xl font-semibold mb-4 text-white">{selectedSkill.name}</h2>
          <p className="text-white mb-4">{selectedSkill.description}</p>
          <h4 className="text-xl font-semibold mb-2 text-white">Projects Using {selectedSkill.name}:</h4>
          <ul className="list-disc pl-5 space-y-2 text-white">
            {selectedSkill.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
  );
};
