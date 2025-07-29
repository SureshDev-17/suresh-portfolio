// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Home = () => {
  return (
    <div className="bg-[#121212] min-h-screen w-full text-white flex flex-col justify-between px-10 py-6 font-sans relative overflow-hidden">
      
      {/* Glowing Background Behind Name */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] blur-2xl rounded-full bg-accent opacity-40 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Top Nav */}
      <div className="flex justify-between items-center z-10">
        <div className="space-x-8 text-sm uppercase tracking-widest">
        </div>
      </div>

      {/* Center Name */}
      <div className="flex flex-col items-center text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-sm mb-1 text-gray-400">
          I am
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="text-6xl font-bold text-white">
          SURESH
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }} 
          className="text-xs mt-2 text-gray-400">
          A Passionate Full Stack Developer
        </motion.p>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-end z-10">
        {/* Social Icons */}
        <div className="flex flex-col space-y-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
          <a href="mailto:youremail@gmail.com"><FaEnvelope size={20} /></a>
        </div>

        {/* Scroll */}
        <div className="rotate-90 text-xs text-gray-500 tracking-widest">SCROLL</div>
      </div>
    </div>
  );
}