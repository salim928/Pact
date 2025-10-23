import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

const footerSections = [
  {
    title: 'Ventures',
    links: [
      { name: 'LegalBro', href: '/ventures/legalbro' },
      { name: 'Semma AI', href: '/ventures/semma' },
      { name: 'Movva', href: '/ventures/movva' },
      { name: 'HealLink', href: '/ventures/heallink' },
      { name: 'InsightHub', href: '/ventures/insighthub' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'For NGOs & Governments', href: '/solutions/ngos' },
      { name: 'For Law Firms & SMEs', href: '/solutions/lawfirms' },
      { name: 'For Farmers & Cooperatives', href: '/solutions/farmers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Impact', href: '/impact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Data Handling', href: '/data-handling' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-darker-bg to-dark-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image 
                src="/logo/pactium-logo.jpg" 
                alt="Pactium Logo" 
                width={160} 
                height={45} 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-silver/80 text-sm leading-relaxed mb-6">
              Building intelligent products that scale Africa. From concept to production.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-silver hover:text-white hover:bg-cyan-500/20 transition-all duration-300 group"
              >
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-silver hover:text-white hover:bg-cyan-500/20 transition-all duration-300 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-silver hover:text-white hover:bg-cyan-500/20 transition-all duration-300 group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-silver hover:text-white hover:bg-cyan-500/20 transition-all duration-300 group"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-5 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-silver/70 text-sm hover:text-cyan-400 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver/60 text-sm">
            &copy; {new Date().getFullYear()} Pactium Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-silver/60">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}