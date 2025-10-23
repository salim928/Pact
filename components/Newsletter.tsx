'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Send, Sparkles, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [wantPilot, setWantPilot] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate API call
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: 'Signing you up...',
        success: 'Welcome to Pactium! Check your email.',
        error: 'Something went wrong. Please try again.',
      }
    )

    setEmail('')
    setWantPilot(false)
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass card container */}
          <div className="glass-strong rounded-3xl p-10 md:p-14 gradient-border">
            {/* Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6"
              >
                <Sparkles className="text-cyan-400 w-5 h-5" />
                <span className="text-silver font-medium">Join Our Network</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Ready to Build </span>
                <span className="text-gradient">Something Great?</span>
              </h2>
              
              <p className="text-xl text-silver/90 max-w-2xl mx-auto leading-relaxed">
                Partner with us to pilot innovative solutions, or stay updated on our latest ventures 
                and opportunities across Africa.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-5 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-silver/50 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-lg"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
                
                <button
                  type="submit"
                  className="group btn-primary px-10 py-5 text-lg flex items-center justify-center gap-3 whitespace-nowrap"
                >
                  <span className="relative z-10">Get Started</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                </button>
              </div>

              {/* Checkbox options */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-silver/80 cursor-pointer group hover:text-white transition-colors">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={wantPilot}
                      onChange={(e) => setWantPilot(e.target.checked)}
                      className="w-5 h-5 rounded border-2 border-silver/30 bg-white/5 checked:bg-cyan-500 checked:border-cyan-500 transition-all duration-300 cursor-pointer"
                    />
                    <CheckCircle className={`absolute inset-0 w-5 h-5 text-white pointer-events-none transition-opacity ${wantPilot ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  <span className="text-base">I&apos;m interested in running a pilot project</span>
                </label>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-silver/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Early access to pilots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Monthly insights</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-silver/60 text-sm">
              Join 500+ partners, investors, and organizations building the future of Africa&apos;s tech ecosystem.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}