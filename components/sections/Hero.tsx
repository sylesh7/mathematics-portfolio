'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
                  Education Excellence
                </span>
              </motion.div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block"
                >
                  Mathematics
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-primary"
                >
                  Education Portfolio
                </motion.span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Explore my innovative approach to mathematics education, combining pedagogical excellence with interactive learning experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <button
                onClick={() => {
                  document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore Portfolio
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main shape */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-64 h-64 border-2 border-primary rounded-full opacity-30"
              />
              
              {/* Secondary shape */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-48 h-48 border-2 border-accent rounded-lg opacity-20"
              />

              {/* Center accent */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <motion.div
                animate={{ y: [2, 6, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
