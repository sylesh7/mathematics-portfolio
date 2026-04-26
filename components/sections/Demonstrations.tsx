'use client'

import { motion } from 'framer-motion'
import { Play, BookOpen } from 'lucide-react'

const demonstrations = [
  {
    title: 'Quadratic Functions Visualization',
    description: 'Interactive exploration of how parameters affect parabola shape and position',
    topic: 'Algebra',
    format: 'Interactive'
  },
  {
    title: 'Pythagorean Theorem Proof',
    description: 'Visual proof and derivation of the fundamental geometric relationship',
    topic: 'Geometry',
    format: 'Video + Interactive'
  },
  {
    title: 'Sine Wave Animation',
    description: 'Cinematic visualization of periodic functions and their real-world applications',
    topic: 'Trigonometry',
    format: 'Animation'
  },
  {
    title: 'Calculus Derivative Explorer',
    description: 'Interactive tool to understand rates of change and tangent lines',
    topic: 'Calculus',
    format: 'Interactive'
  },
  {
    title: 'Normal Distribution Bell Curve',
    description: 'Statistical exploration of probability and standard deviation',
    topic: 'Statistics',
    format: 'Interactive'
  },
  {
    title: 'Fractal Patterns & Recursion',
    description: 'Beautiful mathematics behind self-similar patterns in nature',
    topic: 'Advanced',
    format: 'Visualization'
  }
]

export default function Demonstrations() {
  return (
    <section className="py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Interactive Demonstrations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Cinematic visualizations and interactive tools that bring mathematical concepts to life.
          </p>
        </motion.div>

        {/* Demonstrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {demonstrations.map((demo, idx) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-background to-muted/50 border border-border hover:border-primary transition-all duration-300"
            >
              {/* Background with animation */}
              <motion.div
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{ 
                  duration: 8 + idx,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(155, 89, 182, 0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              />

              <div className="relative z-10 p-4 md:p-6 min-h-56 md:h-64 flex flex-col justify-between">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <Play size={24} className="fill-current" />
                  </motion.div>

                  <h3 className="font-heading text-base md:text-xl font-bold text-foreground mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {demo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {demo.topic}
                    </span>
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded">
                      {demo.format}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                    aria-label={`View ${demo.title}`}
                  >
                    <BookOpen size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
              Featured Demo: The Golden Ratio
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl">
              Explore the beautiful mathematics behind the golden ratio and discover how it appears in nature, art, and architecture. This interactive demonstration reveals the mathematical elegance underlying this universal constant.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Play size={20} />
              Launch Interactive Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
