// src/pages/About.jsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ProfileImage from "../assets/profilePic.png";
import { SkillsSection } from "./SkillsSection.jsx";

export const About = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${clientX * 0.02}px, ${clientY * 0.02}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#121212] text-white px-10 py-20 flex flex-col md:flex-row items-center justify-center transition-all duration-700 relative overflow-hidden">
      
      {/* Left - Image with Glow */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
        
        {/* NEW ✅: Radial Glowing Blur */}
        <div
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[600px] h-[820px] z-0 blur-[140px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle at center, #00BFFF, transparent 70%)"
          }}
        ></div>

        {/* Image Container */}
        <motion.div
          ref={imgRef}
          className="overflow-hidden border-4 border-[#1a1a1a] shadow-lg transition-transform duration-300 ease-in-out -ml-5 mr-10 mt-[-80px] z-10"
          style={{ width: "450px", height: "800px" }}
        >
          <img
            src={ProfileImage}
            alt="Suresh"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Right - About Text */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-[-10px]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold">About Me</h2>

        <p className="text-lg leading-relaxed text-primaryText">
          Hello, I'm <span className="text-accent font-semibold">Suresh</span>, a passionate and detail-oriented full-stack developer with a strong background in both frontend and backend technologies. I specialize in building modern, scalable, and responsive web applications using <strong>React</strong>, <strong>.NET Core</strong>, and other cutting-edge tools.
          <br /><br />
          I’m a fast learner and constantly stay updated with the latest tech trends, frameworks, and best practices. I take pride in writing maintainable and efficient code while collaborating effectively in team environments.
        </p>

        <SkillsSection />
      </motion.div>

      {/* Optional Bottom Line */}
      <div className="h-[1px] w-full bg-[#121212] absolute bottom-0"></div>
    </div>
  );
};
