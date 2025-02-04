import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#22c55e] via-[#22c55e] to-[#4ADE80] -mt-8 py-24 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Find Your Dream Home with{' '}
              <span className="text-white/90">AI</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Leverage artificial intelligence to discover the perfect property matching your exact needs and preferences.
            </p>
            {/* Main Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/search" 
                className="bg-white text-[#22c55e] px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center">
                Explore Properties
              </Link>
              <Link href="/demo" 
                className="bg-[#16a34a] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#15803d] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center">
                Try AI Chat Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a365d] text-center mb-16">
            Why Choose Real Estate AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Chat Feature */}
            <div className="bg-gradient-to-br from-[#22c55e]/5 to-[#22c55e]/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">AI Chat Assistant</h3>
              <p className="text-[#4a5568] mb-4">Get instant answers to all your real estate questions with our AI assistant.</p>
              <Link href="/demo" 
                className="text-[#22c55e] font-semibold hover:text-[#16a34a] transition-colors inline-flex items-center">
                Try Demo
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Search Feature */}
            <div className="bg-gradient-to-br from-[#22c55e]/5 to-[#22c55e]/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">Smart Search</h3>
              <p className="text-[#4a5568]">Advanced algorithms that understand your preferences and find perfect matches.</p>
            </div>

            {/* Updates Feature */}
            <div className="bg-gradient-to-br from-[#22c55e]/5 to-[#22c55e]/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">Real-Time Updates</h3>
              <p className="text-[#4a5568]">Stay informed with instant notifications about new properties and price changes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#22c55e]/5 to-[#22c55e]/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-8">
            Ready to Try Our AI Assistant?
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto mb-12 text-lg">
            Experience the power of AI in real estate. Get instant answers to your property questions.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/demo" 
              className="bg-[#22c55e] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#16a34a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Start Chatting Now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
} 