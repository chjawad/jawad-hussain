import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TechCategory {
  name: string;
  items: { name: string; isAngular?: boolean }[];
}

const techStack: TechCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "Angular"},
      { name: "React" },
      { name: "TypeScript" },
      { name: "RxJS" },
      { name: "Signals" },
      { name: "NgRx" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Java Spring" },
      { name: "Express" },
      { name: "NestJS" },
    ],
  },
  {
    name: "Architecture",
    items: [
      { name: "Microfrontends" },
      { name: "Monorepo (Nx)" },
      { name: "Module Federation" },
      { name: "Standalone Components" },
    ],
  },
  {
    name: "UI Libraries",
    items: [
      { name: "Angular Material" },
      { name: "PrimeNG" },
      {name: "Ant Design" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "AG Grid" },
    ],
  },
  {
    name: "DevOps",
    items: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Jenkins" },
      { name: "GitHub Actions" },
      { name: "Azure DevOps" },
    ],
  },
  {
    name: "State & APIs",
    items: [
      { name: "NGXS" },
      { name: "REST" },
      { name: "GraphQL" },
      { name: "WebSockets" },
      { name: "Firebase" },
    ],
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-24 sm:py-32 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Technologies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, maintainable applications.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="card-elevated rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-muted-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech.name}
                    className={`badge-tech ${tech.isAngular ? "badge-angular" : ""}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
