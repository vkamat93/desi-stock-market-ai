import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='bg-linear-to-r from-slate-900 to-gray-900 shadow-2xl border-b border-slate-500/30 opacity-95 z-10 sticky top-0'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center space-x-3'>
            <span className='text-2xl'>📈</span>
            <span className='text-xl font-bold text-white'>Desi Dave's</span>
          </div>
          
          {/* Social Links */}
          <div className='flex items-center space-x-4 md:space-x-6'>
            {/* GitHub Link */}
            <a 
              href="https://github.com/vkamat93" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-white hover:text-blue-400 transition-colors duration-300'
              aria-label="GitHub Profile"
            >
              <FaGithub className='text-lg md:text-xl lg:text-2xl' />
            </a>

            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/vikrant-kamat-796a0165/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-white hover:text-blue-400 transition-colors duration-300'
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className='text-lg md:text-xl lg:text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar