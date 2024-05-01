'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link'
import { Button } from "@/components/ui/moving-border";


const UpcomingWebinars = () => {


  const featuredWebinars = [
    {
        "title": "Introduction to Nasheed Composition",
        "description": "Join us for an introductory webinar on the art of Nasheed composition. Learn the basics of melody, rhythm, and lyrical composition.",
        "slug": "/webinars/introduction-to-nasheed-composition",
        "isFeatured": true
    },
    {
        "title": "Advanced Vocal Techniques in Nasheed",
        "description": "Explore advanced vocal techniques specific to Nasheed singing. Perfect for experienced vocalists looking to enhance their skills.",
        "slug": "/webinars/advanced-vocal-techniques-in-nasheed",
        "isFeatured": false
    },
    {
        "title": "Nasheed Production Workshop",
        "description": "Discover the intricacies of Nasheed production, including recording, mixing, and mastering. Ideal for aspiring Nasheed producers.",
        "slug": "/webinars/nasheed-production-workshop",
        "isFeatured": true
    },
    {
        "title": "Islamic Poetry and Nasheed",
        "description": "Delve into the rich tradition of Islamic poetry and its connection to Nasheed. Gain insights into crafting meaningful lyrics.",
        "slug": "/webinars/islamic-poetry-and-nasheed",
        "isFeatured": false
    }
]



  return (
    <div className="py-12 px-6 max-w-8xl w-full dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">

        {/* title & description of section */}
        <h2 className="text-xl text-center text-neutral-200 font-semibold tracking-wide uppercase sm:px-6">Featured webinars</h2>
        <p className="text-3xl mt-2 text-stone-400 font-extrabold tracking-tight leading-8 sm:text-4xl text-center">Enhance your nasheed journey</p>

        {/* main cards */}
        <div className="">
          <HoverEffect items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug
            }
          ))} />
        </div>

        {/* button */}
        <div className="mt-10 text-center">
          <Link href={"./"}>
               <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-stone-200 border-neutral-200 dark:border-slate-800">View Webinars</Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default UpcomingWebinars