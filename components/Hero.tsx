"use client"

import React from 'react'
import Image from 'next/image'
import heroImage from '@/public/hero.jpg'
import akara from '@/public/akara1.jpg'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  useGSAP(() => {
    // Set initial state - hide elements and position them below
    gsap.set('.animate-text', {
      y: 50,
      opacity: 0
    });

    // Animate elements sliding up from below
    gsap.to('.animate-text', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2, // Stagger the animations by 0.2 seconds
      delay: 0.3 // Small delay before starting
    });
  })

  return (
    <div className="relative h-[100vh] xl:min-h-[120vh] md:h-[70vh] lg:h-[50vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={akara}
          alt="Hero background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* <video src="/henofii.mp4" className='w-full h-full object-cover' autoPlay playsInline loop muted /> */}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-500 bg-opacity-10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-start gap-16 sm:gap-20  lg:justify-around lg:items-center flex-col-reverse lg:flex-row justify-center">
        <div className="md:text-left flex flex-col items-start md:items-start  text-left text-white px-4 lg:mt-32 xl:pl-20">
          {/* Three Icons with Labels */}
          <div className="flex flex-row items-center gap-6 sm:gap-8 lg:mb-8 mb-2 animate-text">
            <div className="flex items-center gap-3">
              {/* <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div> */}
              <img src="/usericon.svg" alt="Driven" className="lg:w-12 lg:h-12  w-3 h-3" />
              <span className="text-[16px] tracking-tight font-medium">Healthy</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/usericon.svg" alt="Rooted" className="lg:w-12 lg:h-12  w-3 h-3" />
              {/* <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div> */}
              <span className="text-[16px] tracking-tight font-medium">Local</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/usericon.svg" alt="Impactful" className="lg:w-12 lg:h-12  w-3 h-3" />
              {/* <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div> */}
              <span className="text-[16px] tracking-tight font-medium">Nourishing</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className=" xl:text-[28px] text-[20px] sm:text-[28px] max-w-lg font-[500] text-gray-100 mb-8 leading-tight animate-text">
          Through native crops and local hands, we grow more than just harvests — we grow heritage.
          </h1>

          {/* Call to Action */}
          <Link href="/contact" className="inline-flex items-center gap-12 text-xl font-medium py-2 tracking-tight relative group text-gray-100 transition-colors animate-text">
            <span>Start growing with us</span>
           <img src="/arr.svg" alt="User" className="w-5 h-5 group-hover:translate-x-4 transition-transform duration-300" />
            {/* Animated bottom border */}
            <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-orange-50 transition-all duration-300 group-hover:w-0"></span>
          </Link>
        </div>
        <div className="md:text-left flex   items-center md:items-start text-center text-white px-4 lg:mt-32 xl:pr-20 animate-text">
          <div className="text-[40px] md:text-[50px] lg:text-[70px] font-[500] leading-[1.1] lg:max-w-xl max-w-[350px] md:max-w-[500px] tracking-tight lg:text-right text-left">
          <p>Redefining food production & processing</p>
          </div>
        </div>
      </div>
      <div className= "absolute animate-text bottom-0 left-1/2 -translate-x-1/2 w-[82%] mx-auto text-gray-50 flex border-t-[.001px] border-orange-50/40 justify-between items-center  py-8">
         <p>Ogun, Nigeria</p>
         <p>Start growing with us</p>
      </div>
    </div>
  )
}

export default Hero