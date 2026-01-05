
import React, { useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, ComposedChart, Line
} from 'recharts';
import { 
  TrendingUp, Globe, Users, PlayCircle, Award, 
  BarChart3, Target, Lightbulb, ChevronRight, FileText
} from 'lucide-react';
import { 
  GROWTH_DATA, VINTAGE_DATA, COUNTRY_DATA, RATING_DATA, STRATEGIC_COLORS 
} from './constants';

const SummaryCard = ({ title, value, icon: Icon, description, color }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{title}</span>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      <p className="text-sm text-slate-500 mt-1">{description}</p>
    </div>
  </div>
);

const SectionHeader = ({ icon: Icon, title, subtitle }: any) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="bg-red-600 p-2 rounded-lg">
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const formatMix = [
    { name: 'Movies', value: 6131, color: STRATEGIC_COLORS.primary },
    { name: 'TV Shows', value: 2676, color: STRATEGIC_COLORS.secondary }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation / Header */}
      <header className="bg-slate-900 text-white py-6 px-8 sticky top-0 z-50 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 px-3 py-1 rounded font-black text-2xl tracking-tighter">NETFLIX</div>
          <div className="h-8 w-px bg-slate-700 mx-2"></div>
          <h1 className="text-lg font-medium opacity-90">Strategic Catalog Insight 2024</h1>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#summary" className="hover:text-red-500 transition-colors">Executive Summary</a>
          <a href="#trends" className="hover:text-red-500 transition-colors">Trends</a>
          <a href="#geo" className="hover:text-red-500 transition-colors">Geography</a>
          <a href="#matrix" className="hover:text-red-500 transition-colors">Strategy</a>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-all">Download Report</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        
        {/* 1. Executive Summary Dashboard */}
        <section id="summary" className="scroll-mt-24">
          <SectionHeader 
            icon={BarChart3} 
            title="Executive Summary Dashboard" 
            subtitle="Current state of the 8,807 title catalog" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SummaryCard 
              title="Total Inventory" 
              value="8,807" 
              icon={FileText} 
              description="Global unique titles" 
              color="bg-slate-800"
            />
            <SummaryCard 
              title="Format Ratio" 
              value="2.3:1" 
              icon={PlayCircle} 
              description="Movies to TV Shows" 
              color="bg-red-600"
            />
            <SummaryCard 
              title="Core Demographic" 
              value="TV-MA" 
              icon={Users} 
              description="Adult/Mature oriented" 
              color="bg-slate-600"
            />
            <SummaryCard 
              title="Content Freshness" 
              value="85%" 
              icon={Award} 
              description="Post-2015 releases" 
              color="bg-amber-600"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-500 uppercase mb-6">Format Distribution (Inventory Count)</h4>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={formatMix} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={STRATEGIC_COLORS.chart.grid} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke={STRATEGIC_COLORS.chart.text} fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ fill: '#f1f5f9' }} />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                      {formatMix.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                <span className="font-bold text-slate-700">Observation:</span> The catalog remains heavily skewed toward one-time consumption (Movies). However, the Strategic View suggests TV Shows provide significantly higher aggregate hours of engagement per unit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
              <h4 className="text-sm font-semibold text-slate-500 uppercase mb-6">Audience Rating Mix</h4>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={RATING_DATA.slice(0, 5)}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="count"
                    >
                      {RATING_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? STRATEGIC_COLORS.primary : `rgba(34, 31, 31, ${1 - index * 0.15})`} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trend & Lifecycle Analysis */}
        <section id="trends" className="scroll-mt-24">
          <SectionHeader 
            icon={TrendingUp} 
            title="Trend & Lifecycle Analysis" 
            subtitle="Acquisition Velocity vs. Content Vintage" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-slate-800">Growth: Titles Added per Year</h4>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold uppercase">Maturation Signal</span>
              </div>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={GROWTH_DATA}>
                    <defs>
                      <linearGradient id="colorAdded" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={STRATEGIC_COLORS.primary} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={STRATEGIC_COLORS.primary} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={STRATEGIC_COLORS.chart.grid} />
                    <XAxis dataKey="year" stroke={STRATEGIC_COLORS.chart.text} fontSize={12} />
                    <YAxis stroke={STRATEGIC_COLORS.chart.text} fontSize={12} />
                    <Tooltip />
                    <Area type="monotone" dataKey="titlesAdded" stroke={STRATEGIC_COLORS.primary} strokeWidth={3} fillOpacity={1} fill="url(#colorAdded)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-600 italic">
                  "The leveling off post-2019 indicates a pivot from **Volume-Based Expansion** to **Curation-Led Optimization**. We are no longer buying the market; we are refining it."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-slate-800">Vintage: Distribution of Release Years</h4>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-bold uppercase">Freshness Index</span>
              </div>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={VINTAGE_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={STRATEGIC_COLORS.chart.grid} />
                    <XAxis dataKey="year" stroke={STRATEGIC_COLORS.chart.text} fontSize={12} />
                    <YAxis stroke={STRATEGIC_COLORS.chart.text} fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="releases" fill={STRATEGIC_COLORS.secondary} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-slate-700 font-semibold uppercase tracking-wide">Key Synthesis:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-4 border-red-500 pl-3">
                    <p className="text-xs text-slate-400">Inventory Health</p>
                    <p className="text-sm font-medium text-slate-700">Active Modern Library</p>
                  </div>
                  <div className="border-l-4 border-slate-800 pl-3">
                    <p className="text-xs text-slate-400">Content Cycle</p>
                    <p className="text-sm font-medium text-slate-700">7-Year High Refresh Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Geographic Deep-Dive */}
        <section id="geo" className="scroll-mt-24">
          <SectionHeader 
            icon={Globe} 
            title="Geographic & Strategic Deep-Dive" 
            subtitle="Dominance analysis and localized growth vectors" 
          />
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3">
                <h4 className="font-bold text-slate-800 mb-6">Top 10 Countries by Title Count</h4>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={COUNTRY_DATA} layout="vertical" margin={{ left: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} stroke={STRATEGIC_COLORS.chart.grid} />
                      <XAxis type="number" stroke={STRATEGIC_COLORS.chart.text} fontSize={12} />
                      <YAxis dataKey="country" type="category" stroke={STRATEGIC_COLORS.chart.text} fontSize={12} />
                      <Tooltip />
                      <Bar dataKey="count" fill={STRATEGIC_COLORS.primary} radius={[0, 4, 4, 0]} barSize={25} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-slate-900 text-white p-6 rounded-xl relative overflow-hidden">
                  <Globe className="absolute -right-4 -bottom-4 text-slate-800 opacity-50" size={120} />
                  <h5 className="text-lg font-bold mb-4 relative">Top 3 Geo Opportunities</h5>
                  <ul className="space-y-4 relative">
                    <li className="flex items-start gap-3">
                      <div className="bg-red-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">1</div>
                      <div>
                        <p className="font-bold">South Korea</p>
                        <p className="text-xs text-slate-300">High global exportability; currently underserved relative to massive 'Hallyu' demand.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-red-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">2</div>
                      <div>
                        <p className="font-bold">Mexico / LATAM</p>
                        <p className="text-xs text-slate-300">Strategic bridge for Spanish-speaking markets; huge potential for regional originals.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-red-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">3</div>
                      <div>
                        <p className="font-bold">India (Tier-2 expansion)</p>
                        <p className="text-xs text-slate-300">Deepen localized catalogs beyond Bollywood to include regional dialects (Tamil, Telugu).</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border border-slate-100 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-slate-800 mb-2">Analysis Note</h5>
                  <p className="text-sm text-slate-600">
                    The US remains the core anchor (3,600+ titles). Growth in India (1,000) shows a successful playbook for international market entry. Future strategy must focus on "Local-for-Global" content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Content Strategy Matrix */}
        <section id="matrix" className="scroll-mt-24">
          <SectionHeader 
            icon={Target} 
            title="Content Strategy Matrix" 
            subtitle="ROI implications of Format vs. Audience Engagement" 
          />
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Strategic Pillar</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Inventory Mix</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Primary Metric</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">ROI Dynamic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4">
                      <p className="font-bold text-slate-800">Movies (6,000+)</p>
                      <p className="text-xs text-slate-500">Feature Films / Specials</p>
                    </td>
                    <td className="p-4 text-sm text-slate-700 font-medium">70% of Catalog</td>
                    <td className="p-4 text-sm text-slate-700">Acquisition / New Subs</td>
                    <td className="p-4">
                      <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-bold">Fast Decay</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <p className="font-bold text-slate-800">TV Shows (2,600+)</p>
                      <p className="text-xs text-slate-500">Episodic / Multi-Season</p>
                    </td>
                    <td className="p-4 text-sm text-slate-700 font-medium">30% of Catalog</td>
                    <td className="p-4 text-sm text-slate-700">Retention / Churn Control</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">High Utility</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <p className="font-bold text-slate-800">Mature Content (TV-MA)</p>
                      <p className="text-xs text-slate-500">Premium Scripted Dramas</p>
                    </td>
                    <td className="p-4 text-sm text-slate-700 font-medium">36% of Inventory</td>
                    <td className="p-4 text-sm text-slate-700">Brand Identity / Prestige</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">Core Engine</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Lightbulb className="text-amber-500" size={18} />
                Strategic Deduction
              </h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                While movies drive the "discovery" phase, the current catalog is under-leveraged in TV Show hours. A 10% shift from movie acquisition to multi-season TV shows could yield a 15-20% increase in aggregate platform stickiness.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Visual Synthesis */}
        <section id="visual-synthesis" className="scroll-mt-24">
          <SectionHeader 
            icon={Award} 
            title="Visual Synthesis: Ideal Content Mix" 
            subtitle="Current State vs. Mature Platform Benchmark" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-center text-slate-500 uppercase text-xs mb-8">Current State (Inventory Based)</h4>
              <div className="h-[250px] flex items-center justify-center">
                <div className="relative w-48 h-48 rounded-full border-8 border-slate-100 flex items-center justify-center">
                   <div className="absolute inset-0 rounded-full border-8 border-red-600 border-t-transparent border-l-transparent rotate-[45deg]"></div>
                   <div className="text-center">
                     <p className="text-3xl font-bold text-slate-800">70%</p>
                     <p className="text-xs text-slate-400">Movies</p>
                   </div>
                </div>
              </div>
              <p className="text-sm text-center text-slate-500 mt-6">Heavy reliance on one-off viewing experiences.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-800">
              <h4 className="font-bold text-center text-slate-400 uppercase text-xs mb-8">Ideal State (Engagement Adjusted)</h4>
              <div className="h-[250px] flex items-center justify-center">
                <div className="relative w-48 h-48 rounded-full border-8 border-slate-800 flex items-center justify-center">
                   <div className="absolute inset-0 rounded-full border-8 border-green-500 border-t-transparent"></div>
                   <div className="text-center">
                     <p className="text-3xl font-bold text-white">55%</p>
                     <p className="text-xs text-slate-400">TV Shows</p>
                   </div>
                </div>
              </div>
              <p className="text-sm text-center text-slate-400 mt-6">Equilibrated mix favoring recurring viewing cycles.</p>
            </div>
          </div>
        </section>

        {/* 6. Actionable Recommendations */}
        <section id="recommendations" className="scroll-mt-24">
          <SectionHeader 
            icon={Lightbulb} 
            title="Actionable Strategic Recommendations" 
            subtitle="Data-backed moves to optimize ROI" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <Target size={20} />
              </div>
              <h5 className="font-bold text-slate-800 mb-3">1. Rebalance "Inventory-to-Hours" Ratio</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cease the rapid acquisition of low-tier feature films. Reallocate 20% of the film budget to "IP Expansion" (TV spin-offs) of existing high-performers to drive long-tail retention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe size={20} />
              </div>
              <h5 className="font-bold text-slate-800 mb-3">2. "Hub-and-Spoke" Regional Strategy</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Aggressively expand South Korean and Spanish-language production hubs. Treat these not just as local catalogs, but as "Global Export" engines for the US/UK markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={20} />
              </div>
              <h5 className="font-bold text-slate-800 mb-3">3. Pivot to "Franchise-First" Lifecycle</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Given the catalog is moving to a "curation" phase, shift focus from volume to "Tentpole Strategy." Prioritize titles with potential for merchandising, gaming, or sequelization.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-20 py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 text-white px-2 py-0.5 rounded font-black text-sm">NETFLIX</div>
            <p className="text-xs text-slate-400">© 2024 Strategic Content Analysis Group. Internal Use Only.</p>
          </div>
          <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-red-500 cursor-pointer">Confidential</span>
            <span className="hover:text-red-500 cursor-pointer">Proprietary</span>
            <span className="hover:text-red-500 cursor-pointer">Senior Analyst Access</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
