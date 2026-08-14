"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8c.15-.38.65-1.8-.15-3.8 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.6 5 2 5 2c-.8 2-.3 3.4-.15 3.8A5.5 5.5 0 0 0 3 9.6c0 5.75 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 8.5 18v4" />
  </svg>
);

export default function CareerConnectPage() {
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
              CareerConnect AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A highly scalable microservices architecture leveraging Docker and Kubernetes, featuring a React frontend for AI-powered job matching. It is designed to handle high loads while seamlessly connecting candidates with their ideal roles using distributed backend services.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/Deepatharshan/CareerConnect_AI" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity">
                <GithubIcon className="mr-2" size={20} /> View Source Code
              </a>
            </div>
          </motion.section>

          {/* Demo Video Section */}
          <motion.div 
            variants={itemVariants} 
            className="relative w-[100vw] sm:w-[95vw] lg:w-[90vw] max-w-7xl aspect-video rounded-none sm:rounded-3xl overflow-hidden shadow-2xl bg-muted/20 left-1/2 -translate-x-1/2 mt-8 md:mt-16 border-y sm:border border-border"
          >
            <video 
              src="/projects/careerconnect/demo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain bg-black"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Scroll Animated Features - Text Centric */}
        <div className="mt-32 space-y-32 md:space-y-48 pb-24 max-w-4xl mx-auto">
          
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              Discovery & Matching
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Kinetic Intelligence Engine</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At the core of CareerConnect AI is our proprietary Kinetic Intelligence Engine. It doesn't just match keywords; it understands context. 
              By analyzing thousands of data points across a candidate's profile and comparing them against the nuanced requirements of open roles, 
              the engine predicts long-term success and cultural fit with unprecedented accuracy. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For job seekers, this means no more black holes. You are instantly matched with roles where your unique velocity aligns perfectly with the company's trajectory.
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
              Analytics & Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Employer Dashboard</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Employers need visibility to make swift hiring decisions. Our dashboard provides a real-time, bird's-eye view of your entire recruitment pipeline.
              Track application volume trends over time, monitor pipeline health, and identify bottlenecks before they slow down your hiring velocity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With actionable metrics right at your fingertips, you can shift from reactive hiring to proactive talent acquisition.
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
              Job Management
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frictionless Active Listings</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Managing job postings shouldn't be a chore. We've designed a clean, card-based interface that allows recruiters to effortlessly create, edit, or remove listings.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each listing gives you immediate context on candidate volume and quality, allowing you to tweak job requirements on the fly and immediately see how it impacts your talent pool.
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
              AI Integration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The AI Career Studio</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The AI Career Studio is where the magic happens for candidates. Users simply upload their CV, and our AI instantly extracts the structural and semantic data.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It provides a real-time ATS fit score, highlights extracted hard skills, and crucially, identifies missing skills that might be preventing you from landing your dream role. It acts as an automated career coach, giving you the insights needed to upskill effectively.
            </p>
          </motion.section>

          {/* Tech Stack */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="border-t border-border pt-16 mt-32"
          >
            <h3 className="text-2xl font-bold mb-8 text-center tracking-tight">Built With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Microservices', 'Docker', 'Kubernetes', 'Node.js', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
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
