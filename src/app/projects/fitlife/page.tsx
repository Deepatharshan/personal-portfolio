"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";

export default function FitLifePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const scrollSectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 selection:bg-primary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Projects
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-sm">
              FitLife Gym App Design
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A comprehensive UI/UX case study and fully interactive prototype for a modern fitness application. 
              Designed to bridge the gap between rigorous workout tracking and vibrant community engagement.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://www.figma.com/design/Cg6l51IA0oip58PiBA1sDe/FintnessApp?node-id=0-1&t=2IrPTqILpk8rAgUK-1" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity">
                View Figma Design <ExternalLink className="ml-2" size={20} />
              </a>
              <a href="#prototype-video" className="flex items-center px-6 py-3 border border-foreground text-foreground font-bold rounded-full hover:bg-foreground hover:text-background transition-colors">
                Watch Prototype <PlayCircle className="ml-2" size={20} />
              </a>
            </div>

            {/* Video Demo Section */}
            <div id="prototype-video" className="pt-8">
              <div className="flex justify-center mt-8 mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
                  Interactive Prototype Demo
                </span>
              </div>
              
              <motion.div 
                variants={itemVariants} 
                className="relative w-[100vw] sm:w-[95vw] max-w-[1600px] aspect-video rounded-none sm:rounded-3xl overflow-hidden shadow-2xl bg-muted/20 left-1/2 -translate-x-1/2 border-y sm:border border-border"
              >
                <video 
                  src="/projects/fitlife/demo.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </motion.div>
            </div>
          </motion.section>
        </motion.div>

        {/* Scroll Animated Features */}
        <div className="mt-32 space-y-32 md:space-y-48 pb-24 max-w-4xl mx-auto">
          
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              Design Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From Concept to Prototype</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The design journey for FitLife began with extensive user research to understand the pain points of gym-goers. I found that most users wanted a single platform that combined rigid metric tracking with social motivation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I moved from low-fidelity wireframing to establish the core user flows, directly into high-fidelity Figma designs. The final deliverable is a fully interactive prototype featuring micro-interactions that simulate a real, developed application.
            </p>
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              UI/UX Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Handling User Experience</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Accessibility and visual hierarchy were my primary focuses. I implemented a dark-mode first aesthetic with high-contrast primary action colors to ensure readability even in bright gym environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By utilizing Hick's Law, I minimized the cognitive load on the dashboard. Users are presented only with their immediate daily goals and a clear call-to-action to start their workout, with secondary features like nutrition and community neatly nested in the bottom navigation.
            </p>
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              Interactive Elements
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Dynamic Prototyping</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A static design doesn't convey the feel of an app. I leveraged Figma's advanced prototyping features like Smart Animate to create seamless transitions between workout states.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The prototype includes swipe gestures for navigating exercise lists, modal pop-ups for rest timers, and animated progress rings that give immediate, satisfying visual feedback upon completing a set.
            </p>
          </motion.section>

          {/* Tools */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="border-t border-border pt-16 mt-32"
          >
            <h3 className="text-2xl font-bold mb-8 text-center tracking-tight">Tools & Methodologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Figma', 'Wireframing', 'Interactive Prototyping', 'User Research', 'Design Systems', 'Micro-interactions'].map((tech) => (
                <span key={tech} className="px-6 py-3 bg-muted/30 border border-border rounded-full text-sm font-bold tracking-wide">
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
