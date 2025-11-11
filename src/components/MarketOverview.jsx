import React from 'react'

const MarketOverview = ({ marketData }) => {
  const IndexCard = ({ name, data, emoji }) => {
    const isPositive = data.change > 0
    
    return (
      <div className="bg-linear-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-semibold text-white flex items-center">
            <span className="text-2xl mr-2">{emoji}</span>
            {name}
          </h4>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {isPositive ? '📈 UP' : '📉 DOWN'}
          </span>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-bold text-white">{data.value.toLocaleString()}</p>
          <div className="flex items-center space-x-3">
            <span className={`text-lg font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? '+' : ''}{data.change.toFixed(2)}
            </span>
            <span className={`text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              ({isPositive ? '+' : ''}{data.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">📊 Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <IndexCard 
          name="NIFTY 50" 
          data={marketData.nifty} 
          emoji="🇮🇳" 
        />
        <IndexCard 
          name="SENSEX" 
          data={marketData.sensex} 
          emoji="💹" 
        />
        <IndexCard 
          name="BANK NIFTY" 
          data={marketData.bankNifty} 
          emoji="🏦" 
        />
      </div>
      
      {/* Market Status */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-semibold">Markets Open</span>
          <span className="text-sm">9:15 AM - 3:30 PM IST</span>
        </div>
      </div>
    </div>
  )
}

export default MarketOverview
