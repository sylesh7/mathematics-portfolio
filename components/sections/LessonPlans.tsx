'use client'

import { motion } from 'framer-motion'

const lessons = [
  {
    id: 1,
    title: 'Algebra Fundamentals',
    description: 'Building strong foundational understanding of algebraic concepts',
    topics: 'Equations, Variables, Expressions',
    difficulty: 'Beginner',
    size: 'large',
    icon: '✕'
  },
  {
    id: 2,
    title: 'Geometry Exploration',
    description: 'Discovering properties and relationships in spatial mathematics',
    topics: 'Shapes, Angles, Proofs',
    difficulty: 'Intermediate',
    size: 'regular',
    icon: '◆'
  },
  {
    id: 3,
    title: 'Trigonometry',
    description: 'Understanding relationships in triangles and periodic functions',
    topics: 'Sine, Cosine, Applications',
    difficulty: 'Advanced',
    size: 'regular',
    icon: '∿'
  },
  {
    id: 4,
    title: 'Calculus Concepts',
    description: 'Introduction to rates of change and accumulation',
    topics: 'Limits, Derivatives, Integrals',
    difficulty: 'Advanced',
    size: 'regular',
    icon: '∫'
  },
  {
    id: 5,
    title: 'Statistics & Probability',
    description: 'Data analysis and understanding uncertainty',
    topics: 'Distribution, Inference, Experiments',
    difficulty: 'Intermediate',
    size: 'large',
    icon: '📊'
  },
  {
    id: 6,
    title: 'Problem Solving',
    description: 'Developing mathematical thinking and reasoning',
    topics: 'Logic, Puzzles, Real-world Problems',
    difficulty: 'All Levels',
    size: 'regular',
    icon: '🧩'
  }
]

export default function LessonPlans() {
  return (
    <section id="lessons" className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lesson Plans & Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive curriculum covering fundamental to advanced mathematics topics with interactive learning experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessons.map((lesson, idx) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-muted/50 border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                lesson.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className="h-48 md:h-56 p-6 md:p-8 flex flex-col justify-between relative z-10">
                <div>
                  <div className="text-4xl mb-4 opacity-40">{lesson.icon}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {lesson.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {lesson.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    {lesson.topics}
                  </p>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
