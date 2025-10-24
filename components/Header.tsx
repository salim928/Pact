'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Ventures', 
    href: '/ventures',
    submenu: [
      { name: 'LegalBro', href: '/ventures/legalbro' },
      { name: 'Semma AI', href: '/ventures/semma' },
      { name: 'Movva', href: '/ventures/movva' },
      { name: 'HealLink', href: '/ventures/heallink' },
      { name: 'InsightHub', href: '/ventures/insighthub' },
    ]
  },
  { 
    name: 'Solutions', 
    href: '/solutions',
    submenu: [
      { name: 'For NGOs', href: '/solutions/ngos' },
      { name: 'For Law Firms', href: '/solutions/lawfirms' },
      { name: 'For Farmers', href: '/solutions/farmers' },
    ]
  },
  { name: 'Impact', href: '/impact' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-strong shadow-lg shadow-cyan-500/5' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <Image 
              src="/logo/pactium-logo.jpg" 
              alt="Pactium Logo" 
              width={280} 
              height={80} 
              className="h-12 w-auto transition-all duration-500 group-hover:scale-105 relative z-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-silver hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 font-medium"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass-strong rounded-xl border border-white/10 shadow-2xl shadow-cyan-500/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 text-silver hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 border-b border-white/5 last:border-0"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:block btn-primary relative overflow-hidden group"
          >
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-[#0a0e1a]/95 backdrop-blur-xl overflow-y-auto transition-all duration-300 z-[60] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="min-h-screen pt-20 pb-8">
            {/* Close button in menu */}
            <div className="container mx-auto px-6 flex justify-end mb-4">
              <button
                className="text-white p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="container mx-auto px-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-silver hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-silver/80 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block mt-4 btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}