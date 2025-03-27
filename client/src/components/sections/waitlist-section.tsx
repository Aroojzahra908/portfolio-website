import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertWaitlistSchema } from "@shared/schema";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

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
    <section id="waitlist" className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-10">
              <h2 className="text-3xl font-bold font-sans text-foreground mb-4">Join the Waitlist</h2>
              <p className="text-muted-foreground mb-8">
                Be the first to experience my upcoming AI product. Sign up now to get early access and exclusive updates.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What interests you most?</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {interestOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
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
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Subscribe to newsletter for updates
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Join Waitlist"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-primary to-accent flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
              </div>
              <div className="relative z-10 text-center p-8 md:p-10">
                <div className="text-white mb-6">
                  <FaRobot className="mx-auto text-6xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
                <p className="text-white/80 mb-6">
                  An innovative AI solution that leverages cutting-edge machine learning technology to solve real-world problems.
                </p>
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
                    className="w-3 h-3 bg-white rounded-full"
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
                    className="w-3 h-3 bg-white rounded-full"
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
                    className="w-3 h-3 bg-white rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
