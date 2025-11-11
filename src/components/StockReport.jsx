import React from 'react'
import loader from '../assets/loader.svg'
import queryingStocksApi from '../App.jsx'

const StockReport = ({ placeholderMessage, reportData, onTryAnother }) => {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-slate-700">
      {/* Header Text */}
      <h3 className="text-xl font-semibold text-white mb-6 text-center">
        Stock report powered by AI
      </h3>

      {/* Report Content Field */}
      <div className="bg-slate-700/50 rounded-lg border border-slate-600 p-4 min-h-[400px]">
        {reportData ? (
          <div className="text-white whitespace-pre-wrap leading-relaxed">
            {reportData}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <img className='w-12' src={loader} alt='Loading...' />
            <span className="text-gray-400 italic text-center">
              {placeholderMessage}
            </span>
          </div>
        )}
      </div>

      {/* Back to another prediction */}
      <div className='text-center'>
      <button
        onClick={onTryAnother}
        className="py-4 px-6 rounded-lg font-bold text-lg transition-all mt-4
            bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:scale-105"
      >
        🔁 Try another Stock Prediction
      </button>
      </div>
    </div>
  )
}

export default StockReport
