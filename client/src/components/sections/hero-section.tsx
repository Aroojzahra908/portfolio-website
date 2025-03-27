import { Typewriter } from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

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
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary">Arooj Zahra</span>
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              <Typewriter texts={typingTexts} />
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Building intelligent solutions with machine learning, deep learning, and advanced AI technologies. Passionate about solving real-world problems through innovation.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection("waitlist")}
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-lg transition-all"
              >
                Join Waitlist
              </Button>
            </div>
            <div className="flex mt-8 space-x-4">
              <a 
                href="https://github.com/Aroojzahra908" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com/in/arooj-zahra-b546b4239" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://leetcode.com/Arooj_zahra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FaCode className="text-2xl" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
              alt="AI/ML Technology Visualization" 
              className="rounded-xl shadow-2xl w-full max-w-md" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
