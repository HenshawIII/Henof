'use client';

import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
  size = 'md',
}: QuantitySelectorProps) {
  const sizeClasses = {
    sm: 'w-20 h-8 text-sm',
    md: 'w-24 h-10 text-base',
    lg: 'w-28 h-12 text-lg',
  };

  const buttonSizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  return (
    <div className={`flex items-center border border-gray-300 rounded-lg ${sizeClasses[size]}`}>
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className={`${buttonSizeClasses[size]} flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed rounded-l-lg transition-colors duration-200 font-semibold`}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="flex-1 text-center font-semibold text-gray-900">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className={`${buttonSizeClasses[size]} flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed rounded-r-lg transition-colors duration-200 font-semibold`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

