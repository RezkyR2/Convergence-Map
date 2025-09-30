import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { BarChart3, TrendingUp, AlertCircle, Activity, Calendar, Target } from 'lucide-react';
import { frameworks, categories } from './convergenceData';

const AnalyticsDashboard = () => {
  const analytics = useMemo(() => {
    const peakYearCounts = {};
    const categoryDist = {};
    const severityDist = { low: 0, medium: 0, high: 0, critical: 0 };
    const yearDensity = {};
    
    frameworks.forEach(f => {
      peakYearCounts[f.peak] = (peakYearCounts[f.peak] || 0) + 1;
      categoryDist[f.category] = (categoryDist[f.category] || 0) + 1;
      
      if (f.severity >= 90) severityDist.critical++;
      else if (f.severity >= 70) severityDist.high++;
      else if (f.severity >= 50) severityDist.medium++;
      else severityDist.low++;
      
      for (let year = f.range[0]; year <= f.range[1]; year++) {
        yearDensity[year] = (yearDensity[year] || 0) + 1;
      }
    });
    
    const maxPeakYear = Object.keys(peakYearCounts).reduce((a, b) => 
      peakYearCounts[a] > peakYearCounts[b] ? a : b
    );
    
    const peakYearData = Object.entries(peakYearCounts)
      .map(([year, count]) => ({ year: parseInt(year), count }))
      .sort((a, b) => a.year - b.year);
    
    const categoryData = Object.entries(categoryDist)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
    
    const severityData = [
      { severity: 'Critical (90+)', count: severityDist.critical, color: '#dc2626' },
      { severity: 'High (70-89)', count: severityDist.high, color: '#f97316' },
      { severity: 'Medium (50-69)', count: severityDist.medium, color: '#eab308' },
      { severity: 'Low (<50)', count: severityDist.low, color: '#10b981' },
    ];
    
    const densityData = Object.entries(yearDensity)
      .map(([year, density]) => ({ year: parseInt(year), density }))
      .sort((a, b) => a.year - b.year);
    
    const avgSeverity = frameworks.reduce((sum, f) => sum + f.severity, 0) / frameworks.length;
    const avgConfidence = frameworks.reduce((sum, f) => sum + f.confidence, 0) / frameworks.length;
    
    const correlations = [];
    const cats = Object.keys(categoryDist);
    for (let i = 0; i < cats.length; i++) {
      for (let j = i + 1; j < cats.length; j++) {
        const cat1Frameworks = frameworks.filter(f => f.category === cats[i]);
        const cat2Frameworks = frameworks.filter(f => f.category === cats[j]);
        
        let totalProximityScore = 0;
        let maxPossibleScore = 0;
        
        cat1Frameworks.forEach(f1 => {
          cat2Frameworks.forEach(f2 => {
            const yearDiff = Math.abs(f1.peak - f2.peak);
            if (yearDiff === 0) {
              totalProximityScore += 100;
            } else if (yearDiff === 1) {
              totalProximityScore += 70;
            } else if (yearDiff === 2) {
              totalProximityScore += 40;
            } else if (yearDiff === 3) {
              totalProximityScore += 20;
            }
            maxPossibleScore += 100;
          });
        });
        
        const correlation = maxPossibleScore > 0 ? (totalProximityScore / maxPossibleScore) * 100 : 0;
        if (correlation > 5) {
          correlations.push({
            pair: `${cats[i]}-${cats[j]}`,
            correlation: Math.round(correlation)
          });
        }
      }
    }
    correlations.sort((a, b) => b.correlation - a.correlation);
    
    return {
      maxPeakYear,
      maxPeakCount: peakYearCounts[maxPeakYear],
      peakYearData,
      categoryData,
      severityData,
      densityData,
      avgSeverity: Math.round(avgSeverity),
      avgConfidence: Math.round(avgConfidence),
      correlations,
      totalFrameworks: frameworks.length
    };
  }, []);

  const COLORS = {
    economic: '#dc2626',
    technological: '#10b981',
    generational: '#a855f7',
    environmental: '#eab308',
    climate: '#f97316',
    geopolitical: '#3b82f6'
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Statistics & Analytics Dashboard</h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400">Comprehensive analysis of convergence patterns and risk distribution</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-black border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-red-400" />
            <div className="text-xs text-gray-400">Peak Year</div>
          </div>
          <div className="text-3xl font-bold text-red-400">{analytics.maxPeakYear}</div>
          <div className="text-sm text-gray-400 mt-1">{analytics.maxPeakCount} frameworks converge</div>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-orange-400" />
            <div className="text-xs text-gray-400">Avg Severity</div>
          </div>
          <div className="text-3xl font-bold text-orange-400">{analytics.avgSeverity}%</div>
          <div className="text-sm text-gray-400 mt-1">Across all frameworks</div>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <div className="text-xs text-gray-400">Avg Confidence</div>
          </div>
          <div className="text-3xl font-bold text-blue-400">{analytics.avgConfidence}%</div>
          <div className="text-sm text-gray-400 mt-1">Prediction reliability</div>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-green-400" />
            <div className="text-xs text-gray-400">Total Frameworks</div>
          </div>
          <div className="text-3xl font-bold text-green-400">{analytics.totalFrameworks}</div>
          <div className="text-sm text-gray-400 mt-1">Monitored patterns</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-4">Peak Convergence by Year</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.peakYearData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="year" stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <YAxis stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#000', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="count" fill="#dc2626" name="Framework Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-4">Framework Density Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analytics.densityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="year" stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <YAxis stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#000', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area type="monotone" dataKey="density" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="Active Frameworks" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={analytics.categoryData}
                dataKey="count"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={(entry) => `${entry.category}: ${entry.count}`}
              >
                {analytics.categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.category] || '#666'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-4">Risk Severity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.severityData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <YAxis dataKey="severity" type="category" width={120} stroke="#666" tick={{ fontSize: 10, fill: '#999' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#000', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="count" name="Framework Count">
                {analytics.severityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="text-yellow-400" />
            Category Correlation Analysis
          </h3>
          <div className="space-y-3">
            {analytics.correlations.slice(0, 6).map((corr, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-gray-900 border border-gray-800 rounded-lg">
                <span className="text-sm text-white font-medium">{corr.pair}</span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 sm:w-24 md:w-32 bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${Math.min(100, corr.correlation)}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-yellow-400 w-12 text-right shrink-0">{corr.correlation}%</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Temporal proximity score: 100% for same-year peaks, 70% for 1-year gap, 40% for 2-year gap, 20% for 3-year gap
          </p>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-4">Frameworks by Category</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={analytics.categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="category" stroke="#666" tick={{ fontSize: 10, fill: '#999' }} angle={-15} textAnchor="end" height={80} />
              <YAxis stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#000', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="count" name="Framework Count">
                {analytics.categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.category] || '#666'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-4 sm:p-6 mb-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="text-purple-400" />
          Key Insights & Predictions
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-black/40 border border-purple-800/20 rounded-lg p-3">
              <div className="text-sm font-semibold text-purple-400 mb-1">Maximum Convergence Window</div>
              <p className="text-xs text-gray-300">
                Peak convergence occurs in <span className="font-bold text-white">{analytics.maxPeakYear}</span> with {analytics.maxPeakCount} frameworks 
                simultaneously reaching critical thresholds, creating unprecedented systemic risk.
              </p>
            </div>
            <div className="bg-black/40 border border-red-800/20 rounded-lg p-3">
              <div className="text-sm font-semibold text-red-400 mb-1">Economic Dominance</div>
              <p className="text-xs text-gray-300">
                Economic cycles represent the largest category ({analytics.categoryData[0]?.count} frameworks), 
                driving the primary convergence patterns and amplifying risks across other domains.
              </p>
            </div>
            <div className="bg-black/40 border border-yellow-800/20 rounded-lg p-3">
              <div className="text-sm font-semibold text-yellow-400 mb-1">High Severity Concentration</div>
              <p className="text-xs text-gray-300">
                {analytics.severityData[0].count + analytics.severityData[1].count} frameworks rated high severity or above, 
                representing {Math.round(((analytics.severityData[0].count + analytics.severityData[1].count) / analytics.totalFrameworks) * 100)}% of all monitored patterns.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-black/40 border border-blue-800/20 rounded-lg p-3">
              <div className="text-sm font-semibold text-blue-400 mb-1">Category Correlation</div>
              <p className="text-xs text-gray-300">
                Strong correlation between {analytics.correlations[0]?.pair} ({analytics.correlations[0]?.correlation}%) 
                indicates synchronized crisis patterns that could trigger cascading failures.
              </p>
            </div>
            <div className="bg-black/40 border border-green-800/20 rounded-lg p-3">
              <div className="text-sm font-semibold text-green-400 mb-1">Prediction Confidence</div>
              <p className="text-xs text-gray-300">
                Average confidence level of {analytics.avgConfidence}% across all frameworks suggests 
                high reliability in historical pattern matching and predictive accuracy.
              </p>
            </div>
            <div className="bg-black/40 border border-orange-800/20 rounded-lg p-3">
              <div className="text-sm font-semibold text-orange-400 mb-1">2027-2029 Critical Period</div>
              <p className="text-xs text-gray-300">
                Framework density analysis shows sustained high convergence through 2027-2029, 
                creating extended crisis window rather than single shock event.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
        <h3 className="text-lg font-bold text-white mb-3">Methodology Notes</h3>
        <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-300">
          <div>
            <div className="font-semibold text-blue-400 mb-2">Peak Convergence</div>
            <p>Counts frameworks reaching their predicted peak year. High counts indicate synchronized crisis points where multiple cycles align.</p>
          </div>
          <div>
            <div className="font-semibold text-purple-400 mb-2">Framework Density</div>
            <p>Measures total number of active frameworks in any given year based on their operational ranges. Higher density = more systemic stress.</p>
          </div>
          <div>
            <div className="font-semibold text-yellow-400 mb-2">Category Correlation</div>
            <p>Analyzes temporal proximity of peaks across categories. High correlation suggests interconnected crises that amplify each other.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
