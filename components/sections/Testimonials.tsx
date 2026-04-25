'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'High School Student',
    text: 'Mathematics was my weakest subject until I had this teacher. The way concepts are explained makes everything click. I actually enjoy doing math now!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Parent',
    text: 'Our son\'s grades improved dramatically, but more importantly, his confidence in mathematics has skyrocketed. This teacher truly cares about student success.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'College Student',
    text: 'The foundation I built in mathematics made college coursework so much more manageable. I recommend this educator to everyone.',
    rating: 5
  },
  {
    id: 4,
    name: 'James Thompson',
    role: 'Teaching Colleague',
    text: 'Exceptional educator who truly understands how to make complex concepts accessible. A role model for us all.',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    role: 'School Administrator',
    text: 'Outstanding commitment to student success and innovative approaches to education. A valuable member of any team.',
    rating: 5
  },
  {
    id: 6,
    name: 'David Park',
    role: 'Student',
    text: 'This class transformed my perspective on mathematics. I\'ve discovered that I actually love problem-solving!',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student & Colleague Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What students, parents, and colleagues have to say about their experience working together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-full p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Star size={16} className="fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote mark */}
                <div className="text-4xl text-primary/20 mb-3">&ldquo;</div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Background glow on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg -z-10 blur-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
