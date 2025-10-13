'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Sust = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial state for all animated elements
      gsap.set('.animate-sust', {
        y: 60,
        opacity: 0
      });

      // Set initial state for image
      gsap.set('.animate-image', {
        x: 80,
        opacity: 0
      });

      // Animate text elements with stagger
      gsap.to('.animate-sust', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });

      // Animate image sliding in from right
      gsap.to('.animate-image', {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });
  return (
    <div className="bg-white py-16 px-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto bg-[#fafafa] p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Textual Content */}
          <div className=" md:pl-10 space-y-6 tracking-tight">
            {/* Main Heading */}
            <h2 className="md:text-[50px] lg:text-[70px] text-[40px] max-w-sm font-medium text-gray-800 leading-[1] tracking-tight animate-sust">
            Made for Every Home
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-gray-600 text-[16px] leading-tight max-w-md animate-sust">
            Our products are crafted for the modern Nigerian kitchen, bringing the comfort of home to every plate..
            </p>
            
            {/* Key Points Section */}
            <div className="space-y-6">
              {/* Composting Section */}
              <div className="space-y-2 animate-sust">
                <h3 className="text-[14px] font-bold text-gray-800">Family Meal</h3>
                <p className="text-gray-600">Wholesome, easy-to-prepare meals for everyone .</p>
              </div>
              
              {/* Divider Line */}
              <div className="border-t border-gray-200 w-[70%] animate-sust" ></div>
              
              {/* Water-saving systems Section */}
              <div className="space-y-2 animate-sust">
                <h3 className="text-[14px] font-bold text-gray-800">Restaurant dish</h3>
                <p className="text-gray-600">Consistent, high-quality products trusted by chefs and food businesses</p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-200 w-[70%] animate-sust"></div>
            
            {/* CTA Button */}
            <Link href={"/contact"}>
            <div className="animate-sust">
            <button className="inline-flex mt-8 items-center gap-2 bg-orange-500 hover:bg-orange-500/80 text-white px-6 py-3  rounded-full font-medium transition-colors">
              <img src="/usericon.svg"/>
              Let's work together
            </button></div>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative md:flex md:justify-end animate-image">
            <img 
              src="/umanii.webp" 
              alt="Farmer in sustainable agriculture field" 
              className="md:w-[95%] lg:w-[90%] md:h-[600px] lg:h-[700px] object-cover rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sust;
