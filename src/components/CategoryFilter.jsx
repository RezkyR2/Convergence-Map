// src/components/CategoryFilter.jsx
import React from 'react';
import clsx from 'clsx';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div className="flex flex-wrap gap-2 md:gap-3 mb-4 justify-center">
    {Object.entries(categories).map(([key, { label, icon: Icon, classes }]) => (
      <button
        key={key}
        onClick={() => setSelectedCategory(key)}
        className={clsx(
          'px-3 py-2 text-sm rounded-lg flex items-center gap-2 transition-all duration-200 font-semibold focus:outline-none focus:ring-2',
          selectedCategory === key
            ? `${classes}`
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 ring-transparent'
        )}
      >
        <Icon className="w-4 h-4" />
        {label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
