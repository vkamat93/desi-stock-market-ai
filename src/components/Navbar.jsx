import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-linear-to-r from-slate-900 to-gray-900 shadow-2xl border-b border-purple-500/30 opacity-95 z-10 sticky top-0'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center space-x-3'>
            <span className='text-2xl'>📈</span>
            <span className='text-xl font-bold text-white'>Desi Dave's Predictions</span>
          </div>
          <div className='flex items-center space-x-6'>
            <button className='bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all'>
              Go Premium 🚀
            </button>
            <a to="/about" className='text-white hover:underline cursor-pointer'>Go to About Page</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar