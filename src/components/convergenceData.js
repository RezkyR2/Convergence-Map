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
    description: 'Long wave technological-economic cycle identified by Soviet economist Nikolai Kondratiev. Last peak occurred in the 1970s stagflation era, predicting next major crisis window 2020-2030. Each wave is driven by revolutionary technologies: steam power, railways, steel/electricity, oil/automobiles, and now information technology. The decline phase typically brings financial crisis and social upheaval before the next innovation wave begins.',
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
    description: '1929 crash + 100 years = 2029, with structural conditions remarkably similar including tech speculation bubble, extreme wealth inequality, record margin debt, and regulatory capture. Historical patterns suggest centennial resonance in crisis cycles as the 2020s mirror the 1920s with stock market euphoria, corporate power concentration, weakened labor unions, and political polarization. If history repeats, we face potential systemic collapse requiring New Deal-scale intervention. The convergence of conditions makes this one of the highest-probability crisis scenarios.',
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
    description: 'Global debt/GDP ratio at 356% creates mathematically unsustainable trajectory as debt service costs exceed economic growth capacity - highest in peacetime history. This supercycle began post-WWII with Bretton Woods expansion and accelerated after 2008 with zero rates and QE. Peak arrives when central banks lose ability to suppress rates without triggering currency crises. Resolution requires either massive default, hyperinflation, or financial system restructuring.',
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
    description: 'End of 75-100 year long-term debt cycle characterized by reserve currency shift, wealth redistribution crisis, and potential great power conflict. Dalio identifies three major forces converging: debt bubble reaching limits, internal wealth/political gaps at extremes, and rising external power challenging established order. Historical precedents include 1930s-40s transition from British to American dominance. Current cycle suggests US dollar hegemony ending with profound global implications.',
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
    description: 'Fixed investment and capital expenditure cycle discovered by Clement Juglar in 1860, with peak due 2025-2027 following 2020 pandemic trough. This medium-term cycle reflects business confidence waves where expansion leads to overcapacity, triggering contraction until excess clears. Current cycle amplified by massive COVID stimulus creating artificial demand that masks underlying weakness. When investment spending peaks and reverses, unemployment rises sharply triggering broader recession.',
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
    description: 'Short inventory cycle aligning with longer economic cycles, amplifying their effects. Businesses build inventory during expansion, then liquidate during contraction. When this 3-5 year cycle peaks simultaneously with Juglar (7-11 year) and longer cycles, it creates dangerous synchronization. Supply chain disruptions from 2020-2022 distorted normal patterns, setting up severe inventory correction as all cycles converge in 2026-2027 window.',
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
    description: 'Building and infrastructure investment cycle spanning 15-25 years, named after economist Simon Kuznets, with last peak in 2005-2008 global real estate boom and next predicted 2025-2030. This cycle reflects long-term construction projects and demographic housing demand waves. Current cycle characterized by urbanization in developing nations, infrastructure decay in developed world, and urgent climate adaptation needs. Peak brings construction sector collapse and banking crises from real estate loans.',
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
    description: 'Fred Harrison\'s remarkably consistent property cycle predicts 2026 peak (2008 subprime crash + 18 years), repeating with precision since 1800s driven by land speculation, credit expansion, and human psychology. Pattern shows 14 years up, 4 years down, with mid-cycle dip in 2020 (COVID) followed by final mania phase. Banks now overextended in commercial real estate while homeowners stretched at record prices. Crash triggers broader financial crisis as real estate represents 60% of global wealth.',
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
    description: 'Year 2 of presidential term historically weakest for markets due to tough policy decisions without election pressure as presidents implement unpopular reforms while Fed tightens and fiscal stimulus remains absent. Statistical analysis since 1833 shows year 2 average returns significantly below other years. 2026 as second year of current term coincides with multiple other cycle peaks, creating particularly dangerous alignment. Political constraints prevent rescue measures during crisis, amplifying downturn severity.',
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
    description: 'Commodity boom and bust supercycle driven by major industrialization waves following historical pattern: 1890s-1920s (US/Europe build-out), 1950s-1970s (post-war reconstruction), 2000s-2010s (China growth). Current cycle driven by green energy transition demanding massive material inputs including copper, lithium, and rare earths. Peak predicted late 2020s as supply constraints meet maximum demand, with collapse following when recession destroys demand while new supply floods market. This creates severe volatility for energy transition and global economy.',
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
    description: 'Secular bear markets historically end with major crisis and capitulation. Pattern: 1966-1982 (inflation/stagnation bottom), 2000-2009 (tech bubble to housing crash). Current cycle: 2009-2025/2029? Secular bears are not continuous decline but sideways volatility with no real gains, ending in crisis that resets valuations and clears excesses. Final bottom brings P/E ratios to single digits, dividend yields above 6%, and investor capitulation, setting stage for next secular bull market.',
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
    description: 'Years ending in 0 historically volatile: 1930 (Depression deepens), 1970 (stagflation begins), 2000 (tech crash), 2010 (sovereign debt crisis), 2020 (pandemic). Statistical pattern suggests psychological and institutional factors create crisis vulnerability at decade turns. 2030 particularly concerning as it coincides with multiple long-wave cycle peaks. Market psychology, political transitions, and tendency to delay problems until "next decade" contribute to this phenomenon.',
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
    description: '$1.5 trillion+ corporate debt needs refinancing 2027-2029 at significantly higher interest rates than original issuance after companies issued record debt 2020-2021 at near-zero rates with 7-10 year maturities. When refinancing comes due, many firms face 3-5x higher interest costs devastating cash flows. Wave of defaults expected particularly in leveraged buyouts, zombified firms, and speculative-grade issuers. Credit crisis cascades through financial system as banks and bond funds face massive losses.',
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
    description: 'Crisis turning (Fourth Turning) ends approximately 2025-2029 with institutional collapse and rebirth, following pattern of last Fourth Turning in 1929-1945 (Depression and WWII). Theory holds that every 80-100 years society faces existential crisis requiring complete system restructuring. Current turning began with 2008 financial crisis and intensified through pandemic, political breakdown, and international tensions. Resolution requires confronting accumulated problems through crisis, leading to new civic order and institutional framework.',
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
    description: '$84 trillion Baby Boomer wealth transfer to Millennials and Gen X creates massive economic and social disruption. Largest intergenerational wealth shift in history coincides with Boomers requiring expensive end-of-life care while younger generations carry record debt. Transfer is highly unequal - concentrated in top 10% of families - exacerbating wealth gaps. Implications include housing market disruption as Boomers downsize, asset liquidation depressing markets, inheritance tax battles, and generational political conflict over resource allocation.',
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
    description: 'No living memory of Great Depression and WWII remains as last survivors pass away, leaving critical lessons about financial speculation, authoritarianism, and total war forgotten. Institutional memory preserved in books lacks the lived experience that shapes behavior and prevents catastrophic mistakes. This creates vulnerability to repeating history: speculation without fear, political extremism without consequence memory, and conflict without understanding total war costs. Historical pattern shows societies repeat major crises roughly 80-100 years apart when direct memory fades.',
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
    description: 'Millennials entering peak earning and spending years (ages 35-45) but burdened with unprecedented debt from student loans, delayed family formation, and inflated housing costs. This generation should drive economic growth through home buying, family spending, and investment, but debt service consumes income that would fuel expansion. Simultaneously, Boomers retire en masse, reducing tax base while increasing entitlement costs. Generational economic engine stalls precisely when society needs maximum productivity to service accumulated debts.',
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
    description: 'Gen Z reaches critical political mass and voting majority demanding radical systemic change on climate, inequality, and social justice as first generation facing lower living standards than parents while inheriting climate crisis, crushing costs, and dysfunctional institutions. Unlike Millennials\' gradual political engagement, Gen Z shows militant urgency and rejection of incremental reform. Peak coincides with multiple crises creating revolutionary political moment paralleling youth movements of 1960s but with existential stakes. Digital mobilization tools amplify their organizing capacity and political impact exponentially.',
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
    description: 'Artificial General Intelligence (AGI) by 2029 per Ray Kurzweil\'s 2005 prediction (reaffirmed 2024), representing human-level reasoning across all cognitive domains with 86% prediction track record. AGI arrival means machines can perform any intellectual task humans can, making most knowledge work obsolete unlike previous automation affecting only manual labor. This disrupts doctors, lawyers, engineers, and managers while society lacks preparation for transition. Economic collapse and social upheaval risks are severe as job displacement occurs at unprecedented scale.',
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
    description: 'White-collar job displacement wave, inequality spike, and social adaptation crisis emerge as AI systems match and exceed human cognitive capabilities following pattern of previous tech revolutions but at unprecedented speed. Generative AI, robotics, and autonomous systems eliminating jobs faster than economy creates new ones while AI capital concentrates with tech oligopolies and labor loses bargaining power. Inequality accelerates dramatically as educated classes face mass unemployment previously thought immune to automation. Social crisis emerges from political instability and conflict over resource distribution in post-labor economy.',
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
    description: 'Gordon Moore himself predicted end of his law around 2025 as transistor miniaturization reaches quantum physical limits, with current 3nm chips approaching atomic scale where atoms are finite size. Paradigm shift required to continue computing progress through quantum, biological, or entirely new architectures. Economic implications profound as semiconductor industry built on predictable exponential improvement now faces slowing innovation, rising costs, and intensified geopolitical competition. 60-year era of reliable tech deflation ends, forcing economic adjustment.',
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
    description: 'Quantum advantage achieved in practical applications triggers cryptography crisis and economic disruption as current encryption (RSA, elliptic curve) protecting financial systems, communications, and national security becomes instantly obsolete. "Harvest now, decrypt later" attacks already underway while transition requires rebuilding global security infrastructure. Quantum computers enable revolutionary capabilities in drug discovery, materials science, and optimization creating economic disruption as quantum-powered firms gain insurmountable advantages. Traditional computing paradigm obsoletes rapidly, forcing technological and economic restructuring.',
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
    description: '30-40% of jobs at high automation risk by late 2020s with no replacement jobs created fast enough as Oxford and McKinsey studies show accelerating displacement across all sectors. Transportation (autonomous vehicles), retail (automation), manufacturing (robotics), services (AI), and white-collar (cognitive automation) face simultaneous disruption unlike industrial revolution\'s century-long transition. Social safety nets designed for 5% unemployment face 20-30% structural joblessness creating unprecedented challenge. Political crisis emerges through UBI debates, labor movements, and potential violence from displaced workers.',
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
    description: 'Brain-computer interfaces and biohacking reach mainstream adoption triggering profound ethical and social crisis as Neuralink and competitors enable direct neural control of devices, cognitive enhancement, and memory manipulation. Technology creates two-tier society with enhanced humans gaining superior capabilities while unenhanced face obsolescence. Critical ethical questions emerge: Who controls neural data? Can memories be admissible evidence? Is cognitive enhancement coercive in competitive environments? Medical miracles for disabilities clash with transhumanist divide as regulation lags innovation, creating dangerous gray zones.',
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
    description: 'Trust collapse, regulatory crackdown, and youth exodus destroying social media business model as platforms follow predictable lifecycle from innovation through growth, dominance, to decline. Facebook/Meta peaked 2012-2016; now trust erodes from misinformation, mental health crisis, political manipulation, and privacy violations while Gen Z abandons platforms and regulations fragment markets. Information ecosystem crisis emerges with news deserts, echo chambers, and democratic discourse collapse as replacement systems remain unknown. This creates dangerous transition period in how societies communicate and organize.',
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
    description: 'Central Bank Digital Currencies (CBDCs) versus decentralized cryptocurrencies create financial sovereignty crisis as over 100 nations develop CBDCs threatening commercial banks while enabling unprecedented surveillance and control. Simultaneously, decentralized crypto offers alternative escaping state control but enabling tax evasion and illicit activity in battle determining future of money. Implications span privacy, freedom, monetary policy effectiveness, and international power balance between state-controlled programmable currency versus censorship-resistant alternatives. Transition period brings financial instability and competing monetary systems.',
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
    description: 'Massive infrastructure debt burden, geopolitical equipment bans, and security vulnerabilities creating telecom crisis as carriers borrowed hundreds of billions for 5G deployment with disappointing revenue growth. Huawei bans fracture global supply chains increasing costs and delays while 6G development requires even larger investments as 5G debt comes due. Security vulnerabilities in network infrastructure expose critical systems across economy and government. Potential outcomes include carrier bankruptcies, service degradation, digital divide expansion, or nationalization of telecom infrastructure.',
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
    description: 'US (declining hegemon) versus China (rising power) creates 75% historical probability of war according to Harvard\'s Graham Allison, as 12 of 16 cases since 1500 where rising power challenged ruling power resulted in war. Structural stresses including trade competition, technological rivalry, military tensions, alliance conflicts, and prestige competitions make conflict increasingly likely. Taiwan flashpoint, South China Sea disputes, tech decoupling, and arms racing create multiple triggers for confrontation. Window of maximum danger 2025-2030 as power transition reaches critical phase before either stabilizing or exploding.',
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
    description: 'West to East power transition following ~200 year hegemonic cycles through historical pattern: Portuguese (1500s), Dutch (1600s), British (1800s), American (1900s), now Asian rise. Currently in unstable multipolar transition phase between American unipolar moment and new order as declining hegemon (US) faces imperial overstretch, fiscal crisis, and domestic divisions while rising powers (China, India) assert regional dominance. Most dangerous phase is transition itself with unclear rules, security dilemmas, and alliance realignments. Temptation for preventive war increases as power balance shifts unpredictably.',
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
    description: 'Dollar hegemony ending, requiring new international monetary architecture to succeed Bretton Woods I (1944 gold standard) and Bretton Woods II (1971 fiat dollar system). BRICS developing alternative settlement systems, central banks diversifying from dollars, and US weaponization of currency eroding trust - driving shift to Bretton Woods 3.0 commodity-backed or multi-currency system per Zoltan Pozsar (Credit Suisse). Transition risks include financial instability, trade disruption, and geopolitical conflict over new rules. US loses "exorbitant privilege" of printing reserve currency, forcing fiscal adjustment.',
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
    description: 'PLA modernization complete while US relative military decline creates highest risk period for Taiwan invasion as China\'s military buildup focuses specifically on Taiwan scenario with amphibious assault capabilities, anti-access/area-denial systems, and cyber warfare tools. Window closes after 2030 as US rearms and alliances strengthen, or opens permanently if China achieves irreversible advantage. Xi Jinping\'s personal timeline (age, legacy, domestic pressure) adds urgency to action within this window. Conflict would be catastrophic with semiconductor supply collapse, global trade disruption, potential nuclear escalation, and millions of casualties.',
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
    description: 'New START treaty expires 2026, leaving nuclear arms race unconstrained for first time since 1970s as treaty currently limits US and Russian strategic warheads to 1,550 each with verification measures. No replacement framework exists with negotiations stalled over China inclusion, new weapons systems, and geopolitical tensions. Post-expiration scenario includes rapid warhead buildup, development of destabilizing first-strike weapons, space-based systems, and autonomous nuclear command as arms race accelerates and mutual trust collapses. Doomsday clock advances toward midnight.',
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
    description: 'US military withdrawal, Iran nuclear threshold proximity, and Israel-Saudi dynamics create volatile realignment. American retrenchment leaves power vacuum as regional powers compete: Iran\'s Shia expansion, Saudi-Emirati Sunni alliance, Turkish neo-Ottomanism, Israeli security dilemmas. Iran approaching nuclear weapons capability forces impossible choices: Israeli preventive strike, Saudi nuclear program, or Iranian bomb acceptance. Oil market disruption, refugee crises, sectarian conflicts, and potential great power intervention create polycrisis scenario.',
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
    description: 'Arctic ice melt opens vast resources and new shipping routes, intensifying military competition among great powers. Region contains 13% undiscovered oil, 30% undiscovered gas, and rare earth minerals, while Northern Sea Route cuts Europe-Asia shipping time by 40%. Russia militarizing Arctic, US rebuilding icebreaker fleet, China declaring itself "near-Arctic state," and NATO expanding northern presence - yet no clear sovereignty framework exists for newly accessible areas. Competition for resources, strategic positioning, and shipping control risks military confrontation in this fragile environment.',
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
    description: 'Anti-satellite weapons proliferation, space debris crisis, and Kessler syndrome risk militarizing final frontier as major powers deploy kinetic kill vehicles, directed energy weapons, and cyber attacks against satellites. Single debris-creating event could trigger cascade destroying all low-Earth orbit satellites (Kessler syndrome), ending space age while modern civilization depends on GPS, communications, weather, and reconnaissance satellites. Space war would be catastrophic with navigation failure, communication collapse, financial system breakdown, and military blindness. Arms race accelerates without treaties governing space weapons.',
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
    description: 'Multiple climate tipping points converging as Atlantic Meridional Overturning Circulation (AMOC) slowdown disrupts weather patterns, Amazon rainforest dieback converts carbon sink to source, and West Antarctic ice sheet collapse accelerates sea level rise. These interconnected systems create cascade effect where one tipping triggers others in self-reinforcing cycle. IPCC warnings increasingly urgent as monitoring shows faster-than-predicted changes, yet once triggered these tipping points become irreversible on human timescales. Implications include radical climate destabilization, ecosystem collapse, agricultural failure, mass migration, and civilization-threatening disruption.',
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
    description: 'Ice-free Arctic summer (Blue Ocean Event) triggers albedo feedback loop as dark ocean absorbs heat instead of white ice reflecting sunlight, accelerating warming and destabilizing jet streams. Persistent weather patterns emerge - heat domes, atmospheric rivers, stuck storms - causing severe agricultural impacts as predictable growing seasons collapse while methane release amplifies greenhouse effects. Global weather becomes chaotic just as food security margins thin to crisis levels. First Blue Ocean Event serves as psychological tipping point and visible proof of climate breakdown that galvanizes either panic or action.',
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
    description: 'Major aquifers depleting while 2+ billion people enter water stress conditions as critical sources fail: Ogallala (US agriculture), Indus (Pakistan/India), North China Plain, and Arabian Peninsula. Groundwater depletion creates invisible crisis until wells run dry with no gradual adjustment possible, while climate disruption shifts precipitation causing droughts in breadbaskets and floods elsewhere. Water wars brewing over India-Pakistan, Egypt-Ethiopia, and Colorado River compact collapse threaten agricultural failure, mass migration, and state collapse in water-dependent regions. No technological solution exists at required scale and speed.',
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
    description: 'Breadbasket failures correlating due to jet stream changes threaten global food security as climate disruption synchronizes failures that historically offset each other regionally. Heat domes hit multiple grain-producing regions simultaneously, atmospheric rivers cause flooding across continents, and drought patterns correlate across hemispheres as previewed in 2022 with simultaneous failures in China, India, Europe, and US. Global grain reserves at historic lows provide no buffer for synchronized failures. Price spikes, export bans, hoarding, social unrest, and potential famine affecting hundreds of millions become likely scenarios.',
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
    description: 'Peak of Solar Cycle 25 brings maximum solar storm risk to power grids, satellites, and GPS systems as Coronal Mass Ejections can induce currents destroying transformers that take months or years to replace. Carrington Event (1859) repeat today would cause $2 trillion damage and months-long blackouts affecting billions, with satellites vulnerable to radiation and GPS disruption affecting navigation to financial transactions. Modern civilization\'s electrical dependence creates catastrophic vulnerability despite NOAA and NASA tracking, as protection measures remain incomplete. Probability of major event during 2024-2026 peak remains concerning.',
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
    description: 'China controls 80% of rare earth element production while green technology demand surges exponentially with no alternatives available for wind turbines, EVs, solar panels, batteries, and electronics. Green transition requires 5-10x current production, but China weaponizing supply through export restrictions, preferential domestic pricing, and technology transfer requirements. Western attempts to develop alternatives require 10+ years for mines and processing, creating bottleneck that could derail energy transition, force fossil fuel dependence, or trigger resource conflicts. Economic leverage shifts dramatically to resource holders.',
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
    description: 'Arctic permafrost collapse releasing gigatons of methane triggers runaway feedback loop as permafrost contains twice the carbon currently in atmosphere, locked in frozen soil and methane hydrates. As Arctic warms 4x faster than global average, thawing releases methane (80x more potent than CO2 over 20 years), which causes more warming and more thawing in self-reinforcing cycle. Recent monitoring shows accelerating thaw with methane plumes visible from space, yet once initiated, process is unstoppable with current technology. Scenario modeling suggests this could add 1.5-2°C warming beyond human emissions.',
    severity: 95,
    confidence: 70,
    source: 'Permafrost research'
  }
];
