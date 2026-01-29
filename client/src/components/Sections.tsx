import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Code, Database, Server, Layout as LayoutIcon, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block z-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
          <img 
            src="/images/hero-bg.jpg" 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>

      <div className="container relative z-10 flex items-center gap-12">
        <div className="max-w-3xl flex-1">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-6 px-4 py-1 border-primary/30 text-primary bg-primary/5">
                Senior Software Engineer
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
              Building reliable <br />
              <span className="text-primary italic">distributed systems</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              10+ years of experience crafting high-volume payment platforms, cloud architectures, and scalable backend solutions.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-secondary/50 rounded-full px-8 h-12 text-lg">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Image - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block w-[400px] h-[400px] relative z-20"
        >
          <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl transform translate-y-4" />
          <div className="relative w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden">
             <img 
               src="/images/profile-pic.jpg" 
               alt="Vaidehi Deo" 
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* The Thread */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {resumeData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="md:w-1/2 md:px-12">
                  <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">
                            {job.role}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-foreground/80 mt-1">
                            {job.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                          {job.period}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground italic">
                        {job.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot Side */}
                <div className="hidden md:flex md:w-0 justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 sticky top-1/2" />
                </div>
                
                {/* Empty Side for balance */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Selected Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-md text-right hidden md:block"
          >
            A showcase of technical challenges solved through code, architecture, and design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                  <img 
                    src="/images/project-abstract.jpg" 
                    alt="Project Abstract" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="border-primary/20 bg-primary/5 text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/50 pt-4 flex gap-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const categories = [
    { name: "Languages & Core", icon: <Code />, skills: ["Java", "Python", "SQL", "JavaScript", "HTML/CSS"] },
    { name: "Backend & Cloud", icon: <Server />, skills: ["Spring Boot", "AWS (EC2, S3, SQS)", "Microservices", "REST APIs", "GraphQL"] },
    { name: "Data & Infrastructure", icon: <Database />, skills: ["Oracle", "PostgreSQL", "Redis", "Datadog", "Splunk", "Docker"] },
    { name: "Tools & Methods", icon: <Terminal />, skills: ["Git", "CI/CD", "Agile/Scrum", "JIRA", "Unit Testing", "System Design"] },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over a decade of solving complex engineering problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
                    {cat.icon}
                  </div>
                  <CardTitle className="font-serif text-xl">{cat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 relative text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/contact-bg.jpg" 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Let's build something meaningful.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10"
          >
            Always open to discussing new opportunities, technical challenges, or just connecting with fellow engineers.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-lg font-semibold">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
