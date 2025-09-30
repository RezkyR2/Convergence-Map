// src/components/ConvergenceMap.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { AlertTriangle, X, TrendingUp, Calendar, Activity, Map, Zap, Award, BarChart3 } from 'lucide-react';

// Import komponen anak
import { frameworks, categories, getSeverityColor } from './convergenceData';
import CategoryFilter from './CategoryFilter';
import FrameworkCard from './FrameworkCard';
import StatsSummary from './StatsSummary';
import Timeline from './Timeline';
import ConvergenceSimulation from './ConvergenceSimulation';
import WEFSkills2024 from './WEFSkills2024';
import AnalyticsDashboard from './AnalyticsDashboard';

// Modal Detail untuk Great Depression Resonance
const ResonanceDetailModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('timeline');

  const timelineData = [
    { year: 1925, event: 'Economic boom begins', severity: 30, type: 'growth' },
    { year: 1927, event: 'Speculation increases', severity: 50, type: 'warning' },
    { year: 1929, event: 'Stock market crash', severity: 100, type: 'crisis' },
    { year: 1932, event: 'Depression deepens', severity: 95, type: 'crisis' },
    { year: 1935, event: 'Recovery begins', severity: 60, type: 'recovery' },
  ];

  const comparisonData = [
    { metric: 'Wealth Inequality', '1929': 85, '2024': 88 },
    { metric: 'Market Speculation', '1929': 90, '2024': 85 },
    { metric: 'Debt Levels', '1929': 75, '2024': 92 },
    { metric: 'Tech Bubble', '1929': 60, '2024': 95 },
  ];

  const keyEvents = [
    { date: '1929', event: 'Black Tuesday - Stock Market Crash', impact: 'Global economic collapse' },
    { date: '2024', event: 'AI/Tech Bubble Peak', impact: 'Market overvaluation concerns' },
    { date: '2025-2027', event: 'Warning Signs Accumulate', impact: 'Increasing systemic risks' },
    { date: '2029', event: 'Predicted Resonance Peak', impact: 'Potential major correction' },
  ];

  const riskIndicators = [
    { name: 'Market Valuation', current: 92, threshold: 80, status: 'critical' },
    { name: 'Debt-to-GDP', current: 88, threshold: 75, status: 'warning' },
    { name: 'Inequality Index', current: 85, threshold: 70, status: 'warning' },
    { name: 'Speculation Level', current: 78, threshold: 65, status: 'warning' },
  ];

  const getRiskColor = (status) => {
    switch (status) {
      case 'critical': return 'text-red-500 bg-red-100';
      case 'warning': return 'text-orange-500 bg-orange-100';
      default: return 'text-green-500 bg-green-100';
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <motion.div
          className="relative w-full max-w-7xl h-[90vh] sm:h-[95vh] bg-white rounded-xl shadow-2xl flex flex-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 transition-colors"
            aria-label="Close detail view"
          >
            <X size={24} />
          </button>

          <div className="overflow-hidden flex flex-col h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-3 sm:p-4 md:p-6 flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-4">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                <div>
                  <h1 className="text-base sm:text-xl md:text-2xl font-bold">Great Depression 100-Year Resonance</h1>
                  <p className="text-xs sm:text-sm text-red-100">Historical Pattern Analysis: 1929 → 2029</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">2029</div>
                  <div className="text-xs sm:text-sm text-red-100">Peak Year</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">95%</div>
                  <div className="text-xs sm:text-sm text-red-100">Severity</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">70%</div>
                  <div className="text-xs sm:text-sm text-red-100">Confidence</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b flex-shrink-0 overflow-x-auto">
              {[
                { id: 'timeline', label: 'Timeline', icon: Calendar },
                { id: 'comparison', label: 'Comparison', icon: TrendingUp },
                { id: 'risks', label: 'Risk Indicators', icon: Activity },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 font-medium transition-colors whitespace-nowrap text-xs sm:text-sm md:text-base ${
                    activeTab === id
                      ? 'border-b-2 border-red-500 text-red-600 bg-red-50'
                      : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm md:text-base inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto flex-grow bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
              {activeTab === 'timeline' && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Historical Timeline vs Current Trajectory</h2>
                  <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm">
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={timelineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                        <Line type="monotone" dataKey="severity" stroke="#dc2626" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid gap-3 sm:gap-4">
                    {keyEvents.map((event, index) => (
                      <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                        <div className="text-sm sm:text-base font-semibold text-gray-800">{event.date}</div>
                        <div className="text-sm sm:text-base text-gray-700">{event.event}</div>
                        <div className="text-xs sm:text-sm text-gray-600 mt-1">{event.impact}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'comparison' && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">1929 vs 2024 Structural Comparison</h2>
                  <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={comparisonData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="metric" tick={{ fontSize: 10 }} angle={-15} textAnchor="end" height={60} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                        <Bar dataKey="1929" fill="#dc2626" />
                        <Bar dataKey="2024" fill="#ea580c" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4">Key Similarities</h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                      <li>• Extreme wealth inequality reaching historical peaks</li>
                      <li>• Widespread speculation in new technologies</li>
                      <li>• High debt levels across all sectors</li>
                      <li>• Overconfidence in market mechanisms</li>
                      <li>• Regulatory frameworks lagging behind innovation</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'risks' && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Current Risk Indicators</h2>
                  <div className="grid gap-3 sm:gap-4">
                    {riskIndicators.map((indicator, index) => (
                      <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-2 gap-2">
                          <span className="text-sm sm:text-base font-medium text-gray-800">{indicator.name}</span>
                          <span className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${getRiskColor(indicator.status)} whitespace-nowrap`}>
                            {indicator.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              indicator.current > indicator.threshold ? 'bg-red-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${indicator.current}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-1">
                          <span>Current: {indicator.current}%</span>
                          <span>Threshold: {indicator.threshold}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-auto flex-shrink-0 text-center text-xs sm:text-sm text-slate-600 bg-white p-2 sm:p-3 border-t">
              Analysis based on historical patterns, economic indicators, and structural similarities
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Komponen utama ConvergenceMap
const ConvergenceMap = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('peak');
  const [pinnedFramework, setPinnedFramework] = useState(null);
  const [detailFramework, setDetailFramework] = useState(null);

  const filteredFrameworks = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? frameworks 
      : frameworks.filter(f => f.category === selectedCategory);
    
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'peak': return a.peak - b.peak;
        case 'severity': return b.severity - a.severity;
        case 'confidence': return b.confidence - a.confidence;
        default: return 0;
      }
    });
  }, [selectedCategory, sortBy]);

  const convergenceInfo = useMemo(() => {
    const peakCounts = {};
    frameworks.forEach(f => {
      peakCounts[f.peak] = (peakCounts[f.peak] || 0) + 1;
    });
    const maxPeakYear = Object.keys(peakCounts).reduce((a, b) => 
      peakCounts[a] > peakCounts[b] ? a : b
    );
    return { peakCounts, maxPeakYear, maxCount: peakCounts[maxPeakYear] };
  }, []);

  const handlePinFramework = (framework) => {
    setPinnedFramework(prev => (prev && prev.name === framework.name ? null : framework));
  };
  
  const handleShowDetail = (framework) => {
    setDetailFramework(framework);
  };

  const handleCloseDetail = () => {
    setDetailFramework(null);
  };

  const tabs = [
    { id: 'map', label: 'Framework Map', icon: Map },
    { id: 'simulation', label: 'Simulation', icon: Zap },
    { id: 'skills', label: 'WEF Skills 2024', icon: Award },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-gray-200 font-sans">
        <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Header */}
          <header className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
              Convergence Map 2024-2032
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Mapping critical convergence points where multiple crisis frameworks align. 
              Peak convergence in <span className="text-red-400 font-bold">{convergenceInfo.maxPeakYear}</span> with {convergenceInfo.maxCount} overlapping frameworks.
            </p>
          </header>

          {/* Tab Navigation */}
          <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-sm border-b border-gray-800 mb-6 sm:mb-8 -mx-3 sm:-mx-4 md:-mx-6 lg:-mx-8 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 font-medium transition-all duration-200 whitespace-nowrap border-b-2 ${
                    activeTab === id
                      ? 'border-red-500 text-white bg-gray-900/50'
                      : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-900/30'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm md:text-base">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'map' && (
                <div>
                  {/* Controls */}
                  <div className="mb-6 sm:mb-8">
                    <CategoryFilter 
                      categories={categories}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    
                    <div className="flex justify-center mt-3 sm:mt-4">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-gray-900 text-gray-200 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-800 focus:border-red-500 focus:outline-none"
                      >
                        <option value="peak">Sort by Peak Year</option>
                        <option value="severity">Sort by Severity</option>
                        <option value="confidence">Sort by Confidence</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Timeline Visualization */}
                  <Timeline frameworks={filteredFrameworks} setPinnedFramework={setPinnedFramework} />
                  
                  {/* Framework Cards */}
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredFrameworks.map((framework) => (
                      <FrameworkCard 
                        key={framework.name} 
                        framework={framework}
                        isPinned={pinnedFramework?.name === framework.name && !framework.hasDetailView}
                        onPin={() => handlePinFramework(framework)}
                        onShowDetail={() => handleShowDetail(framework)}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Stats Summary */}
                  <StatsSummary frameworks={frameworks} />
                </div>
              )}

              {activeTab === 'simulation' && <ConvergenceSimulation />}
              {activeTab === 'skills' && <WEFSkills2024 />}
              {activeTab === 'analytics' && <AnalyticsDashboard />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 border-t border-gray-900 bg-black">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-400">
                Powered by <span className="font-semibold text-gray-200">Quark Intelligence</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">© 2024-2025 · Advanced Crisis Framework Analysis</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Modal Detail */}
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