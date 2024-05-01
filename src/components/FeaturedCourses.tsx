'use client'

import React from 'react'
import Link from "next/link"
import courseData from "../data/nasheed_courses.json"
import { BackgroundGradient } from './ui/background-gradient'
import { Button } from "@/components/ui/moving-border";

const FeaturedCourses = () => {

  interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
  }
     
  
      


  // only bring those courses that have the isFeatured property set to true
  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-12 px-6 bg-black">
      <div>
        <div className="text-center">
          <h2 className="text-xl text-orange-50 font-semibold tracking-wide uppercase">Featured Courses</h2>
          <p className="mt-2 text-3xl text-stone-400 font-extrabold tracking-tight leading-8 sm:text-4xl">Learn from the experts</p>
        </div>
      </div>
 
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course:Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[20px] dark:bg-black overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-stone-400">{course.title}</p>
                    <p className="text-sm text-neutral-400 dark:text-stone-500 flex-grow">{course.description}</p>
                    <Link className="mt-2 text-stone-300" href={`/courses/${course.slug}`}>
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
          ))}
        </div>

      </div>


      <div className="mt-20 text-center">
            <Link href={"/courses"}>
              <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-stone-200 border-neutral-200 dark:border-slate-800">View All Courses</Button>
                
            </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
