// src/components/convergenceData.js
import { TrendingUp, Users, Cpu, Leaf, Globe, Grid } from 'lucide-react';

// Categories for filtering
export const categories = {
  all: {
    label: 'All Categories',
    icon: Grid,
    classes: 'bg-gray-700 text-gray-100 hover:bg-gray-600 ring-gray-500'
  },
  economic: {
    label: 'Economic',
    icon: TrendingUp,
    classes: 'bg-red-600 text-white hover:bg-red-500 ring-red-400'
  },
  social: {
    label: 'Social',
    icon: Users,
    classes: 'bg-blue-600 text-white hover:bg-blue-500 ring-blue-400'
  },
  technological: {
    label: 'Technology',
    icon: Cpu,
    classes: 'bg-green-600 text-white hover:bg-green-500 ring-green-400'
  },
  environmental: {
    label: 'Environment',
    icon: Leaf,
    classes: 'bg-yellow-600 text-white hover:bg-yellow-500 ring-yellow-400'
  },
  geopolitical: {
    label: 'Geopolitical',
    icon: Globe,
    classes: 'bg-purple-600 text-white hover:bg-purple-500 ring-purple-400'
  }
};

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
