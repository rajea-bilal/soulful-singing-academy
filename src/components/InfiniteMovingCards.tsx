"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialsDemo() {


  // testimonials data
  const testimonials = [
  {
    quote: "The Nasheed Mastery Course has truly been a life-changing experience for me. Not only did I enhance my vocal skills, but I also gained a deeper understanding of the cultural and spiritual significance of nasheed.",
    name: "Amina Khalid",
    title: "Participant"
  },
  {
    quote: "I've always been passionate about nasheed, and this course provided me with the perfect platform to refine my skills. The instructors' expertise and guidance have helped me become a more confident performer.",
    name: "Youssef Ahmed",
    title: "Enthusiast"
  },
  {
    quote: "Enrolling in the Nasheed Mastery Course was one of the best decisions I've made for my artistic journey. I've learned invaluable techniques that have not only improved my nasheed performances but also inspired me to explore new creative avenues.",
    name: "Sara Abbas",
    title: "Artist"
  },
  {
    quote: "The Nasheed Mastery Course exceeded my expectations in every way. The curriculum is comprehensive, the instructors are knowledgeable and supportive, and the community is welcoming. I've grown both as a singer and as an individual through this enriching experience.",
    name: "Ahmad Khan",
    title: "Student"
  },
  {
    quote: "As someone who's relatively new to nasheed, I was initially hesitant to enroll in the course. However, I'm so glad I did! The structured lessons and personalized feedback have accelerated my learning, and I'm now more confident in my ability to express myself through music.",
    name: "Layla Ali",
    title: "Beginner"
  },
  {
    quote: "The Nasheed Mastery Course not only taught me technical skills but also provided me with a deeper appreciation for the art form. I've learned to infuse my performances with emotion and sincerity, creating a more meaningful connection with my audience.",
    name: "Zainab Hussein",
    title: "Performer"
  },
  {
    quote: "I've been singing nasheed for years, but there's always room for improvement. The Nasheed Mastery Course helped me refine my technique and explore new styles, reigniting my passion for this beautiful form of expression.",
    name: "Omar Farooq",
    title: "Experienced Singer"
  }
]

  return (
    <div className="py-12 px-6 h-[40rem] w-full dark:bg-black">
      <h2 className="text-xl text-center text-orange-50 font-semibold tracking-wide uppercase">Testimonials</h2>
      <p className="text-3xl mt-2 text-stone-400 font-extrabold tracking-tight leading-8 sm:text-4xl text-center">Voices of success</p>

      <div className="flex justify-center w-full mt-20 sm:px-6">
        <div className="w-full overflow-hidden max-w-7xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
        </div>
      </div>
     

    </div>
  );
}





