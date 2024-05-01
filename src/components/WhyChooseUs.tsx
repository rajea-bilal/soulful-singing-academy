"use client";

import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const WhyChooseUs = () => {

  const nasheedSchoolContent = [
  {
    "title": "Learn the Historical and Cultural Significance",
    "description": "Gain insights into the rich history and cultural significance of Nasheed and Islamic singing traditions, understanding their evolution and relevance in various contexts."
  },
  {
    "title": "Master Vocal Techniques",
    "description": "Receive comprehensive training in vocal techniques specific to Nasheed and Islamic singing, including breath control, pitch modulation, melodic ornamentation, and vocal projection."
  },
  {
    "title": "Understand Religious Context",
    "description": "Explore the spiritual and religious contexts of Islamic singing, learning about the significance of lyrics, themes, and melodies in conveying messages of faith, devotion, and praise."
  },
  {
    "title": "Connect with Community",
    "description": "Join a community of like-minded individuals passionate about Nasheed and Islamic singing, sharing experiences, knowledge, and support as you embark on your journey to mastery."
  },
  {
    "title": "Access Expert Guidance",
    "description": "Benefit from expert guidance and personalized feedback from experienced instructors who are dedicated to helping you develop your skills and achieve your goals in Nasheed and Islamic singing."
  },
  {
    "title": "Expand Performance Opportunities",
    "description": "Open doors to a wide range of performance opportunities, including concerts, recitals, competitions, and cultural events, showcasing your talent and spreading the beauty of Nasheed and Islamic singing."
  },
  {
    "title": "Preserve and Promote Tradition",
    "description": "Contribute to the preservation and promotion of Nasheed and Islamic singing traditions, playing a vital role in safeguarding cultural heritage and fostering appreciation for these art forms."
  }
]

  return (
    <div>
      <StickyScroll content={nasheedSchoolContent} />
    </div>
  )
}

export default WhyChooseUs