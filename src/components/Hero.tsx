import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent animate-pulse-glow" />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-[10%] w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-[15%] w-16 h-16 rounded-full bg-angular/10 border border-angular/20"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-[10%] w-12 h-12 rounded-lg bg-secondary border border-border"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent blur-2xl opacity-80 pointer-events-none" />
              <img
                src={`${import.meta.env.BASE_URL}jawad-profile.jpeg`}
                alt="Jawad Hussain"
                className="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-4 border-primary/20 shadow-[0_20px_60px_rgba(6,95,183,0.18)]"
              />
            </div>
          </motion.div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-border"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(140_70%_50%)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(140_70%_50%)]"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-foreground">Jawad</span>{" "}
            <span className="text-gradient">Hussain</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              Senior Software Engineer <span className="text-primary">|</span>{" "}
              <span className="text-gradient-angular font-semibold">Angular Expert</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building high-performance, scalable Angular applications with modern architecture.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              asChild
            >
              <a href={`${import.meta.env.BASE_URL}Jawad_Resume.pdf`} download="Jawad_Hussain_Resume.pdf">
                <Download className="mr-1" />
                Download CV
              </a>
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-1" />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <a
              href="https://github.com/jawad-aj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass glass-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jawad-hs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass glass-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
