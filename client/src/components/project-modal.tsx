import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "@/lib/project-data";
import { TechBadge } from "@/components/tech-badge";
import { FaExternalLinkAlt, FaGithub, FaFilePdf, FaBrain, FaRss } from "react-icons/fa";

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectData.find(p => p.id === projectId);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Close when clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore body scroll
      document.body.style.overflow = "auto";
    };
  }, [onClose]);
  
  if (!project) return null;
  
  const getLinkIcon = (key: string) => {
    switch (key) {
      case 'demo': return <FaExternalLinkAlt className="mr-2" />;
      case 'github': return <FaGithub className="mr-2" />;
      case 'paper': return <FaFilePdf className="mr-2" />;
      case 'model': return <FaBrain className="mr-2" />;
      case 'blog': return <FaRss className="mr-2" />;
      default: return <FaExternalLinkAlt className="mr-2" />;
    }
  };
  
  const getLinkLabel = (key: string) => {
    switch (key) {
      case 'demo': return 'Live Demo';
      case 'github': return 'GitHub';
      case 'paper': return 'Paper';
      case 'model': return 'Model';
      case 'blog': return 'Blog';
      default: return key.charAt(0).toUpperCase() + key.slice(1);
    }
  };
  
  const getLinkColor = (key: string) => {
    switch (key) {
      case 'demo': return 'bg-primary hover:bg-primary/90 text-white';
      case 'github': return 'bg-gray-700 hover:bg-gray-800 text-white';
      default: return 'bg-accent hover:bg-accent/90 text-white';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
        <motion.div
          ref={modalRef}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center z-10">
            <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-foreground">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <TechBadge key={`modal-tech-${index}`} technology={tech} />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Challenges</h4>
                <p className="text-foreground">{project.challenges}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                <p className="text-foreground">{project.solution}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">Outcome</h4>
              <p className="text-foreground">{project.outcome}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Links</h4>
              <div className="flex flex-wrap gap-3">
                {Object.entries(project.links).map(([key, value]) => (
                  value ? (
                    <a 
                      key={key}
                      href={value} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center ${getLinkColor(key)} px-4 py-2 rounded-lg text-sm`}
                    >
                      {getLinkIcon(key)}
                      {getLinkLabel(key)}
                    </a>
                  ) : null
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
