import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold font-sans text-white">
              Arooj<span className="text-primary">.</span>AI
            </a>
            <p className="text-gray-400 mt-2">Building intelligent solutions with AI/ML</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#waitlist" className="text-gray-400 hover:text-white transition-colors">Waitlist</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Aroojzahra908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com/in/arooj-zahra-b546b4239" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a 
              href="https://leetcode.com/Arooj_zahra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaCode className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Arooj Zahra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
