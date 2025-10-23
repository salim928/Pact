'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BarChart3, TrendingUp, Database, PieChart, Zap } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Custom Dashboards',
    description: 'Drag-and-drop dashboard builder with pre-built templates for common use cases.',
  },
  {
    icon: Database,
    title: 'Multi-Source Integration',
    description: 'Connect data from spreadsheets, databases, APIs, and third-party tools.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Analytics',
    description: 'Live data processing with automated insights and anomaly detection.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Insights',
    description: 'Natural language queries and automated report generation.',
  },
]

export default function InsightHubPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <BarChart3 size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gradient">InsightHub</h1>
                <p className="text-xl text-purple-400">Data insights for decision makers.</p>
              </div>
            </div>
            <p className="text-2xl text-silver/90 mb-8">
              Business intelligence platform turning data into actionable insights for SMEs 
              across Africa.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold glow-cyan hover:glow-cyan-hover transition-all duration-300"
              >
                Request Demo
              </Link>
              <Link
                href="#features"
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
              >
                Explore Features
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
                Small and medium enterprises generate <strong className="text-white">massive amounts of data</strong> 
                from sales, inventory, customers, and operations. But <strong className="text-white">90% of SMEs 
                lack the tools or expertise</strong> to turn this data into actionable insights.
              </p>
              <p className="text-xl text-silver/90">
                Enterprise BI tools like Tableau and Power BI are too expensive and complex for SMEs. 
                Spreadsheets don&apos;t scale. <strong className="text-white">InsightHub fills the gap.</strong>
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
                { step: '1', title: 'Connect', desc: 'Link data sources (CSV, API, DB)' },
                { step: '2', title: 'Build', desc: 'Drag-and-drop dashboard creation' },
                { step: '3', title: 'Analyze', desc: 'AI-powered insights & alerts' },
                { step: '4', title: 'Share', desc: 'Collaborate with team' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
                  <Icon size={32} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-silver/80">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Retail Analytics', desc: 'Track sales, inventory, and customer behavior in real-time.' },
              { title: 'Financial Reporting', desc: 'Automate P&L, cash flow, and financial statement generation.' },
              { title: 'Marketing Performance', desc: 'Measure campaign ROI, customer acquisition cost, and LTV.' },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center"
              >
                <PieChart size={40} className="text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-silver/80 text-sm">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-2xl">
            <div className="text-center mb-8">
              <div className="inline-block bg-warning/20 text-warning px-6 py-2 rounded-full font-semibold mb-4">
                🛠️ In Development
              </div>
              <h2 className="text-4xl font-bold mb-4">Alpha Testing Phase</h2>
              <p className="text-xl text-silver/90">
                InsightHub is in alpha testing with select SME partners. Public beta launching Q3 2025.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Beta Launch', value: 'Q3 2025' },
                { label: 'Data Sources', value: '20+' },
                { label: 'Templates', value: '50+' },
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
<h2 className="text-4xl font-bold mb-6">Join the Beta Program</h2>
<p className="text-xl text-silver/90 mb-8">
Get early access to InsightHub and help shape the future of SME analytics in Africa.
</p>
<Link
           href="/contact"
           className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
         >
Join Beta Waitlist
</Link>
</div>
</div>
</section>
</div>
)
}