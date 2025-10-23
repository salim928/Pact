
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, Clock, DollarSign, Shield, TrendingUp, CheckCircle } from 'lucide-react'

export default function LawFirmsSolutionsPage() {
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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Scale size={32} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">For Law Firms & SMEs</h1>
            </div>
            <p className="text-2xl text-silver/90 mb-8">
              AI-powered legal tech that saves time, reduces risk, and delivers ROI from day one 
              with transparent pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">The Business Case for LegalBro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { metric: '10x', label: 'Faster Review', desc: '3 days → 30 minutes' },
              { metric: '95%', label: 'Accuracy Rate', desc: 'AI-powered detection' },
              { metric: '$50K+', label: 'Annual Savings', desc: 'Per associate' },
              { metric: '3x', label: 'More Clients', desc: 'Same resources' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-silver/60">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: 'Time Savings',
                description: 'Automated contract review reduces manual work from days to minutes.',
              },
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'AI flags high-risk clauses with severity scoring and precedent citations.',
              },
              {
                icon: CheckCircle,
                title: 'Quality Assurance',
                description: 'Consistent review standards across all contracts and associates.',
              },
              {
                icon: DollarSign,
                title: 'Cost Efficiency',
                description: 'Reduce overhead while increasing billable hours and client capacity.',
              },
              {
                icon: TrendingUp,
                title: 'Scalability',
                description: 'Handle 10x more contracts without hiring additional staff.',
              },
              {
                icon: Scale,
                title: 'Lawyer-in-Loop',
                description: 'Human oversight for complex cases ensures accuracy and compliance.',
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
                  <Icon size={32} className="text-accent-cyan mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-silver/80 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Flexible Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$299',
                period: '/month',
                features: ['Up to 50 contracts/month', 'Basic risk detection', 'Email support', 'Audit logs'],
                cta: 'Start Free Trial',
              },
              {
                name: 'Professional',
                price: '$799',
                period: '/month',
                features: ['Up to 200 contracts/month', 'Advanced risk scoring', 'Priority support', 'Custom clauses library', 'Lawyer escalation'],
                cta: 'Start Free Trial',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: ['Unlimited contracts', 'Dedicated account manager', '24/7 support', 'Custom integrations', 'On-premise deployment'],
                cta: 'Contact Sales',
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass p-8 rounded-2xl relative ${plan.popular ? 'border-2 border-accent-cyan' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-cyan text-dark-bg px-4 py-1 rounded-full text-sm font-semibold">
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
                      <CheckCircle size={16} className="text-success mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white glow-cyan hover:glow-cyan-hover'
                      : 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Lawyers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "LegalBro has transformed our contract review process. We're now handling 3x more clients with the same team, and our associates love the time savings.",
                author: "Senior Partner",
                firm: "Corporate Law Firm, Accra",
              },
              {
                quote: "The AI risk detection caught clauses that even our experienced lawyers missed. It's like having an extra associate who never sleeps.",
                author: "Managing Associate",
                firm: "Commercial Law Practice, Nairobi",
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
                  <div className="text-sm text-silver/60">{testimonial.firm}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Start Your Free Trial Today</h2>
            <p className="text-xl text-silver/90 mb-8">
              No credit card required. Get full access to LegalBro for 14 days and see the ROI yourself.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-primary text-white px-10 py-4 rounded-lg font-semibold text-lg glow-cyan hover:glow-cyan-hover transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <p className="text-sm text-silver/60 mt-4">
              Questions? <Link href="/contact" className="text-accent-cyan hover:underline">Schedule a demo</Link> with our team.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}