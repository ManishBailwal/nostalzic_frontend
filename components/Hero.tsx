
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Heart,
  Sparkles,
  Plane,
  CalendarDays,
  BookOpen,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF9F7]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Peach glow */}

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#FFF0E7] blur-3xl"
        />

        {/* Yellow glow */}

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#FFF7D6] blur-3xl"
        />

        {/* Pink glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[42%] top-[18%] h-[300px] w-[300px] rounded-full bg-[#FFE6EC]/70 blur-3xl"
        />

        {/* Lavender glow */}

        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-180px] right-[10%] h-[480px] w-[480px] rounded-full bg-[#F1EBFF]/80 blur-3xl"
        />

        {/* Mint glow */}

        <div className="absolute bottom-[5%] left-[10%] h-48 w-48 rounded-full bg-[#EAF8EF]/70 blur-3xl" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative z-10 max-w-xl"
          >
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <Sparkles
                className="h-3.5 w-3.5 text-[#F2A45B]"
                strokeWidth={2}
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6E6575]">
                Beautiful moments, beautifully kept
              </span>
            </motion.div>

            {/* Heading */}

            <h1 className="font-serif text-[52px] font-medium leading-[1.02] tracking-[-0.045em] text-[#302A3D] sm:text-[64px] lg:text-[76px]">
              One day,
              <br />

              <span className="italic text-[#E85D75]">today</span>{" "}
              will be
              <br />

              nostalgia.
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-lg text-[17px] leading-8 text-[#6E6575]">
              Capture the vacations, dinners, celebrations, adventures
              and little moments that make your life beautiful.
            </p>

            <p className="mt-2 max-w-lg text-[17px] leading-8 text-[#6E6575]">
              Keep them together. Then turn your story into something
              you can hold, cherish and gift.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-[16px] bg-[#E85D75] px-7 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(201,67,93,0.20)] transition-colors hover:bg-[#C9435D]"
              >
                Start your story

                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-[56px] items-center justify-center gap-2 rounded-[16px] border border-[#E6D9DD] bg-white/80 px-7 text-sm font-semibold text-[#302A3D] shadow-sm backdrop-blur-sm transition hover:bg-white"
              >
                <BookOpen className="h-4 w-4 text-[#E85D75]" />

                See how it works
              </motion.button>
            </div>

            {/* Small information row */}

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFE6EC]">
                  <Heart className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />
                </div>

                <span className="text-xs text-[#9B929F]">
                  Made for moments that matter
                </span>
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-[#D5C6CC] sm:block" />

              <span className="text-xs text-[#9B929F]">
                From moments to keepsakes
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto h-[620px] w-full max-w-[610px]"
          >
            {/* ===================================================
                DECORATIVE SHAPES
            ==================================================== */}

            <div className="absolute right-[7%] top-[5%] h-20 w-20 rounded-full bg-[#FFF7D6]" />

            <div className="absolute left-[3%] top-[17%] h-10 w-10 rounded-full bg-[#EAF8EF]" />

            <div className="absolute bottom-[10%] left-[3%] h-16 w-16 rounded-full bg-[#FFE6EC]" />

            <div className="absolute bottom-[20%] right-[2%] h-12 w-12 rounded-full bg-[#F1EBFF]" />

            {/* ===================================================
                FLOATING PLANE
            ==================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-8, -2, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[5%] top-[7%] z-30 flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white shadow-[0_12px_30px_rgba(48,42,61,0.10)]"
            >
              <Plane className="h-5 w-5 text-[#71B7E6]" />
            </motion.div>

            {/* ===================================================
                MAIN PHOTO
            ==================================================== */}

            <motion.div
              animate={{
                rotate: [-1.5, 0.5, -1.5],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[10%] top-[7%] z-10 w-[68%] rounded-[28px] bg-white p-3 shadow-[0_30px_80px_rgba(48,42,61,0.15)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src="/life.png"
                  alt="A beautiful Nostalzic memory"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 65vw, 430px"
                />

                {/* Photo gradient */}

                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                {/* Photo details */}

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Goa · March 2027
                    </p>

                    <h3 className="mt-1 font-serif text-2xl italic text-white">
                      Just us.
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Heart className="h-4 w-4 fill-white text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                MEMORY NOTE
            ==================================================== */}

            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [4, 6, 4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[0%] top-[42%] z-30 w-[175px] rounded-[20px] bg-[#FFF7D6] p-4 shadow-[0_12px_30px_rgba(48,42,61,0.08)]"
            >
              <Heart className="mb-3 h-4 w-4 fill-[#E85D75] text-[#E85D75]" />

              <p className="font-serif text-[15px] leading-6 text-[#302A3D]">
                “I don't remember what we were laughing about…
                but I remember being happy.”
              </p>
            </motion.div>

            {/* ===================================================
                MEMORY STATS CARD
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
                duration: 0.6,
              }}
              className="absolute bottom-[18%] right-[0%] z-30 w-[225px] rounded-[22px] border border-[#F0E6E8] bg-white p-4 shadow-[0_15px_35px_rgba(48,42,61,0.10)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF0E7]">
                  <Camera className="h-4 w-4 text-[#F28C6B]" />
                </div>

                <span className="text-[10px] text-[#9B929F]">
                  This year
                </span>
              </div>

              <p className="mt-4 font-serif text-lg text-[#302A3D]">
                Our memories
              </p>

              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-semibold text-[#302A3D]">
                  27
                </span>

                <span className="mb-1 text-xs text-[#9B929F]">
                  beautiful moments
                </span>
              </div>

              {/* Color indicators */}

              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-10 rounded-full bg-[#E85D75]" />
                <span className="h-1.5 w-6 rounded-full bg-[#F28C6B]" />
                <span className="h-1.5 w-6 rounded-full bg-[#8B76D8]" />
                <span className="h-1.5 w-6 rounded-full bg-[#71B7E6]" />
              </div>
            </motion.div>

            {/* ===================================================
                CALENDAR / BOOK PROMPT
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              className="absolute bottom-[5%] left-[17%] z-40 flex items-center gap-3 rounded-2xl border border-[#F0E6E8] bg-white px-4 py-3 shadow-[0_10px_25px_rgba(48,42,61,0.08)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1EBFF]">
                <CalendarDays className="h-4 w-4 text-[#8B76D8]" />
              </div>

              <div>
                <p className="text-[9px] font-medium uppercase tracking-wider text-[#9B929F]">
                  Her birthday
                </p>

                <p className="text-xs font-semibold text-[#302A3D]">
                  Create a book ❤️
                </p>
              </div>
            </motion.div>

            {/* ===================================================
                BOOK
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotate: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: 5,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="absolute bottom-[4%] right-[9%] z-50 w-[46%] max-w-[250px]"
            >
              <div className="rounded-[20px] bg-white p-2 shadow-[0_25px_55px_rgba(48,42,61,0.22)]">
                <div className="relative overflow-hidden rounded-[14px] bg-[#302A3D] px-5 py-8 text-center">
                  {/* Decorative circle */}

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E85D75]/20 blur-2xl" />

                  <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-[#8B76D8]/20 blur-2xl" />

                  <div className="relative mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#F2C94C]/60">
                    <Heart className="h-4 w-4 fill-[#F2C94C] text-[#F2C94C]" />
                  </div>

                  <p className="relative mt-4 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#F2C94C]">
                    Nostalzic
                  </p>

                  <h3 className="relative mt-3 font-serif text-[21px] leading-tight text-white">
                    Our Year
                    <br />
                    Together
                  </h3>

                  <div className="mx-auto my-5 h-px w-12 bg-[#F2C94C]/50" />

                  <p className="relative text-[9px] tracking-[0.16em] text-[#E9DCE3]">
                    2026 — 2027
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                FLOATING HEART
            ==================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-8, 5, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[36%] right-[34%] z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6EC]"
            >
              <Heart className="h-4 w-4 fill-[#E85D75] text-[#E85D75]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM MESSAGE
      ========================================================== */}

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center">
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9B929F]">
            Your story starts here
          </span>

          <div className="mt-3 h-8 w-px bg-[#D5C6CC]" />
        </div>
      </div>
    </section>
  );
}

