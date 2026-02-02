import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Users, Zap, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  organization: string;
  type: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  highlights: { icon: React.ElementType; label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: "MVIL VIRM",
    organization: "Government of PNG",
    type: "National Insurance System",
    description: "A comprehensive national vehicle insurance registration and management system serving over 200,000 citizens.",
    problem: "Legacy monolithic system with slow deployments and scaling issues affecting citizen services.",
    solution: "Architected a microfrontend solution with Nx monorepo, enabling independent deployments and team autonomy.",
    impact: [
      "Reduced deployment time by 40%",
      "Improved system uptime to 99.9%",
      "Enabled 5 teams to work independently",
    ],
    stack: ["Angular 18", "Java Spring", "MySQL", "Nx", "Module Federation"],
    highlights: [
      { icon: Users, label: "Users", value: "200k+" },
      { icon: Zap, label: "Deploy Time", value: "-40%" },
      { icon: Shield, label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "Airehealth",
    organization: "US Healthcare",
    type: "EMR + Admin Portal",
    description: "Electronic Medical Records system with comprehensive admin portal for healthcare providers.",
    problem: "Fragmented patient data, complex role-based access requirements, and real-time collaboration needs.",
    solution: "Built a real-time collaborative platform with WebSocket integration and granular RBAC system.",
    impact: [
      "Reduced patient record access time by 60%",
      "Implemented 15+ role permission levels",
      "Real-time sync across 50+ concurrent users",
    ],
    stack: ["Angular 16", "Node.js", "Firebase", "WebSockets", "MySQL"],
    highlights: [
      { icon: Database, label: "Records", value: "1M+" },
      { icon: Users, label: "Roles", value: "15+" },
      { icon: Zap, label: "Real-time", value: "Yes" },
    ],
  },
  {
    title: "Winsupply ERP",
    organization: "Enterprise",
    type: "Pricing & Matrix Modules",
    description: "Enterprise resource planning system for complex pricing calculations and inventory management.",
    problem: "Outdated Angular 12 codebase with performance issues in pricing calculations and complex data grids.",
    solution: "Led migration to Angular 18 with virtual scrolling, optimized change detection, and standalone components.",
    impact: [
      "10x improvement in grid performance",
      "Reduced bundle size by 35%",
      "Migrated 100+ components to standalone",
    ],
    stack: ["Angular 18", "Java", "IBM DB2", "AG Grid", "RxJS"],
    highlights: [
      { icon: Zap, label: "Performance", value: "10x" },
      { icon: Database, label: "Bundle", value: "-35%" },
      { icon: Shield, label: "Components", value: "100+" },
    ],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="card-elevated rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {project.organization}
              </span>
              <h3 className="font-display text-2xl font-bold mt-1">{project.title}</h3>
              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {project.type}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-b border-border">
          {project.highlights.map((highlight) => (
            <div key={highlight.label} className="p-4 text-center border-r last:border-r-0 border-border">
              <highlight.icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="font-display font-bold text-lg">{highlight.value}</div>
              <div className="text-xs text-muted-foreground">{highlight.label}</div>
            </div>
          ))}
        </div>

        {/* Expandable Content */}
        <div className="p-6">
          {/* Problem & Solution */}
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Challenge
              </h4>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Solution
              </h4>
              <p className="text-sm text-foreground">{project.solution}</p>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Impact
            </h4>
            <div className="space-y-2">
              {project.impact.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects with <span className="text-gradient">Technical Depth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-scale applications built with modern Angular architecture, 
            serving millions of users across government, healthcare, and fintech.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
