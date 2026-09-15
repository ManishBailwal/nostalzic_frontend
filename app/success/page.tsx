"use client";

import { CheckCircle2, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6 py-12">
      <div className="w-full max-w-2xl rounded-[2rem] border border-[var(--color-border)] bg-white p-10 text-center shadow-lg">
        {/* Success Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2
            size={56}
            className="text-green-600"
          />
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-4xl font-semibold text-[var(--color-text)]">
          Booking Confirmed!
        </h1>

        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          Thank you for choosing Belle Amore.
          <br />
          We've received your booking and can't wait to celebrate with you.
        </p>

        {/* Booking Details */}

        <div className="mt-10 rounded-2xl bg-[var(--color-background)] p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Booking Details
          </h2>

          <div className="space-y-5 text-left">
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

            <div className="flex justify-between border-t border-[var(--color-border)] pt-5">
              <span>Booking ID</span>

              <span className="font-semibold">
                BA-240630-1024
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Paid</span>

              <span className="font-semibold text-[var(--color-gold)]">
                ₹5,497
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex-1 rounded-xl border border-[var(--color-border)] px-6 py-4 text-center font-medium transition hover:border-[var(--color-gold)]"
          >
            Back to Home
          </Link>

          <Link
            href="/experiences"
            className="flex-1 rounded-xl bg-[var(--color-gold)] px-6 py-4 text-center font-medium text-white transition hover:opacity-90"
          >
            Explore More
          </Link>
        </div>

        {/* Footer */}

        <p className="mt-8 text-sm text-[var(--color-text-secondary)]">
          A confirmation email and WhatsApp message will be sent shortly.
        </p>
      </div>
    </main>
  );
}