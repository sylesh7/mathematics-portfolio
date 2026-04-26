'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

const materials = [
  {
    title: 'Algebra Worksheets Bundle',
    description: 'Comprehensive set of practice problems and solutions for algebra fundamentals',
    type: 'Worksheet',
    format: 'PDF'
  },
  {
    title: 'Interactive Geometry Activities',
    description: 'Hands-on activities using GeoGebra for exploring geometric concepts',
    type: 'Activity',
    format: 'Digital'
  },
  {
    title: 'Calculus Study Guide',
    description: 'Complete study guide with examples, practice problems, and detailed solutions',
    type: 'Guide',
    format: 'PDF'
  },
  {
    title: 'Statistics Lab Experiments',
    description: 'Real-world data collection and analysis experiments for students',
    type: 'Lab',
    format: 'Digital'
  },
  {
    title: 'Problem-Solving Strategies',
    description: 'Techniques and strategies for tackling complex mathematical problems',
    type: 'Strategy',
    format: 'PDF'
  },
  {
    title: 'Trigonometry Reference Card',
    description: 'Quick reference guide with formulas, identities, and useful relationships',
    type: 'Reference',
    format: 'PDF'
  }
]

export default function Materials() {
  return (
    <section id="materials" className="py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Teaching Materials
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Curated collection of educational resources, worksheets, and activities to enhance learning outcomes.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {materials.map((material, idx) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group p-4 md:p-6 bg-background rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <FileText className="text-primary" size={20} />
                </div>
                <span className="text-xs font-semibold bg-accent/10 text-accent px-2 md:px-3 py-1 rounded-full ml-2">
                  {material.format}
                </span>
              </div>

              <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2">
                {material.title}
              </h3>

              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                {material.description}
              </p>

              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
                <span className="text-xs font-medium text-muted-foreground">
                  {material.type}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`Download ${material.title}`}
                >
                  <Download size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-lg border border-primary/20 text-center"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
            More Resources Coming Soon
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            I continuously develop new materials and update existing ones based on student feedback and latest pedagogical research.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            Subscribe for Updates
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
