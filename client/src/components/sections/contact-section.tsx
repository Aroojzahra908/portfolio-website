import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MdLocationOn className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">Kaleem Shaheed Colony no 1, Faisalabad, Razabad</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MdEmail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a href="mailto:zahraarooj373@gmail.com" className="text-muted-foreground hover:text-primary">
                      zahraarooj373@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MdPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <a href="tel:03431313797" className="text-muted-foreground hover:text-primary">
                      03431313797
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-foreground mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Aroojzahra908" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/arooj-zahra-b546b4239" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://leetcode.com/Arooj_zahra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <FaCode className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
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
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message" 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
