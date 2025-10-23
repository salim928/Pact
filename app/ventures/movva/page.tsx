'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Truck, MapPin, Package, Users, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Live GPS tracking for all shipments with automated status updates.',
  },
  {
    icon: Users,
    title: 'Verified Transporters',
    description: 'Vetted driver network with ratings, reviews, and performance metrics.',
  },
  {
    icon: Package,
    title: 'Smart Matching',
    description: 'AI-powered matching between loads and available transporters.',
  },
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description: 'Built-in cargo insurance and dispute resolution mechanisms.',
  },
]

export default function MovvaPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-warning/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-primary-end rounded-xl flex items-center justify-center">
                <Truck size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gradient">Movva</h1>
                <p className="text-xl text-warning">Smart logistics for local markets.</p>
              </div>
            </div>
            <p className="text-2xl text-silver/90 mb-8">
              Platform connecting transporters with businesses for efficient last-mile delivery across Africa.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold glow-cyan hover:glow-cyan-hover transition-all duration-300"
              >
                Join Waitlist
              </Link>
              <Link
                href="#features"
                className="border-2 border-warning text-warning px-8 py-4 rounded-lg font-semibold hover:bg-warning/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">The Problem</h2>
              <p className="text-xl text-silver/90 mb-6">
                Last-mile logistics in African markets is <strong className="text-white">fragmented, expensive, 
                and unreliable</strong>. SMEs spend hours negotiating with individual transporters, with no 
                visibility, insurance, or recourse for delays or damages.
              </p>
              <p className="text-xl text-silver/90">
                Transporters struggle to find consistent loads, leading to <strong className="text-white">40% empty 
                return trips</strong> and lost revenue. <strong className="text-white">Movva solves both problems.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Post Load', desc: 'Business creates shipment request' },
                { step: '2', title: 'Match', desc: 'AI finds best transporter' },
                { step: '3', title: 'Track', desc: 'Real-time GPS monitoring' },
                { step: '4', title: 'Confirm', desc: 'Delivery & automatic payment' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-warning to-primary-end rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-silver/80 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black/20" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl"
                >
                  <Icon size={32} className="text-warning mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-silver/80">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Development Roadmap</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { quarter: 'Q1 2025', milestone: 'Platform Launch', status: 'In Progress', items: ['Driver onboarding', 'Mobile app beta', 'First 10 business partners'] },
              { quarter: 'Q2 2025', milestone: 'Pilot Expansion', status: 'Planned', items: ['50+ verified drivers', 'Route optimization', 'Payment integration'] },
              { quarter: 'Q3 2025', milestone: 'Scale & Refine', status: 'Planned', items: ['Multi-city expansion', 'Insurance partnerships', 'API for enterprises'] },
            ].map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-warning font-semibold">{phase.quarter}</div>
                    <h3 className="text-2xl font-bold">{phase.milestone}</h3>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    phase.status === 'In Progress' 
                      ? 'bg-warning/20 text-warning border border-warning' 
                      : 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan'
                  }`}>
                    {phase.status}
                  </div>
                </div>
                <ul className="space-y-2 text-silver/80">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Clock size={16} className="text-warning" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Join the Movva Network</h2>
            <p className="text-xl text-silver/90 mb-8">
              Whether you&apos;re a transporter looking for consistent loads or a business needing reliable logistics, 
              we&apos;re launching soon in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-warning to-primary-end text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-warning/30 transition-all duration-300"
              >
                Join as Business
              </Link>
              <Link
                href="/contact"
                className="border-2 border-warning text-warning px-10 py-4 rounded-lg font-semibold text-lg hover:bg-warning/10 transition-all duration-300"
              >
                Join as Driver
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}