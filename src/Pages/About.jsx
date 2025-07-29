// src/pages/About.jsx
import { motion } from "framer-motion";
import { useEffect,useRef } from 'react';
import ProfileImage from "../assets/profilePic.png";

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
    <div className="min-h-screen bg-[#121212] text-white px-10 py-20 flex flex-col md:flex-row items-center justify-center transition-all duration-700">
      {/* Left - Image with Glow */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
        {/* Glowing Blur Background */}
        <div
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[480px] h-[820px] rounded-3xl z-0 blur-3xl animate-pulseGlow"
          style={{ backgroundColor: "#00BFFF" }} // Accent blue glow
        ></div>

        {/* Image Container */}
        <motion.div
          ref={imgRef}
          className="overflow-hidden border-4 border-[#1a1a1a]  shadow-lg transition-transform duration-300 ease-in-out -ml-5 mr-10 -mt-10 z-10"
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
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg leading-relaxed text-primaryText">
          Hello, I'm <span className="text-accent font-semibold">Suresh</span>. I'm a passionate full-stack developer
          skilled in React, .NET, and modern web technologies. I love building
          clean, user-friendly, and impactful websites. Let's create something
          meaningful together.
        </p>
      </motion.div>
    </div>
  );
}