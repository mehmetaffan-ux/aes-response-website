"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Radio, Waves } from "lucide-react";

export function AnimatedHeroVessel() {
  const reduceMotion = useReducedMotion();
  const float = reduceMotion
    ? {}
    : {
        y: [0, -8, 0],
        rotate: [0, -0.6, 0.4, 0],
      };

  return (
    <div
      className="relative mx-auto aspect-[1.05] w-full max-w-[560px] rounded-lg border border-cyan-200/18 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-6"
      aria-label="Animated ship-to-ship cargo transfer visual"
    >
      <div className="absolute inset-0 rounded-lg bg-[linear-gradient(115deg,rgba(111,156,188,0.10),transparent_35%,rgba(251,191,36,0.06))]" />
      <div className="absolute inset-4 rounded-lg border border-cyan-200/10" />

      <motion.div
        className="radar-sweep absolute right-7 top-7 size-28 rounded-full border border-cyan-200/20 opacity-80"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-3 rounded-full border border-cyan-200/15" />
        <div className="absolute inset-9 rounded-full border border-cyan-200/15" />
        <Radio className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-cyan-200" />
      </motion.div>

      <div className="absolute inset-x-8 bottom-16 h-24 overflow-hidden rounded-lg border border-cyan-200/10 bg-cyan-950/20">
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-8 flex gap-8 text-cyan-200/35"
          animate={reduceMotion ? {} : { x: [-40, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <Waves key={index} className="h-9 w-16 shrink-0" strokeWidth={1.2} />
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-7 bottom-[132px] z-10 flex items-center justify-center gap-5 sm:gap-7">
        <motion.div
          className="relative h-28 w-[38%] rounded-[8px] border border-cyan-100/20 bg-slate-800 shadow-2xl shadow-black/30"
          animate={float}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-3 right-3 top-3 h-5 rounded bg-cyan-100/10" />
          <div className="absolute bottom-0 left-1/2 h-0 w-[112%] -translate-x-1/2 border-x-[28px] border-b-[34px] border-x-transparent border-b-slate-700" />
          <div className="absolute -bottom-9 left-1/2 h-10 w-[116%] -translate-x-1/2 rounded-b-[40%] bg-slate-900" />
          <div className="absolute bottom-8 left-4 right-4 h-2 rounded bg-cyan-300/40" />
          <span className="absolute left-4 top-11 text-xs font-semibold text-cyan-100">
            Casualty vessel
          </span>
        </motion.div>

        <div className="z-20 grid gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.span
              key={index}
              className="block size-5 rounded-full border border-amber-200/50 bg-amber-300/80 shadow-lg shadow-amber-950/30"
              animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: index * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative h-28 w-[38%] rounded-[8px] border border-cyan-100/20 bg-slate-800 shadow-2xl shadow-black/30"
          animate={float}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="absolute left-3 right-3 top-3 h-5 rounded bg-teal-100/10" />
          <div className="absolute bottom-0 left-1/2 h-0 w-[112%] -translate-x-1/2 border-x-[28px] border-b-[34px] border-x-transparent border-b-slate-700" />
          <div className="absolute -bottom-9 left-1/2 h-10 w-[116%] -translate-x-1/2 rounded-b-[40%] bg-slate-900" />
          <div className="absolute bottom-8 left-4 right-4 h-2 rounded bg-teal-300/40" />
          <span className="absolute right-4 top-11 text-right text-xs font-semibold text-cyan-100">
            Receiving vessel
          </span>
        </motion.div>
      </div>

      <svg
        className="absolute inset-x-9 bottom-[182px] z-30 h-24 text-cyan-200"
        viewBox="0 0 420 96"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M45 58 C120 24 300 24 375 58"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="10 12"
          initial={reduceMotion ? false : { pathLength: 0.2, opacity: 0.55 }}
          animate={reduceMotion ? {} : { pathLength: [0.2, 1, 0.2], opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="absolute left-6 top-7 rounded-lg border border-cyan-200/15 bg-slate-950/70 px-4 py-3 backdrop-blur">
        <p className="text-xs font-semibold uppercase text-cyan-200">
          Transfer control
        </p>
        <p className="mt-1 text-sm text-slate-300">Fenders, hose, watchkeeping</p>
      </div>

      <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
        {["Feasibility", "Mobilization", "Controlled transfer"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-cyan-200/12 bg-slate-950/70 px-3 py-2 text-center text-xs font-semibold text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
