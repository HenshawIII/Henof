"use client"

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import akara from '@/public/akrawomn.jpg';
import CTA from '@/components/CTA';
import History from '@/components/history';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const About = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  // Check if elements are in view
  const heroInView = useInView(heroRef, { once: true });
  const introInView = useInView(introRef, { once: true });
  const missionInView = useInView(missionRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });
  const teamInView = useInView(teamRef, { once: true });

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
          alt="About Us"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About Us
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Introduction */}
        <div ref={introRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Henof Foods</h2>
            <p className="text-gray-600 mb-4 text-[16px]">
              We are passionate about delivering the finest quality indigenous foods in convenient and affordable packages to our customers. Our journey began with a simple mission: to provide healthy, delicious, and convenient food options that bring joy to every table.
            </p>
            <p className="text-gray-600 text-[16px]">
              With years of experience and a commitment to excellence, we have become a trusted name in the food industry, known for our dedication to quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
          <motion.div 
            className="relative h-[300px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={"/akara3.jpg"}
              alt="Our Products"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <motion.div 
            className="bg-orange-50 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h3>
            <p className="text-gray-600">
            To deliver premium-quality, locally sourced food products that promote healthy living, empower farmers, and strengthen Nigeria’s food system
            </p>
          </motion.div>
          <motion.div 
            className="bg-orange-50 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Vision</h3>
            <p className="text-gray-600">
            To become Africa’s most trusted name in natural food production — rooted in quality, community, and sustainability
            </p>
          </motion.div>
        </div>
      <History/>
        

        {/* Team Section */}
        {/* <motion.div 
          ref={teamRef}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our dedicated team of professionals works tirelessly to ensure that every product meets our high standards of quality and safety.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={"/Found1.avif"}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">FO Henshaw</h3>
              <p className="text-orange-600">CEO & Founder</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={"/Utibe.jpg"}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Utibe Teju</h3>
              <p className="text-orange-600">Project Manager</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={"/DgTal.jpg"}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mr Grafiki</h3>
              <p className="text-orange-600">Creative Director</p>
            </motion.div>
          </div>
        </motion.div> */}
        <CTA/>
      </div>
    </div>
  );
};

export default About; 