"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Sparkles } from "lucide-react";

const memories = [
  {
    label: "A random Tuesday",
    text: "The day you laughed until your stomach hurt.",
    rotate: -5,
    position: "left-[7%] top-[18%]",
    bg: "bg-[#FFF7D6]",
  },
  {
    label: "That trip",
    text: "The place you promised you'd visit again.",
    rotate: 4,
    position: "right-[8%] top-[24%]",
    bg: "bg-[#EAF8EF]",
  },
  {
    label: "Her birthday",
    text: "The little moment nobody thought to photograph.",
    rotate: -3,
    position: "left-[13%] bottom-[15%]",
    bg: "bg-[#F1EBFF]",
  },
];

export default function EmotionalHookSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F7] py-32 sm:py-40">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE6EC]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#F28C6B]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6E6575]">
              Why we remember
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-serif text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-[#302A3D] sm:text-[58px] lg:text-[72px]"
          >
            Some moments are too
            <br />
            beautiful to{" "}
            <span className="italic text-[#E85D75]">be forgotten.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-[#6E6575]"
          >
            We take hundreds of photos. We live thousands of moments.
            Somehow, the little things that made those days special
            disappear with time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-3 max-w-xl text-[17px] leading-8 text-[#6E6575]"
          >
            Nostalzic is a place to keep more than the picture.
            Keep the feeling, the story, and everything in between.
          </motion.p>
        </div>

        {/* Floating memory notes */}
        <div className="relative mx-auto mt-24 h-[380px] max-w-5xl">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.label}
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              className={`absolute ${memory.position} hidden w-[210px] rounded-[22px] p-5 shadow-[0_15px_35px_rgba(48,42,61,0.08)] sm:block ${memory.bg}`}
              style={{
                rotate: `${memory.rotate}deg`,
              }}
            >
              <Heart className="mb-4 h-4 w-4 fill-[#E85D75] text-[#E85D75]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9B929F]">
                {memory.label}
              </p>

              <p className="mt-2 font-serif text-[16px] leading-6 text-[#302A3D]">
                {memory.text}
              </p>
            </motion.div>
          ))}

          {/* Center camera */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-[#F0E6E8] bg-white shadow-[0_25px_60px_rgba(48,42,61,0.10)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#FFE6EC]">
              <Camera className="h-7 w-7 text-[#E85D75]" />
            </div>
          </motion.div>

          {/* Connecting dots */}
          <div className="absolute left-1/2 top-1/2 hidden h-[240px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#E6D9DD] sm:block" />
        </div>
      </div>
    </section>
  );
}