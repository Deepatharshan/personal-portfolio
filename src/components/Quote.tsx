"use client";

import { DotPattern } from "@/components/ui/dot-pattern";

export default function Quote() {
  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden flex justify-center w-full">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-0">
        <div className="relative flex flex-col items-center border border-red-500/80 bg-background/50">
          <DotPattern width={20} height={20} className="fill-slate-500/30" />

          {/* Corner Squares */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500" />

          <div className="relative z-20 mx-auto w-full max-w-5xl rounded-[40px] px-8 py-12 md:px-12 md:py-20 xl:py-24">
            <p className="text-sm font-medium uppercase tracking-widest text-red-500 mb-6 md:mb-10 lg:text-lg">
              I believe
            </p>
            <div className="flex flex-col gap-2 md:gap-4 text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="font-bold">"Design should be</span>
                <span className="font-light text-muted-foreground/90">easy to</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="font-light text-muted-foreground/90">understand</span>
                <span className="font-bold">because</span>
                <span className="font-light text-muted-foreground/90">simple</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="font-light text-muted-foreground/90">ideas</span>
                <span className="font-bold">are quicker to</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="font-bold">grasp..."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
