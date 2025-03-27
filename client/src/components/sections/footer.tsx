import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-16 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <a href="#" className="text-3xl font-bold font-sans text-white inline-flex items-center">
              Arooj<span className="text-primary font-bold">.</span>AI
            </a>
            <p className="text-gray-400 mt-4 max-w-md">
              Building intelligent solutions with AI/ML. Specialized in deep learning, 
              computer vision, NLP, and MLOps.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/Aroojzahra908" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors button-hover"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/arooj-zahra-b546b4239" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors button-hover"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a 
                href="https://leetcode.com/Arooj_zahra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors button-hover"
              >
                <FaCode className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1"
          >
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-3">
              <a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-gray-400 hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
              <a href="#waitlist" className="text-gray-400 hover:text-primary transition-colors">Waitlist</a>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1"
          >
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400">Kaleem Shaheed Colony no 1</p>
                <p className="text-gray-400">Faisalabad, Razabad</p>
              </div>
              <p className="text-gray-400">
                <a href="mailto:zahraarooj373@gmail.com" className="hover:text-primary transition-colors">
                  zahraarooj373@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a href="tel:03431313797" className="hover:text-primary transition-colors">
                  03431313797
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Arooj Zahra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
