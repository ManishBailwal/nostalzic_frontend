"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Clock3,
  MapPin,
  Star,
  Users,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import type { Experience } from "./data";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: Props) {

    const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState("");

  const {
    image,
    title,
    location,
    price,
    rating,
    guests,
    duration,
    featured,
    availableSlots,
    category,
  } = experience;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-lg transition-all hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src='/heroImage.png'
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {featured && (
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow">
            <Sparkles
              size={14}
              className="text-[var(--color-gold)]"
            />
            Bestseller
          </div>
        )}

        <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white px-3 py-2 shadow">
          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-semibold">
            {rating}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium backdrop-blur">
          {category}
        </div>
      </div>

      {/* Content */}

      <div className="space-y-6 p-7">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--color-text)]">
            {title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            <MapPin size={16} />

            <span>{location}</span>
          </div>
        </div>

        {/* Info */}

        <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-2">
            <Users size={16} />

            {guests} Guests
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />

            {duration}
          </div>
        </div>

        {/* Price */}

        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-[var(--color-gold)]">
            ₹{price.toLocaleString()}
          </span>

          <span className="pb-1 text-sm text-[var(--color-text-secondary)]">
            starting
          </span>
        </div>

        {/* Time Slots */}

        <div>
          <p className="mb-3 text-sm font-medium text-[var(--color-text-secondary)]">
            Available Time Slots
          </p>

          <div className="flex flex-wrap gap-3">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  selectedSlot === slot
                    ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-white"
                    : "border-[var(--color-border)] bg-white hover:border-[var(--color-gold)]"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}

        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-full border border-[var(--color-border)] py-3 font-medium transition-all hover:border-[var(--color-gold)]">
            View Details
          </button>

          <button
  disabled={!selectedSlot}
  onClick={() => router.push("/customize")}
  className={`flex-1 rounded-full py-3 font-medium transition-all duration-300 ${
    selectedSlot
      ? "bg-[var(--color-gold)] text-white hover:opacity-90"
      : "cursor-not-allowed bg-gray-200 text-gray-500"
  }`}
>
  {selectedSlot ? "Continue →" : "Select Time"}
</button>
        </div>
      </div>
    </motion.div>
  );
}