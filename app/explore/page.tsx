"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Camera,
  ChevronRight,
  Clock3,
  Download,
  Gift,
  Heart,
  MapPin,
  Quote,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";

const memories = [
  {
    year: "2024",
    title: "The beginning",
    place: "Mussoorie",
    image: "/life.png",
    rotate: "-3deg",
  },
  {
    year: "2025",
    title: "That unforgettable trip",
    place: "Goa",
    image: "/places.jpg",
    rotate: "2deg",
  },
  {
    year: "2026",
    title: "A little celebration",
    place: "Home",
    image: "/celebrations.jpg",
    rotate: "-2deg",
  },
];

const features = [
  {
    number: "01",
    icon: Camera,
    title: "Save what matters",
    description:
      "Keep the photographs, little stories, places and dates behind the moments you never want to forget.",
    accent: "peach",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Watch your story unfold",
    description:
      "Your memories come together in a timeline, turning scattered moments into a beautiful record of your life.",
    accent: "lavender",
  },
  {
    number: "03",
    icon: Heart,
    title: "Return to the feeling",
    description:
      "Come back to the moments that made you smile, laugh, travel, celebrate and feel something.",
    accent: "primary",
  },
  {
    number: "04",
    icon: WandSparkles,
    title: "Turn moments into stories",
    description:
      "When you're ready, transform a collection of memories into a beautifully designed memory book.",
    accent: "yellow",
  },
];

const bookStyles = [
  {
    number: "01",
    title: "Romantic",
    eyebrow: "For the moments between two hearts",
    description:
      "Soft, intimate and emotional. Made for anniversaries, firsts, adventures together and all the little moments in between.",
    image: "/people.jpg",
    className: "bg-[#FFF0E7]",
  },
  {
    number: "02",
    title: "Classic",
    eyebrow: "Timeless by design",
    description:
      "Elegant layouts, generous whitespace and editorial typography for a story you'll want to keep for years.",
    image: "/places.jpg",
    className: "bg-[#F1EBFF]",
  },
  {
    number: "03",
    title: "Nostalgic",
    eyebrow: "Like opening an old memory box",
    description:
      "Polaroids, little notes, imperfect moments and the warm feeling of looking back at a life you've lived.",
    image: "/little-things.jpg",
    className: "bg-[#FFF7D6]",
  },
];

const futureFeatures = [
  {
    icon: Download,
    title: "Digital keepsakes",
    text: "Download your finished story and keep it with you, wherever life takes you.",
  },
  {
    icon: Gift,
    title: "Give a memory",
    text: "Turn a collection of moments into a thoughtful present for someone close to you.",
  },
  {
    icon: BookOpen,
    title: "Physical memory books",
    text: "One day, your digital story can become something you can actually hold.",
  },
];

