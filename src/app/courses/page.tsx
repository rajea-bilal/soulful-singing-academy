"use client"
import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/nasheed_courses.json"
import Link from "next/link";


const page = () => {

  let courseArray = courseData.courses
  return (
    <div className="min-h-screen bg-black py-12 pt-44 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-orange-50">All Courses ({courseData.courses.length})</h1>

      <div className="flex flex-wrap justify-center">
        {courseArray.map(course => (
          <CardContainer className="inter-var m-4" key={course.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
               <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-stone-400"
                >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-orange-50 text-sm max-w-sm mt-2 text-left mb-2"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
              {course.price} →
              </CardItem>
              <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-orange-50 dark:text-black text-white text-xs font-bold"
              >
              Sign up
            </CardItem>
        </div>
      </CardBody>
    </CardContainer>
        ))}

      </div>
    </div>
  )
}


export default page