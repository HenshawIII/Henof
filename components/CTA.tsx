"use client";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial state for text elements
      gsap.set('.animate-cta-text', {
        y: 60,
        opacity: 0
      });

      // Animate text elements sliding up
      gsap.to('.animate-cta-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });
  return (
    <section className="w-full py-20 px-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-green-100 to-yellow-200 rounded-lg md:p-12 p-8  md:py-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className=" tracking-tight order-2 lg:order-1">
              {/* Headline */}
              <h2 className="text-[40px] pb-6 md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight tracking-tight animate-cta-text">
                Grow something
                <br />
                great together.
              </h2>
              
              {/* Description */}
              <p className="text-[16px] pb-32 text-gray-700 leading-relaxed max-w-md animate-cta-text">
              Join us in shaping the future of local food production.
              Whether you’re a farmer, distributor, retailer, or collaborator, there’s a place for you in the Henof Foods network.
              </p>
              
              {/* CTA Button */}
              <Link href="/contact">
              <button className="inline-flex  items-center gap-3 bg-orange-500 hover:bg-orange-500/80 text-white px-8 py-4 rounded-full font-medium text-[16px] tracking-tight transition-all duration-300 transform   animate-cta-text">
                <img src='/usericon.svg'/>
                Partner with us
              </button>
              </Link>
            </div>
            
            {/* Right Content - Keywords */}
            <div className="flex order-1 lg:order-2 flex-col items-start lg:items-end justify-end h-full space-y-6">
              <div className="flex gap-6 w-full max-w-md animate-cta-text">
                {/* Driven */}
                <div className="flex items-center gap-4 ">
                 <img src="usryl.svg" alt="" />
                  <span className="text-[16px] tracking-tight font-medium text-gray-800">Healthy</span>
                </div>
                
                {/* Rooted */}
                <div className="flex items-center gap-4 ">
                 <img src="usryl.svg" alt="" />
                  <span className="text-[16px] tracking-tight font-medium text-gray-800">Local</span>
                </div>
                
                {/* Impactful */}
                <div className="flex items-center gap-4 ">
                  <img src="usryl.svg" alt="" />
                  <span className="text-[16px] tracking-tight font-medium text-gray-800">Nourishing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
