import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
    {/* Background grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(26,188,156,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,188,156,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
      >
        Welcome to my portfolio
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
      >
        Hi, I'm{" "}
        <span className="text-gradient">Hanlin Li.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl text-muted-foreground font-light mb-10"
      >
        From Social Science Graduate to Software Engineering.
      </motion.p>
      <motion.a
        href="#"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg glow-hover animate-glow-pulse"
      >
        View Resume
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="mx-auto animate-bounce" size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
