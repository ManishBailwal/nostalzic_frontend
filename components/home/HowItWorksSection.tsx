"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Camera,
  Heart,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Save the photos, little notes, places and details that make a moment yours.",
    icon: Camera,
    bg: "#FFF0E7",
    iconColor: "#F28C6B",
  },
  {
    number: "02",
    title: "Remember",
    description:
      "Bring everything together and turn scattered moments into stories you can revisit.",
    icon: Heart,
    bg: "#FFE6EC",
    iconColor: "#E85D75",
  },
  {
    number: "03",
    title: "Keep",
    description:
      "Preserve your favorite memories as beautiful stories and keepsakes you'll treasure.",
    icon: BookOpen,
    bg: "#F1EBFF",
    iconColor: "#8B76D8",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F7] py-32 sm:py-40">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#FFF0E7]/60 blur-3xl" />

        <div className="absolute right-[-180px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#F1EBFF]/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#E85D75]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6E6575]">
              How it works
            </span>
          </div>

          <h2 className="font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.04em] text-[#302A3D] sm:text-[60px] lg:text-[70px]">
            Three steps.
            <br />
            <span className="italic text-[#E85D75]">
              One beautiful story.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-8 text-[#6E6575]">
            From the moment you capture something special to the day you
            look back on it years later, Nostalzic keeps the story together.
          </p>
        </motion.div>

        {/* =========================================================
            STEPS
        ========================================================== */}

        <div className="relative mt-20">
          {/* Connecting line — desktop */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[76px] hidden h-px bg-[#E6D9DD] lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.15,
                  }}
                  className="group relative"
                >
                  {/* Number / icon */}
                  <div className="relative z-10 flex justify-center">
                    <motion.div
                      whileHover={{ y: -4, rotate: 2 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      className="flex h-[152px] w-[152px] items-center justify-center rounded-full border border-[#F0E6E8] bg-white shadow-[0_15px_40px_rgba(48,42,61,0.08)]"
                    >
                      <div
                        className="flex h-[92px] w-[92px] items-center justify-center rounded-full"
                        style={{ backgroundColor: step.bg }}
                      >
                        <Icon
                          className="h-8 w-8"
                          style={{ color: step.iconColor }}
                          strokeWidth={1.7}
                        />
                      </div>
                    </motion.div>

                    {/* Number badge */}
                    <div className="absolute right-[calc(50%-82px)] top-[-5px] flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#302A3D] shadow-sm">
                      <span className="text-[9px] font-bold tracking-wider text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-9 text-center">
                    <h3 className="font-serif text-[30px] tracking-[-0.02em] text-[#302A3D]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-[14px] leading-7 text-[#6E6575]">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-[-14px] top-[66px] z-20 hidden h-7 w-7 items-center justify-center rounded-full border border-[#F0E6E8] bg-white lg:flex">
                      <ArrowRight className="h-3.5 w-3.5 text-[#9B929F]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-24 flex max-w-2xl items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-[#E6D9DD]" />

          <div className="flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white px-5 py-3 shadow-sm">
            <Heart className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />

            <span className="text-xs font-medium text-[#6E6575]">
              From a moment to something worth keeping.
            </span>
          </div>

          <div className="h-px flex-1 bg-[#E6D9DD]" />
        </motion.div>
      </div>
    </section>
  );
}