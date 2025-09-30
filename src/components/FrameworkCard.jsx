// src/components/FrameworkCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRightCircle } from 'lucide-react';
import { getSeverityColor } from './convergenceData';
import clsx from 'clsx';

const StatBar = ({ label, value, colorClass }) => (
  <div className="flex justify-between items-center mb-1.5 sm:mb-2">
    <span className="text-xs sm:text-xs text-gray-400">{label}</span>
    <div className="flex items-center gap-1.5 sm:gap-2">
      <div className="w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div className={`h-full ${colorClass} transition-all duration-300`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-gray-300 w-7 sm:w-8 text-right">{value}%</span>
    </div>
  </div>
);

const FrameworkCard = ({ framework, isPinned, onPin, onShowDetail }) => {
  const severity = getSeverityColor(framework.severity);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={clsx(
        "bg-gray-800 rounded-lg p-4 sm:p-5 border-2 transition-all duration-300 relative cursor-pointer",
        isPinned ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-gray-700 hover:border-red-500'
      )}
      onClick={(e) => {
        e.stopPropagation();
        if (framework.hasDetailView) {
          onShowDetail();
        } else {
          onPin();
        }
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2.5 sm:mb-3">
        <h3 className="text-base sm:text-lg font-bold text-white pr-3 sm:pr-4">{framework.name}</h3>
        <span className={`text-xl sm:text-2xl font-black ${severity.text} flex-shrink-0`}>{framework.peak}</span>
      </div>
      
      {/* Cycle & Range */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 text-xs sm:text-sm text-gray-400">
        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
        <span>{framework.cycle}</span>
        <span className="text-gray-600">•</span>
        <span>{framework.range[0]}-{framework.range[1]}</span>
      </div>
      
      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed">{framework.description}</p>
      
      {/* Stats */}
      <div className="space-y-1.5 sm:space-y-2">
        <StatBar label="Severity" value={framework.severity} colorClass={severity.bg} />
        <StatBar label="Confidence" value={framework.confidence} colorClass="bg-blue-500" />
      </div>
      
      {/* Source dan Indikator Detail */}
      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-gray-700 flex justify-between items-center gap-2">
        <p className="text-xs text-gray-500 truncate flex-1 min-w-0">Source: {framework.source}</p>
        {framework.hasDetailView && (
          <div className="flex items-center gap-1 text-blue-400 flex-shrink-0">
            <span className="text-xs font-semibold hidden sm:inline">Detail</span>
            <ArrowRightCircle className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Pinned Indicator */}
      {isPinned && !framework.hasDetailView && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full" />
      )}
    </motion.div>
  );
};

export default FrameworkCard;