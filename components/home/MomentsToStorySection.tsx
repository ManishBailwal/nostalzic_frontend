"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const smallPhotos = [
  {
    src: "/life.png",
    className:
      "left-[2%] top-[10%] w-[130px] rotate-[-8deg] sm:left-[5%] sm:w-[165px]",
  },
  {
    src: "/life.png",
    className:
      "right-[3%] top-[5%] w-[120px] rotate-[7deg] sm:right-[7%] sm:w-[155px]",
  },
  {
    src: "/life.png",
    className:
      "left-[8%] bottom-[5%] w-[125px] rotate-[5deg] sm:left-[13%] sm:w-[150px]",
  },
];

export default function MomentsToStorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 sm:py-40">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE6EC]/35 blur-3xl" />

        <div className="absolute right-[-100px] top-[20%] h-[300px] w-[300px] rounded-full bg-[#FFF7D6]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-[#FFF9F7] px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-[#F28C6B]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6E6575]">
                More than a photo
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.04em] text-[#302A3D] sm:text-[58px] lg:text-[68px]">
              From moments
              <br />
              <span className="italic text-[#E85D75]">
                to a story.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-[16px] leading-8 text-[#6E6575]">
              A photograph captures what happened. But the story is in the
              details — where you were, who was there, what you said, and
              how you felt.
            </p>

            <p className="mt-3 max-w-lg text-[16px] leading-8 text-[#6E6575]">
              Nostalzic brings those pieces together so a memory becomes
              more than something you scroll past.
            </p>

            {/* Small feature row */}
            <div className="mt-9 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white px-4 py-2.5 shadow-sm">
                <Camera className="h-3.5 w-3.5 text-[#E85D75]" />
                <span className="text-xs text-[#6E6575]">
                  Photos
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white px-4 py-2.5 shadow-sm">
                <MessageCircle className="h-3.5 w-3.5 text-[#8B76D8]" />
                <span className="text-xs text-[#6E6575]">
                  Stories
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-white px-4 py-2.5 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[#F28C6B]" />
                <span className="text-xs text-[#6E6575]">
                  Places
                </span>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              RIGHT VISUAL
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto h-[600px] w-full max-w-[620px]"
          >
            {/* Floating photos */}

            {smallPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.12,
                }}
                animate={{
                  y: [0, index % 2 === 0 ? -7 : 7, 0],
                }}
                className={`absolute z-10 overflow-hidden rounded-[18px] border-[6px] border-white shadow-[0_18px_45px_rgba(48,42,61,0.14)] ${photo.className}`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/memory.png"
                    alt="Nostalzic memory"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}

            {/* Main story card */}

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="absolute left-1/2 top-1/2 z-30 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-[#F0E6E8] bg-white p-3 shadow-[0_30px_80px_rgba(48,42,61,0.13)]"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                <Image
                  src="/memory.png"
                  alt="A Nostalzic story"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />

                <div className="absolute bottom-4 left-5">
                  <div className="flex items-center gap-1.5 text-white/80">
                    <MapPin className="h-3 w-3" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.18em]">
                      Goa · March 2026
                    </span>
                  </div>

                  <h3 className="mt-1 font-serif text-2xl italic text-white">
                    Just us.
                  </h3>
                </div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <Heart className="h-4 w-4 fill-white text-white" />
                </div>
              </div>

              {/* Story details */}

              <div className="px-3 pb-3 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9B929F]">
                      A little memory
                    </p>

                    <h3 className="mt-1 font-serif text-[22px] text-[#302A3D]">
                      The day we got lost.
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE6EC]">
                    <Heart className="h-4 w-4 fill-[#E85D75] text-[#E85D75]" />
                  </div>
                </div>

                <p className="mt-3 text-[12px] leading-6 text-[#6E6575]">
                  We missed the turn, found a tiny café by the beach,
                  stayed until sunset and somehow forgot we were ever
                  supposed to be somewhere else.
                </p>

                {/* Meta */}
                <div className="mt-5 flex items-center gap-2 border-t border-[#F0E6E8] pt-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF0E7]">
                    <Camera className="h-3.5 w-3.5 text-[#F28C6B]" />
                  </div>

                  <span className="text-[10px] text-[#9B929F]">
                    14 photos
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#D5C6CC]" />

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1EBFF]">
                    <MessageCircle className="h-3.5 w-3.5 text-[#8B76D8]" />
                  </div>

                  <span className="text-[10px] text-[#9B929F]">
                    2 notes
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Decorative connector */}

            <svg
              className="absolute inset-0 z-0 hidden h-full w-full lg:block"
              viewBox="0 0 620 600"
              fill="none"
            >
              <path
                d="M95 120 C180 170, 170 270, 250 300"
                stroke="#E6D9DD"
                strokeWidth="1.5"
                strokeDasharray="5 7"
              />

              <path
                d="M525 110 C450 165, 450 250, 400 275"
                stroke="#E6D9DD"
                strokeWidth="1.5"
                strokeDasharray="5 7"
              />

              <path
                d="M130 505 C200 450, 225 410, 270 390"
                stroke="#E6D9DD"
                strokeWidth="1.5"
                strokeDasharray="5 7"
              />
            </svg>

            {/* Floating sparkles */}

            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[22%] right-[7%] z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF7D6] shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-[#F2C94C]" />
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM LINE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="font-serif text-[20px] italic text-[#9B929F]">
            Because the story was always bigger than the photograph.
          </p>
        </motion.div>
      </div>
    </section>
  );
}