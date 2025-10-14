import Image from 'next/image';
import Link from 'next/link';

// Product data - you can expand this with more products
const products = [
  
  {
    id: 4,
    name: "Akara Flour",
    description: "High-quality flour blend specially formulated for making perfect akara and other traditional dishes.",
    price: "₦1,500",
    image: "/Flouri.png",
    category: "Ingredients",
    inStock: true,
    rating: 4.6,
    reviews: 42
  },
  {
    id: 5,
    name: "Moi Moi Flour",
    description: "Authentic beans for making traditional moi moi with the perfect balance of nutrients.",
    price: "₦800",
    image: "/Flourii.png",
    category: "Ingredients",
    inStock: true,
    rating: 4.8,
    reviews: 73
  },
  {
    id: 6,
    name: "Picked Beans",
    description: "Ready to cook beans",
    price: "₦2,200",
    image: "/Flour.png",
    category: "Ingredients",
    inStock: true,
    rating: 4.7,
    reviews: 95
  }
];

// const categories = ["All", "Breakfast", "Ingredients", "Snacks"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-40" style={{ backgroundImage: 'url(/akara1.jpg)' }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-white">
            Our Products
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-white opacity-95">
            Discover our authentic Nigerian indigenous foods and ingredients, crafted with tradition and quality.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div> */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/products" className="px-6 py-3 rounded-full bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              All Products
            </Link>
           
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform  overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                 
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-[600] text-gray-900">{product.name}</h3>
                    <span className="text-lg font-[600] text-orange-600">{product.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                      Add to Cart
                    </button>
                    <button className="px-4 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for custom orders or special requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
