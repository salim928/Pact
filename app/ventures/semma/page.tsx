'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sprout, Satellite, MessageSquare, TrendingUp, Cloud, Map } from 'lucide-react'

const features = [
  {
    icon: Satellite,
    title: 'Satellite Monitoring',
    description: 'Sentinel-2 imagery processed for NDVI and canopy health detection.',
  },
  {
    icon: Cloud,
    title: 'Weather Integration',
    description: 'Localized weather data and forecasts for proactive farm management.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Delivery',
    description: 'Alerts and insights delivered via WhatsApp for easy farmer access.',
  },
  {
    icon: TrendingUp,
    title: 'Extension Dashboard',
    description: 'Real-time monitoring dashboard for agricultural extension officers.',
  },
]

export default function SemmaPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-success/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-primary-end rounded-xl flex items-center justify-center">
                <Sprout size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gradient">Semma AI</h1>
                <p className="text-xl text-success">Farm intelligence that fits local realities.</p>
              </div>
            </div>
            <p className="text-2xl text-silver/90 mb-8">
              Satellite NDVI, local weather, and WhatsApp — actionable farm alerts without complexity.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold glow-cyan hover:glow-cyan-hover transition-all duration-300"
              >
                Request Pilot
              </Link>
              <Link
                href="#demo"
                className="border-2 border-success text-success px-8 py-4 rounded-lg font-semibold hover:bg-success/10 transition-all duration-300"
              >
                Watch Demo
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
                Smallholder farmers in Sub-Saharan Africa lack access to <strong className="text-white">timely, 
                actionable farm intelligence</strong>. Traditional extension services reach less than 15% of farmers, 
                and commercial solutions are too expensive or complex.
              </p>
              <p className="text-xl text-silver/90">
                Climate change increases variability, but farmers have no early warning system for crop stress, 
                pest pressure, or weather anomalies. <strong className="text-white">Semma AI changes that.</strong>
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Satellite', desc: 'Sentinel-2 imagery', icon: Satellite },
                { step: '2', title: 'Process', desc: 'NDVI analysis', icon: TrendingUp },
                { step: '3', title: 'Alert', desc: 'WhatsApp message', icon: MessageSquare },
                { step: '4', title: 'Verify', desc: 'Farmer confirms', icon: Sprout },
                { step: '5', title: 'Dashboard', desc: 'Extension tracks', icon: Map },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-success to-primary-end rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="text-sm font-bold text-success mb-1">Step {item.step}</div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-silver/80 text-sm">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black/20">
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
                  <Icon size={32} className="text-success mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-silver/80">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pilot Evidence */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Pilot Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { metric: '50+', label: 'Farmers Onboarded' },
              { metric: '12', label: 'Critical Alerts Sent' },
              { metric: '85%', label: 'Response Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-2">{stat.metric}</div>
                <div className="text-silver/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto glass p-8 rounded-xl">
            <blockquote className="text-xl text-silver/90 italic mb-4">
              &ldquo;Semma AI helped us detect early signs of crop stress that we would have missed otherwise. 
              The WhatsApp alerts are simple and actionable for farmers with basic phones.&rdquo;
            </blockquote>
            <footer className="text-success">
              — Extension Officer, Northern Region Agricultural Cooperative
            </footer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Bring Semma to Your Region?</h2>
            <p className="text-xl text-silver/90 mb-8">
              Partner with us to deploy satellite-powered farm intelligence for your farmers.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-success to-primary-end text-white px-10 py-4 rounded-lg font-semibold text-lg glow-cyan hover:glow-cyan-hover transition-all duration-300"
            >
              Request Pilot or LOI
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}