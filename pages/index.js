import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/">
            <a className="text-3xl font-extrabold text-blue-600">AI Real Estate Suite</a>
          </Link>
          <div className="space-x-6">
            <Link href="/tools">
              <a className="hover:text-blue-600 transition-colors">Tools</a>
            </Link>
            <Link href="/pricing">
              <a className="hover:text-blue-600 transition-colors">Pricing</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-blue-600 transition-colors">Contact</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-blue-50">
        <h2 className="text-5xl font-bold mb-4 text-gray-800">
          AI-Powered Tools for Real Estate Professionals
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Optimize valuations, qualify leads, and analyze markets with our cutting-edge AI suite.
        </p>
        <Link href="/tools">
          <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg transition-all">
            Explore Tools
          </a>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">AI Property Valuation</h3>
            <p className="text-gray-600 mb-4">
              Get instant property price estimates powered by AI and real-time market data.
            </p>
            <Link href="/property-valuation">
              <a className="text-blue-500 hover:underline">Try Now</a>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Lead Qualification</h3>
            <p className="text-gray-600 mb-4">
              Identify high-value leads with sophisticated AI analytics and scoring.
            </p>
            <Link href="/lead-qualification">
              <a className="text-blue-500 hover:underline">Get Started</a>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Market Insights</h3>
            <p className="text-gray-600 mb-4">
              Stay ahead with actionable insights and predictive market trends.
            </p>
            <Link href="/market-insights">
              <a className="text-blue-500 hover:underline">Discover More</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AI Real Estate Suite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
