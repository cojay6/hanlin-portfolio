import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-accent" size={28} />
          <h2 className="text-3xl font-bold">Why Tech?</h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Driven by intellectual curiosity in a rapidly evolving digital era, my journey into tech
          began with 'vibe coding' and AI-powered no-code platforms. However, I quickly hit their
          limitations and realized my dependency on constrained tools. What started as casual
          exploration has transformed into a serious ambition: to master software engineering,
          achieve technical self-sufficiency, and build robust, working prototypes from the ground
          up.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
