'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Core Mathematics',
    skills: ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'Trigonometry', 'Linear Algebra']
  },
  {
    category: 'Teaching Methods',
    skills: ['Differentiation', 'Inquiry-Based Learning', 'Problem Solving', 'Cooperative Learning', 'Assessment Strategies', 'Student Engagement']
  },
  {
    category: 'Technology Integration',
    skills: ['GeoGebra', 'Desmos', 'Python Programming', 'Interactive Visualizations', 'Online Learning Platforms', 'Educational Software']
  },
  {
    category: 'Professional Skills',
    skills: ['Curriculum Design', 'Mentoring', 'Leadership', 'Communication', 'Research', 'Continuous Learning']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of knowledge and abilities developed through years of education and practice.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIdx * 0.1 + skillIdx * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="relative"
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-full text-sm font-medium text-foreground hover:border-primary hover:shadow-lg transition-all cursor-default">
                      {skill}
                    </div>
                    <motion.div
                      animate={{ 
                        x: [0, 2, -2, 0],
                        y: [0, -1, 1, 0]
                      }}
                      transition={{ 
                        duration: 3 + skillIdx * 0.2, 
                        repeat: Infinity,
                        delay: categoryIdx * 0.15 + skillIdx * 0.05
                      }}
                      className="absolute inset-0 pointer-events-none"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-background rounded-lg border border-border"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
            Proficiency Overview
          </h3>
          
          <div className="space-y-6">
            {[
              { area: 'Mathematics Knowledge', level: 95 },
              { area: 'Teaching Effectiveness', level: 92 },
              { area: 'Technology Integration', level: 88 },
              { area: 'Student Engagement', level: 94 },
              { area: 'Curriculum Development', level: 90 }
            ].map((item, idx) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-foreground">{item.area}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
