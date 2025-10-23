'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Smartphone, Cloud, Brain, Zap } from 'lucide-react'

const techCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend',
    tech: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Brain,
    title: 'AI & ML',
    tech: ['OpenAI', 'LangChain', 'RAG Systems', 'Computer Vision'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    tech: ['React Native', 'Flutter', 'WhatsApp API', 'PWAs'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    tech: ['AWS', 'Docker', 'Vercel', 'CI/CD'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Integration',
    tech: ['REST APIs', 'GraphQL', 'WebSockets', 'Webhooks'],
    gradient: 'from-yellow-500 to-orange-500',
  },
]

export default function TechStack() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Code2 className="text-cyan-400 w-5 h-5" />
            <span className="text-silver font-medium">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Built with </span>
            <span className="text-gradient">Modern Tech</span>
          </h2>
          <p className="text-xl text-silver/80 max-w-2xl mx-auto">
            We use proven, scalable technologies to build products that work reliably in African markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass px-3 py-1 rounded-full text-sm text-silver/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
