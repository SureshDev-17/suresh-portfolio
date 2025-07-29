// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
  return (
    <div className="bg-[#121212] min-h-screen w-full text-white flex flex-col justify-between px-10 py-6 font-sans relative overflow-hidden">

      {/* Top Nav */}
      <div className="flex justify-between items-center z-10">
        <div className="space-x-8 text-sm uppercase tracking-widest">
          {/* Optional nav links */}
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-sm mb-1 text-gray-400"
        >
          I am
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="text-6xl font-bold text-white"
        >
          SURESH
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }} 
          className="text-xs mt-2 text-accent"
        >
          <Typewriter
            words={[
              'A Passionate Full Stack Developer',
              'React | .NET | MySQL Enthusiast',
              'Building Ideas into Reality',
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>
      </div>

      {/* Bottom Row */}
       <div className="relative flex justify-between items-end z-10">
      {/* Social Icons */}
      <div className="flex flex-col space-y-4  mb-[140px]">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
        <a href="https://github.com/SureshDev-17" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
        <a href="mailto:sureshsd1708@gmail.com" target="_blank" rel="noopener noreferrer">
  <FaEnvelope size={20} />
</a>

      </div>
    

        {/* Vertical Name Text */}
            <div className="absolute right-[-30px] bottom-[150px] rotate-90 text-xs text-gray-500 tracking-widest z-50">
                  SURESH
            </div>

      </div>
    </div>
  );
};
