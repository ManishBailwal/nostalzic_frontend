"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Camera,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";

const memories = [
  {
    year: "2024",
    date: "JUNE 14",
    title: "The beginning",
    description:
      "The first trip. The first photo. The beginning of a story.",
    location: "Mussoorie",
    image: "/timeline1.png",
    align: "left",
  },
  {
    year: "2025",
    date: "MARCH 21",
    title: "That unforgettable trip",
    description:
      "Three days, too many photos and memories we still talk about.",
    location: "Goa",
    image: "/timeline2.png",
    align: "right",
  },
  {
    year: "2026",
    date: "AUGUST 08",
    title: "A little celebration",
    description:
      "Some moments don't need a reason. They just deserve to be remembered.",
    location: "Home",
    image: "/timeline3.png",
    align: "left",
  },
];

export default function MemoryTimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F7] py-32 sm:py-40">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-[30%] h-[450px] w-[450px] rounded-full bg-[#EAF8EF]/70 blur-3xl" />

        <div className="absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#F1EBFF]/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <CalendarDays className="h-3.5 w-3.5 text-[#8B76D8]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6E6575]">
              Your timeline
            </span>
          </div>

          <h2 className="font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.04em] text-[#302A3D] sm:text-[60px] lg:text-[70px]">
            See your life
            <br />
            <span className="italic text-[#E85D75]">unfold.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-8 text-[#6E6575]">
            Years from now, you'll want more than a folder full of
            photographs. You'll want to remember how life felt along the
            way.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-24 max-w-5xl">
          {/* Central line */}

          <div className="absolute bottom-0 left-5 top-0 w-px bg-[#E6D9DD] md:left-1/2 md:-translate-x-1/2" />

          {/* Starting point */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 mb-20 flex justify-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F0E6E8] bg-white shadow-[0_10px_30px_rgba(48,42,61,0.08)]">
              <Heart className="h-5 w-5 fill-[#E85D75] text-[#E85D75]" />
            </div>
          </motion.div>

          {memories.map((memory, index) => {
            const isLeft = memory.align === "left";

            return (
              <motion.div
                key={memory.year}
                initial={{
                  opacity: 0,
                  x: isLeft ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className={`relative mb-24 grid md:grid-cols-2 ${
                  isLeft ? "" : "md:text-right"
                }`}
              >
                {/* Content */}

                <div
                  className={`pl-14 md:pl-0 ${
                    isLeft
                      ? "md:pr-20"
                      : "md:col-start-2 md:pl-20"
                  }`}
                >
                  <span className="font-serif text-5xl italic text-[#E85D75]/70">
                    {memory.year}
                  </span>

                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9B929F]">
                    {memory.date}
                  </p>

                  <h3 className="mt-2 font-serif text-[28px] text-[#302A3D]">
                    {memory.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#6E6575]">
                    {memory.description}
                  </p>

                  <div
                    className={`mt-4 flex items-center gap-2 text-xs text-[#9B929F] ${
                      isLeft ? "" : "md:justify-end"
                    }`}
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#F28C6B]" />

                    {memory.location}
                  </div>
                </div>

                {/* Image */}

                <div
                  className={`mt-8 pl-14 md:mt-0 md:pl-0 ${
                    isLeft
                      ? "md:col-start-2 md:pl-20"
                      : "md:col-start-1 md:row-start-1 md:pr-20"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      rotate: isLeft ? 1 : -1,
                      y: -5,
                    }}
                    className="relative overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-[0_20px_50px_rgba(48,42,61,0.11)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                      <Image
                        src={memory.image}
                        alt={memory.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 backdrop-blur-md">
                        <Camera className="h-3 w-3 text-[#E85D75]" />

                        <span className="text-[9px] font-medium text-[#302A3D]">
                          Memory saved
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}

                <div className="absolute left-[20px] top-5 flex h-3 w-3 items-center justify-center rounded-full bg-[#E85D75] ring-8 ring-[#FFF9F7] md:left-1/2 md:-translate-x-1/2" />
              </motion.div>
            );
          })}

          {/* Today */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex justify-center"
          >
            <div className="rounded-full border border-[#F0E6E8] bg-white px-6 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#F2C94C]" />

                <span className="text-xs font-semibold text-[#302A3D]">
                  And the story continues...
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}