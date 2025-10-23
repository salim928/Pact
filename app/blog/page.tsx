
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Building AI Products on a $0 Budget: Lessons from Pactium',
    excerpt: 'How we built and deployed three AI-powered ventures using only open-source tools and free-tier services.',
    date: 'October 15, 2024',
    author: 'Pactium Team',
    category: 'Product',
    readTime: '8 min read',
    slug: 'building-ai-products-zero-budget',
  },
  {
    title: 'Why WhatsApp is the Future of AgriTech in Africa',
    excerpt: 'The case for low-bandwidth, mobile-first solutions in rural communities and how Semma AI delivers satellite insights via WhatsApp.',
    date: 'September 28, 2024',
    author: 'Pactium Team',
    category: 'AgriTech',
    readTime: '6 min read',
    slug: 'whatsapp-future-agritech-africa',
  },
  {
    title: 'From Pilot to Production: Our Framework for Validating Tech Solutions',
    excerpt: 'A step-by-step guide to running meaningful pilots that lead to scalable products and sustainable impact.',
    date: 'September 10, 2024',
    author: 'Pactium Team',
    category: 'Impact',
    readTime: '10 min read',
    slug: 'pilot-to-production-framework',
  },
  {
    title: 'How LLMs are Transforming Legal Tech for SMEs',
    excerpt: 'The technical architecture behind LegalBro and how we achieve 95% accuracy in contract risk detection.',
    date: 'August 22, 2024',
    author: 'Pactium Team',
    category: 'LegalTech',
    readTime: '12 min read',
    slug: 'llms-transforming-legal-tech',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32">
        {/* Background decorations */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/20 to-transparent blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Calendar size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-silver/90">Regular Updates</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Insights & </span>
              <span className="text-gradient">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver/90 leading-relaxed">
              Product updates, technical deep-dives, and lessons learned building tech for Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass-strong p-10 rounded-3xl card-hover group cursor-pointer relative overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    {/* Corner glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="glass px-4 py-2 rounded-xl text-cyan-400 text-sm font-semibold border border-cyan-500/20">
                          {post.category}
                        </div>
                        <div className="text-sm text-silver/60">{post.readTime}</div>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                        {post.title}
                      </h2>
                      
                      <p className="text-lg text-silver/90 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-silver/70">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-cyan-400" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-cyan-400" />
                            {post.author}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all duration-300">
                          Read More
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        
        {/* Background orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-transparent blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/20 to-transparent blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass-strong p-12 md:p-16 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Stay Updated</span>
            </h2>
            <p className="text-xl text-silver/90 mb-8 leading-relaxed">
              Get notified when we publish new articles, product updates, and pilot reports.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl glass border border-white/20 text-white placeholder:text-silver/50 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="btn-primary px-8 py-4 rounded-xl font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}