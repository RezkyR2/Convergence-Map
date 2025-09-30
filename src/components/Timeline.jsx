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
    <section className="mb-12 p-4 sm:p-6 bg-gray-800/50 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-center text-white">Peak Year Timeline (2024-2032)</h3>
      <div className="relative w-full overflow-x-auto pb-4">
        <div className="flex gap-1 min-w-max">
          {years.map(year => (
            <div key={year} className="flex-1 min-w-[80px] md:min-w-[100px]">
              <div className="text-center font-bold mb-2 text-sm text-gray-300">{year}</div>
              <div className="relative h-48 bg-gray-700/50 rounded p-1 space-y-1">
                {frameworksByYear[year].slice(0, 8).map((f) => (
                  <div
                    key={f.name}
                    className={`h-4 w-full ${getSeverityColor(f.severity).bg} rounded-sm cursor-pointer hover:scale-105 transition-transform`}
                    onMouseEnter={() => setPinnedFramework(f)}
                    onMouseLeave={() => setPinnedFramework(null)}
                    title={f.name}
                  />
                ))}
              </div>
              <div className="text-center text-xs mt-2 text-gray-400">
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
