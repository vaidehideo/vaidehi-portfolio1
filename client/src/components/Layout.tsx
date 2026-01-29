import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-foreground tracking-tight hover:text-primary transition-colors">
            Vaidehi<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button variant="outline" className="ml-4 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary">
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="mt-4" size="lg">
            Download Resume
          </Button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-20">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Vaidehi Deo</h3>
            <p className="text-muted-foreground max-w-md">
              Senior Software Engineer specializing in distributed systems, backend architecture, and high-volume platforms.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vaidehideo/" className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vaidehideous@gmail.com" className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vaidehi Deo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
