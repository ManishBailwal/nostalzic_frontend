"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Check, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const addons = [
  { id: 1, name: "Premium Cake", price: 999 },
  { id: 2, name: "Bouquet", price: 499 },
  { id: 3, name: "Photography", price: 1999 },
  { id: 4, name: "Live Music", price: 2499 },
  { id: 5, name: "Balloon Decoration", price: 799 },
  { id: 6, name: "Champagne", price: 1499 },
];

const includedAmenities = [
  "Private Dome",
  "Romantic Decoration",
  "Candle Light Setup",
  "Bluetooth Music",
];

const basePrice = 2499;

export default function CustomizePage() {
  const router = useRouter();

  const [selected, setSelected] = useState<number[]>([]);

  const toggleAddon = (id: number) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const total = useMemo(() => {
    return (
      basePrice +
      addons
        .filter((item) => selected.includes(item.id))
        .reduce((sum, item) => sum + item.price, 0)
    );
  }, [selected]);

  return (
    <main className="bg-[var(--color-background)] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_360px]">
        {/* LEFT */}

        <section>
          <Image
            src="/heroImage.png"
            alt="Experience"
            width={1200}
            height={700}
            className="h-[420px] w-full rounded-[2rem] object-cover"
          />

          <div className="mt-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Romantic Dome Dinner
            </p>

            <h1 className="mt-2 text-4xl font-semibold">
              Customize Your Celebration
            </h1>

            <p className="mt-3 text-[var(--color-text-secondary)]">
              Select add-ons to make your celebration even more memorable.
            </p>
          </div>

          {/* Included */}

          <div className="mt-10">
            <h2 className="mb-5 text-2xl font-semibold">
              Included
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {includedAmenities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5"
                >
                  <Check
                    size={18}
                    className="text-[var(--color-gold)]"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Addons */}

          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-semibold">
              Add-ons
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {addons.map((addon) => {
                const active = selected.includes(addon.id);

                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`rounded-3xl border p-6 text-left transition ${
                      active
                        ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-white"
                        : "border-[var(--color-border)] bg-white hover:border-[var(--color-gold)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        {addon.name}
                      </h3>

                      {active ? (
                        <Check size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>

                    <p className="mt-4 text-xl font-bold">
                      ₹{addon.price}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* RIGHT */}

        <aside className="h-fit rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-lg lg:sticky lg:top-24">
          <h2 className="text-2xl font-semibold">
            Booking Summary
          </h2>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span>Experience</span>

              <span>₹{basePrice}</span>
            </div>

            {addons
              .filter((item) => selected.includes(item.id))
              .map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between"
                >
                  <span>{item.name}</span>

                  <span>₹{item.price}</span>
                </div>
              ))}
          </div>

          <div className="my-8 border-t border-[var(--color-border)]" />

          <div className="flex items-center justify-between text-2xl font-bold">
            <span>Total</span>

            <span className="text-[var(--color-gold)]">
              ₹{total}
            </span>
          </div>

          <button
            onClick={() => router.push("/booking")}
            className="mt-8 w-full rounded-xl bg-[var(--color-gold)] py-4 font-semibold text-white transition hover:opacity-90"
          >
            Continue Booking →
          </button>
        </aside>
      </div>
    </main>
  );
}