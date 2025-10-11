"use client";
import React from 'react';

const CTA = () => {
  return (
    <section className="w-full py-20 px-4">
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
              <h2 className="text-[40px] pb-6 md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight tracking-tight">
                Grow something
                <br />
                great together.
              </h2>
              
              {/* Description */}
              <p className="text-[16px] pb-32 text-gray-700 leading-relaxed max-w-md">
                Whether you're a farmer, distributor, or partner, we're here to support
                your goals with sustainable solutions and global expertise.
              </p>
              
              {/* CTA Button */}
              <button className="inline-flex  items-center gap-3 bg-orange-500 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-medium text-[16px] tracking-tight transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <img src='/usericon.svg'/>
                Let's work together
              </button>
            </div>
            
            {/* Right Content - Keywords */}
            <div className="flex order-1 lg:order-2 flex-col items-start lg:items-end justify-end h-full space-y-6">
              <div className="flex gap-6 w-full max-w-md">
                {/* Driven */}
                <div className="flex items-center gap-4 ">
                 <img src="usryl.svg" alt="" />
                  <span className="text-[16px] tracking-tight font-medium text-gray-800">Driven</span>
                </div>
                
                {/* Rooted */}
                <div className="flex items-center gap-4 ">
                 <img src="usryl.svg" alt="" />
                  <span className="text-[16px] tracking-tight font-medium text-gray-800">Rooted</span>
                </div>
                
                {/* Impactful */}
                <div className="flex items-center gap-4 ">
                  <img src="usryl.svg" alt="" />
                  <span className="text-[16px] tracking-tight font-medium text-gray-800">Impactful</span>
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
