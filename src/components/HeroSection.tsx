import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "@/components/ui/moving-border";


const HeroSection = () => {
  return (

    
    <>
      <Spotlight  className="-top-40 left-0 md:left-60 md:-top-20" fill="beige"/>
       <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

          {/* main heading container */}
          <div className="p-4 relative z-10 w-full mt-28 text-center">
            <h1 className="mt-24 md:mt-0 px-2 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">Master the art of Nasheeds</h1>
            
            <p className="mt-10 px-4 font-normal text-md md:text-lg md:w-[35rem] text-neutral-400 lg:w-[45rem] mx-auto w-[23rem] sm:w-[25rem]">Dive into our comprehensive nasheed courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills in the art of <b>devotional singing</b>, join us to unlock your true potential.</p>

              {/* button */}
              <div className="mt-16">
                <Link href={"/courses"}>
                  <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-stone-200 border-neutral-200 dark:border-slate-800">Explore Courses</Button>
                
                </Link>
              </div>
            </div>

        </div>

    </>
  )
}
      



export default HeroSection