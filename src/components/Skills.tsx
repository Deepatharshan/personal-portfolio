"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Database, 
  Layout, 
  Cloud, 
  GitBranch, 
  TestTube, 
  Calculator, 
  Wrench,
  Server
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
    ]
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertDark: true },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ]
  },
  {
    title: "Architecture",
    icon: <Server className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "Microservices", logo: null },
      { name: "REST API", logo: null },
      { name: "Event-Driven (Kafka)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg", invertDark: true },
      { name: "MVC", logo: null },
      { name: "Spring Cloud Eureka", logo: null },
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Neon", logo: null },
      { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
    ]
  },
  {
    title: "UI/UX Design",
    icon: <Layout className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Wireframing", logo: null },
      { name: "Prototyping", logo: null },
      { name: "AI-Assisted Design", logo: null },
      { name: "User-Centered Design", logo: null },
    ]
  },
  {
    title: "Deployment",
    icon: <Cloud className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Docker Compose", logo: null },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invertDark: true },
    ]
  },
  {
    title: "Version Control",
    icon: <GitBranch className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true },
      { name: "Branching Workflows", logo: null },
      { name: "Pull Requests", logo: null },
      { name: "Code Review", logo: null },
    ]
  },
  {
    title: "Testing",
    icon: <TestTube className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "Unit Testing", logo: null },
      { name: "Integration Testing", logo: null },
      { name: "TDD", logo: null },
    ]
  },
  {
    title: "Mathematics",
    icon: <Calculator className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "Algorithms", logo: null },
      { name: "Logic", logo: null },
      { name: "Data Structures", logo: null },
      { name: "Strong Mathematical Foundation", logo: null },
    ]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6 mb-4 text-primary" />,
    skills: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
      { name: "R Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Technical Arsenal
          </h3>
        </div>

        {/* Masonry Layout for flexible height categories */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
              className="break-inside-avoid glass p-8 rounded-2xl border-border hover:border-primary/30 transition-colors"
            >
              {category.icon}
              <h4 className="text-xl font-bold mb-6 text-foreground tracking-tight">{category.title}</h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.05) + (index * 0.05) }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 transition-all cursor-default"
                  >
                    {skill.logo && (
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`} 
                        className={`w-5 h-5 object-contain ${skill.invertDark ? 'dark:invert dark:opacity-80' : ''}`}
                      />
                    )}
                    <span className="text-sm font-semibold text-foreground/80 tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
