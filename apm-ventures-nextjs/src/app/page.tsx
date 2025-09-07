'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Shield,
  BarChart3,
  Users,
  Globe,
  Zap,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Building,
  Truck,
  Smartphone,
  Car,
  Gift,
  Star,
  Award,
  Crown
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Executive Overview', icon: Crown },
    { id: 'me-decor', label: 'ME & Décor', icon: Building },
    { id: 'car-rentals', label: 'Luxury Rentals', icon: Car },
    { id: 'raffle-company', label: 'Raffle Company', icon: Gift },
    { id: 'crm-platform', label: 'Restaurant CRM', icon: Smartphone },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'roadmap', label: 'Master Roadmap', icon: Target }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Premium Header */}
      <div className="relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm"
            >
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-amber-100 font-semibold">Strategic Investment Portfolio</span>
              <Award className="w-5 h-5 text-amber-400" />
            </motion.div>

            <h1 className="text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                APM Ventures
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Six complementary ventures designed to generate 
              <span className="text-green-400 font-semibold"> $2M+ annual profit </span>
              within 24 months through disciplined execution and measurable economics
            </p>
            
            {/* Key metrics preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            >
              {[
                { value: "$275K", label: "Total Investment", icon: DollarSign },
                { value: "756%", label: "Year 1 ROI", icon: TrendingUp },
                { value: "$100M+", label: "Portfolio Value", icon: Crown },
                { value: "24 Months", label: "To Legacy Goals", icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Strategic pillars */}
            <div className="grid lg:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: <DollarSign className="w-10 h-10" />,
                  title: "The Cash Engines",
                  desc: "ME & Décor, Car Rentals, and Raffles generating $1.68M+ annually to fund flagship development",
                  gradient: "from-green-400 to-emerald-500"
                },
                {
                  icon: <Building className="w-10 h-10" />,
                  title: "The Legacy Goals",
                  desc: "Hotel in Japan, Export Company, and Consulting Studio built with non-dilutive capital",
                  gradient: "from-blue-400 to-indigo-500"
                },
                {
                  icon: <Zap className="w-10 h-10" />,
                  title: "The Technology Core",
                  desc: "Proprietary CRM platform scaling to $400M+ valuation like AmEx-Resy acquisition",
                  gradient: "from-purple-400 to-pink-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                       style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className={`text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Premium Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-6 font-semibold transition-all duration-300 min-w-fit whitespace-nowrap relative ${
                    activeTab === tab.id
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              )
            })}
          </div>
        </div>
      </nav>
      
      {/* Content Area */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Executive Overview */}
              {activeTab === 'overview' && (
                <div className="py-16">
                  <div className="text-center mb-16">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Portfolio Strategy
                      </h2>
                      <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Five synergistic businesses that compound value through disciplined execution, measurable economics, and strict risk controls
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Investment Thesis */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mb-16"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-10 rounded-3xl border border-amber-200 shadow-2xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-amber-400 rounded-2xl">
                          <Crown className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-amber-800">Investment Thesis</h3>
                      </div>
                      <p className="text-xl text-amber-700 leading-relaxed">
                        Cash-generating assets fund technology development, which scales all operations and creates enterprise value exceeding $100M within 36 months. Each venture is designed with measurable KPIs, clear success metrics, and defined failure points.
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Business Ventures Grid */}
                  <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mb-16">
                    {[
                      {
                        title: "ME & Décor E-commerce",
                        investment: "$50K non-equity facility",
                        target: "$930K net profit (Year 1)",
                        role: "Cash engine funding flagship growth",
                        advantage: "Capital-light dropship model with 52% gross margins, no inventory risk",
                        icon: <Building className="w-8 h-8" />,
                        gradient: "from-blue-500 to-blue-600",
                        bgGradient: "from-blue-50 to-blue-100",
                        border: "border-blue-200",
                        delay: 0.1
                      },
                      {
                        title: "Exotic Car Rentals",
                        investment: "$120K (2-car anchor + broker)",
                        target: "$400K net profit (Year 1)",
                        role: "Premium cash generation",
                        advantage: "Hybrid own/broker model minimizes overhead while maximizing premium positioning",
                        icon: <Car className="w-8 h-8" />,
                        gradient: "from-red-500 to-red-600",
                        bgGradient: "from-red-50 to-red-100",
                        border: "border-red-200",
                        delay: 0.2
                      },
                      {
                        title: "APM Raffle Club",
                        investment: "$30K working capital",
                        target: "$350K net profit (Year 1)",
                        role: "Subscription revenue engine",
                        advantage: "Recurring subscription revenue with 70%+ profit margins and compliance framework",
                        icon: <Gift className="w-8 h-8" />,
                        gradient: "from-yellow-500 to-yellow-600",
                        bgGradient: "from-yellow-50 to-yellow-100",
                        border: "border-yellow-200",
                        delay: 0.3
                      },
                      {
                        title: "Restaurant CRM Platform",
                        investment: "$75K development",
                        target: "$400M valuation potential (24mo)",
                        role: "Technology core scaling all ventures",
                        advantage: "Built-in customer base with first-mover advantage in restaurant-specific CRM",
                        icon: <Smartphone className="w-8 h-8" />,
                        gradient: "from-purple-500 to-purple-600",
                        bgGradient: "from-purple-50 to-purple-100",
                        border: "border-purple-200",
                        delay: 0.4
                      },
                      {
                        title: "Hotel Consulting Studio",
                        investment: "Funded by cash flow",
                        target: "$1.8M revenue (Year 1)",
                        role: "Legacy goal #1",
                        advantage: "Codified 'Álvaro Method' with proven 15-25% RevPAR improvements",
                        icon: <Users className="w-8 h-8" />,
                        gradient: "from-green-500 to-green-600",
                        bgGradient: "from-green-50 to-green-100",
                        border: "border-green-200",
                        delay: 0.5
                      },
                      {
                        title: "Japanese Export Company",
                        investment: "Funded by cash flow",
                        target: "$4.2M revenue (Year 1)",
                        role: "Legacy goal #2",
                        advantage: "End-to-end supply chain control reducing restaurant COGS by 15-25%",
                        icon: <Globe className="w-8 h-8" />,
                        gradient: "from-indigo-500 to-indigo-600",
                        bgGradient: "from-indigo-50 to-indigo-100",
                        border: "border-indigo-200",
                        delay: 0.6
                      }
                    ].map((venture, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: venture.delay }}
                        className="group relative"
                      >
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${venture.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
                        
                        <div className={`relative bg-gradient-to-br ${venture.bgGradient} rounded-3xl p-8 shadow-xl border ${venture.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm`}>
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`p-4 bg-gradient-to-r ${venture.gradient} rounded-2xl shadow-lg`}>
                              <div className="text-white">{venture.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 leading-tight">{venture.title}</h3>
                          </div>
                          
                          <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3">
                              <DollarSign className="w-5 h-5 text-slate-500 mt-1" />
                              <div>
                                <span className="font-semibold text-slate-700">Investment: </span>
                                <span className="text-slate-600">{venture.investment}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Target className="w-5 h-5 text-slate-500 mt-1" />
                              <div>
                                <span className="font-semibold text-slate-700">Target: </span>
                                <span className="text-slate-600">{venture.target}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Users className="w-5 h-5 text-slate-500 mt-1" />
                              <div>
                                <span className="font-semibold text-slate-700">Role: </span>
                                <span className="text-slate-600">{venture.role}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-inner">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                              <div>
                                <span className="text-green-700 font-bold">Key Advantage: </span>
                                <span className="text-slate-700">{venture.advantage}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Portfolio Economics */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 p-10 rounded-3xl border border-green-200 shadow-2xl">
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full mb-4">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                          <span className="text-green-800 font-bold text-lg">Total Portfolio Economics</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                          { value: "$275K", label: "Total Investment", desc: "Across all backbone ventures", icon: DollarSign },
                          { value: "$7.5M", label: "Year 1 Revenue", desc: "Combined portfolio", icon: BarChart3 },
                          { value: "$2.08M", label: "Year 1 Net Profit", desc: "756% ROI", icon: TrendingUp },
                          { value: "$100M+", label: "Portfolio Valuation", desc: "36-month target", icon: Crown }
                        ].map((metric, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl text-center shadow-lg border border-white/60 hover:shadow-xl hover:scale-105 transition-all duration-300"
                          >
                            <metric.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                            <div className="text-4xl font-black text-green-700 mb-3">{metric.value}</div>
                            <div className="text-sm font-bold text-green-600 mb-2">{metric.label}</div>
                            <div className="text-xs text-green-500">{metric.desc}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Other tab content - simplified for now */}
              {activeTab !== 'overview' && (
                <div className="py-16">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                      {tabs.find(t => t.id === activeTab)?.label}
                    </h2>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-12 rounded-3xl border border-blue-200 shadow-2xl">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                          <BarChart3 className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-blue-800">Comprehensive Analysis</h3>
                          <p className="text-blue-600 text-lg">Detailed financial projections, market analysis, and implementation roadmap</p>
                        </div>
                      </div>
                      <p className="text-xl text-blue-700 leading-relaxed">
                        This section will include detailed business model analysis, unit economics, competitive positioning, 
                        risk assessment, and implementation timeline for <span className="font-bold">{tabs.find(t => t.id === activeTab)?.label}</span>.
                        Complete with professional charts, market research, and financial modeling.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Premium CTA Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.3),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-black mb-8 leading-tight">
              Ready to Build the Next
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business Empire?
              </span>
            </h2>
            
            <p className="text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Six synergistic businesses, proven execution model, unlimited potential through disciplined capital deployment
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
              {[
                { value: "$275K", label: "Total Investment", desc: "Across all ventures", icon: DollarSign },
                { value: "24 Months", label: "To $100M+ Portfolio", desc: "Disciplined timeline", icon: Target },
                { value: "756%", label: "Year 1 ROI", desc: "Portfolio-wide return", icon: TrendingUp },
                { value: "6", label: "Revenue Streams", desc: "Diversified risk", icon: BarChart3 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                  <div className="text-4xl font-black text-white mb-3">{stat.value}</div>
                  <div className="text-sm font-bold text-blue-200 mb-2">{stat.label}</div>
                  <div className="text-xs text-blue-300">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="mailto:investors@apmventures.com" 
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/25 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative">Schedule Strategic Review Meeting</span>
                <ArrowRight className="w-6 h-6 relative group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
            
            <p className="mt-8 text-blue-200 opacity-80 text-lg">
              Complete financial models, due diligence materials, and implementation SOPs available upon request
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}