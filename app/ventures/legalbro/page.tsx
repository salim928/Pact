'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, CheckCircle, AlertTriangle, FileText, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Contract Analysis',
    description: 'Upload contracts in PDF or DOCX. AI extracts key clauses, obligations, and dates.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Detection',
    description: 'Automatic flagging of high-risk clauses with severity scoring and explanations.',
  },
  {
    icon: Users,
    title: 'Lawyer Escalation',
    description: 'One-click escalation to human lawyers for complex cases requiring expert review.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Tracking',
    description: 'Audit logs and compliance reports for regulatory requirements and internal governance.',
  },
]

export default function LegalBroPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-start/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Scale size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gradient">LegalBro</h1>
                <p className="text-xl text-accent-cyan">Legal clarity, in minutes.</p>
              </div>
            </div>
            <p className="text-2xl text-silver/90 mb-8">
              Automated contract review with AI-powered risk detection and lawyer escalation.
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
                className="border-2 border-accent-cyan text-accent-cyan px-8 py-4 rounded-lg font-semibold hover:bg-accent-cyan/10 transition-all duration-300"
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
                Small and medium-sized law firms spend <strong className="text-white">60+ hours per week</strong> on 
                manual contract review. Critical clauses are missed, billable hours are lost, and clients wait days for results.
              </p>
              <p className="text-xl text-silver/90">
                SMEs and individuals can&apos;t afford legal review for every contract, exposing them to significant risk. 
                <strong className="text-white"> LegalBro changes that.</strong>
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
                { step: '1', title: 'Upload', desc: 'PDF/DOCX contract' },
                { step: '2', title: 'Analyze', desc: 'AI extracts & reviews' },
                { step: '3', title: 'Report', desc: 'Risk scoring & insights' },
                { step: '4', title: 'Escalate', desc: 'Lawyer review if needed' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
                  <Icon size={32} className="text-accent-cyan mb-4" />
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
              { metric: '120+', label: 'Documents Reviewed' },
              { metric: '95%', label: 'Accuracy Rate' },
              { metric: '10x', label: 'Faster Review Time' },
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
              &ldquo;LegalBro reduced our contract review time from 3 days to 30 minutes. 
              The AI caught clauses we would have missed, and the lawyer escalation 
              feature gives us confidence in complex cases.&rdquo;
            </blockquote>
            <footer className="text-accent-cyan">
              — Senior Associate, Corporate Law Firm (Pilot Partner)
            </footer>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Technology & Data</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="text-accent-cyan" />
                  AI & Processing
                </h3>
                <ul className="space-y-2 text-silver/80">
                  <li>• LLM-powered clause extraction (Groq/Llama)</li>
                  <li>• RAG system with ChromaDB for legal precedents</li>
                  <li>• Custom NLP models for risk scoring</li>
                  <li>• PDF/DOCX parsing with metadata retention</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="text-accent-cyan" />
                  Security & Compliance
                </h3>
                <ul className="space-y-2 text-silver/80">
                  <li>• End-to-end encryption for documents</li>
                  <li>• SOC 2 Type II compliant infrastructure</li>
                  <li>• Audit logs for all actions</li>
                  <li>• GDPR and data residency support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Legal Review?</h2>
            <p className="text-xl text-silver/90 mb-8">
              Join law firms and SMEs already using LegalBro to save time and reduce risk.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-primary text-white px-10 py-4 rounded-lg font-semibold text-lg glow-cyan hover:glow-cyan-hover transition-all duration-300"
            >
              Request Pilot or LOI
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}