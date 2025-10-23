
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sprout, MessageSquare, Smartphone, Cloud, Globe, Users } from 'lucide-react'

export default function FarmersSolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
className="max-w-4xl"
>
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
<Sprout size={32} className="text-white" />
</div>
<h1 className="text-5xl md:text-6xl font-bold text-gradient">For Farmers & Cooperatives</h1>
</div>
<p className="text-2xl text-silver/90 mb-8">
Low-bandwidth farm intelligence delivered via WhatsApp and SMS, designed for
smallholders and rural communities across Africa.
</p>
</motion.div>
</div>
</section>
  {/* Why Semma */}
  <section className="py-24 bg-black/20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Built for African Farmers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: MessageSquare,
            title: 'WhatsApp & SMS',
            description: 'No app downloads. Get alerts on the phones you already use.',
          },
          {
            icon: Cloud,
            title: 'Low Bandwidth',
            description: 'Works on 2G networks. Text-based alerts use minimal data.',
          },
          {
            icon: Globe,
            title: 'Local Languages',
            description: 'Alerts in English, Swahili, Twi, and more coming soon.',
          },
          {
            icon: Smartphone,
            title: 'Basic Phone Support',
            description: 'No smartphone required. SMS fallback for feature phones.',
          },
          {
            icon: Users,
            title: 'Cooperative Groups',
            description: 'Group messaging and shared insights for cooperative members.',
          },
          {
            icon: Sprout,
            title: 'Actionable Insights',
            description: 'Simple, clear recommendations you can act on immediately.',
          },
        ].map((feature, index) => {
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
              <Icon size={32} className="text-success mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-silver/80 text-sm">{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>

  {/* How It Helps */}
  <section className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">What You Get</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {[
          {
            title: 'Weekly Farm Health Reports',
            description: 'Satellite monitoring detects changes in your crop health (NDVI) and sends weekly WhatsApp updates.',
            example: 'Example: "Your maize field shows reduced greenness in the north corner. Check for pests or water stress."',
          },
          {
            title: 'Weather Alerts',
            description: 'Get localized weather forecasts and extreme weather warnings days in advance.',
            example: 'Example: "Heavy rains expected in 3 days. Consider early harvest for mature crops."',
          },
          {
            title: 'Pest & Disease Warnings',
            description: 'Community-sourced alerts when pests or diseases are detected in your area.',
            example: 'Example: "Fall armyworm reported 5km away. Inspect your field and apply controls if needed."',
          },
          {
            title: 'Market Prices',
            description: 'Daily updates on crop prices from nearby markets to help you time your sales.',
            example: 'Example: "Maize price at Techiman Market: GHS 180/bag (+5% this week)."',
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full" />
              {item.title}
            </h3>
            <p className="text-silver/90 mb-4">{item.description}</p>
            <div className="bg-success/10 border-l-4 border-success p-4 rounded-r-lg">
              <p className="text-sm text-silver/80 italic">{item.example}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Pricing */}
  <section className="py-24 bg-black/20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Affordable Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            name: 'Free Tier',
            price: 'Free',
            period: '',
            features: ['Weekly farm health report', 'Basic weather alerts', 'SMS delivery', 'Community pest alerts'],
            cta: 'Join Now',
          },
          {
            name: 'Premium',
            price: 'GHS 15',
            period: '/month',
            features: ['Daily updates', 'Detailed NDVI maps', 'WhatsApp delivery', 'Market prices', 'Priority support'],
            cta: 'Subscribe',
            popular: true,
          },
          {
            name: 'Cooperative',
            price: 'Custom',
            period: '',
            features: ['Bulk pricing for groups', 'Extension officer dashboard', 'Training materials', 'Custom alerts', 'Dedicated support'],
            cta: 'Contact Us',
          },
        ].map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass p-8 rounded-2xl relative ${plan.popular ? 'border-2 border-success' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-success text-dark-bg px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-silver/60">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-silver/80">
                  <div className="w-2 h-2 bg-success rounded-full mt-1.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-success text-dark-bg hover:bg-success/90'
                  : 'border-2 border-success text-success hover:bg-success/10'
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* How to Join */}
  <section className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">How to Get Started</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Send WhatsApp', desc: 'Message +233 XX XXX XXXX' },
            { step: '2', title: 'Register', desc: 'Share your name & location' },
            { step: '3', title: 'Confirm Field', desc: 'Mark your farm on map' },
            { step: '4', title: 'Receive Alerts', desc: 'Start getting insights' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-dark-bg">
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

  {/* Testimonials */}
  <section className="py-24 bg-black/20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">What Farmers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            quote: "Semma AI warned me about crop stress before I could see it with my eyes. I was able to save my maize crop.",
            author: "Kwame A.",
            location: "Northern Region, Ghana",
          },
          {
            quote: "The weekly WhatsApp messages are simple and clear. I don't need internet to get the alerts.",
            author: "Grace M.",
            location: "Rift Valley, Kenya",
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-xl"
          >
            <p className="text-lg text-silver/90 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
            <div>
              <div className="font-bold">{testimonial.author}</div>
              <div className="text-sm text-silver/60">{testimonial.location}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6">Join 50+ Farmers Using Semma AI</h2>
        <p className="text-xl text-silver/90 mb-8">
          Get started for free. No credit card, no app download required. 
          Just send a WhatsApp message.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-success text-dark-bg px-10 py-4 rounded-lg font-semibold text-lg hover:bg-success/90 transition-all duration-300"
          >
            Join via WhatsApp
          </Link>
          <Link
            href="/ventures/semma"
            className="border-2 border-success text-success px-10 py-4 rounded-lg font-semibold text-lg hover:bg-success/10 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
</div>
)
}