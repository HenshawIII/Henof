'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/app/contexts/CartContext';
import { Product } from '@/lib/utils';
import QuantitySelector from '@/components/QuantitySelector';
import Toast, { ToastType } from '@/components/Toast';

// Product data - 9 products total
const products: Product[] = [
  {
    id: 1,
    name: "Akara Flour",
    description: "High-quality flour blend specially formulated for making perfect akara and other traditional dishes. Made with premium ingredients for authentic taste.",
    price: 1500,
    priceDisplay: "₦1,500",
    image: "/Flouri.png",
    category: "Ingredients",
    inStock: true,
    rating: 4.6,
    reviews: 42
  },
  {
    id: 2,
    name: "Moi Moi Flour",
    description: "Authentic beans for making traditional moi moi with the perfect balance of nutrients. Ready to use for delicious homemade meals.",
    price: 800,
    priceDisplay: "₦800",
    image: "/Flourii.png",
    category: "Ingredients",
    inStock: true,
    rating: 4.8,
    reviews: 73
  },
  {
    id: 3,
    name: "Picked Beans",
    description: "Premium quality picked beans, ready to cook. Carefully selected and cleaned for your convenience.",
    price: 2200,
    priceDisplay: "₦2,200",
    image: "/Flour.png",
    category: "Ingredients",
    inStock: true,
    rating: 4.7,
    reviews: 95
  },
  {
    id: 4,
    name: "Classic Akara Mix",
    description: "Pre-mixed akara blend with all the right spices and seasonings. Just add water and fry for perfect akara every time.",
    price: 1800,
    priceDisplay: "₦1,800",
    image: "/akara1.jpg",
    category: "Ready-to-Eat",
    inStock: true,
    rating: 4.9,
    reviews: 128
  },
  {
    id: 5,
    name: "Premium Spice Blend",
    description: "Authentic Nigerian spice blend with a perfect mix of traditional seasonings. Enhances the flavor of any dish.",
    price: 1200,
    priceDisplay: "₦1,200",
    image: "/spice.jpg",
    category: "Spices",
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 6,
    name: "Traditional Garri",
    description: "Premium quality garri made from fresh cassava. Perfect for eba, garri soakings, and other traditional meals.",
    price: 2500,
    priceDisplay: "₦2,500",
    image: "/Garri.jpg",
    category: "Ingredients",
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 7,
    name: "Palm Oil Premium",
    description: "Pure, unrefined palm oil extracted from fresh palm fruits. Rich in nutrients and perfect for traditional cooking.",
    price: 3000,
    priceDisplay: "₦3,000",
    image: "/palmoil.png",
    category: "Ingredients",
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 8,
    name: "Groundnut Paste",
    description: "Smooth, creamy groundnut paste made from premium roasted peanuts. Perfect for soups and stews.",
    price: 2800,
    priceDisplay: "₦2,800",
    image: "/pastee.jpg",
    category: "Ingredients",
    inStock: true,
    rating: 4.6,
    reviews: 54
  },
  {
    id: 9,
    name: "Coconut Flakes",
    description: "Freshly grated coconut flakes, perfect for baking, cooking, and garnishing. Preserves natural coconut flavor.",
    price: 1500,
    priceDisplay: "₦1,500",
    image: "/flakes.jpg",
    category: "Ingredients",
    inStock: true,
    rating: 4.4,
    reviews: 38
  }
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const getQuantity = (productId: number) => quantities[productId] || 1;

  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  const handleAddToCart = (product: Product) => {
    const quantity = getQuantity(product.id);
    addItem(product, quantity);
    setToast({ message: `${product.name} added to cart!`, type: 'success' });
    setQuantities({ ...quantities, [product.id]: 1 }); // Reset quantity after adding
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        setToast({ message: 'Removed from wishlist', type: 'info' });
      } else {
        newSet.add(productId);
        setToast({ message: 'Added to wishlist', type: 'success' });
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={!!toast}
          onClose={() => setToast(null)}
        />
      )}

      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-32 sm:py-40" style={{ backgroundImage: 'url(/akara1.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-white opacity-95"
          >
            Discover our authentic Nigerian indigenous foods and ingredients, crafted with tradition and quality.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products by name, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 pr-12 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 shadow-lg hover:shadow-xl"
                />
                <svg
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-3 text-center text-sm text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </p>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                  
                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                    aria-label="Add to wishlist"
                  >
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        wishlist.has(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'
                      }`}
                      fill={wishlist.has(product.id) ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xl font-bold text-orange-600 ml-2">{product.priceDisplay}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Quantity Selector and Add to Cart */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <QuantitySelector
                        quantity={getQuantity(product.id)}
                        onIncrease={() => setQuantities({ ...quantities, [product.id]: getQuantity(product.id) + 1 })}
                        onDecrease={() => setQuantities({ ...quantities, [product.id]: Math.max(1, getQuantity(product.id) - 1) })}
                        size="sm"
                      />
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-24 h-24 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="relative bg-gradient-to-br from-green-100 to-yellow-200 rounded-lg md:p-12 p-8 md:py-16 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-32 h-32 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-[40px] pb-6 md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight tracking-tight mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-[16px] pb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
                  Contact us for custom orders or special requests
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-500/80 text-white px-8 py-4 rounded-full font-medium text-[16px] tracking-tight transition-all duration-300 transform hover:scale-105"
                  >
                    <img src='/usericon.svg' alt="Contact" className="w-5 h-5" />
                    Contact Us
                  </Link>
                  <Link
                    href="/about"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-medium text-[16px] tracking-tight transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
