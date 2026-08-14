"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "I am a passionate Software Engineering undergraduate at SLIIT, maintaining a strong academic record with a CGPA of 3.2. Recently, I completed a 6-month Software Engineering Internship at QMatrix AI (Remote/UK), where I gained hands-on experience in full-stack development, cloud deployment, and automated testing. I thrive in dynamic environments where I can leverage my skills in modern frameworks to deliver high-quality digital experiences.";

const Word = ({ children, progress, range }: { children: string; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-2 lg:mr-3 inline-block">
      {children}
    </motion.span>
  );
};

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"],
  });

  const words = text.split(" ");

  return (
    <section id="about" className="py-32 md:py-48 relative border-t border-border bg-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-12">
          About Me
        </h2>

        <div ref={container} className="max-w-5xl">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug flex flex-wrap text-foreground">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
}
