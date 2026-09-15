"use client";

import { CreditCard, Landmark, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";

const paymentMethods = [
  {
    title: "UPI",
    subtitle: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
  },
  {
    title: "Credit / Debit Card",
    subtitle: "Visa, Mastercard, RuPay",
    icon: CreditCard,
  },
  {
    title: "Net Banking",
    subtitle: "All major Indian banks",
    icon: Landmark,
  },
];

export default function PaymentPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[var(--color-background)] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_380px]">
        {/* Left */}

        <section className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Final Step
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-[var(--color-text)]">
            Choose Payment Method
          </h1>

          <p className="mt-3 text-[var(--color-text-secondary)]">
            Complete your payment to confirm your celebration.
          </p>

          <div className="mt-10 space-y-5">
            {paymentMethods.map((method) => {
              const Icon = method.icon;

              return (
                <button
                  key={method.title}
                  className="flex w-full items-center gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-6 text-left transition-all hover:border-[var(--color-gold)] hover:shadow-md"
                >
                  <div className="rounded-xl bg-[var(--color-background)] p-4">
                    <Icon
                      size={24}
                      className="text-[var(--color-gold)]"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {method.title}
                    </h3>

                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {method.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Right */}

        <aside className="h-fit rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-2xl font-semibold">
            Payment Summary
          </h2>

          <div className="mt-8 space-y-4">
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
            onClick={() => router.push("/success")}
            className="mt-8 w-full rounded-xl bg-[var(--color-gold)] py-4 font-medium text-white transition hover:opacity-90"
          >
            Pay ₹5,497
          </button>

          <p className="mt-4 text-center text-xs text-[var(--color-text-secondary)]">
            Secure payments powered by Razorpay.
          </p>
        </aside>
      </div>
    </main>
  );
}