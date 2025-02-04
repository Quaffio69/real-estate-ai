import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-800 text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-white bg-opacity-10 backdrop-blur-md shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-wide">AI Real Estate Suite</h1>
        <div className="space-x-6">
          <Link href="/tools" className="text-lg hover:text-yellow-300">Tools</Link>
          <Link href="/pricing" className="text-lg hover:text-yellow-300">Pricing</Link>
          <Link href="/contact" className="text-lg hover:text-yellow-300">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-40 px-6">
        <h2 className="text-5xl font-bold mb-6">Revolutionizing Real Estate with AI</h2>
        <p className="text-xl mb-8 max-w-3xl">Leverage AI to optimize valuations, qualify leads, and analyze market trends in real time.</p>
        <Link href="/tools" className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-yellow-500 transition">Explore Tools</Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-20">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md text-center">
          <h3 className="text-2xl font-bold mb-3">AI Property Valuation</h3>
          <p className="text-lg">Get instant property price estimates using AI and market data.</p>
          <Link href="/property-valuation" className="text-yellow-300 font-semibold mt-4 inline-block">Try Now →</Link>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md text-center">
          <h3 className="text-2xl font-bold mb-3">Lead Qualification</h3>
          <p className="text-lg">Identify high-value leads using AI-powered analytics.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md text-center">
          <h3 className="text-2xl font-bold mb-3">Market Insights</h3>
          <p className="text-lg">Stay ahead with real-time and predictive real estate trends.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white bg-opacity-10 p-6 text-center backdrop-blur-md">
        <p className="text-lg">&copy; {new Date().getFullYear()} AI Real Estate Suite. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
