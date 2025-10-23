'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, Sprout, Truck, ArrowRight, Sparkles } from 'lucide-react'

const ventures = [
  {
    icon: Scale,
    name: 'LegalBro',
    description: 'Automated contract review with AI-powered risk detection and lawyer escalation.',
    metric: '120+',
    metricLabel: 'Documents Reviewed',
    href: '/ventures/legalbro',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10',
    image: '/ventures/legalBRO.jpg',
  },
  {
    icon: Sprout,
    name: 'Semma AI',
    description: 'Farm intelligence through satellite NDVI, weather data, and WhatsApp delivery for smallholders.',
    metric: '50+',
    metricLabel: 'Farmers Onboarded',
    href: '/ventures/semma',
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
    image: '/ventures/semma.jpg',
  },
  {
    icon: Truck,
    name: 'Movva',
    description: 'Smart logistics platform connecting transporters with businesses across local markets.',
    metric: 'Active',
    metricLabel: 'In Development',
    href: '/ventures/movva',
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/10',
    image: '/ventures/movva.jpg',
  },
]

export default function FeaturedVentures() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="text-cyan-400 w-5 h-5" />
            <span className="text-silver font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Featured Ventures</span>
          </h2>
          <p className="text-xl text-silver/80 max-w-2xl mx-auto">
            Real products solving real problems across Africa&apos;s most impactful sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ventures.map((venture, index) => {
            const Icon = venture.icon
            return (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative glass-strong rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 card-hover"
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${venture.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${venture.gradient}`}></div>

                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${venture.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon size={40} className="text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                    {venture.name}
                  </h3>

                  {/* Description */}
                  <p className="text-silver/80 mb-6 leading-relaxed min-h-[80px]">
                    {venture.description}
                  </p>

                  {/* Metric */}
                  <div className={`glass rounded-xl p-4 mb-6 border border-white/10`}>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${venture.gradient} bg-clip-text text-transparent mb-1`}>
                      {venture.metric}
                    </div>
                    <div className="text-sm text-silver/70">{venture.metricLabel}</div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={venture.href}
                    className="group/btn inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Corner glow effect */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${venture.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-lg group"
          >
            View All Ventures
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}