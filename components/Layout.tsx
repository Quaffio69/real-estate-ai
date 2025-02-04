import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'Real Estate AI' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f0fdf4]">
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI-powered real estate platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  )
} 