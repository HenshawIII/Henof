"use client"

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import akara from '@/public/akrawomn.jpg';
import Scrollex from '@/components/scrollex';
import CTA from '@/components/CTA';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Services = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);

  // Check if elements are in view
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const processInView = useInView(processRef, { once: true });

  const services = [
    {
      title: "Food Production & processing",
      description: "Daily production of fresh, high-quality food using premium ingredients and traditional recipes.",
      icon: "/svg.svg"
    },
    {
      title: "Product packaging & distribution",
      description: "Specialized service for large-scale orders, perfect for events, restaurants, and businesses.",
      icon: "/svg.svg"
    },
    {
      title: "Farmer partnerships & sourcing",
      description: "Collaboration with farmers across Nigeria, ensuring fair pricing, consistent supply, and sustainable growing practices",
      icon: "/svg.svg"
    },
   
  ];

  const services2 = [
    {
      title: "Food Production & Processing",
      description: "Daily production of fresh, high-quality food using premium ingredients and traditional recipes.",
      details: "• 24/7 production facility • HACCP certified • Traditional Nigerian recipes • Fresh daily batches",
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      accentColor: "text-orange-600",
      iconColor: "text-orange-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Product Packaging & Distribution",
      description: "Specialized service for large-scale orders, perfect for events, restaurants, and businesses.",
      details: "• Custom packaging solutions • Nationwide delivery • Bulk order discounts • Temperature-controlled transport",
      color: "bg-gradient-to-br from-green-50 to-green-100",
      accentColor: "text-green-600",
      iconColor: "text-green-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Farmer Partnerships & Sourcing",
      description: "Collaboration with farmers across Nigeria, ensuring fair pricing, consistent supply, and sustainable growing practices.",
      details: "• 500+ partner farmers • Fair trade certified • Sustainable farming practices • Direct farm-to-table supply",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      accentColor: "text-blue-600",
      iconColor: "text-blue-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
  ];

  const features = [
    "Premium Quality Ingredients",
    "Hygienic Production Process",
    "Consistent Taste & Texture",
    "Quick Delivery Service",
    "Custom Packaging Options",
    "24/7 Customer Support"
  ];

  const process = [
    {
      step: "1",
      title: "Ingredient Selection",
      description: "Carefully selecting the finest ingredients for optimal taste and quality."
    },
    {
      step: "2",
      title: "Preparation",
      description: "Meticulous preparation following traditional recipes and modern standards."
    },
    {
      step: "3",
      title: "Production",
      description: "Efficient production process ensuring consistency and quality."
    },
    {
      step: "4",
      title: "Delivery",
      description: "Timely delivery to ensure freshness and customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="relative h-[400px] w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={akara}
          alt="Our Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Services
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section */}
        <motion.div 
          ref={servicesRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[36px] font-[600] text-gray-900 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex justify-center mb-4">
                  <img src={`${service.icon}`} alt="" />
                </div>
                <h3 className="text-xl font-[600] text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-[16px] tracking-tight">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Stacking Cards Section */}
        <section id="stacks" className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-[36px] font-[600] text-gray-900 mb-4">Our Service Stack</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover how our services work together to deliver exceptional results
              </p>
            </div>

            {/* Stacking Cards Container */}
            <div className="relative h-[80vh] overflow-y-auto scrollbar-hide">
              {services2.map((service, index) => (
                <div
                  key={service.title}
                  className="sticky flex items-center justify-center py-8"
                  style={{ 
                    zIndex: services2.length + index,
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


        {/* Features Section */}
        <motion.div 
          ref={featuresRef}
          className=" rounded-lg px-8 pb-8 my-16"
          initial={{ opacity: 0, y: 20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[36px] font-[600] text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-3 tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <img src="usryl.svg" alt="" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        {/* <motion.div 
          ref={processRef}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
        {/* Scroll Stack */}
        {/* <div className='hidden xl:block'>
        <Scrollex/>
        </div> */}
        <CTA/>
      </div>
    </div>
  );
};

export default Services; 