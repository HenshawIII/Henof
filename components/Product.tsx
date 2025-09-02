'use client';

import React from 'react';
import Image from 'next/image';
import akara from '@/public/akrawomn.jpg';
import akara2 from '@/public/Flour.png';
import akara3 from '@/public/Flouri.png';
import akara4 from '@/public/Flourii.png';
import akara1 from '@/public/akara1.jpg';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  price: string;
  image: any; // Using any for now since we're using the same image for all
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <Link href={`/products`}>
    <div className="bg-white  shadow-md w-[250px] flex-shrink-0 overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-2">{price}</p>
      </div>
    </div>
    </Link>
  );
};

const Product = () => {
  const products = [
    {
      name: "Classic Akara",
      description: "Traditional akara",
      image: akara1
    },
    {
      name: "Picked Beans",
      description: "Ready to cook beans",
      image: akara2
    },
    {
      name: "Akara Flour",
      description: "High quality akara flour",
      image: akara3
    },
    {
      name: "Moi Moi Flour",
      description: "High quality moi moi flour",
      image: akara4
    },
    {
      name: "Premium Mix",
      description: "Special blend akara",
      image: akara1
    },
    {
      name: "Spice Blend",
      description: "Authentic spices",
      image: akara2
    }
  ];

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
        
        {/* Infinite Scrolling Container */}
        <div className="relative">
          <div className="flex animate-scroll gap-4 md:gap-8">
            {duplicatedProducts.map((product, index) => (
              <ProductCard
                key={`${product.name}-${index}`}
                name={product.name}
                price={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product; 