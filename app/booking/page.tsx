"use client";

import { useRouter } from "next/navigation";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function BookingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[var(--color-background)] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_380px]">
        {/* Left */}

        <section className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Booking Details
          </h1>

          <p className="mt-2 text-[var(--color-text-secondary)]">
            Fill in your details to complete your booking.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-gold)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-gold)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-gold)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Number of Guests
              </label>

              <select className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-gold)]">
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>8 Guests</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Special Request
            </label>

            <textarea
              rows={5}
              placeholder="Any decoration, surprise or special request..."
              className="w-full rounded-xl border border-[var(--color-border)] p-4 outline-none focus:border-[var(--color-gold)]"
            />
          </div>
        </section>

        {/* Right */}

        <aside className="h-fit rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-2xl font-semibold">
            Booking Summary
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3">
              <MapPin
                size={18}
                className="text-[var(--color-gold)]"
              />
              <span>Navi Mumbai</span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar
                size={18}
                className="text-[var(--color-gold)]"
              />
              <span>30 June 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock
                size={18}
                className="text-[var(--color-gold)]"
              />
              <span>8:00 PM</span>
            </div>

            <div className="flex items-center gap-3">
              <Users
                size={18}
                className="text-[var(--color-gold)]"
              />
              <span>2 Guests</span>
            </div>
          </div>

          <div className="my-8 border-t border-[var(--color-border)]" />

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Experience</span>
              <span>₹2,499</span>
            </div>

            <div className="flex justify-between">
              <span>Cake</span>
              <span>₹999</span>
            </div>

            <div className="flex justify-between">
              <span>Photography</span>
              <span>₹1,999</span>
            </div>
          </div>

          <div className="my-8 border-t border-[var(--color-border)]" />

          <div className="flex items-center justify-between text-2xl font-semibold">
            <span>Total</span>

            <span className="text-[var(--color-gold)]">
              ₹5,497
            </span>
          </div>

          <button
            onClick={() => router.push("/payment")}
            className="mt-8 w-full rounded-xl bg-[var(--color-gold)] py-4 font-medium text-white transition hover:opacity-90"
          >
            Proceed to Payment →
          </button>
        </aside>
      </div>
    </main>
  );
}