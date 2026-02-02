import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, Target, MessageSquare } from "lucide-react";

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led sprint planning and delivery for a team of 6 engineers across multiple projects.",
      metric: "6",
      metricLabel: "Engineers",
    },
    {
      icon: TrendingUp,
      title: "Improved Delivery",
      description: "Streamlined development workflows and processes to accelerate project delivery.",
      metric: "15%",
      metricLabel: "Faster Delivery",
    },
    {
      icon: Target,
      title: "Requirements Clarity",
      description: "Enhanced requirement gathering and documentation processes for better alignment.",
      metric: "20%",
      metricLabel: "Fewer Gaps",
    },
    {
      icon: MessageSquare,
      title: "Mentorship",
      description: "Conducted code reviews and mentoring sessions for junior developers.",
      metric: "50+",
      metricLabel: "Reviews/Month",
    },
  ];

  return (
    <section id="leadership" className="py-24 sm:py-32" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Beyond Code
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Leadership & <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical excellence combined with strong leadership to drive team success.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group card-elevated rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="w-7 h-7 text-primary" />
              </div>
              
              <div className="mb-4">
                <div className="font-display text-4xl font-bold text-gradient">{achievement.metric}</div>
                <div className="text-sm text-muted-foreground">{achievement.metricLabel}</div>
              </div>
              
              <h3 className="font-display text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
