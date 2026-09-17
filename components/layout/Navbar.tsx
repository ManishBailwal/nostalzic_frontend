"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  Heart,
  Camera,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "How it works", href: "#how-it-works" },
    {label: "Explore", href:"/explore"},
    { label: "Our books", href: "#books" },
    { label: "Why Nostalzic", href: "#why-nostalzic" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex h-[68px] items-center justify-between rounded-[24px] border border-[#F0E6E8]/80 bg-[#FFF9F7]/90 px-4 shadow-[0_12px_40px_rgba(48,42,61,0.08)] backdrop-blur-xl sm:px-6">

            {/* Decorative background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">
              <div className="absolute -left-8 -top-10 h-24 w-24 rounded-full bg-[#FFF0E7] opacity-70 blur-2xl" />
              <div className="absolute right-20 -top-10 h-20 w-20 rounded-full bg-[#FFE6EC] opacity-60 blur-2xl" />
            </div>

           {/* Logo */}
{/* Logo */}
<Link
  href="/"
  className="group relative z-10 flex items-center gap-2.5"
  aria-label="Nostalzic home"
>
  <motion.div
    whileHover={{ rotate: -6, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] bg-[#E85D75] shadow-[0_8px_20px_rgba(232,93,117,0.25)]"
  >
    <Image
      src="/logo.png"
      alt="Nostalzic logo"
      width={48}
      height={48}
      className="h-12 w-12 scale-[1.35] object-contain"
      priority
    />
  </motion.div>

  <div className="flex flex-col leading-none">
    <span className="font-serif text-[21px] font-semibold tracking-[-0.03em] text-[#302A3D]">
      Nostalzic
    </span>

    <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.18em] text-[#9B929F] sm:block">
      Moments worth keeping
    </span>
  </div>
</Link>

            {/* Desktop Navigation */}
            <nav className="relative z-10 hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2.5 text-[13px] font-medium text-[#6E6575] transition-colors duration-200 hover:text-[#302A3D]"
                >
                  {item.label}

                  <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-[#E85D75] transition-transform duration-200 group-hover:scale-100" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="relative z-10 hidden items-center gap-3 lg:flex">
              <Link
                href="/login"
                className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-[#302A3D] transition-colors hover:text-[#E85D75]"
              >
                Sign in
              </Link>

              <Link
                href="/start"
                className="group flex items-center gap-2 rounded-full bg-[#E85D75] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_22px_rgba(232,93,117,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C9435D] hover:shadow-[0_12px_28px_rgba(232,93,117,0.28)]"
              >
                Start your story

                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.2}
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#F0E6E8] bg-white text-[#302A3D] transition-colors hover:bg-[#FFF0E7] lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-2 overflow-hidden rounded-[24px] border border-[#F0E6E8] bg-[#FFF9F7]/95 p-3 shadow-[0_20px_50px_rgba(48,42,61,0.1)] backdrop-blur-xl lg:hidden"
              >
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-[16px] px-4 py-3.5 text-sm font-medium text-[#302A3D] transition-colors hover:bg-[#FFF0E7]"
                    >
                      <span>{item.label}</span>

                      <ArrowRight
                        className="h-4 w-4 text-[#9B929F]"
                        strokeWidth={2}
                      />
                    </Link>
                  ))}
                </div>

                <div className="my-3 h-px bg-[#F0E6E8]" />

                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-[16px] px-4 py-3.5 text-sm font-semibold text-[#302A3D] hover:bg-[#F1EBFF]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1EBFF]">
                    <Heart className="h-4 w-4 text-[#7562C7]" />
                  </div>

                  Sign in
                </Link>

                <Link
                  href="/start"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-[16px] bg-[#E85D75] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(232,93,117,0.2)]"
                >
                  <span>Start your story</span>

                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Small mobile memory hint */}
                <div className="mt-3 flex items-center gap-3 rounded-[16px] bg-[#FFF7D6] px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                    <Camera className="h-4 w-4 text-[#E85D75]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#302A3D]">
                      Your memories deserve more.
                    </p>

                    <p className="mt-0.5 text-[11px] text-[#6E6575]">
                      Capture today. Relive forever.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}