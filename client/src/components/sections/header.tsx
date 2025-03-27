import { useState, useEffect } from "react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useScroll } from "@/hooks/use-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { isOpen, toggle } = useMobileMenu();
  const scrolled = useScroll(50);
  
  const headerClasses = `
    fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-all duration-300
    ${scrolled ? "py-2 shadow-sm" : "py-4"}
  `;
  
  const handleClickNavLink = (href: string) => {
    if (isOpen) toggle();
    
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-sans text-primary">
          Arooj<span className="text-accent">.</span>AI
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClickNavLink(link.href);
              }}
              className="font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggle}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 py-4 px-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickNavLink(link.href);
                  }}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
