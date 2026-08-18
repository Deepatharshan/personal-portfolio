"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 relative border-t border-border bg-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <GraduationCap size={48} className="text-primary mb-6" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Academic Background
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Education
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors duration-700" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-2">Sri Lanka Institute of Information Technology (SLIIT)</h4>
              <p className="text-xl text-primary font-medium">BSc (Hons) IT, Software Engineering</p>
            </div>
            <div className="text-right flex flex-col items-start md:items-end">
              <span className="bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-2 border border-foreground/5">
                CGPA: 3.2
              </span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Focused on advanced software engineering principles, full-stack development, and system architecture. 
            Actively participating in tech communities and hands-on projects to bridge theoretical knowledge with practical industry standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
