'use client'

import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'

export default function TimelineSection() {
  const timelineData = [
    {
      title: '2013',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2">
            Teaching Journey Begins
          </h3>
          <p className="text-xs md:text-sm font-normal text-muted-foreground mb-4">
            Started my first teaching position with a passion for making mathematics accessible and engaging to all students.
          </p>
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
            <span className="text-xs md:text-sm font-semibold text-primary">First Position</span>
          </div>
        </motion.div>
      ),
    },
    {
      title: '2015',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2">
            Curriculum Innovation
          </h3>
          <p className="text-xs md:text-sm font-normal text-muted-foreground mb-4">
            Developed innovative teaching methodologies that integrate technology and real-world applications into mathematics education.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium">
              🔧 Methodology Development
            </span>
            <span className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium">
              💻 Technology Integration
            </span>
          </div>
        </motion.div>
      ),
    },
    {
      title: '2017',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2">
            Professional Recognition
          </h3>
          <p className="text-xs md:text-sm font-normal text-muted-foreground mb-4">
            Received awards for innovative teaching methods and significant improvements in student achievement and engagement.
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              🏆 Innovation Award
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              ⭐ Teacher Excellence Recognition
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              📈 Student Achievement Excellence
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: '2019',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2">
            Educational Leadership
          </h3>
          <p className="text-xs md:text-sm font-normal text-muted-foreground mb-4">
            Took on leadership roles in curriculum development and teacher training, mentoring educators across multiple institutions.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs md:text-sm text-foreground">
              👥 Mentoring multiple educators
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-foreground">
              📋 Curriculum Development Lead
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-foreground">
              🎓 Teacher Training Programs
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: '2021',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2">
            Online Education Pioneer
          </h3>
          <p className="text-xs md:text-sm font-normal text-muted-foreground mb-4">
            Adapted teaching to digital platforms, creating interactive online courses that maintain engagement and effectiveness during the pandemic.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium">
              🌐 Online Platforms
            </span>
            <span className="text-xs px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium">
              🎥 Interactive Courses
            </span>
          </div>
        </motion.div>
      ),
    },
    {
      title: '2024',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2">
            Future Vision
          </h3>
          <p className="text-xs md:text-sm font-normal text-muted-foreground mb-4">
            Continuing to innovate and explore new ways to make mathematics education transformative and impactful for the next generation.
          </p>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg">
            <span className="text-xs md:text-sm font-semibold text-primary">🚀 Innovating Education</span>
          </div>
        </motion.div>
      ),
    },
  ]

  return (
    <section id="timeline" className="py-8 md:py-12 bg-background overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-3 sm:px-4 md:px-8 mb-8 md:mb-12 text-center"
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
          Professional Timeline
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground px-2">
          Milestones in my educational journey and career development.
        </p>
      </motion.div>

      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
    </section>
  )
}
