'use client';

import React from 'react';

interface ServiceCard {
  title: string;
  description: string;
  details: string;
  color: string;
  accentColor: string;
  iconColor: string;
  icon: React.ReactNode;
}

interface StackingCardsProps {
  services: ServiceCard[];
  title?: string;
  description?: string;
}

export default function StackingCards({ 
  services, 
  title = "Our Service Stack",
  description = "Discover how our services work together to deliver exceptional results"
}: StackingCardsProps) {
  return (
    <section className="py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-[36px] font-[600] text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative h-[80vh] overflow-y-auto scrollbar-hide w-full">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky flex items-center justify-center py-8"
              style={{ 
                zIndex: services.length + index,
                top: `${20 + (index * 10)}px`
              }}
            >
              <div className="w-full mx-auto">
                <div className={`${service.color} rounded-2xl shadow-lg p-8 border border-gray-200 relative overflow-hidden`}>
                  {/* Card Background Pattern */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} rounded-full -translate-y-16 translate-x-16 opacity-30`}></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 ${service.color} rounded-full border-2 border-white shadow-md`}>
                        <div className={service.iconColor}>
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-[600] ${service.accentColor} mb-4 text-center`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 text-center leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Extra Details */}
                    <div className="bg-white/60 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                    
                    {/* Service Number */}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

