"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, PlayCircle, Loader2 } from "lucide-react";

export default function QuickPlatePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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
              QuickPlate
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A robust restaurant management platform designed to streamline dining operations. 
              Built with PHP, Laravel, and React, QuickPlate empowers restaurant owners to handle menus, 
              branches, staff, and customer orders seamlessly while featuring innovative table QR generation and real-time auditory notifications.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#demo-video" className="flex items-center px-6 py-3 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity">
                Live Video Demo <PlayCircle className="ml-2" size={20} />
              </a>
            </div>

            {/* Video Demo Section */}
            <div id="demo-video" className="pt-8">
              <div className="flex justify-center mt-8 mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
                  QuickPlate Live Demo
                </span>
              </div>
              
              <motion.div 
                variants={itemVariants} 
                className="relative w-[100vw] sm:w-[95vw] max-w-[1600px] aspect-video rounded-none sm:rounded-3xl overflow-hidden shadow-2xl bg-muted/20 left-1/2 -translate-x-1/2 border-y sm:border border-border"
              >
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20 z-10">
                    <Loader2 className="w-10 h-10 animate-spin text-primary" />
                  </div>
                )}
                <video 
                  src="/projects/quickplate/demo.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  className={`w-full h-full object-contain transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
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
              Restaurant Management
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Unified Dashboard</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              QuickPlate serves as the nerve center for restaurant owners. The intuitive dashboard provides a real-time overview of daily operations, allowing managers to effortlessly monitor incoming orders, track active offers, and manage comprehensive menu updates across all locations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Staff management, branch coordination, and customer reviews are all centralized, ensuring quality control and operational efficiency at every level.
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
              Customer Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Smart Table QR Ordering</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Say goodbye to waiting for menus. QuickPlate includes an automated Table QR code generator. Customers can simply sit down, scan the code placed on their table using their smartphones, and instantly browse the digital menu.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This frictionless self-service ordering system routes tickets directly to the kitchen, drastically reducing wait times and improving table turnover rates.
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
              Real-Time Operations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Instant Auditory Notifications</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In a fast-paced kitchen environment, visual cues aren't always enough. QuickPlate implements real-time auditory notifications for new and updated orders.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whenever a customer places an order via a table QR code, the dashboard instantly triggers a distinct notification sound, ensuring that staff are immediately alerted and food preparation begins without delay.
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
              {['PHP', 'Laravel Framework', 'React', 'MySQL', 'DigitalOcean', 'Framer Motion', 'Tailwind CSS'].map((tech) => (
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
