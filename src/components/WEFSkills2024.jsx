import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Minus, Award, Brain, Users } from 'lucide-react';

const WEFSkills2024 = () => {
  const [activeView, setActiveView] = useState('importance');

  const topSkills = [
    { name: 'Analytical Thinking', importance: 70, growth: 85, trend: 'rising', category: 'Cognitive' },
    { name: 'Resilience & Flexibility', importance: 68, growth: 80, trend: 'rising', category: 'Self-Management' },
    { name: 'Leadership & Social Influence', importance: 65, growth: 75, trend: 'rising', category: 'Social' },
    { name: 'Creative Thinking', importance: 64, growth: 82, trend: 'rising', category: 'Cognitive' },
    { name: 'Motivation & Self-Awareness', importance: 62, growth: 70, trend: 'rising', category: 'Self-Management' },
    { name: 'AI & Big Data', importance: 60, growth: 95, trend: 'rising', category: 'Technical' },
    { name: 'Technological Literacy', importance: 58, growth: 88, trend: 'rising', category: 'Technical' },
    { name: 'Curiosity & Lifelong Learning', importance: 56, growth: 78, trend: 'rising', category: 'Self-Management' },
    { name: 'Networks & Cybersecurity', importance: 54, growth: 90, trend: 'rising', category: 'Technical' },
    { name: 'Environmental Stewardship', importance: 52, growth: 72, trend: 'rising', category: 'Social' },
  ];

  const decliningSkills = [
    { name: 'Manual Dexterity', importance: 25, growth: -45, trend: 'declining' },
    { name: 'Reading & Writing', importance: 35, growth: -30, trend: 'declining' },
    { name: 'Memory & Attention', importance: 40, growth: -25, trend: 'declining' },
    { name: 'Physical Abilities', importance: 30, growth: -40, trend: 'declining' },
  ];

  const skillsByCategory = [
    { category: 'Cognitive', count: 8, avgImportance: 67 },
    { category: 'Technical', count: 7, avgImportance: 62 },
    { category: 'Self-Management', count: 6, avgImportance: 65 },
    { category: 'Social', count: 5, avgImportance: 60 },
    { category: 'Physical', count: 3, avgImportance: 32 },
  ];

  const growthData = [
    { year: '2023', technical: 45, cognitive: 60, social: 55 },
    { year: '2024', technical: 58, cognitive: 67, social: 62 },
    { year: '2025', technical: 72, cognitive: 72, social: 68 },
    { year: '2026', technical: 85, cognitive: 76, social: 72 },
    { year: '2027', technical: 92, cognitive: 78, social: 75 },
  ];

  const radarData = topSkills.slice(0, 8).map(skill => ({
    skill: skill.name.split(' ')[0],
    importance: skill.importance,
    growth: skill.growth
  }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'rising':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">WEF Future of Jobs 2024</h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400">Core Skills for the Future Workforce based on World Economic Forum report</p>
      </div>

      <div className="flex gap-2 sm:gap-3 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveView('importance')}
          className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
            activeView === 'importance'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Importance Rankings
        </button>
        <button
          onClick={() => setActiveView('growth')}
          className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
            activeView === 'growth'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Growth Trends
        </button>
        <button
          onClick={() => setActiveView('categories')}
          className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
            activeView === 'categories'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Categories
        </button>
      </div>

      {activeView === 'importance' && (
        <div className="space-y-6">
          <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Top 10 Core Skills by Importance</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={topSkills} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
                <YAxis dataKey="name" type="category" width={150} stroke="#666" tick={{ fontSize: 10, fill: '#999' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#000', 
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="importance" fill="#3b82f6" name="Importance %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="text-green-400" />
                Skills Radar: Importance vs Growth
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10, fill: '#999' }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: '#666' }} />
                  <Radar name="Importance" dataKey="importance" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                  <Radar name="Growth Demand" dataKey="growth" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold text-white mb-4">Top Skills Details</h3>
              <div className="space-y-3 max-h-[350px] overflow-y-auto">
                {topSkills.slice(0, 5).map((skill, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-1">
                        {getTrendIcon(skill.trend)}
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-blue-900 text-blue-300 rounded">{skill.category}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Importance</span>
                        <span className="text-blue-400 font-semibold">{skill.importance}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${skill.importance}%` }} />
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Growth Demand</span>
                        <span className="text-green-400 font-semibold">{skill.growth}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${skill.growth}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingDown className="text-red-400" />
              Declining Skills
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {decliningSkills.map((skill, index) => (
                <div key={index} className="bg-gray-900 border border-red-900/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-semibold text-white">{skill.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">{skill.growth}%</div>
                  <div className="text-xs text-gray-400">Demand Change</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeView === 'growth' && (
        <div className="space-y-6">
          <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Skill Demand Projection (2023-2027)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={growthData}>
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
                <Legend />
                <Bar dataKey="technical" fill="#10b981" name="Technical Skills" />
                <Bar dataKey="cognitive" fill="#3b82f6" name="Cognitive Skills" />
                <Bar dataKey="social" fill="#8b5cf6" name="Social Skills" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold text-white mb-4">Fastest Growing Skills</h3>
              <div className="space-y-3">
                {[...topSkills].sort((a, b) => b.growth - a.growth).slice(0, 5).map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold text-green-400">#{index + 1}</div>
                      <div>
                        <div className="text-sm font-semibold text-white">{skill.name}</div>
                        <div className="text-xs text-gray-400">{skill.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-400">+{skill.growth}%</div>
                      <div className="text-xs text-gray-400">Growth</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold text-white mb-4">Key Insights</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="p-3 bg-green-900/20 border border-green-800/30 rounded-lg">
                  <div className="font-semibold text-green-400 mb-1">Technical Skills Surge</div>
                  <p className="text-xs">AI & Big Data (+95%), Cybersecurity (+90%), and Tech Literacy (+88%) show explosive growth</p>
                </div>
                <div className="p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                  <div className="font-semibold text-blue-400 mb-1">Cognitive Foundation</div>
                  <p className="text-xs">Analytical Thinking (70%) and Creative Thinking (64%) remain most important skills</p>
                </div>
                <div className="p-3 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                  <div className="font-semibold text-purple-400 mb-1">Human Skills Premium</div>
                  <p className="text-xs">Leadership, Resilience, and Self-Awareness increasingly valued as AI handles routine tasks</p>
                </div>
                <div className="p-3 bg-red-900/20 border border-red-800/30 rounded-lg">
                  <div className="font-semibold text-red-400 mb-1">Physical Skills Decline</div>
                  <p className="text-xs">Manual dexterity and physical abilities seeing -40% to -45% demand reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeView === 'categories' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Skills by Category</h3>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={skillsByCategory}
                    dataKey="count"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => `${entry.category}: ${entry.count}`}
                  >
                    {skillsByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Average Importance by Category</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={skillsByCategory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="category" stroke="#666" tick={{ fontSize: 10, fill: '#999' }} />
                  <YAxis stroke="#666" tick={{ fontSize: 11, fill: '#999' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#000', 
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="avgImportance" name="Avg Importance %">
                    {skillsByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Users className="text-purple-400" />
              Category Breakdown
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {skillsByCategory.map((category, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2" style={{ color: COLORS[index] }}>
                    {category.count}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{category.category}</div>
                  <div className="text-xs text-gray-400">Avg: {category.avgImportance}%</div>
                  <div className="mt-2 w-full bg-gray-800 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full" 
                      style={{ width: `${category.avgImportance}%`, backgroundColor: COLORS[index] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-white mb-3">About This Data</h3>
        <p className="text-xs sm:text-sm text-gray-300">
          Skills data based on the <span className="font-semibold text-blue-400">World Economic Forum Future of Jobs Report 2024</span>. 
          Importance ratings reflect percentage of employers identifying each skill as critical. Growth projections indicate expected 
          increase in demand through 2027. The analysis covers responses from over 800 companies employing more than 11 million workers globally.
        </p>
      </div>
    </div>
  );
};

export default WEFSkills2024;
