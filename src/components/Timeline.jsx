// src/components/Timeline.jsx
import React from 'react';
import { getSeverityColor } from './convergenceData';

const Timeline = ({ frameworks, setPinnedFramework }) => {
  const years = Array.from({ length: 9 }, (_, i) => 2024 + i);

  const frameworksByYear = years.reduce((acc, year) => {
    acc[year] = frameworks.filter(f => f.peak === year);
    return acc;
  }, {});

  return (
    <section className="mb-8 sm:mb-10 md:mb-12 p-3 sm:p-4 md:p-6 bg-black border border-gray-800 rounded-lg">
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center text-white">Peak Year Timeline (2024-2032)</h3>
      <div className="relative w-full overflow-x-auto pb-3 sm:pb-4 -mx-1 px-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black">
        <div className="flex gap-1 sm:gap-1.5 md:gap-2 min-w-max">
          {years.map(year => (
            <div key={year} className="flex-1 min-w-[70px] sm:min-w-[85px] md:min-w-[100px]">
              <div className="text-center font-bold mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-300">{year}</div>
              <div className="relative h-40 sm:h-44 md:h-48 bg-gray-900/50 border border-gray-800 rounded p-1 space-y-0.5 sm:space-y-1">
                {frameworksByYear[year].slice(0, 8).map((f) => (
                  <div
                    key={f.name}
                    className={`h-4 sm:h-[18px] md:h-5 w-full ${getSeverityColor(f.severity).bg} rounded-sm cursor-pointer hover:scale-105 active:scale-95 transition-transform touch-manipulation`}
                    onMouseEnter={() => setPinnedFramework(f)}
                    onMouseLeave={() => setPinnedFramework(null)}
                    onTouchStart={() => setPinnedFramework(f)}
                    onTouchEnd={() => setTimeout(() => setPinnedFramework(null), 1500)}
                    title={f.name}
                  />
                ))}
              </div>
              <div className="text-center text-xs mt-1.5 sm:mt-2 text-gray-400">
                {frameworksByYear[year].length} peaks
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
