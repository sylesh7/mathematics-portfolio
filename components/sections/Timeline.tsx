'use client'

import { motion } from 'framer-motion'

const timelineEvents = [
  {
    year: '2013',
    title: 'Teaching Journey Begins',
    description: 'Started my first teaching position with a passion for making mathematics accessible and engaging to all students.'
  },
  {
    year: '2015',
    title: 'Curriculum Innovation',
    description: 'Developed innovative teaching methodologies that integrate technology and real-world applications into mathematics education.'
  },
  {
    year: '2017',
    title: 'Professional Recognition',
    description: 'Received awards for innovative teaching methods and significant improvements in student achievement and engagement.'
  },
  {
    year: '2019',
    title: 'Educational Leadership',
    description: 'Took on leadership roles in curriculum development and teacher training, mentoring educators across multiple institutions.'
  },
  {
    year: '2021',
    title: 'Online Education Pioneer',
    description: 'Adapted teaching to digital platforms, creating interactive online courses that maintain engagement and effectiveness.'
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Continuing to innovate and explore new ways to make mathematics education transformative and impactful.'
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Milestones in my educational journey and career development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-secondary"
            style={{ minHeight: '100%' }}
          />

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 ${
                    idx % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="inline-block mb-2">
                      <span className="text-sm font-heading font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="w-4 h-4 bg-primary rounded-full shadow-lg" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                    className="absolute inset-0 w-4 h-4 bg-primary rounded-full opacity-30"
                  />
                </motion.div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
