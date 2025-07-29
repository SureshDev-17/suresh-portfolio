import { motion } from "framer-motion";
import { useRef } from 'react';
import emailjs from "emailjs-com";
import profileImg from "../assets/profilePic.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25aakqs",  
        "template_zqioetn",  
        form.current,
        "4RBbb8vlDliLufpKf"    
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong, try again!");
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="min-h-screen bg-[#121212] text-white px-10 py-20 flex items-center justify-center"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative" style={{ width: "350px", height: "400px" }}>
            <img
              src={profileImg}
              alt="Contact"
              className="rounded-full w-full h-full border-4 border-[#1a1a1a] shadow-2xl hover:scale-105 transition duration-500 transform translate-y-6"
            />
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 rounded-md bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 rounded-md bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 h-28 rounded-md bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Say something..."
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}