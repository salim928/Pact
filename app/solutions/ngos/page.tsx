
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, FileCheck, TrendingUp, Download, Users, Shield } from 'lucide-react'

export default function NGOsSolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Building2 size={32} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">For NGOs & Governments</h1>
            </div>
            <p className="text-2xl text-silver/90 mb-8">
              Impact-driven technology solutions with measurable outcomes, compliance-ready documentation, 
              and grant-friendly pilot programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Partner With Pactium</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: 'Measurable Impact',
                description: 'Every pilot includes KPIs, data collection, and impact reporting aligned with M&E frameworks.',
              },
              {
                icon: FileCheck,
                title: 'Grant-Ready',
                description: 'Pre-packaged proposals, budgets, and technical documentation ready for donor submissions.',
              },
              {
                icon: Shield,
                title: 'Compliance First',
                description: 'Built-in data privacy, security, and regulatory compliance from day one.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl text-center"
                >
                  <Icon size={40} className="text-accent-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-silver/80 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pilot Programs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Pilot Approach</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { phase: 'Phase 1', title: 'Discovery & Design', duration: '2-4 weeks', deliverables: ['Needs assessment', 'Technical specification', 'Budget proposal', 'M&E framework'] },
              { phase: 'Phase 2', title: 'Build & Test', duration: '4-8 weeks', deliverables: ['MVP development', 'User testing', 'Training materials', 'Data collection tools'] },
              { phase: 'Phase 3', title: 'Deploy & Monitor', duration: '8-12 weeks', deliverables: ['Field deployment', 'Weekly monitoring', 'Mid-term report', 'Iteration & refinement'] },
              { phase: 'Phase 4', title: 'Evaluate & Scale', duration: '2-4 weeks', deliverables: ['Impact report', 'Cost analysis', 'Scaling roadmap', 'Sustainability plan'] },
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="text-sm text-accent-cyan font-semibold">{phase.phase}</div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>
                  <div className="text-silver/80 mt-2 md:mt-0">{phase.duration}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.deliverables.map((deliverable) => (
                    <div key={deliverable} className="bg-accent-cyan/10 border border-accent-cyan/30 px-3 py-1 rounded-lg text-sm">
                      {deliverable}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Pilot Program Overview', desc: 'Complete guide to running a pilot with Pactium', size: '2.4 MB' },
              { title: 'Technical Specifications', desc: 'Detailed technical documentation for all ventures', size: '3.1 MB' },
              { title: 'Data Privacy & Compliance', desc: 'Our approach to data handling and regulatory compliance', size: '1.8 MB' },
              { title: 'Impact Report Template', desc: 'M&E framework and reporting template', size: '1.2 MB' },
            ].map((doc, index) => (
              <motion.a
                key={doc.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:border-accent-cyan transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <Download size={32} className="text-accent-cyan flex-shrink-0 group-hover:translate-y-1 transition-transform" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{doc.title}</h3>
                    <p className="text-silver/80 text-sm mb-2">{doc.desc}</p>
                    <div className="text-xs text-silver/60">PDF • {doc.size}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Partner Success Stories</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-success" />
                <div>
                  <h3 className="text-xl font-bold">Ministry of Food & Agriculture</h3>
                  <p className="text-sm text-silver/60">Ghana • Semma AI Pilot</p>
                </div>
              </div>
              <p className="text-silver/90 mb-4">
                Deployed satellite-based crop monitoring for 50+ smallholder farmers across Northern Region. 
                Early detection of crop stress led to 15% yield improvement in pilot cohort.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-success/10 border border-success px-3 py-1 rounded-lg text-success">50+ farmers</div>
                <div className="bg-success/10 border border-success px-3 py-1 rounded-lg text-success">15% yield ↑</div>
                <div className="bg-success/10 border border-success px-3 py-1 rounded-lg text-success">12 weeks</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-accent-cyan" />
                <div>
                  <h3 className="text-xl font-bold">Legal Aid Foundation</h3>
                  <p className="text-sm text-silver/60">Kenya • LegalBro Pilot</p>
                </div>
              </div>
              <p className="text-silver/90 mb-4">
                Implemented AI-powered contract review for pro-bono clients. Reduced review time from 3 days 
                to 30 minutes, enabling the foundation to serve 3x more clients.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-accent-cyan/10 border border-accent-cyan px-3 py-1 rounded-lg text-accent-cyan">120+ contracts</div>
                <div className="bg-accent-cyan/10 border border-accent-cyan px-3 py-1 rounded-lg text-accent-cyan">10x faster</div>
                <div className="bg-accent-cyan/10 border border-accent-cyan px-3 py-1 rounded-lg text-accent-cyan">8 weeks</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Launch a Pilot?</h2>
            <p className="text-xl text-silver/90 mb-8">
              Let&apos;s discuss how Pactium can support your organization&apos;s technology needs and impact goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-primary text-white px-10 py-4 rounded-lg font-semibold text-lg glow-cyan hover:glow-cyan-hover transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                href="#"
                className="border-2 border-accent-cyan text-accent-cyan px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent-cyan/10 transition-all duration-300"
              >
                Download Pilot Brief
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}