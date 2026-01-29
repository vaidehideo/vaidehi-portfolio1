import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Code, Database, Server, Terminal, Calendar, MapPin, GraduationCap, Target, Users, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience, projects, skills, education, competencies } from "@/lib/data";

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

      <div className="container relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-12">
        <div className="max-w-3xl flex-1 text-center lg:text-left">
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
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-secondary/50 rounded-full px-8 h-12 text-lg" asChild>
                <a href="mailto:vaidehideous@gmail.com">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] relative z-20 flex-shrink-0"
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

export function Competencies() {
  return (
    <section id="competencies" className="py-24 bg-secondary/20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">
            Core Competencies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full bg-card/50 hover:bg-card transition-colors border-none shadow-sm hover:shadow-md">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl mb-2">{comp.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {comp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">
            Professional Journey
          </motion.h2>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-12">
            {experience.map((job, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                    <div className="text-lg text-primary font-medium mb-1">{job.company}</div>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm font-medium bg-secondary/50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4 mr-2" />
                    {job.period}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            Education
          </motion.h2>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.school}</h3>
                      <p className="text-lg text-muted-foreground mb-2">{edu.degree}</p>
                      <div className="flex items-center text-sm text-muted-foreground/80">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                        <span className="mx-2">•</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
          {projects.map((project, index) => (
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
                    {project.tags.map((t) => (
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
    { name: "Languages & Core", icon: Code, skills: ["Java", "Python", "SQL", "JavaScript", "HTML/CSS"] },
    { name: "Backend & Cloud", icon: Server, skills: ["Spring Boot", "AWS (EC2, S3, SQS)", "Microservices", "REST APIs", "GraphQL"] },
    { name: "Data & Infrastructure", icon: Database, skills: ["Oracle", "PostgreSQL", "Redis", "Datadog", "Splunk", "Docker"] },
    { name: "Tools & Methods", icon: Terminal, skills: ["Git", "CI/CD", "Agile/Scrum", "JIRA", "Unit Testing", "System Design"] },
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                   {/* Visual bar for skill level */}
                   <div className="w-full bg-secondary rounded-full h-2 mb-2">
                     <motion.div 
                       className="bg-primary h-2 rounded-full" 
                       initial={{ width: 0 }}
                       whileInView={{ width: `${skill.level}%` }}
                       transition={{ duration: 1, delay: 0.5 }}
                     />
                   </div>
                   <div className="text-right text-xs text-muted-foreground">{skill.level}%</div>
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
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-6">Let's Connect</h2>
              <p className="mb-8 text-primary-foreground/90 leading-relaxed">
                I'm always open to discussing new opportunities, distributed systems challenges, or just geeking out over tech.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:vaidehideous@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">vaidehideous@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/vaidehideo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" type="text" className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Hello..." />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
