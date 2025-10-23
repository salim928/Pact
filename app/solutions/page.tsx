
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Scale, Sprout, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Building2,
    title: 'For NGOs & Governments',
    description: 'Impact-driven technology solutions with measurable outcomes, compliance-ready documentation, and grant-friendly pilot programs.',
    benefits: ['Rapid pilot deployment', 'Impact metrics & reporting', 'Grant-ready proposals', 'Procurement documentation'],
    href: '/solutions/ngos',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Scale,
    title: 'For Law Firms & SMEs',
    description: 'AI-powered legal tech that saves time, reduces risk, and delivers ROI from day one with transparent pricing.',
    benefits: ['10x faster contract review', 'Risk detection & scoring', 'Audit trails & compliance', 'Flexible pricing models'],
    href: '/solutions/lawfirms',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sprout,
    title: 'For Farmers & Cooperatives',
    description: 'Low-bandwidth farm intelligence delivered via WhatsApp and SMS, designed for smallholders and rural communities.',
    benefits: ['WhatsApp & SMS interface', 'Satellite crop monitoring', 'Weather alerts', 'Local language support'],
    href: '/solutions/farmers',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function SolutionsPage() {
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
              Solutions Built for Your Needs
            </h1>
            <p className="text-xl text-silver/90">
              Whether you&apos;re an NGO, enterprise, or cooperative, we have tailored solutions 
              that fit your context, budget, and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={solution.href}>
                    <div className="glass p-8 md:p-12 rounded-2xl hover:border-accent-cyan transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <Icon size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">{solution.title}</h2>
                          </div>
                          <p className="text-lg text-silver/90 mb-6">
                            {solution.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.benefits.map((benefit) => (
                              <div key={benefit} className="flex items-center gap-2 text-silver/80">
                                <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                                <span className="text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                          <div className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 group-hover:gap-5 transition-all glow-cyan">
                            Learn More
                            <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Don&apos;t See Your Use Case?</h2>
            <p className="text-xl text-silver/90 mb-8">
              We build custom solutions for unique challenges. Let&apos;s discuss how Pactium can help your organization.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-primary text-white px-10 py-4 rounded-lg font-semibold text-lg glow-cyan hover:glow-cyan-hover transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}