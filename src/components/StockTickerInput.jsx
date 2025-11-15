import React, { useState } from 'react'

const StockTickerInput = ({onGenerate}) => {
  const [tickerInput, setTickerInput] = useState('')
  const [addedTicker, setAddedTicker] = useState('')

  const handleAddTicker = () => {
    if (tickerInput.trim()) {
      setAddedTicker(tickerInput.trim().toUpperCase())
      setTickerInput('')
    }
  }

  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 text-center">
      {/* Header Text */}
      <h3 className="text-xl font-semibold text-white mb-6 text-center">
        Add a stock ticker below to get smart AI-powered stock prediction report!
      </h3>

      {/* Input Section */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={tickerInput}
          onChange={(e) => setTickerInput(e.target.value)}
          placeholder="stock ticker (e.g: TCS)"
          className="flex-1 px-4 py-3 bg-slate-700 text-white placeholder-gray-400 rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
        />
        <button
          onClick={handleAddTicker}
          disabled={!tickerInput.trim()}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all flex items-center justify-center font-semibold min-w-[60px] cursor-pointer"
        >
          <span className="text-xl">+</span>
        </button>
      </div>

      {/* Ticker Display Section */}
      <div className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600 min-h-[60px] flex items-center justify-center">
        {addedTicker ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📈</span>
              <span className="text-lg font-bold text-white">{addedTicker}</span>
              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">ADDED</span>
            </div>
            <button
              onClick={() => setAddedTicker('')}
              className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
            >
              Remove
            </button>
          </div>
        ) : (
          <span className="text-gray-400 italic">Your stock ticker will appear here</span>
        )}
      </div>

      {/* Generate Report Button */}
      <button
        onClick={() => onGenerate(addedTicker)}
        disabled={!addedTicker}
        className={`py-4 px-6 rounded-lg font-bold text-lg transition-all ${
          addedTicker
            ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:scale-105'
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
        }`}
      >
        {addedTicker ? '🤖 Generate Report' : 'Generate Report (Add a ticker first)'}
      </button>
    </div>
  )
}

export default StockTickerInput
