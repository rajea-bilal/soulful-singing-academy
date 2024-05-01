"use client"

import { SparklesCore } from '@/components/ui/sparkles'
import { Button } from "@/components/ui/moving-border";
import Link from "next/link"

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-48 
    text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-orange-50">Contact us</h1>
    <p className="mt-6 mb-10 text-sm md:text-lg text-neutral-400 max-w-sm sm:max-w-lg mx-auto">We&apos;re here to help with any questions about our courses, programs, or events. Please feel free to reach out and let us know how we can assist you in your nasheed journey.</p>

    
     

      <div className="max-w-2xl m-auto px-4 py-4">
        <form>
          <input type="email" placeholder="email address" className="w-full mb-8 py-2 px-2 bg-orange-50 text-neutral-800 placeholder-neutral-500 rounded-md"/>
          <textarea placeholder="message..." className="w-full h-[15rem] py-2 px-2 bg-orange-50 text-neutral-800 placeholder-neutral-500 rounded-md"></textarea>
        </form>

         <Link href={"/courses"}>
            <button className="bg-orange-50 text-neutral-800 rounded-md py-2 px-8 mt-6 font-bold hover:bg-neutral-700 hover:text-neutral-400 hover:transition-all">Send</button>
        </Link>
                
      </div>
        

     </div>
    
  )
}

export default page