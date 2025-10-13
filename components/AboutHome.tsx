'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface AboutHomeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // Option to reverse the layout
}

export default function AboutHome({
  title = "Made in Nigeria, Made with Care.",
  subtitle = "About us",
  description = "Our Mission is to deliver premium-quality, locally sourced food products that promote healthy living, empower farmers, and strengthen Nigeria’s food system. To become Africa’s most trusted name in natural food production — rooted in quality, community, and sustainability.",
  imageSrc = "/akara3.jpg",
  imageAlt = "Nigerian Indigenous Food Company",
  reverse = false
}: AboutHomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const featureTags = [
    "Sustainable", "Innovative", "Global", "Reliable", "Efficient",
    "Impactful", "Adaptive", "Collaborative", "Visionary"
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial state for all animated elements
      gsap.set('.animate-on-scroll', {
        y: 60,
        opacity: 0
      });

      gsap.set(".feature-tag",{
        opacity:0,
        y:70
      })

      // Animate elements when they come into view
      gsap.to('.animate-on-scroll', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });

      // Special animation for feature tags with individual stagger
      gsap.to('.feature-tag', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.feature-tags-container',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* About us tag */}
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 animate-on-scroll">
              {/* <div className="w-4 h-4 bg-orange-500 rounded-sm"></div> */}
              <img src="/usryl.svg" alt="Tag" className="w-3 h-3" />
              <span className="text-sm font-[600] text-gray-700">{subtitle}</span>
            </div>

            {/* Main headline */}
            <h2 className="md:text-[40px] text-[36px] max-w-md font-[500] tracking-tight text-gray-900 leading-tight animate-on-scroll">
              {title}
            </h2>

            {/* Feature tags grid */}
            <div className="flex flex-wrap max-w-md gap-1 feature-tags-container">
              {featureTags.map((tag, index) => (
                <div key={index} className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-lg px-2 py-2 text-center feature-tag">
                  <span className="text-sm font-medium text-[#585858]">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4 justify-end space-y-10 items-start h-full">
            {/* Mission statement */}
            <p className="text-[16px] max-w-[29rem] text-[#585858] animate-on-scroll">
              {description}
            </p>
            
            {/* Call to action button */}
            <Link href="/about" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-500/80 text-white  px-6 py-3 rounded-full font-semibold transition-colors duration-200 animate-on-scroll">
              {/* <div className="w-5 h-5 bg-orange-300 rounded-sm"></div> */}
              <img src="/usericon.svg" alt="Tag" className="w-3 h-3" />
              About the company
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
