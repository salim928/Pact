'use client'

import { motion } from 'framer-motion'
import { Users, Target, Zap, Globe } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Building technology that creates measurable impact across Africa.',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'From concept to pilot in weeks, not months. Speed is our competitive advantage.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Every product is built with real users, validated through pilots, and refined with feedback.',
  },
  {
    icon: Globe,
    title: 'African-Forward',
    description: 'Solutions designed for African realities: low bandwidth, mobile-first, multilingual.',
  },
]

const team = [
  {
    id: 'founder-1',
    name: 'Salim Adams',
    role: 'Founder & CEO',
    image: '/team/salim.jpg',
    bio: 'A tech lead with experience building scalable systems across emerging markets.',
  },
  {
    id: 'founder-2',
    name: 'Sulf Adams',
    role: 'Co-Founder & CTO',
    image: '/team/sulf.jpg', // Placeholder
    bio: 'AI/ML expert specialized in NLP and computer vision applications for African languages.',
  },
  {
    id: 'founder-3',
    name: 'Farhan Seidu',
    role: 'Co-Founder & COO',
    image: '/team/farhan.jpg', // Placeholder
    bio: 'Operations specialist with experience scaling tech startups across Sub-Saharan Africa.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
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
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            >
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-silver font-medium">About Pactium Group</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Building the </span>
              <span className="text-gradient">Future of African Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Pactium is a venture studio creating intelligent products that solve real problems 
              across Africa. We build, pilot, and scale — fast.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '5', label: 'Active Ventures' },
                { value: '50+', label: 'Pilots Run' },
                { value: '3', label: 'Countries' },
                { value: '100%', label: 'AI-Powered' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-strong rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-silver/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="relative py-32 overflow-hidden">
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
              <span className="text-gradient">Our Core Values</span>
            </h2>
            <p className="text-xl text-silver/80 max-w-2xl mx-auto">
              The principles that guide everything we build and every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-strong p-8 rounded-2xl hover:scale-105 transition-all duration-500 card-hover group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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

      {/* Team Section */}
      <section className="relative py-32">
        {/* Background */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Meet the Founders</span>
            </h2>
            <p className="text-xl text-silver/80 max-w-2xl mx-auto">
              Experienced builders passionate about creating technology for Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
{team.map((member, index) => (
<motion.div
key={member.id}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.15, duration: 0.6 }}
className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 card-hover group"
>
<div className="relative w-40 h-40 mx-auto mb-6">
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors duration-500">
    <Image
      src={member.image}
      alt={member.name}
      fill
      sizes="(max-width: 768px) 160px, 160px"
      className="object-cover group-hover:scale-110 transition-transform duration-500"
      priority={index === 0}
    />
  </div>
</div>
<h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">{member.name}</h3>
<p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
<p className="text-silver/80 leading-relaxed">{member.bio}</p>
</motion.div>
))}
</div>
</div>
</section>
  {/* CTA Section */}
  <section className="relative py-32 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Ready to Build Together?</span>
        </h2>
        <p className="text-xl text-silver/80 mb-8">
          Whether you&apos;re looking for a technical partner or want to bring an idea to life, let&apos;s talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn-primary px-10 py-4 text-lg">
            Get in Touch
          </a>
          <a href="/ventures" className="glass-strong px-10 py-4 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 border border-white/10">
            View Our Work
          </a>
        </div>
      </motion.div>
    </div>
  </section>
</div>
)
}