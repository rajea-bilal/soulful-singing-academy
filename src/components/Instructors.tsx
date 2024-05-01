"use client"
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const Instructors = () => {

  const instructorsArray = [
  {
    id: 1,
    name: "Muhammad Ahmed",
    designation: "Lead Instructor",
    image: "https://plus.unsplash.com/premium_photo-1677523780219-ebb367026ced?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Aisha Khan",
    designation: "Vocal Coach",
     image: "https://images.unsplash.com/photo-1620195408655-90b26c8b9608?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Ibrahim Ali",
    designation: "Instrumentation Specialist",
    image: "https://plus.unsplash.com/premium_photo-1677621879478-fe161e8c9362?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Fatima Rahman",
    designation: "Lyrics Expert",
    image: "https://images.unsplash.com/photo-1612307104871-14509b80917d?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

  return (
    <div className="h-[40rem] py-12 px-6 mt-16 max-w-8xl w-full dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-center text-orange-50 font-semibold tracking-wide uppercase sm:px-6">Meet out Instructors</h2>
        <p className="text-3xl mt-2 text-stone-400 font-extrabold tracking-tight leading-8 sm:text-4xl text-center">Talented teachers helping you in your nasheed journey</p>
      </div>
        <div className="flex justify-center items-center mt-40 w-full">
           <AnimatedTooltip items={instructorsArray} />
        </div>
    </div>
  )
}

export default Instructors