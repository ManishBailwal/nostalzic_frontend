"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Heart,

  Mail,
  Camera,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Explore: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Our books", href: "#books" },
      { label: "Why Nostalzic", href: "#why-nostalzic" },
    ],
    Company: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faq" },
    ],
    Legal: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms & conditions", href: "/terms" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-[#FFF9F7]">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-10 h-[420px] w-[420px] rounded-full bg-[#FFF0E7] opacity-70 blur-3xl" />

        <div className="absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#FFE6EC] opacity-60 blur-3xl" />

        <div className="absolute left-[45%] top-[25%] h-[280px] w-[280px] rounded-full bg-[#F1EBFF] opacity-50 blur-3xl" />

        <div className="absolute bottom-0 right-[25%] h-48 w-48 rounded-full bg-[#FFF7D6] opacity-60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* =========================================================
            CTA CARD
        ========================================================== */}

        <div className="relative overflow-hidden rounded-[30px] border border-[#F0E6E8] bg-white/80 px-6 py-12 shadow-[0_20px_60px_rgba(48,42,61,0.07)] backdrop-blur-xl sm:px-10 lg:px-14 lg:py-14">
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#FFE6EC] opacity-70 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#FFF7D6] opacity-60 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F0E6E8] bg-[#FFF9F7] px-3.5 py-2">
                <Heart
                  className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]"
                  strokeWidth={2}
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6E6575]">
                  Made for memories
                </span>
              </div>

              <h2 className="font-serif text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-[#302A3D] sm:text-[42px]">
                Your memories deserve
                <span className="italic text-[#E85D75]"> more.</span>
              </h2>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#6E6575]">
                Turn the moments you never want to forget into something
                beautiful you can hold, cherish and share.
              </p>
            </div>

            <Link
              href="/start"
              className="group flex shrink-0 items-center gap-3 rounded-[16px] bg-[#E85D75] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(232,93,117,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C9435D] hover:shadow-[0_14px_32px_rgba(232,93,117,0.28)]"
            >
              Start your story

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2.2}
              />
            </Link>
          </div>
        </div>

        {/* =========================================================
            MAIN FOOTER
        ========================================================== */}

        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-20">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
              aria-label="Nostalzic home"
            >
              <motion.div
                whileHover={{ rotate: -6, scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[13px] bg-[#E85D75] shadow-[0_8px_20px_rgba(232,93,117,0.22)]"
              >
                <Image
                  src="/logo.png"
                  alt="Nostalzic logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </motion.div>

              <div className="flex flex-col leading-none">
                <span className="font-serif text-[20px] font-semibold tracking-[-0.03em] text-[#302A3D]">
                  Nostalzic
                </span>

                <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#9B929F]">
                  Moments worth keeping
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-[300px] text-[14px] leading-7 text-[#6E6575]">
              Capture the little moments, keep them together, and turn your
              story into a keepsake you'll treasure for years to come.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2.5">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F0E6E8] bg-white text-[#6E6575] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FFE6EC] hover:bg-[#FFE6EC] hover:text-[#E85D75]"
              >
                {/* <Instagram className="h-4 w-4" /> */}
              </Link>

              <Link
                href="#"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F0E6E8] bg-white text-[#6E6575] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FFF0E7] hover:bg-[#FFF0E7] hover:text-[#E85D75]"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-serif text-[17px] font-semibold text-[#302A3D]">
              Explore
            </h3>

            <ul className="mt-5 space-y-3.5">
              {footerLinks.Explore.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#6E6575] transition-colors hover:text-[#E85D75]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-[17px] font-semibold text-[#302A3D]">
              Company
            </h3>

            <ul className="mt-5 space-y-3.5">
              {footerLinks.Company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#6E6575] transition-colors hover:text-[#E85D75]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-[17px] font-semibold text-[#302A3D]">
              Legal
            </h3>

            <ul className="mt-5 space-y-3.5">
              {footerLinks.Legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#6E6575] transition-colors hover:text-[#E85D75]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================================
            MEMORY STRIP
        ========================================================== */}

        <div className="mb-8 flex flex-col gap-4 rounded-[20px] border border-[#F0E6E8] bg-white/60 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0E7]">
              <Camera className="h-4 w-4 text-[#E85D75]" />
            </div>

            <div>
              <p className="text-xs font-semibold text-[#302A3D]">
                Capture today.
              </p>

              <p className="text-[11px] text-[#9B929F]">
                Relive it forever.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Heart
              className="h-3.5 w-3.5 fill-[#E85D75] text-[#E85D75]"
              strokeWidth={2}
            />

            <span className="text-[11px] text-[#9B929F]">
              From moments to keepsakes
            </span>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <div className="border-t border-[#F0E6E8] py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] text-[#9B929F]">
              © {new Date().getFullYear()} Nostalzic. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#9B929F]">
              Made with

              <Heart
                className="h-3 w-3 fill-[#E85D75] text-[#E85D75]"
              />

              for the moments that matter.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}