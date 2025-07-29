import { motion } from "framer-motion"

export const Loader = () => {  
  return (
    <motion.div className="fixed top-0 left-0 h-screen w-screen bg-black text-white flex justify-center items-center text-4xl font-bold z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 1 }} >

         <div className="backdrop-blur-md">Loading...</div>
      </motion.div>
  )
}