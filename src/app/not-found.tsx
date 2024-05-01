import React from 'react'

const notFound = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-48 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-orange-50">Page not found</h1>
      <p className="mt-6 mb-10 text-sm md:text-lg text-neutral-400 max-w-sm sm:max-w-lg mx-auto">Could not find requested resource</p>
    </div>
  )
}

export default notFound