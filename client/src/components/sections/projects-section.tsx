import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectModal } from "@/components/project-modal";
import { projectData } from "@/lib/project-data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TechBadge } from "@/components/tech-badge";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const openProjectModal = (projectId: string) => {
    setSelectedProject(projectId);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing my work in AI/ML and software development.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <span className={`${project.tagColor} text-xs px-2 py-1 rounded-full`}>{project.tag}</span>
                </div>
                <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <TechBadge key={`${project.id}-tech-${techIndex}`} technology={tech} />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => openProjectModal(project.id)}
                    className="text-primary hover:text-primary/80 font-medium text-sm"
                  >
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          projectId={selectedProject}
          onClose={closeProjectModal}
        />
      )}
    </section>
  );
}
