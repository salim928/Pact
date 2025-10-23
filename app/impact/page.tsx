
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, TrendingUp, Users, MapPin, Calendar } from 'lucide-react'

const caseStudies = [
  {
    title: 'Semma AI: Satellite Insights for Smallholder Farmers',
    venture: 'Semma AI',
    location: 'Northern Region, Ghana',
    date: 'Q4 2024',
    duration: '12 weeks',
    participants: '50+ farmers',
    metrics: [
      { label: 'Farmers Onboarded', value: '52' },
      { label: 'Critical Alerts Sent', value: '12' },
      { label: 'Response Rate', value: '85%' },
      { label: 'Yield Improvement', value: '15%' },
    ],
    highlights: [
      'Early detection of crop stress saved 8 farms from significant loss',
      'WhatsApp delivery achieved 85% response rate vs 40% for SMS',
      'Extension officers reported 60% reduction in field visit time',
    ],
    downloadUrl: '/impact/semma-pilot-report.pdf',
  },
  {
    title: 'LegalBro: AI-Powered Contract Review for Pro-Bono Legal Aid',
    venture: 'LegalBro',
    location: 'Nairobi, Kenya',
    date: 'Q3 2024',
    duration: '8 weeks',
    participants: 'Legal Aid Foundation',
    metrics: [
      { label: 'Documents Reviewed', value: '120+' },
      { label: 'Time Saved', value: '90%' },
      { label: 'Accuracy Rate', value: '95%' },
      { label: 'Clients Served', value: '3x' },
    ],
    highlights: [
      'Reduced contract review time from 3 days to 30 minutes',
      'Enabled foundation to serve 3x more clients with same staff',
      'Caught high-risk clauses missed by manual review in 15% of cases',
    ],
    downloadUrl: '/impact/legalbro-pilot-report.pdf',
  },
]

export default function ImpactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            >
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-silver font-medium">Real Impact, Real Data</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Measuring </span>
              <span className="text-gradient">Impact</span>
              <span className="text-white">, Building </span>
              <span className="text-gradient">Trust</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver/90 max-w-3xl mx-auto leading-relaxed">
              Real pilots, real data, real outcomes. Every Pactium venture is validated through 
              rigorous pilots with measurable impact metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="relative py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Impact By Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { label: 'Pilots Run', value: '50+', icon: TrendingUp, gradient: 'from-cyan-500 to-blue-500' },
              { label: 'Users Impacted', value: '1,000+', icon: Users, gradient: 'from-green-500 to-emerald-500' },
              { label: 'Countries', value: '5', icon: MapPin, gradient: 'from-purple-500 to-pink-500' },
              { label: 'Active Ventures', value: '5', icon: Calendar, gradient: 'from-yellow-500 to-orange-500' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 card-hover group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-silver/80">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Pilot Case Studies</span>
            </h2>
            <p className="text-xl text-silver/80 max-w-2xl mx-auto">
              Real results from real deployments. See how our ventures are making impact.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-strong p-10 md:p-12 rounded-3xl card-hover group relative overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Corner glow */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tl from-green-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="glass px-4 py-2 rounded-xl text-green-400 font-semibold text-sm border border-green-500/20">
                        {study.venture}
                      </div>
                      <div className="text-silver/60 text-sm">{study.date}</div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{study.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-silver/80">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-400" />
                        {study.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-green-400" />
                        {study.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-green-400" />
                        {study.participants}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="glass p-5 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-silver/80">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-6 text-green-400">Key Outcomes</h4>
                    <ul className="space-y-4">
                      {study.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-silver/90 text-lg">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download CTA */}
                  <Link
                    href={study.downloadUrl}
                    className="inline-flex items-center gap-3 btn-primary px-8 py-3 rounded-xl font-semibold"
                  >
                    <Download size={20} />
                    Download Full Report (PDF)
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Framework */}
      <section className="relative py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Impact Framework</span>
            </h2>
            <p className="text-xl text-silver/80 max-w-2xl mx-auto">
              A systematic approach to measuring and maximizing social impact.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: 'Theory of Change',
                  description: 'Every pilot begins with clear assumptions about how technology creates impact.',
                },
                {
                  title: 'Baseline & Target Metrics',
                  description: 'We establish measurable KPIs before deployment and track progress weekly.',
                },
                {
                  title: 'Mixed Methods Evaluation',
                  description: 'Combining quantitative data with qualitative user feedback and case studies.',
                },
                {
                  title: 'Independent Validation',
                  description: 'Partner organizations verify data collection and impact claims.',
                },
                {
                  title: 'Transparent Reporting',
                  description: 'All pilot reports are publicly available with raw data and methodology.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-strong p-8 rounded-2xl card-hover group"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {index + 1}
                    </div>
                    {item.title}
                  </h3>
                  <p className="text-silver/90 ml-13 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        {/* Background orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-transparent blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/20 to-transparent blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass-strong p-12 md:p-16 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Partner on Impact</span>
            </h2>
            <p className="text-xl text-silver/90 mb-8 leading-relaxed">
              We&apos;re always looking for partners to co-design and validate new solutions. 
              Let&apos;s create measurable impact together.
            </p>
            <Link
              href="/contact"
              className="inline-block btn-primary px-10 py-4 rounded-xl font-semibold text-lg"
            >
              Discuss a Pilot
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}