'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutHomeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // Option to reverse the layout
}

export default function AboutHome({
  title = "Who We Are",
  subtitle = "Nigerian Indigenous Food Company",
  description = "We are a company that produces indigenous foods and other related products. We are committed to providing the best quality products to our customers.",
  imageSrc = "/akara3.jpg", // Using one of your existing images
  imageAlt = "Nigerian Indigenous Food Company",
  reverse = false
}: AboutHomeProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={sectionRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          
          {/* Text Column */}
          <motion.div 
            className={`space-y-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-600">
                {subtitle}
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="/about" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105">
                Learn More
              </Link>
              <Link href="/contact" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image Column */}
          <motion.div 
            className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -50 : 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
