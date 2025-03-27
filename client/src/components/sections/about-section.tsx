import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export function AboutSection() {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    try {
      const response = await apiRequest("GET", "/api/resume", undefined);
      const data = await response.json();
      
      // In a real implementation, this would trigger a file download
      // For now, we'll just show a toast notification
      toast({
        title: "Resume Download",
        description: "Resume downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Could not download resume. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-[40%] w-72 h-72 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
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
              Introduction
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-white">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A passionate AI/ML engineer with experience in building and deploying machine learning models and AI solutions.
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
                alt="Tech workspace environment" 
                className="relative rounded-xl border border-gray-800 w-full h-auto object-cover" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              A motivated AI/ML Engineer with 1 year of experience building and deploying machine learning
              models and AI solutions. Skilled in Python, TensorFlow, PyTorch, and data processing tools like
              Pandas and NumPy.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Experienced in Generative AI and Large Language Models (LLMs). Passionate about solving real-world problems using AI/ML and collaborating with teams to deliver impactful solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors card-hover">
                <h3 className="font-semibold text-primary mb-3 text-lg">Education</h3>
                <p className="text-white font-medium mb-2">Bachelor of Science in Information Technology (BSIT)</p>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>University of Agriculture, Faisalabad</p>
                  <p>Sep 2021 - May 2025</p>
                </div>
              </div>
              
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors card-hover">
                <h3 className="font-semibold text-primary mb-3 text-lg">Certification</h3>
                <p className="text-white font-medium mb-2">Certified Cloud Applied Generative AI Engineer</p>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>PIAIC, NTU Faisalabad</p>
                  <p>Aug 2024 - ongoing</p>
                </div>
              </div>
            </div>
            
            <Button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-black font-medium py-5 px-6 rounded-md button-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              {isDownloading ? "Downloading..." : "Download Resume"}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
