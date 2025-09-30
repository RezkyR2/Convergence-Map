// src/components/convergenceData.js

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Categories', color: 'text-gray-400' },
  { id: 'economic', name: 'Economic', color: 'text-red-400' },
  { id: 'social', name: 'Social', color: 'text-blue-400' },
  { id: 'technological', name: 'Technology', color: 'text-green-400' },
  { id: 'environmental', name: 'Environment', color: 'text-yellow-400' },
  { id: 'geopolitical', name: 'Geopolitical', color: 'text-purple-400' }
];

// Severity color mapping function
export const getSeverityColor = (severity) => {
  if (severity >= 90) return { text: 'text-red-400', bg: 'bg-red-500' };
  if (severity >= 70) return { text: 'text-orange-400', bg: 'bg-orange-500' };
  if (severity >= 50) return { text: 'text-yellow-400', bg: 'bg-yellow-500' };
  return { text: 'text-green-400', bg: 'bg-green-500' };
};

export const frameworks = [
  {
      category: 'economic',
      name: 'Great Depression 100-Year Resonance',
      peak: 2029,
      range: [2027, 2031],
      cycle: '100-year historical pattern',
      description: '1929 + 100 = 2029. Kondisi struktural (tech bubble, inequality, speculation) sangat mirip.',
      severity: 95,
      confidence: 70,
      source: 'Historical pattern analysis',
      hasDetailView: true, // <-- TAMBAHKAN BARIS INI
  },
];
