
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Users, Heart, Zap } from 'lucide-react'

const openings = [
  {
    title: 'Full-Stack Engineer',
    type: 'Full-Time',
    location: 'Accra / Remote',
    description: 'Build production-grade web and mobile applications using React, Next.js, and React Native.',
    skills: ['React/Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS/Vercel'],
  },
  {
    title: 'AI/ML Engineer',
    type: 'Full-Time',
    location: 'Nairobi / Remote',
    description: 'Develop AI agents, RAG systems, and LLM-powered applications for real-world impact.',
    skills: ['Python', 'LLMs (GPT/Llama)', 'RAG/Vector DBs', 'FastAPI', 'ML Ops'],
  },
  {
    title: 'Product Designer',
    type: 'Contract',
    location: 'Remote',
    description: 'Design intuitive, accessible interfaces for African users across web and mobile platforms.',
    skills: ['Figma', 'UI/UX', 'Mobile Design', 'Accessibility', 'User Research'],
  },
  {
    title: 'Pilot Coordinator',
    type: 'Part-Time',
    location: 'Flexible',
    description: 'Manage pilot deployments, coordinate with partners, and collect impact data in the field.',
    skills: ['Project Management', 'M&E', 'Stakeholder Relations', 'Local Languages', 'Data Collection'],
  },
]

const values = [
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'We ship MVPs in weeks, not months. Bias toward action.',
  },
  {
    icon: Users,
    title: 'User First',
    description: 'Every decision starts with the end user. Build what people need.',
  },
  {
    icon: Heart,
    title: 'Impact Driven',
    description: 'We measure success by lives improved, not just code shipped.',
  },
  {
    icon: Code,
    title: 'Own It',
    description: 'Take ownership of projects from concept to deployment.',
  },
]

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
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
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-silver font-medium">Join Our Team</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Build the </span>
              <span className="text-gradient">Future</span>
              <br />
              <span className="text-white">of </span>
              <span className="text-gradient">African Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Join a team of builders creating products that scale across Africa. 
              Remote-first, impact-driven, fast-paced.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#openings" className="btn-primary px-10 py-4 text-lg">
                View Open Roles
              </a>
              <a href="#culture" className="glass-strong px-10 py-4 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 border border-white/10">
                Our Culture
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="culture" className="relative py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-silver/80 max-w-2xl mx-auto">
              What drives us and how we work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-strong p-8 rounded-2xl hover:scale-105 transition-all duration-500 card-hover group text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-silver/80 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Open Positions</span>
            </h2>
            <p className="text-xl text-silver/80 max-w-2xl mx-auto">
              Join us in building products that matter. All roles are remote-friendly.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong p-10 rounded-3xl card-hover group relative overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Corner glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="glass px-4 py-2 rounded-xl text-cyan-400 border border-cyan-500/20">
                          {job.type}
                        </div>
                        <div className="glass px-4 py-2 rounded-xl text-silver/80">
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-6 md:mt-0 btn-primary px-8 py-3 rounded-xl font-semibold text-center inline-block"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <p className="text-silver/90 text-lg mb-6 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <div
                        key={skill}
                        className="glass px-4 py-2 rounded-xl text-sm text-silver/90 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
</div>
</section>
  {/* Benefits */}
  <section className="relative py-32">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Why Join Pactium</span>
        </h2>
        <p className="text-xl text-silver/80 max-w-2xl mx-auto">
          More than just a job—be part of a movement building Africa&apos;s tech future.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: 'Remote First',
            description: 'Work from anywhere in Africa or globally. Flexible hours.',
          },
          {
            title: 'Competitive Pay',
            description: 'Market-rate salaries with equity options for early team members.',
          },
          {
            title: 'Learn & Grow',
            description: 'Work with cutting-edge tech: AI, satellite data, mobile-first design.',
          },
          {
            title: 'Real Impact',
            description: 'Your work directly improves lives across Africa. See the impact.',
          },
          {
            title: 'Fast Pace',
            description: 'Ship features weekly. No bureaucracy, just building.',
          },
          {
            title: 'Great Team',
            description: 'Work with talented, mission-driven people who care deeply.',
          },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-strong p-8 rounded-2xl card-hover group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-silver/80 leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="relative py-32">
    {/* Background orbs */}
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-transparent blur-[120px]"></div>
    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent blur-[120px]"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center glass-strong p-12 md:p-16 rounded-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Don&apos;t See Your Role?</span>
        </h2>
        <p className="text-xl text-silver/90 mb-8 leading-relaxed">
          We&apos;re always looking for exceptional talent. Send us your portfolio 
          and tell us how you&apos;d like to contribute.
        </p>
        <Link
          href="/contact"
          className="inline-block btn-primary px-10 py-4 rounded-xl font-semibold text-lg"
        >
          Get In Touch
        </Link>
      </motion.div>
    </div>
  </section>
</div>
)
}