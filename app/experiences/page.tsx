"use client";

import { SlidersHorizontal, Search, CalendarDays, MapPin } from "lucide-react";
import ExperienceCard from "@/components/ExperienceCard";
import { Experience, experiences } from "@/components/data";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        {/* Header */}

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            Belle Amore
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-[var(--color-text)] md:text-5xl">
            Curated Celebration Experiences
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Discover premium celebration experiences tailored for your special
            occasion.
          </p>
        </div>

        {/* Search Summary */}

        <div className="mb-10 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  className="text-[var(--color-gold)]"
                />

                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    City
                  </p>

                  <p className="font-medium">Mumbai</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Search
                  size={20}
                  className="text-[var(--color-gold)]"
                />

                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Location
                  </p>

                  <p className="font-medium">Navi Mumbai</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={20}
                  className="text-[var(--color-gold)]"
                />

                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Date
                  </p>

                  <p className="font-medium">30 June 2026</p>
                </div>
              </div>
            </div>

            <button className="rounded-full border border-[var(--color-border)] px-6 py-3 transition hover:border-[var(--color-gold)]">
              Edit Search
            </button>
          </div>
        </div>

        {/* Main Layout */}

        <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}

          <aside className="h-fit rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <div className="mb-8 flex items-center gap-3">
              <SlidersHorizontal size={20} />

              <h2 className="text-xl font-semibold">Filters</h2>
            </div>

            {/* Occasion */}

            <div className="mb-8">
              <h3 className="mb-4 font-medium">Occasion</h3>

              <div className="space-y-3">
                {[
                  "Birthday",
                  "Anniversary",
                  "Proposal",
                  "Wedding",
                  "Corporate",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input type="checkbox" />

                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Guests */}

            <div className="mb-8">
              <h3 className="mb-4 font-medium">Guests</h3>

              <select className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none">
                <option>Any</option>
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>10+ Guests</option>
              </select>
            </div>

            {/* Price */}

            <div className="mb-8">
              <h3 className="mb-4 font-medium">Price Range</h3>

              <input
                type="range"
                className="w-full"
              />

              <div className="mt-2 flex justify-between text-sm text-[var(--color-text-secondary)]">
                <span>₹2,000</span>

                <span>₹20,000</span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-[var(--color-gold)] py-3 font-medium text-white">
              Apply Filters
            </button>
          </aside>

          {/* Experiences */}

          <section>
            {/* Top Bar */}

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold">
                  {experiences.length} Experiences Found
                </h2>

                <p className="mt-2 text-[var(--color-text-secondary)]">
                  Showing curated experiences in Navi Mumbai
                </p>
              </div>

              <select className="rounded-xl border border-[var(--color-border)] bg-white px-5 py-3 outline-none">
                <option>Sort by Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>

            {/* Cards */}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
              {experiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}