'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-fuchsia-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              RealEstateAI
            </div>
            <div className="space-x-6">
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Transform Your Real Estate Business with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Leverage the power of AI to streamline your workflow, generate compelling property descriptions,
              and provide instant insights to your clients.
            </p>
            <div className="space-x-4">
              <Link
                href="/demo"
                className="bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
              >
                Try Demo
              </Link>
              <Link
                href="/features"
                className="border border-blue-200 bg-white/50 backdrop-blur-sm text-gray-700 px-8 py-3 rounded-lg hover:border-blue-300 transition-colors inline-block"
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
                className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-fuchsia-600 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-24 bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI-Powered Descriptions",
    description: "Generate engaging and accurate property descriptions in seconds using advanced AI technology."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Market Analysis",
    description: "Get instant market insights and property valuations backed by real-time data and AI predictions."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Client Matching",
    description: "Match properties with potential buyers using intelligent algorithms and preference analysis."
  }
]

const stats = [
  {
    value: "500+",
    label: "Active Agents"
  },
  {
    value: "10,000+",
    label: "Properties Listed"
  },
  {
    value: "98%",
    label: "Client Satisfaction"
  }
] 