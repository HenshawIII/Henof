import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const navigationSections = [
    {
      title: 'Home',
      links: ['Home 1', 'Home 2', 'Home 3']
    },
    {
      title: 'Company',
      links: ['About us', 'Our Team', 'Pricing', 'Testimonials']
    },
    {
      title: 'Services',
      links: ['Climate-Resilient Program', 'Technology integration', 'Organic practices', 'Supply chain support', 'Sustainable irrigation']
    },
    {
      title: 'Information',
      links: ['Blog', 'FAQ', 'Gallery']
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Section - Logo and Tagline */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <img src='lgoo.png' alt=''/>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Henof Foods</h2>
                {/* <span className="text-xs text-gray-500">®</span> */}
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-600 text-[16px] tracking-tight mb-8">
              Redefining agriculture at a global scale.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 tracking-tight">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <p className="text-gray-500">
                ©Henof Foods. All Rights Reserved.2025
              </p>
        
            </div>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 