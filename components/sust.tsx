import React from 'react';

const Sust = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto bg-[#fafafa] p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Textual Content */}
          <div className=" md:pl-10 space-y-6 tracking-tight">
            {/* Main Heading */}
            <h2 className="md:text-[50px] lg:text-[70px] text-[40px] max-w-sm font-medium text-gray-800 leading-[1] tracking-tight">
              Sustainability at our core.
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-gray-600 text-[16px] leading-tight max-w-md">
              We're committed to farming that respects the land, preserves resources, and supports future generations.
            </p>
            
            {/* Key Points Section */}
            <div className="space-y-6">
              {/* Composting Section */}
              <div className="space-y-2">
                <h3 className="text-[14px] font-bold text-gray-800">Composting</h3>
                <p className="text-gray-600">Reducing waste and returning nutrients to the soil.</p>
              </div>
              
              {/* Divider Line */}
              <div className="border-t border-gray-200 w-[70%]" ></div>
              
              {/* Water-saving systems Section */}
              <div className="space-y-2">
                <h3 className="text-[14px] font-bold text-gray-800">Water-saving systems</h3>
                <p className="text-gray-600">Smart irrigation that conserves every drop.</p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-200 w-[70%] "></div>
            
            {/* CTA Button */}
            <div className="">
            <button className="inline-flex mt-8 items-center gap-2 bg-orange-500 hover:bg-green-600 text-white px-6 py-3  rounded-full font-medium transition-colors">
              <img src="/usericon.svg"/>
              Let's work together
            </button></div>
          </div>

          {/* Right Column - Image */}
          <div className="relative md:flex md:justify-end ">
            <img 
              src="/uman.webp" 
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
