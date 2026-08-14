"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";

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

export default function SwagClothingPage() {
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
              SWAG Clothing Store
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A trendy, high-performance e-commerce platform built on the MERN stack. Designed to deliver an immersive shopping experience with a highly capable administrative back-office for comprehensive financial and inventory management.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/Deepatharshan/Swag_clothing" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity">
                Source Code <GithubIcon className="ml-2" size={20} />
              </a>
              <a href="#demo-video" className="flex items-center px-6 py-3 border border-foreground text-foreground font-bold rounded-full hover:bg-foreground hover:text-background transition-colors">
                Watch Demo <PlayCircle className="ml-2" size={20} />
              </a>
            </div>

            {/* Video Demo Section */}
            <div id="demo-video" className="pt-8">
              <div className="flex justify-center mt-8 mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
                  Full Stack Demo
                </span>
              </div>
              
              <motion.div 
                variants={itemVariants} 
                className="relative w-[100vw] sm:w-[95vw] max-w-[1600px] aspect-video rounded-none sm:rounded-3xl overflow-hidden shadow-2xl bg-muted/20 left-1/2 -translate-x-1/2 border-y sm:border border-border"
              >
                <video 
                  src="/projects/swag-clothing/demo.mp4" 
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
              User Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Impressive Clothing Display & Filtering</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              First impressions matter in fashion. SWAG Clothing features a visually striking product showcase that highlights the intricate details of each garment through high-quality image carousels and sleek grid layouts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Under the hood, a robust filtering engine powered by MongoDB aggregation pipelines allows users to sort seamlessly by size, color, category, and price range, ensuring customers find exactly what they are looking for in seconds.
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
              The Funnel
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Checkout, Cart & Tracking</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cart abandonment is minimized through an intuitive, persistent shopping cart and a streamlined, multi-step checkout process. Global state management handles cart logic flawlessly across the entire application.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Once an order is placed, customers gain access to a comprehensive order tracking portal, pulling real-time status updates from the backend so they know exactly when to expect their delivery.
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
              Back-Office Power
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Admin Dashboard</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The true strength of SWAG Clothing lies in its administrative backend. Store managers are equipped with an impressive dashboard that provides absolute control over the platform's day-to-day operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It goes far beyond basic CRUD operations. The dashboard includes detailed financial management modules for tracking daily income, managing outcomes, and handling petty cash. Combined with robust order management and a customer review moderation system, it's a complete business command center.
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
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Redux'].map((tech) => (
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
