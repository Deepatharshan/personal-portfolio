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
  HeroButton,
  HeroImage
} from "@/components/ui/animated-video-on-scroll";

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
    description: "An AI-powered job matching platform connecting candidates with ideal roles.",
    tech: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "RentalPro",
    category: "Full-Stack",
    description: "A comprehensive property management system for landlords and tenants.",
    tech: ["Laravel", "React", "MySQL"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "QuickPlate",
    category: "Full-Stack",
    description: "Fast and reliable food delivery application with real-time tracking.",
    tech: ["React Native", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Food Donor App",
    category: "Mobile",
    description: "Connecting surplus food from restaurants with local charities.",
    tech: ["Kotlin", "Firebase", "Google Maps API"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "E-Commerce Experience",
    category: "UI/UX",
    description: "A modern, high-conversion e-commerce storefront redesign.",
    tech: ["Figma", "Framer", "React"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80",
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
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Food Donor App Design",
    category: "UI/UX",
    description: "Interactive UI/UX design and prototyping for a food rescue and donation platform.",
    tech: ["Figma", "UI Design", "Prototyping"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "RentalPro Interface Design",
    category: "UI/UX",
    description: "Comprehensive dashboard and mobile app design system for property management.",
    tech: ["Figma", "Design System", "Prototyping"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "QuickPlate App Prototype",
    category: "UI/UX",
    description: "High-fidelity interactive prototype for a seamless food delivery experience.",
    tech: ["Figma", "User Research", "Prototyping"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
  }
];

const categories = ["All", "Full-Stack", "Mobile", "UI/UX"];

const FirstProjectHero = ({ project }: { project: any }) => {
  return (
    <ContainerScroll className="h-[250vh]">
      <ContainerSticky className="bg-background flex flex-col justify-center items-center overflow-hidden">
        
        {/* Animated Title moving down as you scroll */}
        <ContainerAnimated 
          className="absolute z-30 space-y-4 text-center top-[15%] w-full px-6"
          inputRange={[0, 0.8]}
          outputRange={[0, 100]}
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block drop-shadow-md">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
            {project.title}
          </h1>
          <p className="mx-auto max-w-2xl text-gray-200 md:text-2xl drop-shadow-xl font-medium mt-6">
            {project.description}
          </p>
        </ContainerAnimated>

        {/* The expanding image using clip-path */}
        <ContainerInset className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <HeroImage src={project.image} alt={project.title} fill />
          {/* Dark overlay that fades out slightly as the image expands */}
          <div className="absolute inset-0 bg-black/60 z-20 pointer-events-none" /> 
        </ContainerInset>
        
        {/* Buttons sliding up at the very end of the scroll */}
        <ContainerAnimated
          transition={{ delay: 0.1 }}
          outputRange={[100, 0]}
          inputRange={[0.6, 0.9]}
          className="absolute z-30 bottom-12 md:bottom-24 flex flex-wrap justify-center gap-4 px-6"
        >
          <a href={project.github}>
            <HeroButton className="border-foreground/20 text-foreground hover:bg-foreground/10 backdrop-blur-md px-6 py-3 font-bold">
              <GithubIcon size={20} className="mr-2" /> Code
            </HeroButton>
          </a>
          <a href={project.live}>
            <HeroButton className="bg-foreground text-background font-bold border-foreground px-6 py-3 hover:opacity-90">
              Live Demo <ExternalLink size={20} className="ml-2" />
            </HeroButton>
          </a>
        </ContainerAnimated>
      </ContainerSticky>
    </ContainerScroll>
  )
}

const FullScreenProject = ({ project, index }: { project: any, index: number }) => {
  return (
    <div className="h-[150vh] w-full">
      <div className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 w-full h-full group bg-background">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:blur-sm"
            draggable={false}
          />
        
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500 z-10" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex flex-col justify-end h-full">
          <div className="transform transition-transform duration-500 translate-y-24 group-hover:translate-y-0">
            
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block drop-shadow-md">
              {project.category}
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 tracking-tight drop-shadow-lg">
              {project.title}
            </h1>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl mb-8 drop-shadow-md font-medium">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-sm font-bold text-foreground bg-foreground/10 px-6 py-2 rounded-full backdrop-blur-md border border-foreground/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={project.github} className="flex justify-center items-center gap-2 px-8 py-4 bg-background/80 hover:bg-background border border-foreground/20 rounded-full text-foreground transition-colors backdrop-blur-md font-bold text-lg w-full sm:w-auto">
                  <GithubIcon size={24} /> Code
                </a>
                <a href={project.live} className="flex justify-center items-center gap-2 px-8 py-4 bg-foreground text-background hover:opacity-90 rounded-full transition-all font-bold shadow-lg text-lg w-full sm:w-auto">
                  Live Demo <ExternalLink size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
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
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            if (idx === 0) {
              return <FirstProjectHero key={project.title} project={project} />;
            }
            return (
              <FullScreenProject 
                key={project.title} 
                project={project} 
                index={idx} 
              />
            );
          })}
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-32 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
