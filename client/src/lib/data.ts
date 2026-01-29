import { Github, Linkedin, Mail, FileText, Code2, Terminal, Cpu, Globe, Database, Layers, Users, Zap, Target, Puzzle, Gauge } from "lucide-react";

export const personalInfo = {
  name: "Vaidehi Deo",
  title: "Senior Software Engineer",
  email: "vaidehideous@gmail.com",
  location: "San Jose, CA",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/vaidehideo", // Placeholder, user to update
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vaidehideo/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:vaidehideous@gmail.com",
      icon: Mail,
    },
  ],
};

export const education = [
  {
    school: "San Jose State University",
    degree: "Master of Science in Software Engineering",
    location: "San Jose, CA",
    year: "2016",
    logo: "/images/sjsu-logo.png" // Placeholder path
  },
  {
    school: "University of Pune",
    degree: "Bachelor of Computer Engineering",
    location: "India",
    year: "2012",
    logo: "/images/pune-logo.png" // Placeholder path
  }
];

export const competencies = [
  {
    title: "End-to-End Ownership",
    description: "Turning ambiguous requirements into shipped functionality. From initial design to production monitoring and impact measurement.",
    icon: Target
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Partnering effectively with Product, Design, and other Engineering teams to align on goals and deliver customer value.",
    icon: Users
  },
  {
    title: "Reliability Mindset",
    description: "Building systems that scale. Experience with high-volume platforms (33M+ transactions), reducing latency, and improving operational excellence.",
    icon: Zap
  },
  {
    title: "Technical Leadership",
    description: "Mentoring junior engineers, driving system refactors, and acting as a technical point of contact for complex integrations.",
    icon: Layers
  }
];

export const experience = [
  {
    company: "Bill",
    role: "Senior Software Engineer",
    period: "Jan 2019 – Present",
    description: "Driving features for a B2B payments platform serving ~494K businesses. Specializing in external accounting integrations, system reliability, and performance optimization.",
    achievements: [
      "Launched external accounting integration with auto-connection flow, retries, and failure handling.",
      "Led auto-connection enhancements driving ~10K additional connections per month.",
      "Reduced production issue diagnosis time to 30-60 minutes via Datadog/Splunk tracing.",
      "Optimized Oracle queries to reduce p95 latency under peak load.",
      "Unblocked ~$7B TPV growth opportunity by resolving critical invoicing integration issues."
    ],
  },
  {
    company: "ARM, Inc",
    role: "Software Engineer",
    period: "Aug 2016 – Dec 2018",
    description: "Improved engineering productivity by developing a Django-based platform for IP development teams.",
    achievements: [
      "Enhanced internal platform reliability and usability using Python and ExtJS.",
      "Owned features end-to-end, gathering requirements and iterating based on user feedback."
    ],
  },
  {
    company: "AtHoc (BlackBerry)",
    role: "Software Engineer Intern",
    period: "Sep 2015 – Dec 2015",
    description: "Focused on application performance and caching strategies.",
    achievements: [
      "Implemented Aerospike caching layer on AWS EC2 to reduce latency.",
      "Designed proof of concept for distributed NoSQL key-value store."
    ],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer Intern",
    period: "Jun 2015 – Aug 2015",
    description: "Contributed to cloud infrastructure and billing systems.",
    achievements: [
      "Enabled scalable billing metering for Storage Gateway service.",
      "Built scalable Java compute infrastructure for usage-based billing."
    ],
  },
  {
    company: "HSBC",
    role: "Software Engineer",
    period: "Aug 2012 – Jul 2014",
    description: "Managed releases and batch operations for Global Banking Technology.",
    achievements: [
      "Owned Cognos releases and Control-M batch operations.",
      "Acted as Defect Prevention Champion to reduce recurring issues."
    ],
  },
];

export const projects = [
  {
    title: "External Accounting Integration",
    description: "Built a robust auto-connection flow for accounting software integrations. Handled retries, idempotency, and failure scenarios for a platform serving ~494K businesses.",
    tags: ["Java", "API Design", "Distributed Systems", "Reliability"],
    link: "#", // Internal project, no public link
    repo: null,
  },
  {
    title: "Performance Optimization Initiative",
    description: "Reduced p95 latency and eliminated slow-query hotspots for payment tracking workflows. Optimized Oracle queries and data access patterns under peak load.",
    tags: ["Oracle", "SQL", "Performance Tuning", "Datadog"],
    link: "#",
    repo: null,
  },
  {
    title: "Production Monitoring Suite",
    description: "Implemented comprehensive tracing and monitoring using Datadog and Splunk. Reduced time to diagnose production issues from hours to 30-60 minutes.",
    tags: ["Observability", "Splunk", "Datadog", "Mixpanel"],
    link: "#",
    repo: null,
  },
  // Removed "Internal Eng Productivity Platform" as requested
];

export const skills = [
  { name: "Java Backend", icon: Code2, level: 95 },
  { name: "Distributed Systems", icon: Globe, level: 90 },
  { name: "API Design", icon: Terminal, level: 90 },
  { name: "AWS & Cloud", icon: Cpu, level: 85 },
  { name: "SQL & Oracle", icon: Database, level: 85 },
  { name: "Observability", icon: Zap, level: 80 },
  { name: "System Integrations", icon: Puzzle, level: 85 },
  { name: "Performance Tuning", icon: Gauge, level: 85 },
];
