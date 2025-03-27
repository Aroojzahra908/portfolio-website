import { motion } from "framer-motion";
import { SkillProgress } from "@/components/skill-progress";
import { technicalSkills, softSkills } from "@/lib/skills-data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Diverse technical skills across machine learning, web development, and data science.</p>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            
            {/* Skill Progress Bars */}
            {technicalSkills.map((skill, index) => (
              <SkillProgress
                key={`tech-skill-${index}`}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
            
            <h3 className="text-xl font-semibold mb-6 mt-10 text-foreground">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span 
                  key={`soft-skill-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Additional Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-primary mb-3">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">React.js</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-primary mb-3">Backend Development</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Flask</span>
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">RESTful APIs</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-primary mb-3">Mobile Development</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">React Native</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-primary mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">English</span>
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Urdu</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-[#282c34] p-4 rounded-lg font-mono text-sm overflow-x-auto text-[#e6e6e6]">
                <pre>
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
