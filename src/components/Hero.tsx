"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const StaggeredText = ({ text, className }: { text: string; className?: string }) => {
  const letters = Array.from(text);
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };
  const child: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className={`flex overflow-hidden ${className}`}>
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const deepaX = useTransform(scrollYProgress, [0, 1], ["-0.05vw", "0vw"]);
  const deepaY = useTransform(scrollYProgress, [0, 1], ["-30vh", "0vh"]);
  
  const tharshanX = useTransform(scrollYProgress, [0, 1], ["10vw", "0vw"]);
  const tharshanY = useTransform(scrollYProgress, [0, 1], ["32vh", "0vh"]);
  
  const fadeOutY = useTransform(scrollYProgress, [0, 0.5], ["0%", "150%"]);
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-background transition-colors duration-300">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between px-6 md:px-12 pb-12 pt-24 md:pt-32">
        
        {/* Background Image (User Photo) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
          <motion.div 
            style={{ scale: imageScale, opacity: imageOpacity }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-[90%] h-[85%] md:w-[80%] md:h-[80%] max-w-4xl mx-auto mix-blend-darken dark:mix-blend-lighten mt-0 md:-mt-24"
          >
            <Image
              src="/profile.jpg"
              alt="Deepatharshan"
              fill
              className="object-cover object-top opacity-90 dark:opacity-100"
              priority
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background md:via-background/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          </motion.div>
        </div>

        {/* Central Joining Text container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-0">
            <motion.div style={{ x: deepaX, y: deepaY }}>
              <StaggeredText 
                text="DEEPA" 
                className="text-[18vw] md:text-[8.5vw] font-black leading-none tracking-tighter text-foreground m-0 p-0 drop-shadow-sm" 
              />
            </motion.div>
            <motion.div style={{ x: tharshanX, y: tharshanY }}>
              <StaggeredText 
                text="THARSHAN" 
                className="text-[18vw] md:text-[8.5vw] font-black leading-none tracking-tighter text-foreground m-0 p-0 drop-shadow-sm md:ml-4" 
              />
            </motion.div>
          </div>
        </div>

        {/* Top Content: Sidebar elements */}
        <div className="relative z-10 w-full flex flex-col items-start mt-12 md:mt-16">
          <motion.div 
            style={{ y: fadeOutY, opacity: fadeOutOpacity }}
            className="flex flex-col items-start ml-2"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl font-medium tracking-widest text-foreground"
            >
              2K26
            </motion.span>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 96 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="w-[2px] bg-foreground/40 my-4 ml-3" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative h-32 w-10"
            >
              <span className="absolute top-0 left-0 -rotate-90 origin-bottom-left text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground whitespace-nowrap translate-y-full ml-3">
                ./ PORTFOLIO
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Content: Tagline and CTA */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8 mt-auto">
          <motion.div
            style={{ y: fadeOutY, opacity: fadeOutOpacity }}
            className="max-w-sm flex flex-col gap-6"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-sm md:text-base font-bold uppercase tracking-[0.15em] leading-relaxed text-foreground"
            >
              Software Engineer <br />
              Full-Stack Dev <br />
              UI / UX Designer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ArrowDown className="text-foreground hidden md:block" size={24} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-2 pointer-events-auto"
            >
              <a
                href="#projects"
                className="border border-foreground/40 px-6 py-3 rounded-full text-foreground text-xs md:text-sm font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                VIEW WORK
              </a>
              <a
                href="/cv.pdf"
                className="bg-foreground px-6 py-3 rounded-full text-background text-xs md:text-sm font-bold hover:opacity-80 transition-opacity"
              >
                DOWNLOAD CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
