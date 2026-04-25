'use client'

import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'

const certifications = [
  {
    title: 'Master of Science in Mathematics Education',
    issuer: 'State University',
    year: '2012',
    description: 'Advanced degree focusing on pedagogical innovations and curriculum design'
  },
  {
    title: 'Professional Teaching Certificate - Mathematics',
    issuer: 'Department of Education',
    year: '2013',
    description: 'Official certification authorizing instruction in mathematics K-12'
  },
  {
    title: 'GeoGebra Certified Educator',
    issuer: 'GeoGebra Institute',
    year: '2018',
    description: 'Expert-level certification in geometric software and dynamic mathematics'
  },
  {
    title: 'Advanced Teacher Training - Problem Solving',
    issuer: 'National Mathematics Association',
    year: '2020',
    description: 'Specialized training in mathematical problem-solving methodologies'
  },
  {
    title: 'Online Learning Specialist Certification',
    issuer: 'Online Education Academy',
    year: '2021',
    description: 'Certification in designing and delivering effective online mathematics instruction'
  },
  {
    title: 'Educational Leadership Certificate',
    issuer: 'State University',
    year: '2022',
    description: 'Leadership training for curriculum development and teacher mentoring'
  }
]

export default function Certifications() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional qualifications and continuing education achievements
          </p>
        </motion.div>

        {/* Certifications List */}
        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <Award className="text-primary-foreground" size={24} />
                </motion.div>

                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-primary font-semibold mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-muted-foreground text-sm mb-3">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-card rounded-lg border border-border text-center"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
            Commitment to Professional Development
          </h3>
          <p className="text-muted-foreground mb-4">
            I regularly participate in professional development workshops, conferences, and training programs to stay current with the latest advances in mathematics education and pedagogy.
          </p>
          <div className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Credentials
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
