// src/pages/Projects.jsx
import { useState } from 'react';
import { motion } from "framer-motion";
import sampleImage from "../assets/profilePic.png";

const myProjects = [
  {
    id: 1,
    title: "Leftover to Blessings",
    description: "A food sharing platform to connect hotels & NGOs.",
    image: sampleImage,
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A full-stack productivity app with authentication and task tracking.",
    image: sampleImage,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern developer portfolio with smooth transitions and dark mode.",
    image: sampleImage,
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className="min-h-screen bg-[#121212] text-white px-10 py-20 overflow-hidden"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>

      <div className="flex justify-center items-center gap-8 max-w-7xl mx-auto flex-wrap">
        {myProjects.map((project, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-72 h-[460px] rounded-2xl shadow-2xl border border-gray-700 bg-[#1a1a1a] transition-all duration-500 cursor-pointer flex flex-col items-center pt-20 px-4"
              style={{
                transform: isHovered
                  ? "scale(1.05) rotateY(0deg)"
                  : `scale(0.92) rotateY(${index === 0 ? "-15deg" : index === 2 ? "15deg" : "0deg"})`,
                opacity: isHovered ? 1 : 0.6,
                zIndex: isHovered ? 2 : 1,
              }}
            >
              {/* Floating Avatar Image */}
              <div className="relative flex justify-center -mt-20 z-20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#1a1a1a] shadow-xl"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-center mt-2 px-2">
                {project.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}