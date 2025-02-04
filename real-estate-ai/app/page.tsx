'use client'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">RealEstateAI</div>
            <div className="space-x-6">
              <Link href="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Transform Your Real Estate Business with AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage the power of AI to streamline your workflow, generate compelling property descriptions,
              and provide instant insights to your clients.
            </p>
            <div className="space-x-4">
              <Link
                href="/demo"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
              >
                Try Demo
              </Link>
              <Link
                href="/features"
                className="border border-gray-500 text-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 hover:text-white inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

const features = [
  {
    title: "AI-Powered Descriptions",
    description: "Generate engaging and accurate property descriptions in seconds using advanced AI technology."
  },
  {
    title: "Market Analysis",
    description: "Get instant market insights and property valuations backed by real-time data and AI predictions."
  },
  {
    title: "Client Matching",
    description: "Match properties with potential buyers using intelligent algorithms and preference analysis."
  }
] 