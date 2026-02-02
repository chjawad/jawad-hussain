import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Building2, Cpu, Globe } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "5+ Years",
      description: "Enterprise-scale application development",
    },
    {
      icon: Building2,
      title: "Angular Expert",
      description: "Versions 2-20, modern architecture",
    },
    {
      icon: Cpu,
      title: "Full-Stack",
      description: "React, Node.js, Java Spring",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "200k+ users across systems",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-primary font-mono text-sm tracking-wider uppercase"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Crafting{" "}
              <span className="text-gradient">scalable solutions</span>{" "}
              for complex problems
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                With over 5 years of experience building enterprise-scale applications, 
                I specialize in creating high-performance Angular solutions that power 
                critical systems across government, healthcare, and fintech sectors.
              </p>
              <p>
                My expertise spans the complete Angular ecosystem — from version 2 to 20 — 
                including <span className="text-foreground font-medium">microfrontend architectures</span>, 
                <span className="text-foreground font-medium"> monorepo setups</span>, and 
                <span className="text-foreground font-medium"> signals-based state management</span>. 
                I've led teams in delivering solutions that reduce deployment times by 40% 
                and improve system reliability.
              </p>
              <p>
                Beyond Angular, I bring strong proficiency in React, Node.js, and 
                Java Spring, enabling me to architect end-to-end solutions that scale.
              </p>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="group card-elevated rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
