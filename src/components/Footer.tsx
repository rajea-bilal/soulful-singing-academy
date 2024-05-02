import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-12">
      <div className="max-w-6xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">

        <div>
          <h3 className="text-stone-400 font-bold mb-4">About Us</h3>
          <p className="text-neutral-300 text-sm max-w-[29rem] sm:max-w-[20rem] lg:max-w-[12rem] pr-4">Nasheed Mastery School is a premier institution dedicated to teaching the art and science of Islamic singing. We nurture talent from the ground up fostering a vibrant community of nasheed artists.</p>
        </div>

        <div>
          <h3 className="text-stone-400 font-bold mb-4">Quick Links</h3>
          <ul className="text-neutral-300 text-sm">
            <li className="mb-1"><a href="/" className="hover:text-neutral-100 transition-colors-duration-300 text-sm">Home</a></li>
            <li className="mb-1"><a href="/about" className="hover:text-neutral-100 transition-colors-duration-300 text-sm">About</a></li>
            <li className="mb-1"><a href="/courses" className="hover:text-neutral-100 transition-colors-duration-300 text-sm">Courses</a></li>
            <li className="mb-1"><a href="/contact" className="hover:text-neutral-100 transition-colors-duration-300 text-sm">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-stone-400 font-bold mb-4">Follow Us</h3>
           <ul className="text-neutral-300">
            <li className="mb-1">
                <a 
                href="#" 
                className="hover:text-neutral-100 transition-colors-duration-300 text-sm">
                  Facebook
                </a>
              </li>
            <li className="mb-1">
              <a 
                href="#" 
                className="hover:text-neutral-100 transition-colors-duration-300 text-sm">
                  Twitter
                </a>
              </li>
            <li className="mb-1">
              <a 
                href="#" 
                className="hover:text-neutral-100 transition-colors-duration-300 text-sm">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-stone-400 font-bold mb-4">Contact Us</h3>
          <p className=" text-neutral-300 text-sm mb-1">Birmingham, England</p>
          <p className=" text-neutral-300 text-sm mb-1">Jewellery Quarter, B28 9NA</p>
          <p className=" text-neutral-300 text-sm mb-1">info@nasheedmasteryschool.com</p>
          <p className=" text-neutral-300 text-sm mb-1">+44 7824 558071</p>
        </div>
      </div>

  <p className="text-center pt-10 pb-6 text-xs text-stone-400 font-semibold">&copy; 2024 Nasheed School. All rights reserved. Developed by <a href="https://rajea-bilal.netlify.app" target="_blank" className="text-neutral-600">Rajea Bilal</a> with care.</p>

    </footer>
  )
}


export default Footer