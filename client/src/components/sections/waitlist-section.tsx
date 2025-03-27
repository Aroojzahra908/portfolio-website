import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertWaitlistSchema } from "@shared/schema";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaLightbulb, FaMicrochip } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// Extend the schema with validation
const waitlistFormSchema = insertWaitlistSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  interest: z.string().min(1, "Please select your interest"),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

const interestOptions = [
  { value: "ai_models", label: "AI Models & Deployment" },
  { value: "llm", label: "Large Language Models" },
  { value: "computer_vision", label: "Computer Vision" },
  { value: "nlp", label: "Natural Language Processing" },
  { value: "other", label: "Other" },
];

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      newsletter: true,
    },
  });

  async function onSubmit(values: WaitlistFormValues) {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/waitlist", values);
      const data = await response.json();
      
      toast({
        title: "Success!",
        description: data.message || "You've been added to the waitlist!",
      });
      
      form.reset();
    } catch (error) {
      console.error("Waitlist form error:", error);
      
      let errorMessage = "Failed to join waitlist. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      } 
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
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
              Coming Soon
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-white">
              Join the <span className="text-gradient">Waitlist</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Be the first to experience my upcoming AI product. Sign up now to get early access and exclusive updates.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Form Section */}
            <div className="lg:col-span-3 bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-primary/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-sm">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            {...field} 
                            className="bg-black/40 border-gray-800 focus:border-primary text-white placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-sm">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            {...field} 
                            className="bg-black/40 border-gray-800 focus:border-primary text-white placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-sm">What interests you most?</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-black/40 border-gray-800 focus:border-primary text-white">
                              <SelectValue placeholder="Select your interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border-gray-800 text-white">
                            {interestOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="newsletter"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-gray-600 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-gray-300 font-normal text-sm">
                            Subscribe to newsletter for AI updates and early access
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-6 mt-2 button-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Join Waitlist"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Info Section */}
            <div className="lg:col-span-2 bg-black border border-primary/20 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(243,202,32,0.1)]">
              <div className="h-full flex flex-col">
                <div className="bg-primary/10 p-8 flex-grow">
                  <div className="text-center mb-6">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <FaRobot className="text-primary text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Product Launch</h3>
                    <p className="text-gray-400 text-sm">
                      Coming soon - an innovative AI solution powered by cutting-edge technology
                    </p>
                  </div>
                  
                  <div className="space-y-5">
                    <FeatureItem 
                      icon={<FaBrain />}
                      title="Advanced ML Models"
                      description="State-of-the-art machine learning models trained on vast datasets"
                    />
                    
                    <FeatureItem 
                      icon={<FaLightbulb />}
                      title="Intelligent Solutions"
                      description="Smart tools that adapt to your specific needs and workflows"
                    />
                    
                    <FeatureItem 
                      icon={<FaMicrochip />}
                      title="High Performance"
                      description="Optimized for speed and efficiency with low resource requirements"
                    />
                  </div>
                </div>
                
                <div className="bg-primary/5 p-5 border-t border-primary/10">
                  <div className="flex items-center justify-center space-x-3">
                    <motion.span 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0
                      }}
                      className="w-2.5 h-2.5 bg-primary rounded-full"
                    />
                    <motion.span 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.2
                      }}
                      className="w-2.5 h-2.5 bg-primary rounded-full"
                    />
                    <motion.span 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.4
                      }}
                      className="w-2.5 h-2.5 bg-primary rounded-full"
                    />
                    <p className="text-primary text-sm font-medium ml-2">Launch in progress...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-black/30 p-2.5 rounded-lg text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
