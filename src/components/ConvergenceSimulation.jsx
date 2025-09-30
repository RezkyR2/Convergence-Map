import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Play, Pause, RotateCcw, AlertTriangle, TrendingUp, Activity } from 'lucide-react';
import { frameworks } from './convergenceData';

const ConvergenceSimulation = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [year, setYear] = useState(2024);
  const [data, setData] = useState([]);
  const [speed, setSpeed] = useState(50);
  
  const calculateConvergence = (t) => {
    const currentYear = 2024 + (t / 10);
    
    const activeFrameworks = frameworks.filter(f => 
      currentYear >= f.range[0] && currentYear <= f.range[1]
    );
    
    const frameworksAtPeak = frameworks.filter(f => 
      Math.abs(f.peak - currentYear) <= 1
    );
    
    const categoryCount = {};
    activeFrameworks.forEach(f => {
      categoryCount[f.category] = (categoryCount[f.category] || 0) + 1;
    });
    
    const economic = (categoryCount.economic || 0) * 15;
    const technological = (categoryCount.technological || 0) * 12;
    const generational = (categoryCount.generational || 0) * 10;
    const environmental = (categoryCount.environmental || 0) * 11;
    const climate = (categoryCount.climate || 0) * 11;
    const geopolitical = (categoryCount.geopolitical || 0) * 13;
    
    const convergenceLevel = Math.min(100, 
      economic + technological + generational + environmental + climate + geopolitical
    );
    
    const avgSeverity = activeFrameworks.length > 0
      ? activeFrameworks.reduce((sum, f) => sum + f.severity, 0) / activeFrameworks.length
      : 0;
    
    const riskLevel = Math.min(100, 
      (convergenceLevel * 0.6) + (avgSeverity * 0.4)
    );
    
    const stability = Math.max(5, 100 - riskLevel);
    
    const dominantCategory = Object.keys(categoryCount).reduce((a, b) => 
      categoryCount[a] > categoryCount[b] ? a : b, 'none'
    );
    
    return {
      year: currentYear.toFixed(1),
      convergenceLevel: Math.round(convergenceLevel),
      economic: Math.round(economic),
      technological: Math.round(technological),
      generational: Math.round(generational),
      environmental: Math.round(environmental),
      climate: Math.round(climate),
      geopolitical: Math.round(geopolitical),
      riskLevel: Math.round(riskLevel),
      stability: Math.round(stability),
      activeFrameworks: activeFrameworks.length,
      peakFrameworks: frameworksAtPeak.length,
      dominantCategory
    };
  };

  useEffect(() => {
    if (data.length === 0) {
      setData([calculateConvergence(0)]);
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setYear(prev => {
          const newYear = prev >= 2032 ? 2024 : prev + 0.1;
          const t = (newYear - 2024) * 10;
          setData(prevData => {
            const newData = [...prevData, calculateConvergence(t)];
            return newData.slice(-90);
          });
          return newYear;
        });
      }, 101 - speed);
      
      return () => clearInterval(interval);
    }
  }, [isRunning, speed]);

  const handleReset = () => {
    setYear(2024);
    setData([calculateConvergence(0)]);
    setIsRunning(false);
  };

  const getCurrentPhase = () => {
    if (data.length === 0) return { name: 'Initializing', color: 'text-gray-400', desc: 'Loading simulation...' };
    const latest = data[data.length - 1];
    
    if (latest.convergenceLevel >= 80) return { 
      name: 'Crisis Point', 
      color: 'text-red-500',
      desc: 'Maximum convergence - systemic crisis imminent'
    };
    if (latest.convergenceLevel >= 65) return { 
      name: 'Peak Convergence', 
      color: 'text-orange-500',
      desc: 'Multiple frameworks aligning - high risk period'
    };
    if (latest.convergenceLevel >= 45) return { 
      name: 'Rising Tension', 
      color: 'text-yellow-500',
      desc: 'Convergence building - increasing systemic stress'
    };
    if (latest.convergenceLevel >= 25) return { 
      name: 'Moderate Risk', 
      color: 'text-blue-400',
      desc: 'Some framework overlap - manageable conditions'
    };
    return { 
      name: 'Low Risk', 
      color: 'text-green-400',
      desc: 'Minimal convergence - stable system state'
    };
  };

  const phase = getCurrentPhase();
  const latest = data.length > 0 ? data[data.length - 1] : null;

  const radarData = latest ? [
    { factor: 'Economic', value: latest.economic },
    { factor: 'Tech', value: latest.technological },
    { factor: 'Generation', value: latest.generational },
    { factor: 'Environment', value: latest.environmental },
    { factor: 'Climate', value: latest.climate },
    { factor: 'Geopolitical', value: latest.geopolitical },
  ] : [];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Convergence Dynamics Simulation</h2>
        <p className="text-sm sm:text-base text-gray-400">Interactive model of framework convergence patterns from 2024 to 2032</p>
      </div>

      <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-6">
          <div className="text-center p-3 sm:p-4 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">{year.toFixed(1)}</div>
            <div className="text-xs sm:text-sm text-gray-400">Year</div>
          </div>
          
          <div className="text-center p-3 sm:p-4 bg-gray-900 border border-gray-800 rounded-lg">
            <div className={`text-base sm:text-lg font-bold ${phase.color}`}>{phase.name}</div>
            <div className="text-xs text-gray-400">{phase.desc}</div>
          </div>
          
          {latest && (
            <>
              <div className="text-center p-3 sm:p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-orange-400" />
                <div className="text-xl sm:text-2xl font-bold text-orange-400">{latest.convergenceLevel}</div>
                <div className="text-xs sm:text-sm text-gray-400">Convergence</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-red-400" />
                <div className="text-xl sm:text-2xl font-bold text-red-400">{latest.riskLevel}</div>
                <div className="text-xs sm:text-sm text-gray-400">Risk Level</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-green-400" />
                <div className="text-xl sm:text-2xl font-bold text-green-400">{latest.stability}</div>
                <div className="text-xs sm:text-sm text-gray-400">Stability</div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
            {isRunning ? 'Pause' : 'Play'}
          </button>
          
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            <RotateCcw size={20} />
            Reset
          </button>

          <div className="flex-1 min-w-[200px]">
            <label className="text-xs sm:text-sm text-gray-400 mb-1 block">Speed</label>
            <input
              type="range"
              min="1"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div className="md:col-span-2">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Convergence Timeline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="year" 
                  stroke="#666"
                  tick={{ fontSize: 11, fill: '#999' }}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fontSize: 11, fill: '#999' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#000', 
                    border: '1px solid #333', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" dataKey="convergenceLevel" stroke="#f97316" strokeWidth={3} dot={false} name="Convergence Level" />
                <Line type="monotone" dataKey="riskLevel" stroke="#dc2626" strokeWidth={2.5} dot={false} name="Risk Level" />
                <Line type="monotone" dataKey="stability" stroke="#10b981" strokeWidth={2} dot={false} name="Stability" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Current State</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="factor" tick={{ fontSize: 10, fill: '#999' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: '#666' }} />
                <Radar name="Category Intensity" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-base sm:text-lg font-bold text-white mb-3">Category Convergence Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="year" stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <YAxis stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px', color: '#fff' }} />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Line type="monotone" dataKey="economic" stroke="#dc2626" strokeWidth={2} dot={false} name="Economic" />
              <Line type="monotone" dataKey="technological" stroke="#10b981" strokeWidth={2} dot={false} name="Tech" />
              <Line type="monotone" dataKey="geopolitical" stroke="#3b82f6" strokeWidth={2} dot={false} name="Geopolitical" />
              <Line type="monotone" dataKey="environmental" stroke="#eab308" strokeWidth={2} dot={false} name="Environmental" />
              <Line type="monotone" dataKey="climate" stroke="#f97316" strokeWidth={2} dot={false} name="Climate" />
              <Line type="monotone" dataKey="generational" stroke="#a855f7" strokeWidth={2} dot={false} name="Generational" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
            <AlertTriangle className="text-orange-400" size={20} />
            Simulation Methodology
          </h3>
          <div className="space-y-2 text-xs sm:text-sm text-gray-300">
            <p>• <span className="font-semibold text-white">Convergence Level</span> - Total overlap of active frameworks weighted by category impact</p>
            <p>• <span className="font-semibold text-white">Risk Level</span> - Combined measure of convergence intensity and average severity</p>
            <p>• <span className="font-semibold text-white">Stability</span> - Inverse of risk level, indicating system resilience</p>
            <p>• <span className="font-semibold text-white">Category Weighting</span> - Economic (15), Geopolitical (13), Tech (12), Climate/Environment (11), Generational (10)</p>
          </div>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-white mb-3">Key Insights</h3>
          <div className="space-y-2 text-xs sm:text-sm text-gray-300">
            <p>• Peak convergence occurs around <span className="text-red-400 font-semibold">2027-2029</span> when most frameworks align</p>
            <p>• <span className="text-orange-400 font-semibold">Economic cycles</span> drive the highest convergence intensity</p>
            <p>• System stability drops below 30% during crisis point phases</p>
            <p>• Multiple category overlap creates <span className="text-red-400 font-semibold">non-linear risk amplification</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvergenceSimulation;
