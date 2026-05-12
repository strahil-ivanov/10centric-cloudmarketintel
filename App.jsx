import React, { useState } from 'react';
import { 
  TrendingUp, Globe, Shield, Zap, AlertTriangle, 
  BarChart2, Crosshair, Server, Smartphone, 
  Database, Cpu, Network, Check, X, Building,
  Target, ShoppingBag, PlayCircle, Users
} from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

export default function TencentMarketDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* HEADER */}
      <header className="bg-slate-900 text-white p-6 sticky top-0 z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-3">
              <img src="/App_Icon_3.png" alt="10centric Logo" className="w-10 h-10 rounded-lg shadow-sm object-contain" />
              <BarChart2 className="w-8 h-8 text-blue-400" />
              Tencent Cloud Market Intelligence
            </h1>
            <p className="text-slate-400 text-sm mt-1">Strategic positioning, competitor analysis, and market data for 10centric Sales Managers</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-1 flex shadow-inner overflow-x-auto w-full md:w-auto">
            {[
              { id: 'overview', label: 'Corporate Overview', icon: Building },
              { id: 'market', label: 'Market & Scale', icon: Globe },
              { id: 'competitors', label: 'Competitor Matrix', icon: Crosshair },
              { id: 'swot', label: 'Strengths & Weaknesses', icon: AlertTriangle },
              { id: 'usecases', label: 'Use Cases & Success Stories', icon: Target }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <tab.icon className="w-4 h-4" /> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        
        {/* --- TAB 1: CORPORATE OVERVIEW --- */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Top KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6 border-l-4 border-l-blue-500">
                <div className="text-slate-500 text-sm font-bold uppercase mb-1">2024 Annual Revenue</div>
                <div className="text-3xl font-black text-slate-800">$92 Billion</div>
                <div className="text-sm text-blue-600 mt-2 font-medium">#1 by revenue globally (Games)</div>
              </Card>
              <Card className="p-6 border-l-4 border-l-green-500">
                <div className="text-slate-500 text-sm font-bold uppercase mb-1">Operating Profit</div>
                <div className="text-3xl font-black text-slate-800">$33 Billion</div>
                <div className="text-sm text-green-600 mt-2 font-medium">Non-IFRS (Highly Profitable)</div>
              </Card>
              <Card className="p-6 border-l-4 border-l-purple-500">
                <div className="text-slate-500 text-sm font-bold uppercase mb-1">WeChat / Weixin MAU</div>
                <div className="text-3xl font-black text-slate-800">1.336 Billion</div>
                <div className="text-sm text-purple-600 mt-2 font-medium">#1 mobile community in China</div>
              </Card>
              <Card className="p-6 border-l-4 border-l-orange-500">
                <div className="text-slate-500 text-sm font-bold uppercase mb-1">Market Capitalization</div>
                <div className="text-3xl font-black text-slate-800">$590 Billion</div>
                <div className="text-sm text-orange-600 mt-2 font-medium">As of March 2025</div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6 lg:col-span-2">
                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-blue-600"/> The Six Core Business Groups</h2>
                <p className="text-slate-600 mb-6">Tencent is not just a cloud provider; it is an internet behemoth. Understanding this ecosystem is key to selling "SuperApp" and Gaming solutions.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-800">CSIG (Cloud & Smart Industries)</h3>
                    <p className="text-sm text-slate-600 mt-1">This is us. Tencent Cloud, AI, Security, Tencent Meeting (200m+ users), and Smart Retail.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-800">IEG (Interactive Entertainment)</h3>
                    <p className="text-sm text-slate-600 mt-1">The gaming division. Riot Games, Supercell, Epic Games, PUBG Mobile, Honor of Kings.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-800">WXG (Weixin Group)</h3>
                    <p className="text-sm text-slate-600 mt-1">WeChat, WeChat Pay, Mini Programs. The ultimate gateway to Chinese consumers.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-800">PCG, FIT & TEG</h3>
                    <p className="text-sm text-slate-600 mt-1">Platform Content (Video/News), Financial Tech (Payment), and Technical Engineering (Big Data).</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <h2 className="text-xl font-bold mb-4">The "Consumer DNA" Pitch</h2>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  "Mr. Customer, unlike AWS or Azure which were built primarily for enterprise IT, Tencent Cloud was forged in the fires of the consumer internet. When you buy Tencent Cloud, you aren't just getting servers; you are getting the exact same battle-tested infrastructure that seamlessly handles 1.3 billion WeChat users and the largest multiplayer games on earth without dropping a frame."
                </p>
                <div className="mt-6 pt-6 border-t border-blue-800">
                  <div className="text-3xl font-black text-blue-400">#1</div>
                  <div className="text-sm font-medium">In APAC Media Service Market</div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* --- TAB 2: MARKET & SCALE --- */}
        {activeTab === 'market' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart 1: Global Mobile Games Revenue */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-2">Top 5 Grossing Global Mobile Games</h2>
                <p className="text-sm text-slate-500 mb-6">Tencent owns or invests heavily in 3 of the top 5, proving their infrastructure dominance.</p>
                
                <div className="space-y-4">
                  {[
                    { name: 'Honor of Kings', rev: 18.6, owned: true, type: 'MOBA' },
                    { name: 'Candy Crush Saga', rev: 12.0, owned: false, type: 'Puzzle' },
                    { name: 'PUBG Mobile', rev: 11.0, owned: true, type: 'Battle Royale' },
                    { name: 'Monster Strike', rev: 11.0, owned: false, type: 'RPG' },
                    { name: 'Clash of Clans', rev: 10.2, owned: true, type: 'Strategy' },
                  ].map((game, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="flex items-center gap-2">
                          {game.name} 
                          {game.owned && <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Tencent Owned/Invested</span>}
                        </span>
                        <span>${game.rev}B</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${game.owned ? 'bg-blue-600' : 'bg-slate-300'}`} 
                          style={{ width: `${(game.rev / 18.6) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Chart 2: Global Infrastructure */}
              <Card className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">Global Cloud Footprint</h2>
                  <p className="text-sm text-slate-500 mb-6">Massive scale to support global and European localized deployments.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="bg-slate-50 rounded-xl p-4 flex flex-col justify-center items-center text-center border border-slate-100">
                    <Server className="w-8 h-8 text-blue-500 mb-2" />
                    <div className="text-3xl font-black text-slate-800">1M+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase mt-1">Servers Globally</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 flex flex-col justify-center items-center text-center border border-slate-100">
                    <Cpu className="w-8 h-8 text-purple-500 mb-2" />
                    <div className="text-3xl font-black text-slate-800">150M+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase mt-1">CPU Cores</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 flex flex-col justify-center items-center text-center border border-slate-100">
                    <Globe className="w-8 h-8 text-emerald-500 mb-2" />
                    <div className="text-3xl font-black text-slate-800">22 / 64</div>
                    <div className="text-xs text-slate-500 font-bold uppercase mt-1">Regions / AZs</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 flex flex-col justify-center items-center text-center border border-blue-200 shadow-inner">
                    <Network className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-3xl font-black text-blue-700">3,200+</div>
                    <div className="text-xs text-blue-600 font-bold uppercase mt-1">Global Edge Nodes (158 EU)</div>
                  </div>
                </div>
              </Card>
            </div>
            
          </div>
        )}

        {/* --- TAB 3: COMPETITOR MATRIX --- */}
        {activeTab === 'competitors' && (
          <div className="space-y-6 animate-fadeIn">
            <Card className="p-0 overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-800">Competitive Feature Matrix</h2>
                <p className="text-slate-600 text-sm mt-1">How Tencent Cloud stacks up against major global hyperscalers in specific technical battlegrounds.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1200px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
                      <th className="p-4 font-bold border-b border-slate-200 min-w-[180px] sticky left-0 bg-slate-100 z-10 shadow-[1px_0_0_#e2e8f0]">Feature Area</th>
                      <th className="p-4 font-bold border-b border-slate-200 bg-blue-50 text-blue-900 border-r border-l border-blue-100 w-1/5 min-w-[250px]">Tencent Cloud (Our Pitch)</th>
                      <th className="p-4 font-bold border-b border-slate-200 min-w-[200px]">AWS</th>
                      <th className="p-4 font-bold border-b border-slate-200 min-w-[200px]">Microsoft Azure</th>
                      <th className="p-4 font-bold border-b border-slate-200 min-w-[200px]">Google Cloud (GCP)</th>
                      <th className="p-4 font-bold border-b border-slate-200 min-w-[200px]">Alibaba Cloud</th>
                      <th className="p-4 font-bold border-b border-slate-200 min-w-[200px]">IBM Cloud</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-800 sticky left-0 bg-white z-10 shadow-[1px_0_0_#e2e8f0] group-hover:bg-slate-50">Compute / Processors</td>
                      <td className="p-4 bg-blue-50/30 border-r border-l border-blue-100"><span className="text-blue-700 font-bold">Leads in AMD.</span> Exclusive SA5 Bergamo processors. 160 Gbps network bandwidth.</td>
                      <td className="p-4 text-slate-600">Strong custom Graviton (ARM) chips, but standard instances can be slower to upgrade globally.</td>
                      <td className="p-4 text-slate-600">Strong enterprise Windows VMs, but lags in aggressive high-bandwidth AMD rollouts.</td>
                      <td className="p-4 text-slate-600">Excellent custom TPUs for AI, but standard general-purpose VMs are priced higher.</td>
                      <td className="p-4 text-slate-600">Relies on mixed-generation Intel CPUs. Often pushes low-cost "compromise" instances.</td>
                      <td className="p-4 text-slate-600">Focuses heavily on legacy bare metal, Power Systems, and mainframes (zSystems).</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-800 sticky left-0 bg-white z-10 shadow-[1px_0_0_#e2e8f0] group-hover:bg-slate-50">Cost Efficiency</td>
                      <td className="p-4 bg-blue-50/30 border-r border-l border-blue-100"><span className="text-blue-700 font-bold">Price Leader.</span> AMD instances offer 30-90% better price/perf. Redis is 4.8-135% cheaper.</td>
                      <td className="p-4 text-slate-600">Premium pricing. Notorious for extremely high network data egress costs.</td>
                      <td className="p-4 text-slate-600">Expensive unless the client leverages existing Windows Server Hybrid Benefits.</td>
                      <td className="p-4 text-slate-600">Aggressive sustained-use discounts, but egress data costs to Asia can be prohibitive.</td>
                      <td className="p-4 text-slate-600">More expensive on equal-tier performance specs compared to TC.</td>
                      <td className="p-4 text-slate-600">Premium, specialized pricing aimed entirely at large, legacy enterprise lock-in.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-800 sticky left-0 bg-white z-10 shadow-[1px_0_0_#e2e8f0] group-hover:bg-slate-50">Edge & Networking</td>
                      <td className="p-4 bg-blue-50/30 border-r border-l border-blue-100"><span className="text-blue-700 font-bold">DNSPod Dominance.</span> 91 global nodes, 50-60ms lookup latency, unrivaled China-routing.</td>
                      <td className="p-4 text-slate-600">Route53 and CloudFront are industry standards but become very expensive at scale.</td>
                      <td className="p-4 text-slate-600">Azure Front Door is good, but lacks TC's specialized mainland China network backbone.</td>
                      <td className="p-4 text-slate-600">Premium global fiber network, but less specialized in optimized cross-border APAC routing.</td>
                      <td className="p-4 text-slate-600">Good in China, but has half the global DNS capacity/nodes of Tencent.</td>
                      <td className="p-4 text-slate-600">Relies heavily on external partnerships (like Akamai) for CDN and Edge delivery.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-800 sticky left-0 bg-white z-10 shadow-[1px_0_0_#e2e8f0] group-hover:bg-slate-50">Media & Ecosystem</td>
                      <td className="p-4 bg-blue-50/30 border-r border-l border-blue-100"><span className="text-blue-700 font-bold">Unrivaled.</span> End-to-end SDKs (TRTC). SuperApp (TCSAS) allows WeChat-like ecosystems.</td>
                      <td className="p-4 text-slate-600">Requires massive DIY effort (AWS Elemental) compared to TC's out-of-the-box PaaS SDKs.</td>
                      <td className="p-4 text-slate-600"><span className="font-bold text-orange-600">Azure Media Services is retired.</span> Massive opportunity to migrate their clients to TC.</td>
                      <td className="p-4 text-slate-600">Relies on internal YouTube tech; lacks accessible B2B PaaS SDKs for rapid app integration.</td>
                      <td className="p-4 text-slate-600">Closed ecosystem. Lacks integrated client-side SDKs for rapid media deployment.</td>
                      <td className="p-4 text-slate-600">Effectively a non-player in consumer-facing media, live streaming, and gaming.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-800 sticky left-0 bg-white z-10 shadow-[1px_0_0_#e2e8f0] group-hover:bg-slate-50">Hybrid Cloud</td>
                      <td className="p-4 bg-blue-50/30 border-r border-l border-blue-100"><span className="text-blue-700 font-bold">TCE (100% iso-code).</span> Full hardware/software decoupling avoids lock-in. Replaces VMware.</td>
                      <td className="p-4 text-slate-600">AWS Outposts requires expensive, proprietary AWS hardware to be installed on-prem.</td>
                      <td className="p-4 text-slate-600">Azure Stack is very strong for Windows environments but expensive and restrictive.</td>
                      <td className="p-4 text-slate-600">Anthos (GKE Enterprise) is excellent for Kubernetes, but less focused on VMware replacement.</td>
                      <td className="p-4 text-slate-600">Strong local deployments, but ecosystem is more closed for third-party integrations.</td>
                      <td className="p-4 text-slate-600">Red Hat OpenShift is their flagship; powerful but extremely complex and K8s-exclusive.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {/* --- TAB 4: SWOT ANALYSIS --- */}
        {activeTab === 'swot' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Strengths & Vulnerabilities</h2>
              <p className="text-slate-600">To sell effectively, you must know exactly where we win effortlessly, and where competitors will try to trap you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* STRENGTHS */}
              <div className="space-y-4">
                <div className="bg-emerald-500 text-white p-4 rounded-t-xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Why We Win (Strengths)</h3>
                </div>
                <div className="space-y-3 px-2">
                  <Card className="p-4 border-l-4 border-l-emerald-500">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2"><Cpu className="w-4 h-4 text-emerald-600"/> AMD Performance Leadership</h4>
                    <p className="text-sm text-slate-600 mt-1">Our SA5 Bergamo AMD instances dominate Alibaba's Intel instances, offering 160Gbps bandwidth and massive cost savings (30-90%).</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-emerald-500">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2"><Smartphone className="w-4 h-4 text-emerald-600"/> Verticalization (Gaming & Media)</h4>
                    <p className="text-sm text-slate-600 mt-1">If the client does video streaming or gaming, it's an automatic win. End-to-end SDKs (TRTC) and Game Server Engines (GSE) are unmatched.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-emerald-500">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2"><Database className="w-4 h-4 text-emerald-600"/> Open Ecosystem & Integration</h4>
                    <p className="text-sm text-slate-600 mt-1">Unlike Huawei (hardware-bound) or Alibaba (closed), TC has strategic partnerships with Elastic and Flink, and open APIs allowing 10k+ integrations.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-emerald-500">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2"><Zap className="w-4 h-4 text-emerald-600"/> Operational Simplicity</h4>
                    <p className="text-sm text-slate-600 mt-1">Rapid CVM creation beats the industry. Console usability scores 4.5/5, avoiding the extreme complexity of AWS.</p>
                  </Card>
                </div>
              </div>

              {/* WEAKNESSES */}
              <div className="space-y-4">
                <div className="bg-red-500 text-white p-4 rounded-t-xl flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Objection Handling (Weaknesses)</h3>
                </div>
                <div className="space-y-3 px-2">
                  <Card className="p-4 border-l-4 border-l-red-500">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2"><Server className="w-4 h-4 text-red-600"/> HPC (High-Performance Compute) Gaps</h4>
                    <p className="text-sm text-slate-600 mt-1"><strong>The Weakness:</strong> TC lacks dedicated compute-optimized SKUs (HPC models) compared to AWS/Azure.<br/><strong className="text-slate-800">The Rebuttal:</strong> Position our advanced SA4/SA5 instances, or utilize bare metal (CPM) for extreme workloads.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-red-500">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2"><Globe className="w-4 h-4 text-red-600"/> Western Market Compliance Readiness</h4>
                    <p className="text-sm text-slate-600 mt-1"><strong>The Weakness:</strong> Limited documentation maturity in the West compared to AWS.<br/><strong className="text-slate-800">The Rebuttal:</strong> This is why 10centric exists! We bridge the gap, providing localized consulting, migration, and compliance guidance.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-red-500">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2"><Shield className="w-4 h-4 text-red-600"/> Default SLA Commitments</h4>
                    <p className="text-sm text-slate-600 mt-1"><strong>The Weakness:</strong> TC offers a default 99.95% SLA for core services, while competitors often push 99.99% multi-AZ SLAs upfront.<br/><strong className="text-slate-800">The Rebuttal:</strong> Custom enterprise SLAs are available. Highlight our real-time diagnostics (DBBrain) which resolve issues faster.</p>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Conclusion Block */}
            <div className="bg-slate-900 text-white p-6 rounded-xl mt-6 text-center shadow-lg border-t-4 border-blue-500">
              <h3 className="text-lg font-bold mb-2">The Winning Strategy for 10centric</h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Differentiate through performance leadership (AMD/Networking), ecosystem openness, and highly verticalized solutions (Media/Gaming/AI). When facing AWS/Azure's rigidity and complexity, we sell <strong>agility, cost optimization, and unparalleled global connectivity (EdgeOne).</strong>
              </p>
            </div>
          </div>
        )}

        {/* --- TAB 5: USE CASES & SUCCESS STORIES --- */}
        {activeTab === 'usecases' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Prominent Use Cases & Success Stories</h2>
              <p className="text-slate-600">Leverage these real-world enterprise deployments to build trust. Tencent Cloud powers the most demanding, high-concurrency platforms on the internet.</p>
            </div>

            {/* Hero Metrics Chart */}
            <Card className="p-6 bg-slate-900 text-white border-none">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-blue-400"/> Proven Technical Thresholds (Pitch These Metrics)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-slate-300">
                    <span>TRTC Global Latency</span>
                    <span className="text-green-400">&lt; 300ms</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-xs text-slate-400">Industry-leading real-time audio/video delivery.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-slate-300">
                    <span>Audio Packet Loss Resistance</span>
                    <span className="text-blue-400">80%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-xs text-slate-400">Maintains smooth voice calls even on terrible networks.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-slate-300">
                    <span>EdgeOne DDoS Mitigation</span>
                    <span className="text-purple-400">3 Tbps+</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-slate-400">Massive scrubbing capacity for global security.</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Case Study 1 */}
              <Card className="flex flex-col border-t-4 border-t-orange-500">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><ShoppingBag className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">Shopee (Sea Group)</h3>
                      <div className="text-xs font-bold text-orange-600 uppercase">E-Commerce mega-scale</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Shopee is the leading e-commerce platform in Southeast Asia. During mega-sales events like 11.11, traffic spikes by over 10x.
                  </p>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>TDSQL Database:</strong> Handled massive concurrent transactional requests without a single bottleneck.</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>Zero Downtime:</strong> Achieved 100% availability during their largest shopping festivals.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-100 text-xs text-slate-500">
                  <strong>How to pitch:</strong> "If it can handle Shopee's Black Friday, it can handle your workloads."
                </div>
              </Card>

              {/* Case Study 2 */}
              <Card className="flex flex-col border-t-4 border-t-purple-500">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><PlayCircle className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">Bigo Live & Kuaishou</h3>
                      <div className="text-xs font-bold text-purple-600 uppercase">Global Live Streaming</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    These platforms host millions of concurrent live-streaming users globally. They required ultra-low latency and high-definition video processing.
                  </p>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>TRTC & CSS:</strong> Leveraged Tencent's proprietary video codecs and Edge nodes to ensure seamless HD streaming globally.</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>MPS:</strong> Automated media processing and transcoding at a massive scale.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-100 text-xs text-slate-500">
                  <strong>How to pitch:</strong> "Tencent owns the APAC media market; our video APIs are out-of-the-box ready."
                </div>
              </Card>

              {/* Case Study 3 */}
              <Card className="flex flex-col border-t-4 border-t-blue-500">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Smartphone className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">Krafton (PUBG Mobile)</h3>
                      <div className="text-xs font-bold text-blue-600 uppercase">Global Gaming Infrastructure</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    With tens of millions of Daily Active Users (DAUs), PUBG Mobile requires flawless matchmaking, server autoscaling, and secure environments.
                  </p>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>GME (Game Multimedia):</strong> Implemented 3D spatial voice chat for teams.</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>Anti-Cheat Expert (ACE):</strong> Kernel-level security preventing hacks and maintaining game integrity.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-100 text-xs text-slate-500">
                  <strong>How to pitch:</strong> "We provide the exact infrastructure powering the world's most demanding multiplayer games."
                </div>
              </Card>
            </div>

            {/* General Use Case Map */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Core Client Scenarios for 10centric</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200">
                  <Globe className="w-8 h-8 text-blue-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Go-To-China / Go-Global</h4>
                    <p className="text-sm text-slate-600">Western companies expanding into China face the "Great Firewall" latency. <strong>Solution:</strong> Pitch EdgeOne and Cloud Connect Network (CCN) for compliant, low-latency cross-border routing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200">
                  <Database className="w-8 h-8 text-indigo-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Web3 & AI Transformation</h4>
                    <p className="text-sm text-slate-600">Crypto exchanges and AI startups need intense compute and RPC node hosting. <strong>Solution:</strong> Pitch SA5 AMD instances, DeepSeek integration, and TokenHub for blockchain infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200">
                  <Users className="w-8 h-8 text-rose-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Social & EdTech Platforms</h4>
                    <p className="text-sm text-slate-600">Apps requiring live video and chat features. <strong>Solution:</strong> Pitch TRTC (Real-Time Communication) and IM (Instant Messaging) SDKs to reduce development time from months to weeks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200">
                  <Server className="w-8 h-8 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Enterprise VMware Replacement</h4>
                    <p className="text-sm text-slate-600">Legacy banks and healthcare (like Sanofi/AstraZeneca) moving away from expensive VMware renewals. <strong>Solution:</strong> Pitch Tencent Cloud Enterprise (TCE) for a seamless on-premise private cloud.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
}
