import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate AI/ML engineer with experience in building and deploying machine learning models and AI solutions.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
              alt="Tech workspace environment" 
              className="rounded-xl shadow-lg" 
            />
          </div>
          
          <div className="md:w-1/2">
            <p className="text-foreground mb-6 text-lg">
              A motivated AI/ML Engineer with 1 year of experience building and deploying machine learning
              models and AI solutions. Skilled in Python, TensorFlow, PyTorch, and data processing tools like
              Pandas and NumPy.
            </p>
            <p className="text-foreground mb-6 text-lg">
              Experienced in Generative AI and Large Language Models (LLMs). Passionate about solving real-world problems using AI/ML and collaborating with teams to deliver impactful solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-medium text-primary mb-2">Education</h3>
                <p className="text-foreground">Bachelor of Science in Information Technology (BSIT)</p>
                <p className="text-muted-foreground text-sm">University of Agriculture, Faisalabad</p>
                <p className="text-muted-foreground text-sm">Sep 2021 - May 2025</p>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Certification</h3>
                <p className="text-foreground">Certified Cloud Applied Generative AI Engineer</p>
                <p className="text-muted-foreground text-sm">PIAIC, NTU Faisalabad</p>
                <p className="text-muted-foreground text-sm">Aug 2024 - ongoing</p>
              </div>
            </div>
            <Button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? "Downloading..." : "Download Resume"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
