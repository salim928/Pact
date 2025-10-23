'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'general',
    message: '',
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      toast.error('Please agree to the data handling terms')
      return
    }

    // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    // Get your form ID from https://formspree.io after signing up
    const FORMSPREE_FORM_ID = 'movkokaz' // e.g., 'xpznqoqr'
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Message sent! We\'ll get back to you within 24 hours.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: 'general',
          message: '',
          consent: false,
        })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-silver font-medium">Let&apos;s Connect</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Get In </span>
              <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver/90 max-w-2xl mx-auto">
              Ready to pilot a venture or partner with Pactium? Let&apos;s talk about building something impactful together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Contact Information</h2>
                <p className="text-silver/80 mb-8">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-6">
                <div className="glass-strong p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-2">Email</div>
                    <a href="mailto:hello@pactium.africa" className="text-silver/80 hover:text-cyan-400 transition-colors">
                      hello@pactium.africa
                    </a>
                  </div>
                </div>

                <div className="glass-strong p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-2">Phone</div>
                    <a href="tel:+233208878742" className="text-silver/80 hover:text-green-400 transition-colors">
                      +233 208 878 742
                    </a>
                  </div>
                </div>

                <div className="glass-strong p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-2">Location</div>
                    <p className="text-silver/80">
                      Accra, Ghana<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 glass-strong p-8 rounded-3xl border border-white/10">
                <h3 className="font-bold text-xl text-white mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="/impact" className="flex items-center gap-3 text-silver/80 hover:text-cyan-400 transition-colors group">
                      <span className="text-2xl">📊</span>
                      <span className="group-hover:translate-x-1 transition-transform">Download Pilot Reports</span>
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="flex items-center gap-3 text-silver/80 hover:text-cyan-400 transition-colors group">
                      <span className="text-2xl">💼</span>
                      <span className="group-hover:translate-x-1 transition-transform">Join Our Team</span>
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="flex items-center gap-3 text-silver/80 hover:text-cyan-400 transition-colors group">
                      <span className="text-2xl">🔒</span>
                      <span className="group-hover:translate-x-1 transition-transform">Privacy & Data Handling</span>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="glass-strong p-10 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-silver/50 focus:outline-none focus:border-accent-cyan"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-silver/50 focus:outline-none focus:border-accent-cyan"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-silver/50 focus:outline-none focus:border-accent-cyan"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      I&apos;m interested in *
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-accent-cyan"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="pilot">Running a Pilot</option>
                      <option value="partnership">Partnership</option>
                      <option value="investment">Investment/Funding</option>
                      <option value="career">Careers</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-silver/50 focus:outline-none focus:border-accent-cyan resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-silver/30 bg-white/5 mt-0.5"
                    />
                    <span className="text-sm text-silver/80">
                      I agree to Pactium&apos;s data handling practices and consent to being contacted about my inquiry. 
                      Read our <a href="/privacy" className="text-accent-cyan hover:underline">Privacy Policy</a>.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary px-8 py-5 text-lg flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}