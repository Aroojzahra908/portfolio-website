import { motion } from "framer-motion";
import { SkillProgress } from "@/components/skill-progress";
import { technicalSkills, softSkills } from "@/lib/skills-data";
import { TechBadge } from "@/components/tech-badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
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
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-white">
              Technical <span className="text-gradient">Proficiency</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Diverse technical skills across machine learning, web development, and data science.
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Technical Skills */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 h-full">
              <h3 className="text-2xl font-semibold mb-8 text-white inline-flex items-center">
                <div className="w-2 h-8 bg-primary mr-3 rounded-full"></div>
                Technical Skills
              </h3>
              
              {/* Skill Progress Bars */}
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillProgress
                    key={`tech-skill-${index}`}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 mt-12 text-white inline-flex items-center">
                <div className="w-2 h-8 bg-primary mr-3 rounded-full"></div>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span 
                    key={`soft-skill-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                    className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Additional Skills */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 h-full">
              <h3 className="text-2xl font-semibold mb-8 text-white inline-flex items-center">
                <div className="w-2 h-8 bg-primary mr-3 rounded-full"></div>
                Development Skills
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-black/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors card-hover">
                  <h4 className="font-semibold text-primary mb-4 text-lg">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge technology="HTML" />
                    <TechBadge technology="CSS" />
                    <TechBadge technology="JavaScript" />
                    <TechBadge technology="React.js" />
                    <TechBadge technology="Next.js" />
                    <TechBadge technology="Tailwind CSS" />
                  </div>
                </div>
                
                <div className="bg-black/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors card-hover">
                  <h4 className="font-semibold text-primary mb-4 text-lg">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge technology="Python" />
                    <TechBadge technology="FastAPI" />
                    <TechBadge technology="Flask" />
                    <TechBadge technology="RESTful APIs" />
                  </div>
                </div>
                
                <div className="bg-black/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors card-hover">
                  <h4 className="font-semibold text-primary mb-4 text-lg">AI & Machine Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge technology="TensorFlow" />
                    <TechBadge technology="PyTorch" />
                    <TechBadge technology="LLMs" />
                    <TechBadge technology="GANs" />
                    <TechBadge technology="Computer Vision" />
                    <TechBadge technology="NLP" />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-[#1a1a1a] p-5 rounded-xl border border-gray-800 overflow-hidden shadow-[0_5px_15px_rgba(243,202,32,0.1)]">
                <div className="flex items-center gap-2 border-b border-gray-800 pb-3 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-xs text-gray-500">model_builder.py</p>
                </div>
                
                <pre className="font-mono text-sm overflow-x-auto text-gray-300">
                  <code>
{`# Example of my Python code style
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, MaxPooling2D, Flatten

def build_cnn_model(input_shape, num_classes):
    model = Sequential([
        Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        MaxPooling2D((2, 2)),
        Conv2D(64, (3, 3), activation='relu'),
        MaxPooling2D((2, 2)),
        Flatten(),
        Dense(128, activation='relu'),
        Dense(num_classes, activation='softmax')
    ])
    return model`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
