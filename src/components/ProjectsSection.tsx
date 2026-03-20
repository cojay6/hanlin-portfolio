import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application showcasing modern React patterns and API integration.",
    tags: ["React", "Node.js", "SQL"],
  },
  {
    title: "Project Beta",
    description: "An interactive data visualization dashboard built with real-time analytics.",
    tags: ["Python", "React", "Tailwind"],
  },
  {
    title: "Project Gamma",
    description: "A responsive e-commerce prototype with seamless user experience and payment flow.",
    tags: ["React", "TypeScript", "Figma"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-4"
      >
        Projects
      </motion.h2>
      <p className="text-center text-muted-foreground mb-14">Upcoming coding projects</p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-card border border-border rounded-xl overflow-hidden glow-hover flex flex-col"
          >
            {/* Abstract placeholder */}
            <div className="h-40 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/20" />
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-accent px-2 py-1 rounded bg-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
