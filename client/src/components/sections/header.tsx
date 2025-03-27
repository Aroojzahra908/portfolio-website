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
  const [activeSection, setActiveSection] = useState("home");
  
  // Monitor scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "waitlist", "contact"];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleClickNavLink = (href: string) => {
    if (isOpen) toggle();
    
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-md border-b border-primary/10 py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold font-sans"
        >
          <span className="text-gradient">AZ</span>
          <span className="text-primary">.</span>
        </motion.a>
        
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-10"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClickNavLink(link.href);
                }}
                className={`relative text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </a>
            );
          })}
        </motion.nav>
        
        {/* Contact Button (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <button
            onClick={() => handleClickNavLink("#waitlist")}
            className="bg-primary hover:bg-primary/90 text-black font-medium px-5 py-2 rounded-md button-hover"
          >
            Join Waitlist
          </button>
        </motion.div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-primary focus:outline-none transition-colors"
          onClick={toggle}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-primary/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickNavLink(link.href);
                    }}
                    className={`py-3 px-4 text-left text-base font-medium rounded-md transition-all duration-300 ${
                      isActive 
                        ? "bg-primary/20 text-primary border-l-2 border-primary" 
                        : "text-gray-300 hover:bg-primary/10 hover:text-white border-l-2 border-transparent"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
