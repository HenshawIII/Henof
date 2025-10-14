'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface HistoryData {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const History = () => {
  const [activeTab, setActiveTab] = useState('2001');
  const textRef = useRef<HTMLDivElement>(null);

  const historyData: HistoryData[] = [
    {
      year: '2001',
      title: 'Company is founded and patent for Beans flour obtained.',
      description: 'Henof Foods was established with a groundbreaking innovation - obtaining the patent for beans flour production. This marked the beginning of our journey to revolutionize indigenous food processing.',
      image: '/Found1.avif',
      imageAlt: 'Farmer in agricultural field'
    },
    {
      year: '2010',
      title: 'Expansion into local markets begins.',
      description: 'With our patented beans flour technology proven, we began expanding into local Nigerian markets, reaching more communities with high-quality, nutritious products.',
      image: '/Flour.png',
      imageAlt: 'Local market expansion'
    },
    {
      year: '2018',
      title: 'First own factory built.',
      description: 'A major milestone was achieved with the construction of our first dedicated manufacturing facility, enabling us to scale up production and maintain the highest standards of food safety.',
      image: '/umani.webp',
      imageAlt: 'Manufacturing facility'
    },
    {
      year: '2023',
      title: 'Leading the future of indigenous food produce.',
      description: 'Today, Henof Foods stands at the forefront of indigenous food innovation, pioneering sustainable processing methods for traditional Nigerian crops while preserving cultural food heritage.',
      image: '/sus.png',
      imageAlt: 'Indigenous food innovation'
    }
  ];

  const activeData = historyData.find(data => data.year === activeTab) || historyData[0];

  // GSAP animation for text transitions
  useGSAP(() => {
    if (textRef.current) {
      // Set initial state
      gsap.set(textRef.current, { opacity: 0, y: 20 });
      
      // Animate in
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, { dependencies: [activeTab] });

  const handleTabChange = (year: string) => {
    if (year === activeTab) return;
    
    // Animate out
    if (textRef.current) {
      gsap.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(year);
        }
      });
    } else {
      setActiveTab(year);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 mb-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 ">
            <div className="flex justify-center items-center flex-col">
          <div className="flex items-center gap-2 justify-center mx-auto rounded-full px-6 py-2 mb-4 border-[.2px] border-gray-400/20 w-fit">
            <img src="/usryl.svg" alt="" />
            <span className="text-gray-900 font-medium text-[16px]">Our history</span>
          </div>
          
          <h2 className="text-3xl md:text-[40px] font-medium max-w-lg text-gray-900 mb-8">
            From humble roots to a global vision
          </h2>
          </div> 
          {/* Timeline Tabs */}
           <div className="flex justify-center space-x-4 mb-8">
             {historyData.map((data) => (
               <button
                 key={data.year}
                 onClick={() => handleTabChange(data.year)}
                 className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                   activeTab === data.year
                     ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                     : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'
                 }`}
               >
                 {data.year}
               </button>
             ))}
           </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {/* Text Content */}
          <div className="bg-[#fafafa] rounded-2xl lg:p-8 p-4 shadow-lg border border-gray-100">
            <div className="flex items-start mb-6">
              <div className=" flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <img src="/svg.svg" alt=""  />
              </div>
               <div className="flex-1">
                 <div ref={textRef}>
                   <h3 className="text-2xl font-[500] text-gray-900 mb-4 leading-tight">
                     {activeData.title}
                   </h3>
                   <p className="text-gray-600 text-[16px] leading-relaxed">
                     {activeData.description}
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src={activeData.image}
                alt={activeData.imageAlt}
                fill
                className="object-cover transition-all duration-500 ease-in-out"
                priority={activeTab === '2010'}
              />
              
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Years of Experience', value: '13+' },
            { label: 'Countries Served', value: '50+' },
            { label: 'Farmers Helped', value: '10K+' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default History;
