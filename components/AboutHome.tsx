'use client';

import Image from 'next/image';
import Link from 'next/link';

interface AboutHomeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // Option to reverse the layout
}

export default function AboutHome({
  title = "We are committed to advancing agriculture.",
  subtitle = "About us",
  description = "Our mission is to redefine what's possible in modern farming — creating lasting value for communities, ecosystems, and future generations. Rooted in tradition, driven by innovation — we grow more than crops, we grow impact.",
  imageSrc = "/akara3.jpg",
  imageAlt = "Nigerian Indigenous Food Company",
  reverse = false
}: AboutHomeProps) {
  const featureTags = [
    "Sustainable", "Innovative", "Global", "Reliable", "Efficient",
    "Impactful", "Adaptive", "Collaborative", "Visionary"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* About us tag */}
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2">
              {/* <div className="w-4 h-4 bg-orange-500 rounded-sm"></div> */}
              <img src="/usryl.svg" alt="Tag" className="w-3 h-3" />
              <span className="text-sm font-[600] text-gray-700">{subtitle}</span>
            </div>

            {/* Main headline */}
            <h2 className="md:text-[40px] text-[36px] max-w-md font-[500] tracking-tight text-gray-900 leading-tight">
              {title}
            </h2>

            {/* Feature tags grid */}
            <div className="flex flex-wrap max-w-md gap-1">
              {featureTags.map((tag, index) => (
                <div key={index} className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-lg px-2 py-2 text-center">
                  <span className="text-sm font-medium text-[#585858]">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4 justify-end space-y-10 items-start h-full">
            {/* Mission statement */}
            <p className="text-[16px] max-w-[29rem] text-[#585858]  leading-tight tracking-tight">
              {description}
            </p>
            
            {/* Call to action button */}
            <Link href="/about" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200">
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
