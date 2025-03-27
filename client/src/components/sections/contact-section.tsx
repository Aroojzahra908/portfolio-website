import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { FaGithub, FaLinkedinIn, FaCode, FaPaperPlane } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Extended schema with validation
const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", values);
      const data = await response.json();
      
      toast({
        title: "Message Sent",
        description: data.message || "Your message has been sent successfully!",
      });
      
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute -bottom-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
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
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-white">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Drop me a message!
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 h-full">
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                    <MdLocationOn className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-300">Kaleem Shaheed Colony no 1, Faisalabad, Razabad</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                    <MdEmail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <a href="mailto:zahraarooj373@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                      zahraarooj373@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                    <MdPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Phone</h4>
                    <a href="tel:03431313797" className="text-gray-300 hover:text-primary transition-colors">
                      03431313797
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-white mb-4">Connect with me</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/Aroojzahra908" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors button-hover"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/arooj-zahra-b546b4239" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors button-hover"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://leetcode.com/Arooj_zahra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors button-hover"
                  >
                    <FaCode className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-sm">Your Name</FormLabel>
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
                        <FormLabel className="text-white text-sm">Your Email</FormLabel>
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
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-white text-sm">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter subject" 
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
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-8">
                      <FormLabel className="text-white text-sm">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message" 
                          rows={5}
                          {...field} 
                          className="bg-black/40 border-gray-800 focus:border-primary text-white placeholder:text-gray-500 min-h-32"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-black font-medium py-6 px-8 rounded-md button-hover flex items-center"
                    disabled={isSubmitting}
                  >
                    <FaPaperPlane className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
