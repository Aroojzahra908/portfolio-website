import { Typewriter } from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaChevronDown } from "react-icons/fa";

const typingTexts = [
  "AI/ML Engineer",
  "Python Developer",
  "Deep Learning Specialist",
  "LLM Enthusiast"
];

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 hero-gradient relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">AI/ML Expert</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans mb-4 tracking-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient font-extrabold">Arooj Zahra</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-12">
              <Typewriter texts={typingTexts} />
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Building intelligent solutions with machine learning, deep learning, and advanced AI technologies. Passionate about solving real-world problems through innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-8 rounded-md button-hover"
              >
                View My Work
              </Button>
              
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-8 rounded-md button-hover"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-5">
              <a 
                href="https://github.com/Aroojzahra908" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-primary hover:text-primary/90 transition-all duration-300 button-hover"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com/in/arooj-zahra-b546b4239" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-primary hover:text-primary/90 transition-all duration-300 button-hover"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://leetcode.com/Arooj_zahra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-primary hover:text-primary/90 transition-all duration-300 button-hover"
              >
                <FaCode className="text-2xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI/ML Technology Visualization" 
                className="relative rounded-2xl border border-primary/20 bg-black w-full max-w-md object-cover shadow-[0_25px_50px_-12px_rgba(243,202,32,0.25)]" 
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <button 
            onClick={() => scrollToSection("about")}
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Scroll down"
          >
            <FaChevronDown className="text-3xl" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
