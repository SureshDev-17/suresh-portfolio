import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaTerminal
} from 'react-icons/fa';

import {
  SiDotnet,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiFramer
} from 'react-icons/si';

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "C#", icon: <FaCode /> },
      { name: ".NET Core", icon: <SiDotnet /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS", icon: <FaTerminal /> },
    ],
  },
];

export const SkillsSection =()=> {
  return (
    <div className="px-4 mt-8">
      <h2 className="text-white text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((category, index) => (
          <div key={index} className="bg-[#1e1e1e] p-4 rounded-xl">
            <h3 className="text-cyan-400 text-lg mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#2d2d2d] px-3 py-1 rounded-full text-sm text-white">
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
