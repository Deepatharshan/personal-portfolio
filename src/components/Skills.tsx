"use client";

import { motion } from "framer-motion";

const skills = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "Kotlin", "HTML/CSS"],
  "Frameworks & Libraries": ["Next.js", "React", "Tailwind CSS", "Laravel", "Framer Motion"],
  "Tools & Deployment": ["Git", "DigitalOcean", "Selenium", "Postman", "Docker", "Figma"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Technical Arsenal
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass p-8 rounded-2xl border-border"
            >
              <h4 className="text-xl font-semibold mb-6 text-foreground">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    className="px-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-sm font-medium text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
