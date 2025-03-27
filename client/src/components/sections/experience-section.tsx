import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: string;
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
    icon: "fa-brain",
    color: "bg-primary"
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
    icon: "fa-python",
    color: "bg-gray-700"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Professional experience in AI/ML and software development.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-200 transform md:-translate-x-1/2"></div>
            
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                className={`relative ${index < experiences.length - 1 ? 'mb-12' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right flex flex-col items-end">
                    <div className={`${experience.color} text-white text-sm font-medium px-3 py-1 rounded-full mb-2`}>
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{experience.title}</h3>
                    <p className="text-muted-foreground">{experience.company}</p>
                    {experience.location && (
                      <p className="text-muted-foreground text-sm">{experience.location}</p>
                    )}
                  </div>
                  
                  {/* Mobile timeline dot */}
                  <div className={`md:hidden w-10 h-10 ${experience.color} rounded-full flex items-center justify-center text-white`}>
                    <i className={`fas ${experience.icon}`}></i>
                  </div>
                  
                  {/* Desktop timeline dot (centered) */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 ${experience.color} rounded-full items-center justify-center text-white`}>
                    <i className={`fas ${experience.icon}`}></i>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                      <ul className="list-disc list-inside text-foreground space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
