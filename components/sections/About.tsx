'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
                About Me
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I am a dedicated mathematics educator with a passion for transforming how students perceive and engage with mathematical concepts. With years of classroom experience, I&apos;ve developed innovative teaching methodologies that make mathematics accessible, engaging, and relevant to students&apos; lives.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              My journey in education began with a simple belief: every student can excel in mathematics when given the right support, resources, and encouragement. This philosophy guides everything I do, from lesson planning to student interactions.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
              <div className="p-3 md:p-4 bg-muted rounded-lg border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">10+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="p-3 md:p-4 bg-muted rounded-lg border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">1000+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Students Mentored</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Key achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-6"
          >
            <div className="p-4 md:p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="text-2xl md:text-3xl flex-shrink-0"></div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1 md:mb-2 text-base md:text-lg">Award-Winning Educator</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Recognized for innovative teaching methods and student achievement results.</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="text-2xl md:text-3xl flex-shrink-0"></div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1 md:mb-2 text-base md:text-lg">Curriculum Developer</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Created comprehensive curricula integrating modern pedagogical approaches with technology.</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="text-2xl md:text-3xl flex-shrink-0"></div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1 md:mb-2 text-base md:text-lg">Continuous Learner</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Committed to professional development and staying current with educational research.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-card to-transparent" style={{ clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0 100%)' }} />
    </section>
  )
}
