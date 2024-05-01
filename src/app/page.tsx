import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { TestimonialsDemo } from "@/components/InfiniteMovingCards";
import Instructors from "@/components/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <FeaturedCourses />
      {/* <WhyChooseUs /> */}
      <TestimonialsDemo />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}

