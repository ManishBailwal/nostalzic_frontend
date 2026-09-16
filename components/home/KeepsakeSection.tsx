"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";

export default function KeepsakeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 sm:py-40">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFF0E7]/60 blur-3xl" />

        <div className="absolute right-[-150px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#FFF7D6]/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1fr]">
          {/* =====================================================
              BOOK VISUAL
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto h-[570px] w-full max-w-[560px]"
          >
            {/* Back book */}

            <motion.div
              animate={{
                rotate: [-6, -4, -6],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[13%] top-[8%] h-[390px] w-[280px] rounded-[20px] bg-[#F1EBFF] shadow-[0_25px_60px_rgba(48,42,61,0.10)]"
            />

            {/* Main book */}

            <motion.div
              initial={{
                rotate: 5,
                y: 30,
              }}
              whileInView={{
                rotate: 3,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              animate={{
                y: [0, -6, 0],
              }}
              className="absolute left-[19%] top-[4%] z-20 w-[300px] sm:w-[330px]"
            >
              <div className="rounded-[24px] bg-white p-2 shadow-[0_30px_70px_rgba(48,42,61,0.20)]">
                <div className="relative overflow-hidden rounded-[18px] bg-[#302A3D] px-7 py-12 text-center">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E85D75]/20 blur-3xl" />

                  <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-[#8B76D8]/20 blur-3xl" />

                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#F2C94C]/60">
                    <Heart className="h-5 w-5 fill-[#F2C94C] text-[#F2C94C]" />
                  </div>

                  <p className="relative mt-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F2C94C]">
                    Nostalzic
                  </p>

                  <h3 className="relative mt-4 font-serif text-[31px] leading-tight text-white">
                    Our Year
                    <br />
                    Together
                  </h3>

                  <div className="mx-auto my-7 h-px w-14 bg-[#F2C94C]/50" />

                  <p className="relative text-[10px] tracking-[0.18em] text-[#E9DCE3]">
                    2026 — 2027
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Photo floating card */}

            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [-4, -1, -4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[13%] right-[3%] z-30 w-[190px] rounded-[20px] border-[5px] border-white bg-white shadow-[0_20px_45px_rgba(48,42,61,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]">
                <Image
                  src="/life.png"
                  alt="Memory"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between px-3 py-3">
                <span className="text-[9px] font-medium text-[#6E6575]">
                  Goa · March
                </span>

                <Heart className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]" />
              </div>
            </motion.div>

            {/* Quote */}

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[8%] left-[1%] z-40 w-[190px] rounded-[20px] bg-[#FFF7D6] p-4 shadow-[0_15px_35px_rgba(48,42,61,0.09)]"
            >
              <Star className="mb-3 h-4 w-4 text-[#F2C94C]" />

              <p className="font-serif text-[14px] leading-6 text-[#302A3D]">
                "For the days we'll wish we could live again."
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-[#FFF9F7] px-4 py-2">
              <BookOpen className="h-3.5 w-3.5 text-[#E85D75]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6E6575]">
                Made to keep
              </span>
            </div>

            <h2 className="font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.04em] text-[#302A3D] sm:text-[58px] lg:text-[66px]">
              Some memories
              <br />
              deserve more
              <br />
              than a{" "}
              <span className="italic text-[#E85D75]">
                screen.
              </span>
            </h2>

            <p className="mt-7 text-[16px] leading-8 text-[#6E6575]">
              Turn your favorite moments into something tangible.
              A collection of the places, people, photographs and
              stories that made a chapter of your life special.
            </p>

            <p className="mt-3 text-[16px] leading-8 text-[#6E6575]">
              Something you can hold today, open years from now, and
              give to someone you love.
            </p>

            {/* Feature list */}

            <div className="mt-9 space-y-4">
              {[
                "Beautifully organized memories",
                "Your photos and stories together",
                "Made for revisiting and gifting",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFE6EC]">
                    <Heart className="h-3 w-3 fill-[#E85D75] text-[#E85D75]" />
                  </div>

                  <span className="text-sm text-[#6E6575]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-10 inline-flex h-[52px] items-center gap-3 rounded-[16px] bg-[#E85D75] px-6 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(232,93,117,0.22)] transition hover:bg-[#C9435D]"
            >
              Create your keepsake

              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}