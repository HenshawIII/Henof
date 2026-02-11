// Utility functions for the e-commerce store

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Numeric price for calculations
  priceDisplay: string; // Formatted price string for display
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

/**
 * Format price to Nigerian Naira format
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate cart totals
 */
export function calculateCartTotals(items: CartItem[]): CartTotals {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  // Tax: 7.5% VAT
  const tax = subtotal * 0.075;
  
  // Shipping: Free for orders over ₦10,000, otherwise ₦500
  const shipping = subtotal >= 10000 ? 0 : 500;
  
  const total = subtotal + tax + shipping;
  
  return {
    subtotal,
    tax,
    shipping,
    total,
  };
}

/**
 * Get total number of items in cart
 */
export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

