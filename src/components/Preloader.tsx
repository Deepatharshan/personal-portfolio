"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll immediately when mounted
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // Sequence timing
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Unlock scroll slightly after the exit animation starts to feel seamless
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 800);
      
    }, 2800); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Text Container with hidden overflow for slide-up reveal effect */}
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white"
              >
                Deepatharshan.
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              className="mt-2 text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400 font-medium"
            >
              Software Engineer
            </motion.p>
          </div>
          
          {/* Elegant Loading Bar */}
          <motion.div
            className="absolute bottom-24 w-48 md:w-64 h-[1px] bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
             <motion.div 
               className="h-full bg-white"
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.7 }}
             />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
