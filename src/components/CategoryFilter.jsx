// src/components/CategoryFilter.jsx
import React from 'react';
import clsx from 'clsx';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-4 justify-center px-2">
    {Object.entries(categories).map(([key, { label, icon: Icon, classes }]) => (
      <button
        key={key}
        onClick={() => setSelectedCategory(key)}
        className={clsx(
          'min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-200 font-semibold focus:outline-none focus:ring-2 touch-manipulation',
          selectedCategory === key
            ? `${classes}`
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 ring-transparent'
        )}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <span className="whitespace-nowrap">{label}</span>
      </button>
    ))}
  </div>
);

export default CategoryFilter;
