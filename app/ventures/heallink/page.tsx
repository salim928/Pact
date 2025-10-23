'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Video, MessageCircle, FileText, Shield } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Video Consultations',
    description: 'Secure, HIPAA-compliant video calls with licensed healthcare providers.',
  },
  {
    icon: MessageCircle,
    title: 'SMS & WhatsApp',
    description: 'Low-bandwidth consultations via SMS and WhatsApp for rural areas.',
  },
  {
    icon: FileText,
    title: 'Digital Health Records',
    description: 'Encrypted patient records accessible across the healthcare network.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'End-to-end encryption and compliance with healthcare privacy regulations.',
  },
]

export default function HealLinkPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Heart size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gradient">HealLink</h1>
                <p className="text-xl text-red-400">Healthcare access made simple.</p>
              </div>
            </div>
            <p className="text-2xl text-silver/90 mb-8">
              Telemedicine platform connecting patients with healthcare providers in remote areas 
              through video, SMS, and WhatsApp.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold glow-cyan hover:glow-cyan-hover transition-all duration-300"
              >
                Partner With Us
              </Link>
              <Link
                href="#features"
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300"
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
                Over <strong className="text-white">60% of Sub-Saharan Africa&apos;s population</strong> lives 
                in rural areas with limited access to healthcare. The average patient travels 
                <strong className="text-white"> 50+ kilometers</strong> to reach a healthcare facility.
              </p>
              <p className="text-xl text-silver/90">
                During the pandemic, telemedicine adoption skyrocketed, but existing platforms require 
                high bandwidth and smartphones. <strong className="text-white">HealLink bridges this gap</strong> 
                with SMS and WhatsApp-based consultations.
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
                { step: '1', title: 'Register', desc: 'Patient signs up via SMS/WhatsApp' },
                { step: '2', title: 'Consult', desc: 'Connect with available doctor' },
                { step: '3', title: 'Diagnose', desc: 'Video/text consultation' },
                { step: '4', title: 'Prescribe', desc: 'Digital prescription & follow-up' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
                  <Icon size={32} className="text-red-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-silver/80">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-2xl">
            <div className="text-center mb-8">
              <div className="inline-block bg-warning/20 text-warning px-6 py-2 rounded-full font-semibold mb-4">
                🚧 In Development
              </div>
              <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
              <p className="text-xl text-silver/90">
                HealLink is currently in active development. We&apos;re partnering with healthcare 
                providers and NGOs to pilot in Q2 2025.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Target Launch', value: 'Q2 2025' },
                { label: 'Partner Hospitals', value: '5+' },
                { label: 'Compliance', value: 'HIPAA Ready' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-silver/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Interested in Partnering?</h2>
            <p className="text-xl text-silver/90 mb-8">
              We&apos;re looking for healthcare providers, NGOs, and government partners to pilot HealLink.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
            >
              Express Interest
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}