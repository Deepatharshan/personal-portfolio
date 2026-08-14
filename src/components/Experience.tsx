"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-border bg-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Professional Experience
          </h3>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-6 space-y-12 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1 w-[10px] h-[10px] rounded-full bg-primary ring-4 ring-card transition-colors" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="text-2xl font-bold text-foreground">Software Engineering Intern</h4>
                <p className="text-lg text-muted-foreground mt-1">QMatrix AI</p>
              </div>
              <div className="text-sm font-medium text-muted-foreground bg-foreground/5 px-4 py-2 rounded-full inline-block w-fit border border-border">
                2024 &ndash; 2025 &middot; 6 Months &middot; Remote / UK
              </div>
            </div>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed font-light">
              Spearheaded the development of core applications including <strong>RentalPro</strong> and <strong>QuickPlate</strong>. 
              Responsible for full-stack feature implementation, cloud infrastructure setup, and ensuring robust code quality through automated testing.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Laravel", "React", "DigitalOcean", "Selenium"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold text-foreground bg-foreground/10 px-3 py-1.5 rounded-md border border-foreground/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
