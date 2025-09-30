// src/components/convergenceData.js
import { TrendingUp, Users, Cpu, Leaf, Globe, Grid, Moon } from 'lucide-react';

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
  generational: {
    label: 'Generational',
    icon: Users,
    classes: 'bg-purple-600 text-white hover:bg-purple-500 ring-purple-400'
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
  climate: {
    label: 'Climate',
    icon: Moon,
    classes: 'bg-orange-600 text-white hover:bg-orange-500 ring-orange-400'
  },
  geopolitical: {
    label: 'Geopolitical',
    icon: Globe,
    classes: 'bg-blue-600 text-white hover:bg-blue-500 ring-blue-400'
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
  // ECONOMIC CYCLES (13 frameworks)
  {
    category: 'economic',
    name: 'Kondratiev Wave',
    peak: 2025,
    range: [2020, 2030],
    cycle: '50-60 year economic supercycle',
    description: 'Long wave technological-economic cycle. Last peak ~1970s, prediksi next crisis 2020-2030',
    severity: 85,
    confidence: 75,
    source: 'Kondratiev (1925), Schumpeter'
  },
  {
    category: 'economic',
    name: 'Great Depression 100-Year Resonance',
    peak: 2029,
    range: [2027, 2031],
    cycle: '100-year historical pattern',
    description: '1929 + 100 = 2029. Kondisi struktural (tech bubble, inequality, speculation) sangat mirip',
    severity: 95,
    confidence: 70,
    source: 'Historical pattern analysis',
    hasDetailView: true
  },
  {
    category: 'economic',
    name: 'Debt Supercycle Peak',
    peak: 2027,
    range: [2025, 2030],
    cycle: '70-80 year debt accumulation',
    description: 'Global debt/GDP at 356% - highest in peacetime history. Mathematically unsustainable.',
    severity: 92,
    confidence: 85,
    source: 'BIS, IMF data'
  },
  {
    category: 'economic',
    name: 'Ray Dalio Long-term Debt Cycle',
    peak: 2028,
    range: [2025, 2032],
    cycle: '75-100 years',
    description: 'End of long-term debt cycle, reserve currency shift, wealth redistribution',
    severity: 90,
    confidence: 75,
    source: 'Ray Dalio, Bridgewater'
  },
  {
    category: 'economic',
    name: 'Juglar Cycle',
    peak: 2026,
    range: [2024, 2028],
    cycle: '7-11 year business cycle',
    description: 'Fixed investment cycle. Peak due 2025-2027 after 2020 trough',
    severity: 70,
    confidence: 80,
    source: 'Clement Juglar (1860)'
  },
  {
    category: 'economic',
    name: 'Kitchen Cycle Convergence',
    peak: 2026,
    range: [2025, 2027],
    cycle: '3-5 year inventory cycle',
    description: 'Short inventory cycle aligning with longer cycles',
    severity: 65,
    confidence: 70,
    source: 'Joseph Kitchin (1923)'
  },
  {
    category: 'economic',
    name: 'Kuznets Swing',
    peak: 2027,
    range: [2025, 2030],
    cycle: '15-25 year infrastructure',
    description: 'Building/infrastructure cycle. Last peak 2005-2008, next ~2025-2030',
    severity: 72,
    confidence: 65,
    source: 'Simon Kuznets (1930)'
  },
  {
    category: 'economic',
    name: 'Real Estate 18-Year Cycle',
    peak: 2026,
    range: [2024, 2028],
    cycle: '18.6 year property cycle',
    description: 'Fred Harrison\'s cycle: 2008 crash + 18 = 2026',
    severity: 78,
    confidence: 70,
    source: 'Fred Harrison, Phil Anderson'
  },
  {
    category: 'economic',
    name: 'Presidential Cycle Weakness',
    peak: 2026,
    range: [2025, 2027],
    cycle: '4-year political cycle',
    description: 'Year 2 of presidency historically weakest for markets',
    severity: 60,
    confidence: 65,
    source: 'Stock market analysis'
  },
  {
    category: 'economic',
    name: 'Commodity Supercycle Peak',
    peak: 2028,
    range: [2026, 2032],
    cycle: '20-30 year resource cycle',
    description: 'Commodity boom/bust. Peak predicted late 2020s',
    severity: 75,
    confidence: 70,
    source: 'Resource economics'
  },
  {
    category: 'economic',
    name: 'Secular Bear Market Bottom',
    peak: 2029,
    range: [2025, 2033],
    cycle: '16-18 year equity cycle',
    description: 'Secular bear markets historically end with crisis. 2000-2009, 2009-2025?',
    severity: 80,
    confidence: 65,
    source: 'Market cycle analysis'
  },
  {
    category: 'economic',
    name: 'Decennial Pattern',
    peak: 2030,
    range: [2028, 2032],
    cycle: '10-year digit pattern',
    description: 'Years ending in 0 historically volatile (1930, 1970, 2000, 2010, 2020...)',
    severity: 68,
    confidence: 60,
    source: 'Statistical observation'
  },
  {
    category: 'economic',
    name: 'Corporate Debt Maturity Wall',
    peak: 2028,
    range: [2027, 2030],
    cycle: 'Debt issuance schedule',
    description: '$1.5T+ corporate debt needs refinancing 2027-2029 at higher rates',
    severity: 85,
    confidence: 95,
    source: 'Bloomberg, S&P data'
  },
  
  // GENERATIONAL CYCLES (5 frameworks)
  {
    category: 'generational',
    name: 'Fourth Turning (Strauss-Howe)',
    peak: 2025,
    range: [2008, 2029],
    cycle: '80-100 year saeculum',
    description: 'Crisis turning ends ~2025-2029. Institutional collapse & rebirth. Last: 1929-1945',
    severity: 92,
    confidence: 80,
    source: 'Strauss & Howe (1997)'
  },
  {
    category: 'generational',
    name: 'Generational Wealth Transfer',
    peak: 2028,
    range: [2025, 2035],
    cycle: 'Demographic transition',
    description: '$84T Baby Boomer wealth transfer creates massive disruption',
    severity: 78,
    confidence: 90,
    source: 'Cerulli Associates'
  },
  {
    category: 'generational',
    name: 'Generational Memory Loss',
    peak: 2028,
    range: [2025, 2030],
    cycle: '3-4 generations = 80-100 years',
    description: 'No living memory of Great Depression/WW2. Critical lessons forgotten.',
    severity: 75,
    confidence: 85,
    source: 'Historical sociology'
  },
  {
    category: 'generational',
    name: 'Millennial Economic Peak',
    peak: 2027,
    range: [2025, 2032],
    cycle: 'Generational lifecycle',
    description: 'Millennials entering peak earning/spending years with massive debt burden',
    severity: 72,
    confidence: 80,
    source: 'Demographic economics'
  },
  {
    category: 'generational',
    name: 'Gen Z Political Awakening',
    peak: 2026,
    range: [2024, 2030],
    cycle: 'Political maturation',
    description: 'Gen Z reaches political majority, demands radical change',
    severity: 70,
    confidence: 75,
    source: 'Sociological analysis'
  },
  
  // TECHNOLOGICAL SINGULARITY (9 frameworks)
  {
    category: 'technological',
    name: 'Kurzweil AGI Prediction',
    peak: 2029,
    range: [2027, 2032],
    cycle: 'Exponential tech growth',
    description: 'AGI by 2029 per Kurzweil\'s 2005 prediction, reaffirmed 2024. Massive job displacement.',
    severity: 100,
    confidence: 65,
    source: 'Ray Kurzweil (2005, 2024)'
  },
  {
    category: 'technological',
    name: 'AI Disruption Wave',
    peak: 2027,
    range: [2025, 2030],
    cycle: '~15 year tech revolution',
    description: 'White collar job displacement, inequality spike, social adaptation crisis',
    severity: 88,
    confidence: 90,
    source: 'AI research consensus'
  },
  {
    category: 'technological',
    name: 'Moore\'s Law Physical Limit',
    peak: 2025,
    range: [2024, 2028],
    cycle: '60-year exponential era',
    description: 'Gordon Moore himself predicted end ~2025. Quantum limits reached. Paradigm shift required.',
    severity: 85,
    confidence: 85,
    source: 'Gordon Moore, IEEE'
  },
  {
    category: 'technological',
    name: 'Quantum Computing Transition',
    peak: 2028,
    range: [2025, 2032],
    cycle: 'Technology paradigm shift',
    description: 'Quantum advantage achieved, cryptography crisis, economic disruption',
    severity: 82,
    confidence: 70,
    source: 'Quantum research labs'
  },
  {
    category: 'technological',
    name: 'Automation Unemployment Crisis',
    peak: 2028,
    range: [2026, 2032],
    cycle: 'Automation acceleration',
    description: '30-40% jobs at high risk by late 2020s. No replacement jobs created fast enough.',
    severity: 86,
    confidence: 80,
    source: 'Oxford, McKinsey studies'
  },
  {
    category: 'technological',
    name: 'Internet of Bodies Inflection',
    peak: 2027,
    range: [2025, 2030],
    cycle: 'Biotech convergence',
    description: 'Brain-computer interfaces, biohacking mainstream. Ethical crisis.',
    severity: 75,
    confidence: 65,
    source: 'Neuralink, RAND'
  },
  {
    category: 'technological',
    name: 'Social Media Collapse',
    peak: 2026,
    range: [2024, 2029],
    cycle: '~20 year platform lifecycle',
    description: 'Trust collapse, regulation, youth exodus. Information ecosystem crisis.',
    severity: 73,
    confidence: 70,
    source: 'Media studies'
  },
  {
    category: 'technological',
    name: 'Digital Currency Transition',
    peak: 2027,
    range: [2025, 2030],
    cycle: 'Monetary tech shift',
    description: 'CBDCs vs decentralized crypto. Financial sovereignty crisis.',
    severity: 80,
    confidence: 75,
    source: 'Central bank roadmaps'
  },
  {
    category: 'technological',
    name: '5G/6G Infrastructure Crisis',
    peak: 2026,
    range: [2025, 2028],
    cycle: 'Telecom investment cycle',
    description: 'Massive infrastructure debt, geopolitical equipment bans, security vulnerabilities',
    severity: 68,
    confidence: 75,
    source: 'Telecom industry analysis'
  },
  
  // GEOPOLITICAL (8 frameworks)
  {
    category: 'geopolitical',
    name: 'Thucydides Trap',
    peak: 2027,
    range: [2025, 2030],
    cycle: 'Power transition conflict',
    description: 'US (declining) vs China (rising) = 75% historical probability of war',
    severity: 96,
    confidence: 75,
    source: 'Graham Allison, Harvard'
  },
  {
    category: 'geopolitical',
    name: 'Hegemonic Cycle',
    peak: 2028,
    range: [2020, 2035],
    cycle: '~200 year power shift',
    description: 'West to East power transition. Unstable multipolar transition phase.',
    severity: 90,
    confidence: 75,
    source: 'World-systems theory'
  },
  {
    category: 'geopolitical',
    name: 'Bretton Woods 3.0',
    peak: 2026,
    range: [2024, 2030],
    cycle: '~80 year monetary reset',
    description: 'Dollar hegemony ending. New monetary architecture. BRICS alternative.',
    severity: 88,
    confidence: 75,
    source: 'Zoltan Pozsar, Credit Suisse'
  },
  {
    category: 'geopolitical',
    name: 'Taiwan Conflict Window',
    peak: 2027,
    range: [2025, 2030],
    cycle: 'Military capability window',
    description: 'PLA modernization complete, US relative decline. Highest risk period.',
    severity: 94,
    confidence: 70,
    source: 'Military intelligence assessments'
  },
  {
    category: 'geopolitical',
    name: 'Nuclear Treaty Expiration',
    peak: 2026,
    range: [2024, 2028],
    cycle: 'Arms control framework',
    description: 'New START expires 2026. Nuclear arms race unconstrained.',
    severity: 85,
    confidence: 95,
    source: 'International treaties'
  },
  {
    category: 'geopolitical',
    name: 'Middle East Realignment',
    peak: 2026,
    range: [2024, 2029],
    cycle: 'Regional power shift',
    description: 'US withdrawal, Iran nuclear threshold, Israel-Saudi dynamics volatile',
    severity: 82,
    confidence: 75,
    source: 'Regional analysis'
  },
  {
    category: 'geopolitical',
    name: 'Arctic Resource Competition',
    peak: 2028,
    range: [2025, 2032],
    cycle: 'Climate access opening',
    description: 'Ice melt opens resources, military competition intensifies',
    severity: 77,
    confidence: 80,
    source: 'Climate-security nexus'
  },
  {
    category: 'geopolitical',
    name: 'Space Militarization',
    peak: 2027,
    range: [2025, 2030],
    cycle: 'New domain competition',
    description: 'Anti-satellite weapons, space debris crisis, Kessler syndrome risk',
    severity: 78,
    confidence: 75,
    source: 'Space policy analysis'
  },
  
  // CLIMATE & RESOURCE (7 frameworks)
  {
    category: 'climate',
    name: 'Climate Tipping Points Cascade',
    peak: 2028,
    range: [2025, 2030],
    cycle: 'Non-linear acceleration',
    description: 'AMOC slowdown, Amazon dieback, ice sheet collapse converging',
    severity: 92,
    confidence: 85,
    source: 'IPCC, Nature studies'
  },
  {
    category: 'climate',
    name: 'Blue Ocean Event',
    peak: 2027,
    range: [2025, 2032],
    cycle: 'Arctic ice loss',
    description: 'Ice-free Arctic summer. Albedo feedback, jet stream disruption.',
    severity: 88,
    confidence: 75,
    source: 'Arctic research'
  },
  {
    category: 'climate',
    name: 'Water Crisis Convergence',
    peak: 2027,
    range: [2025, 2030],
    cycle: 'Hydrological stress',
    description: 'Major aquifers depleting. 2B+ people in water stress regions.',
    severity: 85,
    confidence: 90,
    source: 'UN Water, NASA'
  },
  {
    category: 'climate',
    name: 'Crop Failure Synchronization',
    peak: 2028,
    range: [2026, 2032],
    cycle: 'Agricultural volatility',
    description: 'Breadbasket failures correlating due to jet stream changes',
    severity: 87,
    confidence: 75,
    source: 'Agricultural research'
  },
  {
    category: 'climate',
    name: 'Solar Cycle 25 Maximum',
    peak: 2025,
    range: [2024, 2026],
    cycle: '11 year solar activity',
    description: 'Peak solar storms. CME risk to power grids, satellites, GPS.',
    severity: 72,
    confidence: 95,
    source: 'NOAA, NASA'
  },
  {
    category: 'climate',
    name: 'Rare Earth Supply Crisis',
    peak: 2027,
    range: [2025, 2030],
    cycle: 'Resource bottleneck',
    description: 'China 80% control, green tech demand surge, no alternatives',
    severity: 80,
    confidence: 85,
    source: 'USGS, IEA'
  },
  {
    category: 'climate',
    name: 'Permafrost Methane Release',
    peak: 2028,
    range: [2026, 2035],
    cycle: 'Temperature threshold',
    description: 'Arctic permafrost collapse releasing gigatons methane. Runaway feedback.',
    severity: 95,
    confidence: 70,
    source: 'Permafrost research'
  }
];
