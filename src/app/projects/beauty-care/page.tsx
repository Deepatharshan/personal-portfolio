"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function BeautyCarePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scrollSectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
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
              Glowing Beauty Care
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A premium, full-stack e-commerce experience tailored for the beauty care industry. 
              Built with Next.js and Neon Postgres, this platform offers a seamless shopping journey 
              from advanced product filtering and secure cart management to real-time order tracking and a robust admin dashboard.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://beauty-care-buzsmvstf-deepatharshans-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity">
                Live Demo <ExternalLink className="ml-2" size={20} />
              </a>
            </div>

            {/* Admin Dashboard Video Demo Section */}
            <div className="flex justify-center mt-16 mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
                Admin Dashboard Demo
              </span>
            </div>
            
            <motion.div 
              variants={itemVariants} 
              className="relative w-[100vw] sm:w-[95vw] max-w-[1600px] aspect-video rounded-none sm:rounded-3xl overflow-hidden shadow-2xl bg-muted/20 left-1/2 -translate-x-1/2 border-y sm:border border-border"
            >
              <video 
                src="/projects/beauty-care/admin-demo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </motion.div>
          </motion.section>
        </motion.div>

        {/* Scroll Animated Features - Text Centric */}
        <div className="mt-24 space-y-32 md:space-y-48 pb-24 max-w-4xl mx-auto">
          
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              Discover
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Advanced Product Filtering</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Finding the perfect skincare or makeup product shouldn't be a hassle. The platform features a highly optimized filtering engine powered by a relational PostgreSQL database.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Users can filter catalogs by skin type, brand, price range, and product category instantly. The server-side rendering of Next.js ensures that these complex queries return results in milliseconds without compromising on SEO.
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
              Shopping Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Seamless Cart Management</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A smooth checkout process is critical for e-commerce conversion. The shopping cart is designed to be deeply interactive, allowing users to effortlessly add, remove, and adjust quantities of their favorite beauty products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              State management ensures that the cart persists reliably across sessions, maintaining a frictionless experience from product discovery all the way to payment processing.
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
              Post-Purchase
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Real-Time Order Tracking</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The user journey doesn't end at checkout. Customers are provided with a dedicated order tracking portal to keep an eye on their purchases.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From "Processing" to "Out for Delivery", users receive clear, updated statuses fetched securely from the database, giving them peace of mind and reducing customer support inquiries.
            </p>
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollSectionVariants}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                Management
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Admin Dashboard</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Behind every great store is a powerful back-office. The admin dashboard provides full CRUD capabilities for inventory management, allowing store owners to add new products, update pricing, and manage stock levels easily.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It also features order management tools where administrators can update shipping statuses and view revenue analytics, all protected by secure authentication protocols.
              </p>
            </div>
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
              {['Next.js', 'React', 'Neon Postgres', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
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
