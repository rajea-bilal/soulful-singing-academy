import React from 'react'

const page = ({params} : { params : { slug: string []}}) => {

  const webinarName = params.slug[0]
  const hyphensRemoved = webinarName.split('-').map((word: string )=> (word.slice(0, 1).toUpperCase() + word.slice(1))).join(' ')

 
  return (
    <div className="min-h-screen bg-black py-12 pt-48 text-center">
     
      <h1 className="leading-normal text-3xl sm:w-[25rem] md:text-4xl md:w-[35rem] lg:text-5xl lg:w-[50rem] lg:leading-normal md:leading-normal m-auto font-bold mb-2 text-orange-50 px-4">Welcome to {hyphensRemoved} Webinar</h1>
    </div>
  )
}

export default page