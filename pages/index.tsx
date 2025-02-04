import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0062E6] via-[#33A1FD] to-[#2ecc71] -mt-8 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Find Your Dream Home with{' '}
              <span className="text-[#4ADE80]">AI</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Leverage artificial intelligence to discover the perfect property matching your exact needs and preferences.
            </p>
            <div className="flex gap-4">
              <Link href="/search" 
                className="bg-[#4ADE80] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#22c55e] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Start Searching
              </Link>
              <Link href="/about" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 right-0 w-1/2 h-[120%] hidden lg:block">
          <div className="relative w-full h-full">
            <Image 
              src="/images/modern-house.png"
              alt="Modern House"
              fill
              style={{ objectFit: 'contain' }}
              className="opacity-90"
            />
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
            <div className="bg-gradient-to-br from-[#0062E6]/5 to-[#33A1FD]/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#0062E6]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#0062E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">AI-Powered Search</h3>
              <p className="text-[#4a5568]">Advanced algorithms that understand your preferences and find perfect matches.</p>
            </div>

            <div className="bg-gradient-to-br from-[#2ecc71]/5 to-[#4ADE80]/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#2ecc71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">Smart Analysis</h3>
              <p className="text-[#4a5568]">Get detailed property insights and market analysis powered by real-time data.</p>
            </div>

            <div className="bg-gradient-to-br from-[#33A1FD]/5 to-[#0062E6]/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#33A1FD]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#33A1FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="bg-gradient-to-br from-[#0062E6]/5 via-[#33A1FD]/5 to-[#2ecc71]/5 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-8">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto mb-12 text-lg">
            Join thousands of satisfied customers who found their dream properties using our AI-powered platform.
          </p>
          <button className="bg-gradient-to-r from-[#0062E6] to-[#33A1FD] text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </Layout>
  )
} 