'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Sprout, CheckCircle2, ArrowUpRight } from 'lucide-react'

export default function CaseStudyHighlight() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <CheckCircle2 className="text-green-400 w-5 h-5" />
            <span className="text-silver font-medium">Success Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Real Impact</span>
            <span className="text-white">, Real Results</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-10 md:p-12 rounded-3xl max-w-5xl mx-auto gradient-border"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Sprout className="text-green-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-green-400 font-semibold">Featured Case Study</div>
                <div className="text-xs text-silver/60">Q4 2024 Pilot • Northern Region</div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Semma AI: Delivering Satellite Farm Intelligence to Smallholder Farmers via WhatsApp
          </h3>

          {/* Description */}
          <p className="text-lg text-silver/90 mb-8 leading-relaxed">
            In partnership with agricultural extension services, we deployed Semma AI to monitor crop health 
            using satellite imagery and deliver actionable alerts through WhatsApp—the most accessible platform 
            for smallholder farmers in Sub-Saharan Africa.
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-silver/70 text-sm">Farmers Onboarded</div>
              <div className="text-xs text-silver/50 mt-2">Across 3 cooperatives</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">12</div>
              <div className="text-silver/70 text-sm">Critical Alerts Sent</div>
              <div className="text-xs text-silver/50 mt-2">NDVI-based early warnings</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">85%</div>
              <div className="text-silver/70 text-sm">Response Rate</div>
              <div className="text-xs text-silver/50 mt-2">Within 24 hours</div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="glass rounded-2xl p-6 mb-8">
            <h4 className="text-lg font-bold text-white mb-4">Key Insights</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-silver/80">WhatsApp delivery achieved 3x higher engagement than SMS</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-silver/80">Early detection prevented crop losses for 8 farmers during drought period</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-silver/80">Extension officers reduced field visits by 40% while improving coverage</span>
              </li>
            </ul>
          </div>

          {/* Quote */}
          <blockquote className="relative glass rounded-2xl p-8 mb-8">
            <div className="absolute top-6 left-6 text-6xl text-cyan-400/20 font-serif">&ldquo;</div>
            <p className="text-lg text-silver/90 italic relative z-10 pl-8">
              Semma AI helped us detect early signs of crop stress that we would have missed otherwise. 
              The WhatsApp alerts are simple, timely, and actionable—exactly what our farmers need.
            </p>
            <footer className="text-sm mt-4 text-green-400 font-semibold pl-8">
              — Samuel Osei, Extension Officer, Northern Region Agricultural Cooperative
            </footer>
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/impact"
              className="group flex items-center justify-center gap-2 btn-primary px-8 py-4"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span className="relative z-10">Download Full Report</span>
            </Link>
            <Link
              href="/ventures/semma"
              className="flex items-center justify-center gap-2 glass-strong px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 border border-white/10"
            >
              Learn About Semma AI
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}