import { motion } from "framer-motion";
import { Link } from "wouter";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skillset", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Check if we are on the home page
    if (window.location.pathname !== '/') {
        // If not on home page, let the default link behavior happen (navigate to /#section)
        return;
    }
    
    e.preventDefault();
    const elementId = id.replace('/', ''); // remove leading slash if present
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(elementId);
    }
  };

  useEffect(() => {
    // Only run intersection observer on home page
    if (window.location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 } 
    );

    links.forEach((link) => {
      const elementId = link.href.replace('/', '');
      const element = document.querySelector(elementId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [window.location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-b-2 border-primary/20 shadow-lg shadow-primary/5"
    >
      <div className="container-width flex items-center h-16 md:h-20">
        <Link href="/" className="cursor-pointer mr-auto flex items-center gap-2 group" onClick={(e) => scrollToSection(e as any, "#home")}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-110">
            <polygon points="19,2 36,10.5 36,27.5 19,36 2,27.5 2,10.5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
            <polygon points="19,7 31,13.5 31,26.5 19,33 7,26.5 7,13.5" fill="#22c55e" fillOpacity="0.08"/>
            <text x="19" y="25" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="800" fill="white" letterSpacing="-0.5">SM</text>
          </svg>
        </Link>

        <div className="hidden md:flex items-center gap-10 mx-auto">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === link.href.replace('/','') ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('/','') && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/spenser-m728"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/spenser-mills/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
        </div>
      </div>
    </motion.nav>
  );
}
