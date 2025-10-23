'use client'

import { motion } from 'framer-motion'
import { Code2, Bot, Target, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Product Development',
    description:
      'End-to-end web and mobile applications built with modern tech stacks. From concept to production-ready solutions.',
    gradient: 'from-cyan-500 to-blue-500',
    hoverGlow: 'group-hover:shadow-cyan-500/50',
  },
  {
    icon: Bot,
    title: 'AI & Agents',
    description:
      'Intelligent automation using LLMs, RAG systems, and custom AI agents that solve real problems at scale.',
    gradient: 'from-purple-500 to-pink-500',
    hoverGlow: 'group-hover:shadow-purple-500/50',
  },
  {
    icon: Target,
    title: 'Pilots & Grants',
    description:
      'Rapid proof-of-concept deployments with real users. We validate, iterate, and scale with measurable impact.',
    gradient: 'from-green-500 to-emerald-500',
    hoverGlow: 'group-hover:shadow-green-500/50',
  },
]

export default function ValueBlocks() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="text-cyan-400 w-5 h-5" />
            <span className="text-silver font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">What We Do</span>
          </h2>
          <p className="text-xl text-silver/80 max-w-2xl mx-auto">
            We combine cutting-edge technology with deep market understanding to deliver solutions that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative glass-strong p-8 rounded-3xl hover:scale-105 transition-all duration-500 card-hover ${value.hoverGlow}`}
              >
                {/* Hover gradient border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-silver/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${value.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}