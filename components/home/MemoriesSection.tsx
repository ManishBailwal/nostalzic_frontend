"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Cake,
  Coffee,
  Heart,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

const memoryTypes = [
  {
    title: "The places",
    description: "Trips, escapes and places you'll always remember.",
    icon: MapPin,
    image: "/timeline2.png",
    eyebrow: "ADVENTURES",
    meta: "12 memories",
    date: "JUNE · 2026",
    className: "md:row-span-2 min-h-[540px]",
    iconColor: "#F28C6B",
  },
  {
    title: "The people",
    description: "The ones who made ordinary days extraordinary.",
    icon: Users,
    image: "/people.png",
    eyebrow: "TOGETHER",
    meta: "28 memories",
    date: "THE PEOPLE",
    className: "min-h-[260px]",
    iconColor: "#5EAA78",
  },
  {
    title: "The celebrations",
    description: "Birthdays, weddings, festivals and milestones.",
    icon: Cake,
    image: "/timeline3.png",
    eyebrow: "MILESTONES",
    meta: "16 memories",
    date: "SPECIAL DAYS",
    className: "min-h-[260px]",
    iconColor: "#C49B24",
  },
  {
    title: "The little things",
    description: "Coffee dates, sunsets and random Tuesdays.",
    icon: Coffee,
    image: "/little_thing.png",
    eyebrow: "EVERYDAY",
    meta: "43 memories",
    date: "LITTLE MOMENTS",
    className: "md:col-span-2 min-h-[300px]",
    iconColor: "#8B76D8",
  },
];

export default function MemoriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 sm:py-40">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#FFE6EC]/45 blur-3xl" />

        <div className="absolute right-[-180px] top-[40%] h-[500px] w-[500px] rounded-full bg-[#F1EBFF]/45 blur-3xl" />

        <div className="absolute bottom-[-180px] left-[35%] h-[400px] w-[400px] rounded-full bg-[#FFF7D6]/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}

            <div className="mb-6 inline-flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#E85D75]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9B929F]">
                Your memories
              </span>
            </div>

            {/* Heading */}

            <h2 className="font-serif text-[46px] leading-[1.02] tracking-[-0.045em] text-[#302A3D] sm:text-[60px] lg:text-[72px]">
              Your life,
              <br />

              <span className="italic text-[#E85D75]">
                in memories.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-[16px] leading-8 text-[#6E6575]">
              Not everything needs to become an album. Sometimes one
              photo, one sentence, or one tiny detail is enough to bring
              an entire day back.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-10 bg-[#E6D9DD]" />

              <span className="font-serif text-sm italic text-[#9B929F]">
                Keep what matters.
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            MEMORY COLLAGE
        ========================================================== */}

        <div className="mt-16 grid auto-rows-auto gap-5 md:grid-cols-3">

          {memoryTypes.map((memory, index) => {
            const Icon = memory.icon;

            return (
              <motion.article
                key={memory.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`group relative overflow-hidden rounded-[30px] border border-[#F0E6E8] bg-[#FFF9F7] shadow-[0_12px_35px_rgba(48,42,61,0.05)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(48,42,61,0.12)] ${memory.className}`}
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="absolute inset-0">
                  <Image
                    src={memory.image}
                    alt={memory.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                  />

                  {/* Image wash */}

                  <div className="absolute inset-0 bg-gradient-to-b from-black/[0.05] via-transparent to-black/70" />

                  {/* Warm tint */}

                  <div className="absolute inset-0 bg-[#302A3D]/[0.04] mix-blend-multiply" />
                </div>

                {/* =================================================
                    TOP META
                ================================================== */}

                <div className="absolute left-6 right-6 top-6 z-10 flex items-start justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/80 px-3 py-2 backdrop-blur-xl">
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{
                        color: memory.iconColor,
                      }}
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#302A3D]">
                      {memory.eyebrow}
                    </span>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/75 backdrop-blur-xl transition-transform duration-500 group-hover:rotate-12">
                    <Heart
                      className="h-3.5 w-3.5 text-[#E85D75] transition-all duration-300 group-hover:fill-[#E85D75]"
                    />
                  </div>
                </div>

                {/* =================================================
                    BOTTOM CONTENT
                ================================================== */}

                <div className="absolute bottom-0 left-0 right-0 z-10 p-7 sm:p-8">

                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65">
                      {memory.date}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/50" />

                    <span className="text-[9px] text-white/65">
                      {memory.meta}
                    </span>
                  </div>

                  <h3 className="font-serif text-[32px] leading-[1.05] tracking-[-0.025em] text-white sm:text-[36px]">
                    {memory.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-white/75">
                    {memory.description}
                  </p>

                  {/* Bottom interaction */}

                  <div className="mt-5 flex items-center gap-2 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                      Explore memories
                    </span>

                    <span className="text-white">
                      →
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================================
            MEMORY STATEMENT
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#E6D9DD]" />

            <Heart className="h-4 w-4 fill-[#E85D75] text-[#E85D75]" />

            <div className="h-px w-10 bg-[#E6D9DD]" />
          </div>

          <p className="font-serif text-[20px] italic text-[#9B929F]">
            Because the little things often become
            <br className="sm:hidden" /> the biggest memories.
          </p>
        </motion.div>

        {/* =========================================================
            FLOATING MEMORY COUNTER
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="pointer-events-none absolute -right-3 top-[45%] hidden lg:block"
        >
          <div className="rotate-[-6deg] rounded-[18px] border border-[#F0E6E8] bg-white/90 px-5 py-4 shadow-[0_15px_40px_rgba(48,42,61,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE6EC]">
                <Camera className="h-4 w-4 text-[#E85D75]" />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9B929F]">
                  Every moment
                </p>

                <p className="font-serif text-lg text-[#302A3D]">
                  deserves a place.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small decorative sparkle */}

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[-10px] top-[48%] hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF7D6] shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-[#F2C94C]" />
        </motion.div>
      </div>
    </section>
  );
}