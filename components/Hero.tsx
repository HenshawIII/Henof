"use client"

import React from 'react'
import Image from 'next/image'
import heroImage from '@/public/hero.jpg'
import akara from '@/public/akara1.jpg'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={akara}
          alt="Hero background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-500 bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-start  xl:justify-between flex-col xl:flex-row justify-center">
        <div className="md:text-left flex flex-col items-center md:items-start text-center text-white px-4 md:mt-40 xl:px-11">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 xl:text-8xl">Henof Foods</h1>
          <p className="text-xl md:text-2xl">Bringing you quality meals safe for your health</p>
          <p className="text-xl md:text-2xl">Leading in innovation and quality</p>
          <Link href="/services" className="bg-orange-500 text-white mt-4 px-4 py-2">View Menu</Link> 
        </div>
       
      </div>
    </div>
  )
}

export default Hero