export const resumeData = {
  name: "Vaidehi Deo",
  role: "Senior Software Engineer",
  location: "San Jose, CA",
  contact: {
    email: "vaidehideo@gmail.com",
    phone: "(408) 668-5328",
    linkedin: "linkedin.com/in/vaidhideo",
    github: "github.com/vaidehideo" // Assumed based on standard pattern, user can update
  },
  summary: "Senior Software Engineer with 10+ years building customer-impacting platforms across B2B SaaS, cloud, and enterprise environments. Strongest at end-to-end feature execution, translating ambiguous requirements into shipped functionality, aligning stakeholders, and measuring impact through production signals and metrics. Deep experience in Java backend systems, integrations, and reliable distributed architectures.",
  skills: {
    technical: [
      "Backend Development",
      "Full-Stack Development",
      "API Design",
      "Distributed Systems",
      "System Integrations",
      "Data Modeling",
      "Performance Optimization",
      "Cloud-Native Architecture",
      "Agile Development"
    ],
    technologies: [
      "Java",
      "SQL",
      "Oracle",
      "AWS (EC2, S3, SQS, RDS)",
      "Datadog",
      "Splunk",
      "Mixpanel",
      "GraphQL"
    ],
    competencies: [
      "End-to-End Ownership",
      "Cross-Functional Collaboration",
      "Technical Design",
      "Problem Solving",
      "Stakeholder Communication",
      "Reliability Mindset",
      "Operational Excellence",
      "Mentorship"
    ]
  },
  experience: [
    {
      company: "Bill",
      role: "Senior Software Engineer",
      period: "Jan 2019 – Present",
      description: "B2B SMB payments Platform",
      achievements: [
        "Owned and delivered product features by building Java services and new/updated APIs, partnering cross-functionally and contributing across the stack on a high-volume payments platform (33M transactions in Q4 FY25)",
        "Launched an external accounting integration by building an auto-connection flow with retries, idempotency, and robust failure handling, while coordinating across partner teams and internal stakeholders on a platform serving ~494K businesses.",
        "Led a portfolio of auto-connection enhancements (bank partner extensions, instant auto-connect, third-party billers, production hardening), driving ~10K additional connections per month as the technical point of contact across engineering and stakeholders.",
        "Reduced time to diagnose production issues to ~30–60 minutes by tracing failures across Datadog and Splunk and validating fixes with Mixpanel, improving release confidence and operational response.",
        "Improved payment tracking workflow performance under peak load by reducing p95 latency and eliminating slow-query hotspots through targeted Oracle query and data-access optimizations.",
        "Removed a key scaling blocker for the Invoice Financing product by partnering with IF and Sync teams to resolve a critical invoicing integration issue, enabling an estimated ~$7B TPV growth opportunity."
      ]
    },
    {
      company: "ARM, Inc",
      role: "Software Engineer",
      period: "Aug 2016 – Dec 2018",
      description: "Semiconductor IP (CPU)",
      achievements: [
        "Improved internal engineering productivity by developing and enhancing a Django-based platform used by multiple IP development teams.",
        "Increased platform reliability and usability by owning features end to end, gathering requirements from internal users, implementing enhancements in Python and ExtJS, and iterating based on feedback without disrupting existing workflows."
      ]
    },
    {
      company: "San Jose State University",
      role: "Graduate Teaching Assistant",
      period: "Jan 2016 – May 2016",
      description: "Distributed Systems Course",
      achievements: [
        "Improved course operations and student support by managing discussion forums, clarifying complex distributed-systems concepts, preparing assignments and quizzes, explaining solutions, and grading coursework and exams."
      ]
    },
    {
      company: "AtHoc (BlackBerry)",
      role: "Software Engineer Intern",
      period: "Sep 2015 – Dec 2015",
      description: "Emergency Notification Software",
      achievements: [
        "Improved application performance by implementing a caching layer using Aerospike on AWS EC2, reducing latency for high-frequency data access paths.",
        "Validated a scalable caching strategy by designing and executing a proof of concept using a fast, distributed NoSQL key-value store to support performance-critical workloads."
      ]
    },
    {
      company: "Amazon Web Services",
      role: "Software Development Engineer Intern",
      period: "Jun 2015 – Aug 2015",
      description: "Cloud Infrastructure",
      achievements: [
        "Enabled scalable and accurate billing metering by contributing to snapshot usage metering for the Storage Gateway service.",
        "Built scalable compute infrastructure in Java to support changes in usage-based billing workflows, improving maintainability and strengthening reliability through automated tests (JUnit, EasyMock)."
      ]
    },
    {
      company: "HSBC",
      role: "Software Engineer",
      period: "Aug 2012 – Jul 2014",
      description: "Global Banking Technology",
      achievements: [
        "Owned Cognos releases and Control-M batch operations for Global Pay Plus reporting, improving test environment reliability (UNIX/schema setup), supporting NA runs, and acting as Defect Prevention Champion to reduce recurring issues."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Software Engineering",
      institution: "San Jose State University",
      location: "San Jose, CA"
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "University of Pune",
      location: "India"
    }
  ],
  projects: [
    {
      title: "B2B Payment Auto-Connect",
      description: "Built an auto-connection flow with retries, idempotency, and robust failure handling for external accounting integration.",
      tech: ["Java", "API Design", "Distributed Systems"],
      link: "#",
      repo: "#"
    },
    {
      title: "Performance Optimization Suite",
      description: "Reduced p95 latency and eliminated slow-query hotspots through targeted Oracle query and data-access optimizations.",
      tech: ["Oracle", "SQL", "Performance Tuning"],
      link: "#",
      repo: "#"
    },
    {
      title: "Internal Eng Productivity Platform",
      description: "Django-based platform used by multiple IP development teams to improve engineering productivity.",
      tech: ["Python", "Django", "ExtJS"],
      link: "#",
      repo: "#"
    }
  ]
};
