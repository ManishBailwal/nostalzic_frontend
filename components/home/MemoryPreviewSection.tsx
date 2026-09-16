"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  ChevronRight,
  Heart,
  MapPin,
  MessageCircle,
  Play,
  Sparkles,
} from "lucide-react";

const thumbnails = [
  {
    src: "/memory_preview.png",
    rotate: "-2deg",
  },
  {
    src: "/life.png",
    rotate: "2deg",
  },
  {
    src: "/life.png",
    rotate: "-1deg",
  },
  {
    src: "/life.png",
    rotate: "3deg",
  },
];

export default function MemoryPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 sm:py-40">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#F1EBFF]/60 blur-3xl" />

        <div className="absolute right-[-150px] bottom-[5%] h-[420px] w-[420px] rounded-full bg-[#FFF0E7]/60 blur-3xl" />
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-[#FFF9F7] px-4 py-2">
            <Sparkles className="h-3.5 w-3.5 text-[#E85D75]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6E6575]">
              A memory, revisited
            </span>
          </div>

          <h2 className="font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.04em] text-[#302A3D] sm:text-[60px] lg:text-[70px]">
            What if you could
            <br />
            revisit a day{" "}
            <span className="italic text-[#E85D75]">
              exactly as it felt?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-8 text-[#6E6575]">
            Not just the photo. The place. The people. The little
            details. The story you almost forgot.
          </p>
        </motion.div>

        {/* =========================================================
            MEMORY EXPERIENCE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          {/* Outer frame */}

          <div className="rounded-[32px] border border-[#F0E6E8] bg-[#FFF9F7] p-3 shadow-[0_30px_80px_rgba(48,42,61,0.10)] sm:p-5">
            <div className="overflow-hidden rounded-[25px] border border-[#F0E6E8] bg-white">
              {/* Top bar */}

              <div className="flex items-center justify-between border-b border-[#F0E6E8] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE6EC]">
                    <Heart className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />
                  </div>

                  <div>
                    <p className="font-serif text-[15px] text-[#302A3D]">
                      Our memories
                    </p>

                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#9B929F]">
                      A little piece of our story
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full bg-[#FFF9F7] px-3 py-2 sm:flex">
                  <Sparkles className="h-3 w-3 text-[#F2C94C]" />

                  <span className="text-[9px] font-medium text-[#6E6575]">
                    27 memories
                  </span>
                </div>
              </div>

              {/* Main content */}

              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* Photo */}

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                    <Image
                      src="/memory_preview.png"
                      alt="A Nostalzic memory"
                      fill
                      className="object-cover"
                    />

                    {/* Gradient */}

                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                    {/* Location */}

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-md">
                      <MapPin className="h-3 w-3 text-white" />

                      <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white">
                        Goa · March 2026
                      </span>
                    </div>

                    {/* Bottom information */}

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65">
                          One unforgettable day
                        </p>

                        <h3 className="mt-1 font-serif text-[28px] italic text-white sm:text-[34px]">
                          Just us.
                        </h3>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md"
                      >
                        <Heart className="h-4 w-4 fill-white text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Thumbnails */}

                  <div className="mt-4 flex gap-3">
                    {thumbnails.map((thumbnail, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -4,
                          rotate: "0deg",
                        }}
                        className="relative h-16 w-16 overflow-hidden rounded-[12px] border-2 border-white shadow-sm sm:h-[72px] sm:w-[72px]"
                        style={{
                          transform: `rotate(${thumbnail.rotate})`,
                        }}
                      >
                        <Image
                          src={thumbnail.src}
                          alt={`Memory ${index + 1}`}
                          fill
                          className="object-cover"
                        />

                        {index === 3 && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                            <span className="text-[10px] font-semibold text-white">
                              +10
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ))}

                    <div className="flex h-16 items-center gap-2 px-1 sm:h-[72px]">
                      <Camera className="h-3.5 w-3.5 text-[#9B929F]" />

                      <span className="text-[10px] text-[#9B929F]">
                        14 photos
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story */}

                <div className="flex flex-col justify-center border-t border-[#F0E6E8] bg-[#FFF9F7] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#E85D75]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9B929F]">
                      Memory · 014
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[30px] leading-tight tracking-[-0.02em] text-[#302A3D] sm:text-[34px]">
                    The day we
                    <br />
                    <span className="italic text-[#E85D75]">
                      got lost.
                    </span>
                  </h3>

                  <p className="mt-5 text-[14px] leading-7 text-[#6E6575]">
                    We missed the turn, found a tiny café by the beach,
                    stayed until sunset and somehow forgot we were ever
                    supposed to be somewhere else.
                  </p>

                  {/* Divider */}

                  <div className="my-7 h-px bg-[#E6D9DD]" />

                  {/* Memory details */}

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF0E7]">
                        <MapPin className="h-4 w-4 text-[#F28C6B]" />
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#9B929F]">
                          Place
                        </p>

                        <p className="mt-0.5 text-xs font-semibold text-[#302A3D]">
                          Goa, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1EBFF]">
                        <MessageCircle className="h-4 w-4 text-[#8B76D8]" />
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#9B929F]">
                          Notes
                        </p>

                        <p className="mt-0.5 text-xs font-semibold text-[#302A3D]">
                          2 little stories
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* View memory */}

                  <motion.button
                    whileHover={{ x: 3 }}
                    className="group mt-8 flex w-fit items-center gap-2 text-xs font-semibold text-[#E85D75]"
                  >
                    Open this memory

                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating label */}

          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [-2, 1, -2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-7 left-[8%] hidden rounded-[18px] border border-[#F0E6E8] bg-white px-5 py-3 shadow-[0_12px_30px_rgba(48,42,61,0.10)] sm:block"
          >
            <div className="flex items-center gap-2">
              <Heart className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />

              <span className="font-serif text-sm italic text-[#302A3D]">
                A day worth remembering.
              </span>
            </div>
          </motion.div>

          {/* Floating play */}

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 top-[18%] hidden h-14 w-14 items-center justify-center rounded-full border border-[#F0E6E8] bg-white shadow-[0_12px_30px_rgba(48,42,61,0.10)] sm:flex"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE6EC]">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================================
            SOCIAL PROOF
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 max-w-2xl text-center"
        >
          <Heart className="mx-auto h-5 w-5 fill-[#E85D75] text-[#E85D75]" />

          <p className="mt-5 font-serif text-[22px] leading-8 text-[#302A3D] sm:text-[25px]">
            "I forgot half the details of that trip.
            <br className="hidden sm:block" />
            Then I found the memory again."
          </p>

          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9B929F]">
            A Nostalzic memory maker
          </p>
        </motion.div>
      </div>
    </section>
  );
}