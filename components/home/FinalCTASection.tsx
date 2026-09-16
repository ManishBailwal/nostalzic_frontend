"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Heart,
  Sparkles,
} from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#302A3D] py-32 sm:py-40 lg:py-48">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Pink glow */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#E85D75]/20 blur-3xl"
        />

        {/* Peach glow */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-200px] right-[-120px] h-[500px] w-[500px] rounded-full bg-[#F28C6B]/15 blur-3xl"
        />

        {/* Yellow glow */}

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2C94C]/10 blur-3xl" />

        {/* Tiny decorative dots */}

        <div className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-[#E85D75]/60" />

        <div className="absolute right-[16%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#F2C94C]/70" />

        <div className="absolute bottom-[25%] left-[20%] h-1.5 w-1.5 rounded-full bg-[#8B76D8]/70" />

        <div className="absolute bottom-[20%] right-[25%] h-2 w-2 rounded-full bg-[#F28C6B]/60" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        {/* Small eyebrow */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#F2C94C]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E9DCE3]">
            Your story starts here
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mx-auto mt-9 max-w-4xl font-serif text-[48px] font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-[66px] lg:text-[82px]"
        >
          One day,
          <br />
          <span className="italic text-[#E85D75]">
            today
          </span>{" "}
          will be
          <br />
          nostalgia.
        </motion.h2>

        {/* Supporting copy */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="mx-auto mt-8 max-w-xl text-[16px] leading-8 text-[#E9DCE3]"
        >
          Start keeping the moments you'll want to come back to.
          The photos, the stories, the people and all the little things
          in between.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{
              scale: 1.025,
              boxShadow: "0 15px 35px rgba(232, 93, 117, 0.30)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-[16px] bg-[#E85D75] px-8 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(232,93,117,0.22)] transition-colors hover:bg-[#C9435D]"
          >
            Start your story

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-[56px] items-center justify-center gap-2 rounded-[16px] border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            <Camera className="h-4 w-4 text-[#F2C94C]" />

            See how it works
          </motion.button>
        </motion.div>

        {/* Bottom emotional line */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-white/15" />

          <Heart className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />

          <span className="font-serif text-sm italic text-white/50">
            For the moments that matter.
          </span>

          <Heart className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />

          <div className="h-px w-12 bg-white/15" />
        </motion.div>
      </div>
    </section>
  );
}