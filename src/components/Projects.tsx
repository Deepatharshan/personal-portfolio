"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton
} from "@/components/ui/animated-video-on-scroll";
import { SparklesCore } from "@/components/ui/sparkles";

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

const projects = [
  {
    title: "CareerConnect AI",
    category: "Full-Stack",
    description: "A highly scalable microservices architecture leveraging Docker and Kubernetes, featuring a React frontend for AI-powered job matching.",
    tech: ["React", "Docker", "Kubernetes", "Microservices"],
    github: "https://github.com/Deepatharshan/CareerConnect_AI",
    about: "/projects/careerconnect",
    live: null,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },

  {
    title: "QuickPlate",
    category: "Full-Stack",
    description: "A comprehensive restaurant management dashboard with table QR ordering and real-time notification sounds.",
    tech: ["PHP", "Laravel", "React", "MySQL", "DigitalOcean"],
    github: null,
    live: null,
    about: "/projects/quickplate",
    image: "/projects/quickplate/cover.png",
  },
  {
    title: "SWAG Clothing Store",
    category: "Full-Stack",
    description: "A trendy e-commerce platform built with the MERN stack, featuring advanced filtering, seamless checkout, and a comprehensive admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Deepatharshan/Swag_clothing",
    live: null,
    about: "/projects/swag-clothing",
    image: "/projects/swag-clothing/cover-light.png",
  },
  {
    title: "Glowing Beauty Care",
    category: "Full-Stack",
    description: "A full-stack beauty care e-commerce platform with comprehensive filtering, order tracking, and an admin dashboard.",
    tech: ["Next.js", "Neon Postgres", "React"],
    github: null,
    live: "https://beauty-care-buzsmvstf-deepatharshans-projects.vercel.app/",
    about: "/projects/beauty-care",
    image: "/projects/beauty-care/cover.png",
  },
  {
    title: "Seaside Booking",
    category: "Full-Stack",
    description: "A seamless hotel booking experience with payment integration.",
    tech: ["Next.js", "Stripe", "Prisma"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "FitLife Gym App Design",
    category: "UI/UX",
    description: "A fully prototyped fitness application featuring workout tracking and community engagement.",
    tech: ["Figma", "Prototyping", "Wireframing"],
    github: null,
    live: "https://www.figma.com/design/Cg6l51IA0oip58PiBA1sDe/FintnessApp?node-id=0-1&t=2IrPTqILpk8rAgUK-1",
    about: "/projects/fitlife",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Zero Hunger App Design",
    category: "UI/UX",
    description: "Interactive UI/UX design and prototyping for a food rescue and donation platform.",
    tech: ["Figma", "UI Design", "Prototyping"],
    github: null,
    live: "https://www.figma.com/design/ZjzdRfwEmFi57KZbDCcObm/Zero-hunger?node-id=0-1&t=e1ae0HLTyNFexZhl-1",
    image: "/projects/zerohunger/cover.png",
  },
  {
    title: "RentalPro Interface Design",
    category: "UI/UX",
    description: "Comprehensive website and dashboard design system for property management.",
    tech: ["Figma", "Design System", "Prototyping"],
    github: null,
    live: "https://www.figma.com/design/tPRiGqwUjnwjxkG7Tatw9P/Rental-Pro-Mock-Up?node-id=0-1&t=E0NHGAUqRROgBWwU-1",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=1400&q=80",
  }
];

const categories = ["All", "Full-Stack", "Mobile", "UI/UX"];

const IntroScrollHero = () => {
  return (
    <ContainerScroll className="h-[250vh]">
      <ContainerSticky className="bg-background flex flex-col justify-center items-center overflow-hidden">
        
        <ContainerAnimated 
          className="absolute z-30 space-y-4 text-center top-[15%] w-full px-6"
          inputRange={[0, 0.8]}
          outputRange={[0, 100]}
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block drop-shadow-md">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
            View My Projects
          </h1>
          <p className="mx-auto max-w-2xl text-gray-200 md:text-2xl drop-shadow-xl font-medium mt-6">
            Explore a curated selection of my latest full-stack applications, UI/UX case studies, AI integrations, and custom model training. 
            Scroll down to dive into the details.
          </p>
        </ContainerAnimated>

        <ContainerInset className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-slate-900 border border-slate-700/80 rounded-2xl md:rounded-3xl shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)] overflow-hidden">
          {/* Glowing Top Edges */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500/80 to-transparent h-[2px] w-3/4 blur-sm z-40" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-400 to-transparent h-px w-3/4 z-40" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500/80 to-transparent h-[5px] w-1/4 blur-sm z-40" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/4 z-40" />

          <div className="absolute inset-0 z-30 opacity-100">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.8}
              maxSize={2}
              particleDensity={120}
              className="w-full h-full"
              particleColor="#E0E7FF"
              speed={1.5}
            />
          </div>
          
          {/* Radial Gradient to fade out sparkles at the edges smoothly */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(500px_300px_at_top,transparent_20%,white)] z-40"></div>
        </ContainerInset>
        
      </ContainerSticky>
    </ContainerScroll>
  )
}

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl overflow-hidden border border-border group hover:border-primary/30 transition-colors flex flex-col h-full bg-foreground/5 backdrop-blur-md"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
           {project.github && project.github !== "#" && (
             <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors" title="Source Code">
               <GithubIcon size={20} />
             </a>
           )}
           {project.live && project.live !== "#" && (
             <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity" title="Live Demo">
               <ExternalLink size={20} />
             </a>
           )}
           {project.about && (
             <a href={project.about} className="px-4 py-2 font-bold bg-background text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors" title="Read Case Study">
               Case Study
             </a>
           )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{project.category}</div>
        <h4 className="text-xl font-bold text-foreground mb-3">{project.title}</h4>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech: string) => (
            <span key={tech} className="text-[10px] font-bold tracking-wider uppercase bg-foreground/10 px-2 py-1 rounded-sm text-foreground/80">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] font-bold tracking-wider uppercase bg-foreground/10 px-2 py-1 rounded-sm text-foreground/80">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-20">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Selected Works
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full pb-32">
        <IntroScrollHero />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-32 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
