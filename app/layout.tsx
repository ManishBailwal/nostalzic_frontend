import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


export const metadata: Metadata = {
  title: "Nostalzic: Save Today. Relive Tomorrow.",
  description: "Nostalzic helps you save the moments that matter today, so you can relive them tomorrow and turn them into stories worth keeping. Because a mirror doesn't show the past. 🪞❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
     
    >
      <body className="flex min-h-screen flex-col bg-background text-text antialiased">
        <Navbar />

        {/* 96px = h-24 navbar */}
        <main className="flex-1 pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}