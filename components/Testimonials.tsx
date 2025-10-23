'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Pactium transformed our legal document review process. What used to take days now takes minutes, and our lawyers can focus on high-value work.",
    author: "James Mensah",
    role: "Managing Partner",
    company: "Accra Legal Associates",
    rating: 5,
  },
  {
    quote: "The satellite monitoring system has been a game-changer for our cooperative. We can now proactively address crop issues before they become serious problems.",
    author: "Amina Ibrahim",
    role: "Cooperative Director",
    company: "Northern Region Farmers Network",
    rating: 5,
  },
  {
    quote: "Working with Pactium was seamless. They understood our local market challenges and delivered a solution that actually works for our context.",
    author: "David Ochieng",
    role: "Operations Manager",
    company: "East Africa Logistics Hub",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
            <span className="text-silver font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trusted by </span>
            <span className="text-gradient">Leaders</span>
          </h2>
          <p className="text-xl text-silver/80 max-w-2xl mx-auto">
            Hear from partners who are transforming their industries with our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={64} className="text-cyan-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-silver/90 mb-6 leading-relaxed italic relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-sm text-cyan-400">{testimonial.role}</div>
                <div className="text-sm text-silver/60">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
