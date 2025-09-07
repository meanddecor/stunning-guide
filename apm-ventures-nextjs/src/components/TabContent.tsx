'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Building,
  Globe,
  Car,
  Gift,
  Smartphone,
  Users,
  BarChart3
} from 'lucide-react'

interface TabContentProps {
  activeTab: string
}

export default function TabContent({ activeTab }: TabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'me-decor':
        return <MEDecorTab />
      case 'car-rentals':
        return <CarRentalsTab />
      case 'raffle-company':
        return <RaffleCompanyTab />
      case 'crm-platform':
        return <CrmPlatformTab />
      case 'financials':
        return <FinancialsTab />
      case 'roadmap':
        return <RoadmapTab />
      default:
        return <OverviewTab />
    }
  }

  return <div>{renderContent()}</div>
}

function OverviewTab() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
          Strategic Portfolio Overview
        </h2>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
          A comprehensive ecosystem designed to fund three legacy goals: Hotel in Japan, Export Company, and Consulting Studio through cash-generating backbone businesses
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12 border-l-4 border-blue-400 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-blue-800">The Strategic Vision</h3>
        <p className="text-lg text-blue-700 leading-relaxed mb-4">
          Build a self-sustaining business ecosystem where cash-generating &quot;backbone&quot; ventures fund the development of three flagship legacy assets without touching APM Restaurant Group profits.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white/60 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">🏨 Hotel in Japan</h4>
            <p className="text-sm text-blue-600">Crown jewel legacy asset funded by portfolio cash flow</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">🐟 Export Company</h4>
            <p className="text-sm text-blue-600">Japanese food supply chain to reduce COGS for all restaurants</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">🏢 Consulting Studio</h4>
            <p className="text-sm text-blue-600">Scale Japanese concepts throughout Miami and beyond</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-400 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-green-800">Total Portfolio Economics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "$275K", label: "Total Investment", desc: "Across all backbone ventures" },
            { value: "$7.5M", label: "Year 1 Revenue", desc: "Combined portfolio" },
            { value: "$2.08M", label: "Year 1 Net Profit", desc: "756% ROI" },
            { value: "$100M+", label: "Portfolio Valuation", desc: "36-month target" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center shadow-md border border-white/60 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold text-green-700 mb-2">{metric.value}</div>
              <div className="text-sm font-semibold text-green-600 mb-1">{metric.label}</div>
              <div className="text-xs text-green-500">{metric.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MEDecorTab() {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-slate-800">ME & Décor - E-commerce Scale Plan</h2>
        <p className="text-xl text-slate-600">Capital-light dropship furniture brand targeting millennial and Gen-Z homeowners</p>
      </div>
      
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl mb-8 border-l-4 border-amber-400">
        <h3 className="text-2xl font-bold mb-4 text-amber-800">Investment Proposal</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-amber-700 mb-2"><strong>Seeking:</strong> $50,000 non-equity facility</p>
            <p className="text-amber-700 mb-2"><strong>Structure:</strong> Revenue share until $75,000 repaid (50% ROI)</p>
            <p className="text-amber-700"><strong>Timeline:</strong> 18-month payback period</p>
          </div>
          <div>
            <p className="text-amber-700 mb-2"><strong>Your Protection:</strong> First lien on business assets and revenue streams</p>
            <p className="text-amber-700"><strong>Ownership:</strong> You retain 0% equity - pure lending with upside</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Market Analysis</h3>
          <div className="space-y-3">
            <p><strong>Market Size:</strong> $76B US home décor e-commerce market</p>
            <p><strong>Growth Rate:</strong> 12.3% CAGR (2023-2028)</p>
            <p><strong>Target Segment:</strong> Millennials/Gen-Z ($420-$520 AOV)</p>
            <p><strong>Competitive Edge:</strong> Curated dropship with 52% margins</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Financial Projections</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Year 1 Revenue</span>
              <span className="font-bold">$1.24M</span>
            </div>
            <div className="flex justify-between">
              <span>Year 1 Net Profit</span>
              <span className="font-bold text-green-600">$930K</span>
            </div>
            <div className="flex justify-between">
              <span>ROI on $50K</span>
              <span className="font-bold text-green-600">1,860%</span>
            </div>
            <div className="flex justify-between">
              <span>Payback Period</span>
              <span className="font-bold">16-18 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Placeholder components for other tabs
function CarRentalsTab() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-8">Exotic Car Rentals</h2>
      <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
        <p>Car Rentals content will be added here.</p>
      </div>
    </div>
  )
}

function RaffleCompanyTab() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-8">APM Raffle Club</h2>
      <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
        <p>Raffle Company content will be added here.</p>
      </div>
    </div>
  )
}

function CrmPlatformTab() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-8">APM OS - Restaurant CRM Platform</h2>
      <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
        <p>CRM Platform content will be added here.</p>
      </div>
    </div>
  )
}

function FinancialsTab() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-8">Financial Overview</h2>
      <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
        <p>Financial content will be added here.</p>
      </div>
    </div>
  )
}

function RoadmapTab() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-8">Master Execution Roadmap</h2>
      <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
        <p>Roadmap content will be added here.</p>
      </div>
    </div>
  )
}

