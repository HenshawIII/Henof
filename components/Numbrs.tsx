'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Numbrs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial state for numbers and text
      gsap.set('.animate-numbers', {
        y: 60,
        opacity: 0
      });

      // Set initial state for cards (slide in from right)
      gsap.set('.animate-cards', {
        x: 100,
        opacity: 0
      });

      // Animate numbers and text when they come into view
      gsap.to('.animate-numbers', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });

      // Animate cards sliding in from right
      gsap.to('.animate-cards', {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });
  return (
    <div className="bg-white xl:pt-32 pt-16  px-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-numbers  gap-8">
          {/* First Statistic - On-time delivery rate */}
          <div className="text-center lg:text-left max-w-md space-y-4 animate-numbers">
            <div className="flex lg:justify-start justify-center mb-4">
            <img src="/svg.svg" alt="check" className="w-4 h-4" />
            </div>
            <div className="text-6xl md:text-7xl font-medium text-black mb-2">98%</div>
            <div className="text-xl font-semibold text-black mb-3">On-time delivery rate</div>
            <div className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Efficient distribution across regions, supporting supply chains with reliability and precision.
            </div>
          </div>

          {/* Second Statistic - Countries reached */}
          <div className="lg:text-left text-center max-w-md space-y-4 animate-numbers">
            <div className="flex lg:justify-start justify-center mb-4">
            <img src="/svg.svg" alt="check" className="w-4 h-4" />
            </div>
            <div className="md:text-7xl text-6xl font-medium text-black mb-2">15+</div>
            <div className="text-xl font-semibold text-black mb-3">Countries reached</div>
            <div className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Our food processing solutions are trusted by partners in more than 15 countries globally.
            </div>
          </div>

          {/* Third Statistic - Acres cultivated sustainably */}
          <div className="lg:text-left md:col-span-2 lg:col-span-1 col-span-1 mx-auto text-center space-y-4 animate-numbers">
            <div className="flex lg:justify-start justify-center mb-4">
            <img src="/svg.svg" alt="check" className="w-4 h-4" />
            </div>
            <div className="text-6xl md:text-7xl font-medium text-black mb-2">100%</div>
            <div className="text-xl font-semibold text-black mb-3">Locally sourced and processed</div>
            <div className="text-gray-600 text-sm  leading-relaxed max-w-sm">
            We take pride in keeping every part of our production rooted in Nigeria.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:py-24 xl:pt-44 md:pt-24 py-16 px-2">
        <div className="">
          <div className="grid grid-cols-1 xl:grid-cols-6 gap-12 items-center">
            {/* Left Column - Textual Content */}
            <div className="space-y-6 flex flex-col items-center xl:items-start xl:col-span-2 xl:pl-24 md:pb-12">
              {/* Tag with green background */}
              <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-gray-400/30 px-4 py-2 rounded-full text-sm font-medium animate-numbers">
                <img src="/usryl.svg" alt="Tag" className="w-3 h-3" />
                Our solutions
              </div>
              
              {/* Main heading */}
              <h2 className="text-4xl md:max-w-[80%] tracking-normal text-center md:text-left font-medium text-black leading-tight animate-numbers">
              Where Quality Meets Tradition.
              </h2>
              
              {/* Description paragraph */}
              <p className="text-gray-600 text-center lg:text-left text-[16px]  leading-relaxed max-w-sm animate-numbers">
              We combine time-honored farming practices with modern processing standards to deliver food that’s as authentic as it is safe.
              </p>
              
              {/* CTA Button */}
              <Link href="/services">
              <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-500/80 text-white px-6 py-3 rounded-full font-medium transition-colors animate-numbers">
                <img src="/usericon.svg" alt="" />
                Discover our solutions
              </button>
              </Link>
            </div>

            {/* Right Column - Three Vertical Cards */}
            <div className="gap-2 xl:col-span-4 relative flex flex-col md:flex-row" ref={cardsRef}>
                <div className='absolute inset-0 w-[105%] xl:w-[80%] left-1/2 -translate-x-1/2 xl:h-[140%] h-[105%] top-1/2 -translate-y-1/2 bg-[#fafafa]  rounded-lg '>

                </div>
              {/* Card 1 - Precision farming */}
              <div className="relative lg:w-[45vw] md:w-[33vw] md:h-[28vh] lg:h-[30vh] xl:h-[50vh] h-[40vh] bg-gray-800 rounded-lg overflow-hidden animate-cards">
                <img 
                  src="/akara1.jpg" 
                  alt="Precision farming" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute group top-4 left-4 hover:bg-orange-500 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 group-hover:rotate-90 transition-all group-hover:text-white duration-300 text-lg font-bold">+</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Product Development</h3>
                  <p className="text-white text-sm leading-relaxed">
                  We’re reimagining local foods for modern tastes — from new processing methods to improved preservation and ready-to-cook options
                  </p>
                </div>
              </div>

              {/* Card 2 - Sustainable irrigation */}
              <div className="relative lg:w-[45vw] md:w-[33vw] md:h-[28vh] lg:h-[30vh] xl:h-[50vh] h-[40vh] bg-gray-800 rounded-lg overflow-hidden animate-cards">
                <img 
                  src="/akara2.jpg" 
                  alt="Sustainable irrigation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute group top-4 left-4 hover:bg-orange-500 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 group-hover:rotate-90 transition-all group-hover:text-white duration-300 text-lg font-bold">+</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Product packaging</h3>
                  <p className="text-white text-sm leading-relaxed">
                  Our packaging combines function and freshness — designed to protect the natural quality of our products from farm to shelf.
                  </p>
                </div>
              </div>

              {/* Card 3 - Supply chain support */}
              <div className="relative lg:w-[45vw] md:w-[33vw] md:h-[28vh] lg:h-[30vh] xl:h-[50vh] h-[40vh] bg-gray-800 rounded-lg overflow-hidden animate-cards">
                <img 
                  src="/akara3.jpg" 
                  alt="Supply chain support" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute group top-4 left-4 hover:bg-orange-500 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 group-hover:rotate-90 transition-all group-hover:text-white duration-300 text-lg font-bold">+</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Community Programs</h3>
                  <p className="text-white text-sm leading-relaxed">
                  Beyond production, we invest in agricultural education, waste reduction, and empowerment programs that strengthen food security in Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbrs;
