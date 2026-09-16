// app/page.tsx


import EmotionalHookSection from "@/components/home/EmotionalHookSection";
import MemoriesSection from "@/components/home/MemoriesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import MomentsToStorySection from "@/components/home/MomentsToStorySection";
import MemoryTimelineSection from "@/components/home/MemoryTimelineSection";
import KeepsakeSection from "@/components/home/KeepsakeSection";
import OccasionsSection from "@/components/home/OccasionsSection";
import MemoryPreviewSection from "@/components/home/MemoryPreviewSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import HeroSection from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <EmotionalHookSection />
      <MemoriesSection />
      <HowItWorksSection />
      <MomentsToStorySection />
      <MemoryTimelineSection />
      <KeepsakeSection />
      <OccasionsSection />
      <MemoryPreviewSection />
      <FinalCTASection />
    </>
  );
}