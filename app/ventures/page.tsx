'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, Sprout, Truck, Heart, BarChart3 } from 'lucide-react'

const ventures = [
  {
    icon: Scale,
    name: 'LegalBro',
    slug: 'legalbro',
    tagline: 'Legal clarity, in minutes.',
    description: 'Automated contract review and risk detection with AI-powered analysis and lawyer escalation.',
    status: 'Active',
    metrics: ['120+ documents reviewed', '95% accuracy rate', '10x faster review'],
  },
  {
    icon: Sprout,
    name: 'Semma AI',
    slug: 'semma',
    tagline: 'Farm intelligence that fits local realities.',
    description: 'Satellite NDVI, local weather, and WhatsApp — actionable farm alerts without complexity.',
    status: 'Active',
    metrics: ['50+ farmers', '12 critical alerts', '85% response rate'],
  },
  {
    icon: Truck,
    name: 'Movva',
    slug: 'movva',
    tagline: 'Smart logistics for local markets.',
    description: 'Platform connecting transporters with businesses for efficient last-mile delivery.',
    status: 'Pilot',
    metrics: ['Early stage', 'Launching Q1 2025', 'Partner network growing'],
  },
  {
    icon: Heart,
    name: 'HealLink',
    slug: 'heallink',
    tagline: 'Healthcare access made simple.',
    description: 'Telemedicine platform connecting patients with healthcare providers in remote areas.',
    status: 'Development',
    metrics: ['Pre-pilot', 'HIPAA compliant', 'SMS + WhatsApp interface'],
  },
  {
    icon: BarChart3,
    name: 'InsightHub',
    slug: 'insighthub',
    tagline: 'Data insights for decision makers.',
    description: 'Business intelligence platform turning data into actionable insights for SMEs.',
    status: 'Development',
    metrics: ['Dashboard builder', 'Real-time analytics', 'Multi-source integration'],
  },
]

export default function VenturesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Our Ventures
            </h1>
            <p className="text-xl text-silver/90">
              From legal tech to agritech, we&apos;re building products that solve real problems 
              across Africa with AI and modern software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ventures.map((venture, index) => {
              const Icon = venture.icon
              return (
                <motion.div
                  key={venture.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/ventures/${venture.slug}`}>
                    <div className="glass p-8 rounded-2xl h-full hover:border-accent-cyan transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon size={28} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{venture.name}</h3>
                            <p className="text-accent-cyan text-sm">{venture.tagline}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          venture.status === 'Active' 
                            ? 'bg-success/20 text-success border border-success' 
                            : venture.status === 'Pilot'
                            ? 'bg-warning/20 text-warning border border-warning'
                            : 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan'
                        }`}>
                          {venture.status}
                        </div>
                      </div>

                      <p className="text-silver/80 mb-6">{venture.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {venture.metrics.map((metric) => (
                          <div
                            key={metric}
                            className="bg-white/5 px-3 py-1 rounded-lg text-sm text-silver/80"
                          >
                            {metric}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 text-accent-cyan font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                        Learn more →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}