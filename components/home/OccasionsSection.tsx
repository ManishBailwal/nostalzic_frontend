"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Cake,
  GraduationCap,
  Heart,
  Home,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";

const occasions = [
  {
    title: "For couples",
    description:
      "Trips, inside jokes, anniversaries and ordinary Tuesdays.",
    icon: Heart,
    bg: "#FFE6EC",
    iconColor: "#E85D75",
    rotate: "-2deg",
  },
  {
    title: "For families",
    description:
      "The birthdays, festivals and little years that pass too quickly.",
    icon: Users,
    bg: "#EAF8EF",
    iconColor: "#5EAA78",
    rotate: "2deg",
  },
  {
    title: "For travelers",
    description:
      "Every destination, every adventure and every story behind it.",
    icon: Plane,
    bg: "#FFF0E7",
    iconColor: "#F28C6B",
    rotate: "-1deg",
  },
  {
    title: "For milestones",
    description:
      "Graduation, first jobs, new homes and new beginnings.",
    icon: GraduationCap,
    bg: "#F1EBFF",
    iconColor: "#8B76D8",
    rotate: "2deg",
  },
  {
    title: "For growing up",
    description:
      "The little years you'll wish you could revisit.",
    icon: Baby,
    bg: "#FFF7D6",
    iconColor: "#C49B24",
    rotate: "-2deg",
  },
  {
    title: "For everyday life",
    description:
      "Coffee dates, Sunday mornings and moments without a name.",
    icon: Home,
    bg: "#FFF0E7",
    iconColor: "#F28C6B",
    rotate: "1deg",
  },
];

export default function OccasionsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F7] py-32 sm:py-40">
      {/* Background */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE6EC]/35 blur-3xl" />

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
            <Sparkles className="h-3.5 w-3.5 text-[#F2C94C]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6E6575]">
              Made for memories
            </span>
          </div>

          <h2 className="font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.04em] text-[#302A3D] sm:text-[60px] lg:text-[70px]">
            Every story has a
            <br />
            reason to be{" "}
            <span className="italic text-[#E85D75]">
              remembered.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-8 text-[#6E6575]">
            Some memories are planned. Some happen by accident.
            Nostalzic is made for all of them.
          </p>
        </motion.div>

        {/* Occasion cards */}

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((occasion, index) => {
            const Icon = occasion.icon;

            return (
              <motion.div
                key={occasion.title}
                initial={{
                  opacity: 0,
                  y: 30,
                  rotate: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -7,
                  rotate: 0,
                }}
                className="group relative min-h-[260px] overflow-hidden rounded-[28px] border border-[#F0E6E8] p-7 shadow-[0_10px_30px_rgba(48,42,61,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(48,42,61,0.09)]"
                style={{
                  backgroundColor: occasion.bg,
                  transform: `rotate(${occasion.rotate})`,
                }}
              >
                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white shadow-sm">
                  <Icon
                    className="h-5 w-5"
                    style={{
                      color: occasion.iconColor,
                    }}
                  />
                </div>

                {/* Content */}

                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="font-serif text-[27px] tracking-[-0.02em] text-[#302A3D]">
                    {occasion.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-[13px] leading-6 text-[#6E6575]">
                    {occasion.description}
                  </p>
                </div>

                {/* Decorative circle */}

                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/30 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                {/* Tiny heart */}

                <Heart
                  className="absolute right-6 top-6 h-4 w-4 fill-white/70 text-white/70 transition-all duration-300 group-hover:scale-125"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3">
            <Cake className="h-4 w-4 text-[#F28C6B]" />

            <span className="font-serif text-[19px] italic text-[#9B929F]">
              Your story doesn't need a special occasion.
            </span>

            <Sparkles className="h-4 w-4 text-[#F2C94C]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}