export default function ExplorePage() {
  return (
    <main className="overflow-hidden bg-[#FFF9F7] text-[#302A3D]">
      {/* =========================================================
          HERO
      ========================================================== */}
     <section className="relative overflow-hidden border-b border-[#F0E6E8] bg-[#FFF9F7]">
  {/* Soft ambient background */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#F1EBFF] opacity-60 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-[#FFE6EC] opacity-50 blur-3xl" />

  <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-28">
    <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
      
      {/* =====================================================
          LEFT — PRODUCT MESSAGE
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-[620px]"
      >
        {/* Eyebrow */}
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-10 bg-[#E85D75]" />

          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E85D75]">
            Explore Nostalzic
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[54px] leading-[1.02] tracking-[-0.035em] sm:text-[68px] lg:text-[78px]">
          Everything you need
          <br />
          <span className="text-[#E85D75]">
            to keep a moment.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-[570px] text-lg leading-8 text-[#6E6575] sm:text-xl">
          Nostalzic gives your meaningful moments a place to live. Save the
          memories that matter, organize your journey, revisit the past, and
          turn your favorite moments into beautiful stories you can keep.
        </p>

        {/* What we provide */}
        <div className="mt-10 grid max-w-[560px] grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
          {[
            "Save memories",
            "Build your timeline",
            "Relive moments",
            "Create memory books",
            "Download your stories",
            "Give a memory",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.06,
              }}
              className="flex items-center gap-2 text-sm text-[#6E6575]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFE6EC] text-[#E85D75]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E85D75]" />
              </span>

              {item}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-[#E85D75] px-6 py-3.5 font-medium text-white shadow-[0_8px_22px_rgba(232,93,117,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9435D] hover:shadow-[0_12px_28px_rgba(232,93,117,0.28)]"
          >
            Start your story

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#journey"
            className="inline-flex items-center gap-2 rounded-full border border-[#E6D9DD] bg-white px-6 py-3.5 font-medium text-[#302A3D] transition-all duration-300 hover:bg-[#FFF9F7]"
          >
            See how it works
          </a>
        </div>
      </motion.div>

      {/* =====================================================
          RIGHT — PRODUCT / MEMORY SYSTEM
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto w-full max-w-[620px]"
      >
        <div className="relative min-h-[570px]">

          {/* -------------------------------------------------
              Background editorial panel
          -------------------------------------------------- */}
          <div className="absolute inset-x-4 top-8 bottom-4 rounded-[34px] border border-[#F0E6E8] bg-white shadow-[0_20px_60px_rgba(48,42,61,0.07)]" />

          {/* -------------------------------------------------
              Top label
          -------------------------------------------------- */}
          <div className="absolute left-10 top-12 z-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9B929F]">
              Your memories
            </p>

            <p className="mt-1 font-serif text-2xl text-[#302A3D]">
              beautifully kept.
            </p>
          </div>

          {/* -------------------------------------------------
              Memory timeline card
          -------------------------------------------------- */}
          <div className="absolute left-10 top-[130px] z-20 w-[46%] rounded-[22px] border border-[#F0E6E8] bg-[#FFF9F7] p-5 shadow-[0_12px_30px_rgba(48,42,61,0.08)]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E85D75]">
                Timeline
              </span>

              <Clock3 className="h-4 w-4 text-[#9B929F]" />
            </div>

            <div className="mt-5 space-y-5">
              {[
                ["2024", "The beginning"],
                ["2025", "That unforgettable trip"],
                ["2026", "A little celebration"],
              ].map(([year, title], index) => (
                <div key={year} className="relative flex gap-3">
                  {index !== 2 && (
                    <div className="absolute left-[5px] top-5 h-8 w-px bg-[#E6D9DD]" />
                  )}

                  <div className="relative mt-1 h-3 w-3 shrink-0 rounded-full bg-[#E85D75] ring-4 ring-[#FFE6EC]" />

                  <div>
                    <p className="text-[10px] text-[#9B929F]">
                      {year}
                    </p>

                    <p className="mt-0.5 text-xs font-medium text-[#302A3D]">
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------
              Memory card
          -------------------------------------------------- */}
          <motion.div
            animate={{ y: [0, -7, 0], rotate: [-2, -1, -2] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-10 top-[105px] z-30 w-[46%] rotate-[-2deg] overflow-hidden rounded-[22px] border-[7px] border-white bg-white shadow-[0_20px_60px_rgba(48,42,61,0.15)]"
          >
            <div className="relative">
              <img
                src="/little-things.jpg"
                alt="A saved memory"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#302A3D]/70 to-transparent p-4 pt-10">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">
                  August 08, 2026
                </p>

                <p className="mt-1 font-serif text-lg text-white">
                  A little celebration
                </p>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------
              Book preview
          -------------------------------------------------- */}
          <motion.div
            initial={{ rotate: 4 }}
            animate={{ rotate: [4, 3, 4] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[45px] right-[13%] z-40 w-[53%] overflow-hidden rounded-[20px] bg-white p-2 shadow-[0_25px_55px_rgba(48,42,61,0.22)]"
          >
            <div className="relative overflow-hidden rounded-[14px]">
              <img
                src="/places.jpg"
                alt="Memory book"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#302A3D]/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Memory book
                </p>

                <p className="mt-1 font-serif text-2xl text-white">
                  Our journey
                </p>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------
              Book badge
          -------------------------------------------------- */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[105px] left-[9%] z-50 rounded-[18px] border border-[#F0E6E8] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(48,42,61,0.10)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#FFE6EC] text-[#E85D75]">
                <BookOpen className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.16em] text-[#9B929F]">
                  Your story
                </p>

                <p className="text-xs font-semibold">
                  Ready to relive
                </p>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------
              Floating heart
          -------------------------------------------------- */}
          <div className="absolute right-[7%] top-[42px] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE6EC] text-[#E85D75] shadow-[0_8px_20px_rgba(232,93,117,0.15)]">
            <Heart className="h-5 w-5 fill-[#E85D75]" />
          </div>

          {/* -------------------------------------------------
              Bottom mini features
          -------------------------------------------------- */}
          <div className="absolute bottom-[18px] left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#F0E6E8] bg-white px-4 py-2 text-[10px] text-[#6E6575] shadow-[0_8px_20px_rgba(48,42,61,0.08)]">
            <Camera className="h-3.5 w-3.5 text-[#E85D75]" />
            Save
            <span className="text-[#D5C6CC]">•</span>
            <Clock3 className="h-3.5 w-3.5 text-[#8B76D8]" />
            Remember
            <span className="text-[#D5C6CC]">•</span>
            <BookOpen className="h-3.5 w-3.5 text-[#F28C6B]" />
            Create
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* =========================================================
          INTRO
      ========================================================== */}
      <section
        id="journey"
        className="border-y border-[#F0E6E8] bg-white px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E85D75]">
            The Nostalzic journey
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            From a moment
            <br />
            <span className="text-[#9B929F]">to a memory.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[680px] text-base leading-8 text-[#6E6575] sm:text-lg">
            Life moves quickly. Photos pile up. Days become years. Nostalzic
            gives the moments that matter a place to stay — and a way to come
            back to them.
          </p>

          <div className="mt-16 flex flex-col items-center justify-center gap-5 md:flex-row">
            {["Save", "Remember", "Relive", "Create", "Keep", "Give"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-5">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E6D9DD] bg-[#FFF9F7] font-serif text-lg shadow-[0_8px_20px_rgba(48,42,61,0.05)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <span className="font-medium">{item}</span>

                  {index < 5 && (
                    <ArrowRight className="hidden h-4 w-4 text-[#D5C6CC] md:block" />
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE GRID
      ========================================================== */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E85D75]">
                Preserve the moment
              </span>

              <h2 className="mt-5 max-w-[480px] font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl">
                Not every photo is a memory.
              </h2>

              <p className="mt-6 max-w-[440px] text-base leading-8 text-[#6E6575]">
                Nostalzic is for the photographs you'll want to find again.
                The people, places, celebrations and little moments that made
                life feel like life.
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm font-medium text-[#302A3D]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE6EC] text-[#E85D75]">
                  <Heart className="h-4 w-4 fill-[#E85D75]" />
                </span>
                Keep what matters.
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                const iconBackground =
                  feature.accent === "peach"
                    ? "bg-[#FFF0E7] text-[#F28C6B]"
                    : feature.accent === "lavender"
                      ? "bg-[#F1EBFF] text-[#8B76D8]"
                      : feature.accent === "yellow"
                        ? "bg-[#FFF7D6] text-[#F2C94C]"
                        : "bg-[#FFE6EC] text-[#E85D75]";

                return (
                  <motion.article
                    key={feature.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -5 }}
                    className="group rounded-[28px] border border-[#F0E6E8] bg-white p-7 shadow-[0_12px_30px_rgba(48,42,61,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(48,42,61,0.09)]"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-[16px] ${iconBackground}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-serif text-3xl text-[#E9DCE3]">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="mt-8 font-serif text-2xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#6E6575]">
                      {feature.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[#302A3D] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Discover
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TIMELINE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#302A3D] px-6 py-28 text-white lg:px-10">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E85D75] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[700px] text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F28C6B]">
              Your timeline
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              See your life
              <br />
              <span className="text-[#E9DCE3]">unfold.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#E9DCE3] sm:text-lg">
              Instead of disappearing into a camera roll, your moments become
              part of a story you can walk through.
            </p>
          </div>

          <div className="relative mx-auto mt-20 max-w-[900px]">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-white/15 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-14">
              {memories.map((memory, index) => (
                <motion.div
                  key={memory.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid items-center gap-8 md:grid-cols-2 md:gap-20 ${
                    index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  <div className="pl-14 md:pl-0 md:text-right">
                    <span className="text-sm uppercase tracking-[0.2em] text-[#F28C6B]">
                      {memory.year}
                    </span>

                    <h3 className="mt-2 font-serif text-3xl">
                      {memory.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-[#BEB5C2] md:justify-end">
                      <MapPin className="h-4 w-4" />
                      {memory.place}
                    </div>
                  </div>

                  <div className="relative pl-14 md:pl-0">
                    <div
                      className="absolute left-[7px] top-8 h-7 w-7 rounded-full border-[6px] border-[#302A3D] bg-[#E85D75] md:left-[-14px]"
                    />

                    <motion.div
                      whileHover={{ y: -6 }}
                      className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-2 shadow-[0_25px_55px_rgba(0,0,0,0.25)]"
                    >
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="aspect-[4/3] w-full rounded-[18px] object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOK CREATION
      ========================================================== */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E85D75]">
                From moments to stories
              </span>

              <h2 className="mt-5 max-w-[650px] font-serif text-4xl leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Your memories were never meant to stay in a camera roll.
              </h2>

              <p className="mt-7 max-w-[620px] text-base leading-8 text-[#6E6575] sm:text-lg">
                Choose the moments you want to bring together. Nostalzic turns
                them into a beautifully designed story — without asking you to
                become a designer.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Choose your memories",
                  "Add a title, date or place",
                  "Choose a feeling",
                  "Let Nostalzic design the story",
                  "Turn the pages and relive it",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0E7] font-serif text-sm text-[#F28C6B]">
                      {index + 1}
                    </div>

                    <span className="text-sm text-[#6E6575]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book visual */}
            <motion.div
              initial={{ opacity: 0, rotate: 2, y: 30 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="relative overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_25px_55px_rgba(48,42,61,0.22)]">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="/kept.png"
                    alt="Memory book"
                    className="aspect-[4/5] w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#302A3D]/80 via-[#302A3D]/30 to-transparent p-8 pt-24 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      Our story
                    </p>

                    <h3 className="mt-2 font-serif text-4xl">
                      The moments
                      <br />
                      we kept.
                    </h3>

                    <p className="mt-3 text-sm text-white/70">
                      2025 — 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 -left-7 rounded-[20px] border border-[#F0E6E8] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(48,42,61,0.10)]">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-[#E85D75]" />
                  <div>
                    <p className="text-xs text-[#9B929F]">Your story</p>
                    <p className="font-medium">Beautifully kept.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOK STYLES
      ========================================================== */}
      <section className="bg-[#FFF0E7] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[720px] text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E85D75]">
              Three ways to remember
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Choose the feeling
              <br />
              <span className="text-[#9B929F]">you want to keep.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#6E6575]">
              Every story deserves its own character. Choose a style and let
              your memories become a book that feels like yours.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {bookStyles.map((style, index) => (
              <motion.article
                key={style.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`overflow-hidden rounded-[30px] border border-white/70 ${style.className} p-3 shadow-[0_15px_35px_rgba(48,42,61,0.08)]`}
              >
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 font-serif text-sm shadow-[0_8px_20px_rgba(48,42,61,0.08)] backdrop-blur">
                    {style.number}
                  </div>
                </div>

                <div className="p-5 pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9B929F]">
                    {style.eyebrow}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl">
                    {style.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6E6575]">
                    {style.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                    Explore this style
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUOTE
      ========================================================== */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Quote className="mx-auto h-8 w-8 text-[#E85D75]" />

          <blockquote className="mt-7 font-serif text-4xl leading-[1.12] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            "One day, today will be nostalgia."
          </blockquote>

          <div className="mx-auto mt-8 h-px w-16 bg-[#D5C6CC]" />

          <p className="mt-7 text-sm text-[#9B929F]">
            So give today somewhere to live.
          </p>
        </div>
      </section>

      {/* =========================================================
          KEEP + GIFT
      ========================================================== */}
      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="overflow-hidden rounded-[36px] bg-[#302A3D] text-white">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F28C6B]">
                  Keep the story
                </span>

                <h2 className="mt-5 max-w-[600px] font-serif text-4xl leading-[1.05] sm:text-5xl">
                  Some memories are meant to be kept.
                </h2>

                <p className="mt-6 max-w-[560px] text-base leading-8 text-[#E9DCE3]">
                  Your stories shouldn't disappear when the moment is over.
                  Keep them digitally today — and eventually turn them into
                  something you can hold, share and give.
                </p>

                <div className="mt-10 grid gap-4">
                  {futureFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex gap-4 rounded-[20px] border border-white/10 bg-white/5 p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10">
                          <Icon className="h-5 w-5 text-[#F28C6B]" />
                        </div>

                        <div>
                          <h3 className="font-medium">{feature.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-[#BEB5C2]">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative min-h-[500px] overflow-hidden lg:min-h-full">
                <img
                  src="/story.png"
                  alt="A memory worth keeping"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302A3D]/80 via-[#302A3D]/20 to-transparent" />

                <div className="absolute bottom-10 left-8 right-8 sm:left-12 sm:right-12">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                      <Gift className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                        One day
                      </p>
                      <p className="font-serif text-2xl">
                        Give a memory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          YEAR STORY
      ========================================================== */}
      <section className="border-y border-[#F0E6E8] bg-white px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#F1EBFF] text-[#8B76D8]">
              <CalendarDays className="h-6 w-6" />
            </div>

            <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl">
              A year in
              <br />
              <span className="text-[#9B929F]">memories.</span>
            </h2>

            <p className="mt-6 max-w-[500px] text-base leading-8 text-[#6E6575]">
              Imagine looking back at an entire year not through statistics,
              but through the moments that made it yours.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#E85D75]"
            >
              Create your story
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-[30px] bg-[#FFF9F7] p-6 shadow-[0_12px_30px_rgba(48,42,61,0.06)] sm:p-8">
            <div className="flex items-start justify-between border-b border-[#F0E6E8] pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#9B929F]">
                  Your year
                </p>

                <h3 className="mt-2 font-serif text-4xl">2026</h3>
              </div>

              <Star className="h-5 w-5 text-[#F2C94C]" />
            </div>

            <div className="grid grid-cols-3 gap-3 py-7">
              <div>
                <p className="font-serif text-3xl">127</p>
                <p className="mt-1 text-xs text-[#9B929F]">memories</p>
              </div>

              <div>
                <p className="font-serif text-3xl">08</p>
                <p className="mt-1 text-xs text-[#9B929F]">places</p>
              </div>

              <div>
                <p className="font-serif text-3xl">24</p>
                <p className="mt-1 text-xs text-[#9B929F]">moments</p>
              </div>
            </div>

            <div className="rounded-[22px] bg-white p-5 shadow-[0_8px_20px_rgba(48,42,61,0.05)]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#9B929F]">
                Your story
              </p>

              <p className="mt-2 font-serif text-2xl">
                A year worth remembering.
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#F0E6E8]">
                <div className="h-full w-[72%] rounded-full bg-[#E85D75]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden px-6 py-32 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE6EC] opacity-60 blur-3xl" />

        <div className="relative mx-auto max-w-[850px] text-center">
          <Heart className="mx-auto h-7 w-7 fill-[#E85D75] text-[#E85D75]" />

          <h2 className="mt-7 font-serif text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Your future self
            <br />
            <span className="text-[#E85D75]">will thank you.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[620px] text-base leading-8 text-[#6E6575] sm:text-lg">
            Save something worth remembering today. One day, those ordinary
            moments might become the ones you miss the most.
          </p>

          <a
            href="/"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#E85D75] px-7 py-4 font-medium text-white shadow-[0_8px_22px_rgba(232,93,117,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9435D] hover:shadow-[0_12px_28px_rgba(232,93,117,0.28)]"
          >
            Start your story
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-7 font-serif text-lg text-[#9B929F]">
            Because a mirror doesn't show the past. 🪞❤️
          </p>
        </div>
      </section>
    </main>
  );
}