import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between">
        <h1 className="text-2xl font-bold">AI Real Estate Suite</h1>
        <div>
          <Link href="/tools" className="mr-4 text-blue-500">Tools</Link>
          <Link href="/pricing" className="mr-4 text-blue-500">Pricing</Link>
          <Link href="/contact" className="text-blue-500">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-bold mb-4">AI-Powered Tools for Real Estate Professionals</h2>
        <p className="text-lg mb-6">Optimize valuations, qualify leads, and analyze markets with AI.</p>
        <Link href="/tools" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Explore Tools</Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">AI Property Valuation</h3>
          <p>Get instant property price estimates using AI and market data.</p>
          <Link href="/property-valuation" className="text-blue-500">Try Now</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Lead Qualification</h3>
          <p>Identify high-value leads using AI-powered analytics.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Market Insights</h3>
          <p>Stay ahead with real-time and predictive real estate trends.</p>
        </div>
      </div>
    </div>
  );
}
