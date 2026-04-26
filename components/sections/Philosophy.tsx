'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const philosophies = [
  {
    id: 1,
    title: 'Student-Centered Learning',
    description: 'Every student has unique learning needs. I design lessons that adapt to individual paces and learning styles, ensuring mathematical concepts are accessible to everyone.',
    icon: '🎓'
  },
  {
    id: 2,
    title: 'Conceptual Understanding',
    description: 'Rather than rote memorization, I emphasize deep conceptual understanding. Students learn the "why" behind mathematical principles, building strong foundations.',
    icon: '🧠'
  },
  {
    id: 3,
    title: 'Real-World Application',
    description: 'Mathematics comes alive when connected to real-world problems. I integrate practical applications that show students the relevance and beauty of mathematics.',
    icon: '🌍'
  },
  {
    id: 4,
    title: 'Interactive Discovery',
    description: 'Learning through exploration and discovery creates deeper engagement. My lessons use manipulatives, technology, and collaborative activities.',
    icon: '🔍'
  },
  {
    id: 5,
    title: 'Growth Mindset',
    description: 'I cultivate a classroom culture where mistakes are learning opportunities. Students develop resilience and confidence in their mathematical abilities.',
    icon: '🚀'
  },
  {
    id: 6,
    title: 'Technology Integration',
    description: 'Strategic use of educational technology enhances learning without replacing human connection. Tools amplify understanding and engagement.',
    icon: '💻'
  }
]

export default function Philosophy() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const next = () => {
    setCurrentIndex((prev) => (prev + itemsPerView) % philosophies.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - itemsPerView + philosophies.length) % philosophies.length)
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < itemsPerView; i++) {
      items.push(philosophies[(currentIndex + i) % philosophies.length])
    }
    return items
  }

  return (
    <section id="philosophy" className="py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Teaching Philosophy
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            My approach to mathematics education is rooted in six core principles that guide every lesson and interaction.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {getVisibleItems().map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 md:p-6 bg-background rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl mb-3">{item.icon}</div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls - Only show if more than one view worth of items */}
          {itemsPerView < philosophies.length && (
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Previous philosophy"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(philosophies.length / itemsPerView) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx * itemsPerView)}
                    className={`h-2 rounded-full transition-all ${
                      idx === Math.floor(currentIndex / itemsPerView) ? 'bg-primary w-8' : 'bg-border w-2'
                    }`}
                    aria-label={`Go to philosophy page ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Next philosophy"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
