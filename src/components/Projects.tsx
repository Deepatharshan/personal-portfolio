"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
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
    title: "HR & Payroll System",
    category: "Desktop ERP",
    company: "Built at AMP Ceylon",
    description: "An offline-first desktop HR and payroll ERP that replaced the company's legacy FoxPro system — syncing ZKTeco biometric clocks, calculating OT and statutory payroll, and printing dot-matrix reports.",
    tech: ["Electron", "React 19", "Tailwind CSS v4", "Node.js", "Express", "better-sqlite3", "ZKTeco"],
    github: null,
    live: null,
    about: "/projects/hr-payroll",
    image: "/projects/hr-payroll/cover.svg",
  },
  {
    title: "AMP Ceylon",
    category: "Full-Stack",
    description: "A comprehensive e-commerce platform for an artificial flower export company.",
    tech: ["Next.js", "PostgreSQL", "Supabase"],
    github: null,
    live: "https://amp-ceylon.vercel.app/",
    image: "/projects/amp-ceylon/AMPvideo.mp4",
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

type Project = (typeof projects)[number];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const isVideo = project.image.endsWith('.mp4');
  const hasLive = project.live && project.live !== "#";
  const hasGithub = project.github && project.github !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card hover:bg-card-hover hover:border-foreground/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      {/* Media */}
      <div className="relative aspect-video w-full overflow-hidden bg-border/40">
        {isVideo ? (
          <video
            src={project.image}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
          {project.category}
        </span>
        <span className="absolute top-4 right-4 text-xs font-bold tracking-widest text-white drop-shadow">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-black tracking-tight text-foreground">
          {project.title}
        </h3>
        {project.company && (
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary">
            {project.company}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto pt-6 flex flex-wrap gap-3">
          {project.about && (
            <a href={project.about} className="rounded-lg bg-foreground text-background px-4 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-foreground/85 transition-colors">
              More Details
            </a>
          )}
          {hasLive && (
            <a href={project.live!} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-foreground hover:border-foreground hover:bg-foreground hover:text-background transition-all">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {hasGithub && (
            <a href={project.github!} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-foreground hover:border-foreground hover:bg-foreground hover:text-background transition-all">
              <GithubIcon size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-background border-t border-border transition-colors duration-300">
      
      <div className="relative w-full">
        <IntroScrollHero />
        
        <div className="w-full relative bg-background px-4 md:px-8 py-20 md:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
