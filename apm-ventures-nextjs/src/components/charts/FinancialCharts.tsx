'use client'

import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Revenue Projection Chart
export const RevenueProjectionChart = () => {
  const data = [
    {
      month: 'Month 1',
      'ME & Décor': 63000,
      'Car Rentals': 36000,
      'Raffle Company': 50000,
      'Hotel Consulting': 150000,
      'Export Company': 350000
    },
    {
      month: 'Month 6',
      'ME & Décor': 103000,
      'Car Rentals': 48000,
      'Raffle Company': 75000,
      'Hotel Consulting': 150000,
      'Export Company': 350000
    },
    {
      month: 'Month 12',
      'ME & Décor': 160000,
      'Car Rentals': 55000,
      'Raffle Company': 125000,
      'Hotel Consulting': 150000,
      'Export Company': 350000
    },
    {
      month: 'Month 18',
      'ME & Décor': 200000,
      'Car Rentals': 65000,
      'Raffle Company': 150000,
      'Hotel Consulting': 300000,
      'Export Company': 700000
    },
    {
      month: 'Month 24',
      'ME & Décor': 250000,
      'Car Rentals': 75000,
      'Raffle Company': 200000,
      'Hotel Consulting': 625000,
      'Export Company': 2300000
    }
  ]

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444']

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, '']} />
          <Legend />
          {Object.keys(data[0]).slice(1).map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              stroke={colors[index]}
              fill={colors[index]}
              fillOpacity={0.6}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

// ROI Comparison Chart
export const ROIComparisonChart = () => {
  const data = [
    { name: 'ME & Décor', investment: 50000, yearOneProfit: 930000, roi: 1860 },
    { name: 'Car Rentals', investment: 120000, yearOneProfit: 400000, roi: 333 },
    { name: 'Raffle Company', investment: 30000, yearOneProfit: 350000, roi: 1167 },
    { name: 'CRM Platform', investment: 75000, yearOneProfit: 0, potentialValue: 400000000 }
  ]

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value: number) => [`${value}%`, 'ROI']} />
          <Bar dataKey="roi" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Cash Flow Waterfall Chart
export const CashFlowChart = () => {
  const data = [
    { month: 'Q1', cashGenerated: 149000, crmInvestment: -25000, netCash: 124000 },
    { month: 'Q2', cashGenerated: 226000, crmInvestment: -50000, netCash: 300000 },
    { month: 'Q3', cashGenerated: 340000, crmInvestment: -25000, netCash: 615000 },
    { month: 'Q4', cashGenerated: 525000, crmInvestment: 0, netCash: 1140000 }
  ]

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, '']} />
          <Legend />
          <Line type="monotone" dataKey="cashGenerated" stroke="#10B981" strokeWidth={3} />
          <Line type="monotone" dataKey="netCash" stroke="#3B82F6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// Market Size Comparison
export const MarketSizeChart = () => {
  const data = [
    { name: 'Home Décor E-commerce', size: 76000000000, ourTarget: 9000000 },
    { name: 'Luxury Car Rentals', size: 8200000000, ourTarget: 2000000 },
    { name: 'Online Raffles/Contests', size: 4500000000, ourTarget: 1500000 },
    { name: 'Restaurant CRM Software', size: 3200000000, ourTarget: 400000000 }
  ]

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${(value / 1000000000).toFixed(1)}B`} />
          <Tooltip formatter={(value: number) => [`$${(value / 1000000000).toFixed(2)}B`, '']} />
          <Legend />
          <Bar dataKey="size" fill="#E5E7EB" name="Total Market Size" />
          <Bar dataKey="ourTarget" fill="#3B82F6" name="Our Target" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Investment Allocation Pie Chart
export const InvestmentAllocationChart = () => {
  const data = [
    { name: 'ME & Décor Scale', value: 50000, color: '#3B82F6' },
    { name: 'Car Rental Fleet', value: 120000, color: '#10B981' },
    { name: 'Raffle Infrastructure', value: 30000, color: '#F59E0B' },
    { name: 'CRM Development', value: 75000, color: '#8B5CF6' }
  ]


  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: $${value ? (value / 1000).toFixed(0) : 0}K`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, '']} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

// CRM Valuation Growth Chart
export const CRMValuationChart = () => {
  const data = [
    { month: 'Month 6', restaurants: 25, arr: 90000, valuation: 900000 },
    { month: 'Month 12', restaurants: 100, arr: 360000, valuation: 3600000 },
    { month: 'Month 18', restaurants: 250, arr: 900000, valuation: 9000000 },
    { month: 'Month 24', restaurants: 500, arr: 1800000, valuation: 18000000 },
    { month: 'Month 30', restaurants: 1000, arr: 3600000, valuation: 36000000 },
    { month: 'Month 36', restaurants: 2000, arr: 7200000, valuation: 72000000 }
  ]

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`} />
          <Tooltip formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, '']} />
          <Legend />
          <Line type="monotone" dataKey="valuation" stroke="#8B5CF6" strokeWidth={3} name="CRM Valuation (10x ARR)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
