import { motion } from "framer-motion";
import { Briefcase, Building2, GraduationCap } from "lucide-react";

const timelineData = [
  {
    icon: Briefcase,
    title: "Account Executive Intern",
    org: "Trip.com",
    description:
      "Leveraged advanced data analytics to drive content traffic by 30%. Demonstrated strong data-driven decision-making and cross-functional agile collaboration.",
  },
  {
    icon: Building2,
    title: "Associate Consultant Intern",
    org: "OC&C Strategy Consultants",
    description:
      "Built robust quantitative models for market sizing. Proven ability to translate ambiguous requirements into structured logical frameworks.",
  },
  {
    icon: GraduationCap,
    title: "BSc at London School of Economics (LSE)",
    org: "High 2:1",
    description:
      "Honed exceptional analytical thinking and rapid learning capabilities through rigorous interdisciplinary studies.",
  },
];

const TimelineSection = () => (
  <section id="journey" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-16"
      >
        My Journey
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {timelineData.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start mb-12 md:mb-16 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Icon dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10">
                <Icon className="text-primary" size={20} />
              </div>

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                  isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div className="bg-card border border-border rounded-lg p-6 glow-hover">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-accent text-sm font-semibold mb-2">{item.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TimelineSection;
