"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton
} from "@/components/ui/animated-video-on-scroll";
import { DotPattern } from "@/components/ui/dot-pattern";

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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "CareerConnect",
    category: "Full-Stack",
    description: "An AI-powered job board matching students with employers using resume parsing and smart recommendations.",
    tech: ["Next.js", "Python", "Supabase", "Machine Learning"],
    github: "https://github.com/Deepatharshan/careerconnect",
    live: "https://careerconnect-zeta.vercel.app/",
    about: "/projects/careerconnect",
    image: "/projects/careerconnect/demo.mp4",
  },
  {
    title: "QuickPlate POS",
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
            <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
              )}
            />
          </div>
        </ContainerInset>
        
      </ContainerSticky>
    </ContainerScroll>
  )
}

const EditorialProject = ({ project, index }: { project: any, index: number }) => {
  const isVideo = project.image.endsWith('.mp4');

  return (
    <div className="sticky top-0 h-screen w-full bg-background border-t border-border/30 overflow-hidden flex items-center justify-center">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto h-full flex flex-col md:grid md:grid-cols-6 items-center">
        
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:grid grid-cols-6 border-x border-border/10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-r border-border/10 h-full w-full" />
          ))}
        </div>

        {/* Top Labels */}
        <div className="absolute top-8 left-4 md:left-8 md:col-start-1 md:col-span-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold z-20">
          {project.category}
        </div>
        <div className="absolute top-8 right-4 md:right-8 md:col-start-6 md:col-span-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold text-right z-20">
          {`0${index + 1}`}
        </div>

        {/* Image / Video (Cols 1-3) */}
        <div className="w-full h-[40vh] md:h-[75vh] md:col-start-1 md:col-end-4 md:row-start-1 relative flex items-center justify-center px-4 md:px-8 z-10 mt-20 md:mt-0">
          <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-lg md:rounded-none bg-muted/20">
            {isVideo ? (
              <video 
                src={project.image} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/10 dark:bg-transparent"></div>
          </div>
        </div>

        {/* Title (Cols 3-6 Overlap) */}
        <div className="w-full md:col-start-3 md:col-span-3 md:row-start-1 z-20 flex flex-col justify-center px-4 md:px-8 py-8 md:py-0 -mt-12 md:mt-0 md:-ml-12 lg:-ml-24">
          <h2 className="text-5xl md:text-5xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.9] font-black text-foreground uppercase tracking-tighter drop-shadow-2xl break-words">
            {project.title}.
          </h2>
          
          <div className="mt-8 flex flex-wrap gap-4">
             {project.about && (
               <a href={project.about} className="bg-foreground text-background px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors inline-block">
                 Case Study
               </a>
             )}
             {project.live && project.live !== "#" && (
               <a href={project.live} target="_blank" rel="noopener noreferrer" className="border-2 border-border bg-background/80 backdrop-blur-sm text-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest hover:border-foreground hover:bg-foreground hover:text-background transition-all inline-block">
                 Live Demo
               </a>
             )}
             {project.github && project.github !== "#" && (
               <a href={project.github} target="_blank" rel="noopener noreferrer" className="border-2 border-border bg-background/80 backdrop-blur-sm text-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest hover:border-foreground hover:bg-foreground hover:text-background transition-all inline-flex items-center gap-2">
                 <GithubIcon size={18} /> Code
               </a>
             )}
          </div>
        </div>

        {/* Description & Tech (Col 6) */}
        <div className="hidden md:flex w-full md:col-start-6 md:col-span-1 md:row-start-1 px-8 flex-col justify-center h-full z-10">
          <p className="text-xs font-medium text-foreground/80 leading-relaxed">
            {project.description}
          </p>
          <div className="mt-12 flex flex-col gap-2">
            <span className="text-[9px] uppercase tracking-widest font-bold text-foreground">Tech Stack</span>
            <div className="flex flex-col gap-1">
              {project.tech.map((t: string) => (
                 <span key={t} className="text-[10px] text-muted-foreground uppercase tracking-wider">{t}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Description */}
        <div className="md:hidden w-full px-4 pb-12 flex flex-col justify-center z-10 mt-auto">
           <p className="text-sm font-medium text-foreground/80 leading-relaxed mb-6">
            {project.description}
          </p>
           <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                 <span key={t} className="text-[10px] text-muted-foreground border border-border/50 px-2 py-1 uppercase tracking-wider">{t}</span>
              ))}
            </div>
        </div>

      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-background border-t border-border transition-colors duration-300">
      
      <div className="relative w-full">
        <IntroScrollHero />
        
        <div className="w-full relative bg-background">
          {projects.map((project, index) => (
            <EditorialProject 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
