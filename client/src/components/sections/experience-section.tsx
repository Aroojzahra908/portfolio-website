import { motion } from "framer-motion";
import { FaBrain, FaPython } from "react-icons/fa";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "AI and ML Intern",
    company: "Pak-China Joint Lab for AI and Smart Agriculture (CAS Department)",
    location: "University of Agriculture Faisalabad",
    period: "June 2024 - Present",
    description: [
      "Developed AI/ML models, including training, fine-tuning, and deployment.",
      "Built deep learning models for cloud removal in satellite images using CUDA and cuDNN on local GPUs.",
      "Worked with Large Language Models (LLMs) on server machines for AI applications."
    ],
    icon: <FaBrain className="w-5 h-5" />,
    color: "from-primary to-primary/80"
  },
  {
    title: "Python Development Intern",
    company: "CodeSoft (Remote)",
    location: "",
    period: "1 Month",
    description: [
      "Developed Python-based projects such as a calculator, to-do app, and password generator.",
      "Enhanced Python programming skills and gained hands-on experience in software development."
    ],
    icon: <FaPython className="w-5 h-5" />,
    color: "from-gray-700 to-gray-600"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Career
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-white">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional experience in AI/ML and software development.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Modern vertical timeline with cards */}
          <div className="relative space-y-16">
            {/* Timeline line */}
            <div className="absolute left-16 md:left-1/2 top-0 h-full w-0.5 bg-gray-800 md:-translate-x-px"></div>
            
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Date badge - on left for desktop, on top for mobile */}
                <div className="md:absolute md:right-full md:mr-10 md:mt-1.5 md:text-right mb-4 md:mb-0 md:w-72">
                  <div className="inline-flex items-center md:justify-end">
                    <div className="px-4 py-2 bg-gray-900 text-primary font-semibold rounded-lg border border-primary/20">
                      {experience.period}
                    </div>
                  </div>
                </div>
                
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-1.5 md:mt-0">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center`}>
                    {experience.icon}
                  </div>
                </div>
                
                {/* Content card */}
                <div className="ml-16 md:ml-0 md:pl-16">
                  <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-primary/20 transition-colors card-hover">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                        {experience.location && (
                          <p className="text-gray-400 text-sm">{experience.location}</p>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-gray-300">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Add more experience entry point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-1.5 md:mt-0">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border-2 border-dashed border-primary/40">
                  <span className="text-primary text-xl">+</span>
                </div>
              </div>
              
              <div className="ml-16 md:ml-0 md:pl-16">
                <div className="bg-gray-900/30 p-6 rounded-xl border border-dashed border-gray-700 text-center">
                  <p className="text-gray-400 italic">Future experiences to be added...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
