import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="py-24 px-6">
    <div className="container mx-auto max-w-2xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4"
      >
        Let's build something{" "}
        <span className="text-gradient">amazing</span> together.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground mb-10"
      >
        I'm always open to new opportunities and collaborations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-6"
      >
        <a
          href="mailto:hello@hanlinli.dev"
          className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center glow-hover text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center glow-hover text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center glow-hover text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </motion.div>

      <p className="mt-16 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hanlin Li. Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default FooterSection;
