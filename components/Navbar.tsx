import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0062E6] to-[#2ecc71] rounded-xl shadow-lg"></div>
            <span className="text-[#1a365d] font-bold text-2xl">Real Estate AI</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-[#4a5568] hover:text-[#0062E6] transition-colors">
              Properties
            </Link>
            <Link href="/search" className="text-[#4a5568] hover:text-[#0062E6] transition-colors">
              Search
            </Link>
            <Link href="/about" className="text-[#4a5568] hover:text-[#0062E6] transition-colors">
              About
            </Link>
            <button className="px-6 py-3 text-[#0062E6] border-2 border-[#0062E6] rounded-xl font-semibold hover:bg-[#0062E6] hover:text-white transition-all">
              Sign In
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-[#0062E6] to-[#2ecc71] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/properties" className="text-[#4a5568] hover:text-[#0062E6] transition-colors">
                Properties
              </Link>
              <Link href="/search" className="text-[#4a5568] hover:text-[#0062E6] transition-colors">
                Search
              </Link>
              <Link href="/about" className="text-[#4a5568] hover:text-[#0062E6] transition-colors">
                About
              </Link>
              <button className="px-6 py-3 text-[#0062E6] border-2 border-[#0062E6] rounded-xl font-semibold hover:bg-[#0062E6] hover:text-white transition-all">
                Sign In
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#0062E6] to-[#2ecc71] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 