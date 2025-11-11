import React from 'react'

const StockCard = ({ stock }) => {  
  return (
    <div 
      className="p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 
          bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-lg font-bold text-white">{stock.symbol}</h4>
          <p className="text-sm text-gray-300 truncate">{stock.name}</p>
        </div>
      </div>
    </div>
  )
}

export default StockCard
