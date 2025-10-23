'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Globe, Rocket } from 'lucide-react'
import BackgroundAnimation from './BackgroundAnimation'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 group hover:scale-105 transition-transform duration-300"
          >
            <Sparkles className="text-cyan-400 w-5 h-5" />
            <span className="text-silver font-medium">Powering Africa&apos;s Digital Future</span>
            <ArrowRight className="text-cyan-400 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">We Build </span>
            <span className="text-gradient inline-block">Intelligent Products</span>
            <br />
            <span className="text-white">That Scale </span>
            <span className="text-gradient inline-block">Africa</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-silver/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From concept to production — we create AI-powered web apps, mobile solutions, 
            and intelligent agents that transform industries across Africa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link
              href="/contact"
              className="group relative btn-primary px-10 py-5 text-lg flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            <Link
              href="/ventures"
              className="group glass-strong px-10 py-5 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border border-white/10"
            >
              Explore Ventures
              <Zap className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300 gradient-border">
              <div className="flex items-center justify-center mb-3">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-silver/80">Pilots Launched</div>
            </div>

            <div className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300 gradient-border">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">5</div>
              <div className="text-sm text-silver/80">Active Ventures</div>
            </div>

            <div className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300 gradient-border">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-silver/80">AI-Powered</div>
            </div>

            <div className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300 gradient-border">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">Africa</div>
              <div className="text-sm text-silver/80">Our Focus</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}