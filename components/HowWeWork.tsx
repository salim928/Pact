'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Rocket, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Lightbulb,
    title: 'Build',
    description: 'Rapid MVP development using proven tech stacks. From idea to working prototype in weeks.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    number: '2',
    icon: Rocket,
    title: 'Pilot',
    description: 'Deploy with real users. Gather feedback, measure impact, validate assumptions with data.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Scale',
    description: 'Iterate to product-market fit. Expand reach, secure funding, build sustainable revenue.',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function HowWeWork() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-silver/80 max-w-2xl mx-auto">
            A proven methodology that takes ideas from concept to scale, fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 opacity-20"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 card-hover group">
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <Icon size={36} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-center text-white group-hover:text-gradient transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-silver/80 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow indicator for next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 text-cyan-400">
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">Why This Works</h4>
            <p className="text-silver/80">
              We&apos;ve refined this process across 50+ pilots. By moving fast, testing with real users, 
              and iterating based on data, we reduce risk and maximize impact. Our ventures don&apos;t just 
              launch—they scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}