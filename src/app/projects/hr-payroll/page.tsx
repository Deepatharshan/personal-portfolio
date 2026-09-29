"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Building2 } from "lucide-react";

const highlights = [
  { label: "Legacy Replaced", value: "FoxPro" },
  { label: "Architecture", value: "Offline-First" },
  { label: "Hardware", value: "ZKTeco :4370" },
  { label: "Role", value: "Solo, End-to-End" },
];

const features = [
  {
    tag: "Modernization",
    title: "From Legacy FoxPro to a Modern Desktop ERP",
    body: [
      "AMP Ceylon was running HR and payroll on outdated FoxPro software backed by manual spreadsheets, which was slow, hard to maintain and easy to get wrong. I redesigned the whole thing as one modern desktop application covering HR, attendance, payroll and reporting.",
      "It is built with Electron and React 19 on the front end and a local Node.js/Express service on top of better-sqlite3. It runs fully offline on the office machine, so payroll never depends on an internet connection.",
    ],
  },
  {
    tag: "Data Migration",
    title: "Database Re-Architecture & Migration",
    body: [
      "I restructured the old FoxPro data into a new, normalized SQLite schema for employees, attendance, overtime, loans, advances and payroll history, then migrated the existing company records into it.",
      "The new structure keeps history intact while making the data easy to query for reports and future features.",
    ],
  },
  {
    tag: "Hardware Integration",
    title: "Real-Time Biometric Attendance Sync",
    body: [
      "The system talks directly to ZKTeco biometric time clocks over their TCP/UDP socket protocol on port 4370, pulling punch records from the physical devices into the database automatically.",
      "Attendance is no longer re-typed by hand. Punches flow straight from the fingerprint clock into the attendance and OT calculations.",
    ],
  },
  {
    tag: "Calculation Engines",
    title: "OT & Statutory Payroll Engine",
    body: [
      "An overtime engine calculates OT at 1.5× for normal days and 2.0× for holidays. The payroll engine then applies Sri Lankan statutory deductions and contributions: EPF 8% (employee), EPF 12% (employer), ETF 3% and stamp duty.",
      "Staff loans and salary advances are tracked and deducted automatically each pay cycle, so the net salary is computed in one consistent run.",
    ],
  },
  {
    tag: "Reports",
    title: "Report Generation, Dot-Matrix Printing & Bank Exports",
    body: [
      "I built report generation for payslips and payroll summaries, including formatting for industrial dot-matrix printers on continuous paper, the printers the company already uses.",
      "Bank transfer export files are generated straight from the payroll run, so salaries can be uploaded to the bank without manual preparation.",
    ],
  },
  {
    tag: "Security",
    title: "PIN-Locked Payroll Guard",
    body: [
      "Sensitive salary data sits behind a secure PIN lock, so only authorized staff can open payroll screens and reports, even on a shared office computer.",
    ],
  },
  {
    tag: "Quality Assurance",
    title: "Testing & Rollout",
    body: [
      "I handled testing myself: I checked OT, EPF/ETF, loan and advance calculations against the company's existing payroll figures, tested device sync with the real ZKTeco clocks, and confirmed printed and exported output before the system went into daily use.",
    ],
  },
];

const tech = ["Electron", "React 19", "Tailwind CSS v4", "Node.js", "Express", "better-sqlite3", "ZKTeco TCP/UDP"];

export default function HRPayrollPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const scrollSectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 selection:bg-primary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Projects
        </Link>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          {/* Header Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20">
              <Building2 size={14} /> AMP Ceylon · Company Project
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-sm">
              HR &amp; Payroll System
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
              An offline-first desktop ERP I built for my current company, AMP Ceylon, to replace an outdated
              FoxPro system and manual spreadsheets. It combines HR, biometric attendance, overtime, statutory payroll
              and report generation in one application. I did the design, database migration, development and testing myself.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-2xl border border-border bg-card p-5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted">{h.label}</div>
                  <div className="mt-2 text-lg font-black tracking-tight">{h.value}</div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border bg-card"
          >
            <Image src="/projects/hr-payroll/cover.svg" alt="HR & Payroll System dashboard" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

        {/* Scroll Animated Features */}
        <div className="mt-32 space-y-32 md:space-y-48 pb-24 max-w-4xl mx-auto">
          {features.map((f) => (
            <motion.section
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scrollSectionVariants}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                {f.tag}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{f.title}</h2>
              {f.body.map((para, i) => (
                <p key={i} className={i === 0 ? "text-xl text-muted leading-relaxed" : "text-lg text-muted leading-relaxed"}>
                  {para}
                </p>
              ))}
            </motion.section>
          ))}

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
              {tech.map((t) => (
                <span key={t} className="px-6 py-3 bg-card border border-border rounded-full text-sm font-bold tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
