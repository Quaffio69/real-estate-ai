import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Real Estate AI</h3>
            <p className="text-text-light">
              Revolutionizing real estate with artificial intelligence
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-text-light hover:text-primary">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-text-light hover:text-primary">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-light hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-text-light hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-text-light hover:text-primary">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-light hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-text-light">support@realestate-ai.com</li>
              <li className="text-text-light">1-800-123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-text-light">
          <p>&copy; {new Date().getFullYear()} Real Estate AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 