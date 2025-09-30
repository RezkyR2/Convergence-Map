// src/components/ConvergenceMap.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Tambahkan AnimatePresence
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { AlertTriangle, X } from 'lucide-react'; // Tambahkan X

// Import komponen anak
import { frameworks } from './convergenceData';
import CategoryFilter from './CategoryFilter';
import FrameworkCard from './FrameworkCard';
import StatsSummary from './StatsSummary';
import Timeline from './Timeline';


// =================================================================================
// == KOMPONEN MODAL DETAIL (dari Resonance1929vs2029) ADA DI SINI SEKARANG ==
// =================================================================================
const ResonanceDetailModal = ({ onClose }) => {
  // Semua state, data, dan logika dari Resonance1929vs2029 dipindahkan ke sini
  const [activeTab, setActiveTab] = useState('timeline');
  // ... (Salin dan tempel SEMUA data dari Resonance1929vs2029: timelineData, comparisonData, keyEvents, riskIndicators)
  const timelineData = [ /* ... data ... */ ];
  const comparisonData = [ /* ... data ... */ ];
  const keyEvents = [ /* ... data ... */ ];
  const riskIndicators = [ /* ... data ... */ ];
  const getRiskColor = (risk) => { /* ... logika ... */ };


  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          className="relative w-full max-w-7xl h-[95vh] bg-white rounded-xl shadow-2xl flex flex-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tombol Tutup Modal */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 transition-colors"
            aria-label="Close detail view"
          >
            <X size={24} />
          </button>

          {/* Konten Modal (semua JSX dari Resonance1929vs2029) */}
          <div className="overflow-hidden flex flex-col h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 flex-shrink-0">
               {/* ... (Salin dan tempel JSX header dari Resonance1929vs2029) ... */}
            </div>

            {/* Tabs */}
            <div className="flex border-b flex-shrink-0">
               {/* ... (Salin dan tempel JSX tabs dari Resonance1929vs2029) ... */}
            </div>

            {/* Content (dibuat scrollable) */}
            <div className="p-8 overflow-y-auto flex-grow bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
              {/* ... (Salin dan tempel SEMUA KONTEN TAB dari Resonance1929vs2029) ... */}
            </div>
             {/* Footer note */}
            <div className="mt-auto flex-shrink-0 text-center text-sm text-slate-600 bg-white p-3 border-t">
               {/* ... (Salin dan tempel JSX footer dari Resonance1929vs2029) ... */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


// =================================================================================
// == KOMPONEN UTAMA CONVERGENCE MAP ==
// =================================================================================
const ConvergenceMap = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('peak');
  const [pinnedFramework, setPinnedFramework] = useState(null);
  const [detailFramework, setDetailFramework] = useState(null); // <-- State baru untuk modal

  const filteredFrameworks = useMemo(() => { /* ... logika tidak berubah ... */ }, [selectedCategory, sortBy]);
  const convergenceInfo = useMemo(() => { /* ... logika tidak berubah ... */ }, []);

  const handlePinFramework = (framework) => {
    setPinnedFramework(prev => (prev && prev.name === framework.name ? null : framework));
  };
  
  const handleShowDetail = (framework) => {
    setDetailFramework(framework);
  };

  const handleCloseDetail = () => {
    setDetailFramework(null);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header> {/* ... JSX Header tidak berubah ... */} </header>

          {/* Controls */}
          <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm py-4 mb-8">
             {/* ... JSX Controls tidak berubah ... */}
          </div>
          
          {/* Timeline Visualization */}
          <Timeline frameworks={filteredFrameworks} setPinnedFramework={setPinnedFramework} />
          
          {/* Framework Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFrameworks.map((framework) => (
                  <FrameworkCard 
                      key={framework.name} 
                      framework={framework}
                      isPinned={pinnedFramework?.name === framework.name && !framework.hasDetailView}
                      onPin={() => handlePinFramework(framework)}
                      onShowDetail={() => handleShowDetail(framework)} // <-- Prop baru
                  />
              ))}
          </motion.div>
          
          {/* Stats Summary */}
          <StatsSummary frameworks={frameworks} />
        </div>
      </div>

      {/* Render Modal Detail secara Kondisional */}
      <AnimatePresence>
        {detailFramework && detailFramework.hasDetailView && (
          <ResonanceDetailModal
            framework={detailFramework}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ConvergenceMap;           
