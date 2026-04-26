'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-gradient-to-b from-background via-card to-primary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            I&apos;d love to hear from you. Whether you have questions, feedback, or collaboration opportunities, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
                Contact Information
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</h4>
                  <a href="mailto:contact@mathematics.edu" className="text-primary hover:text-accent transition-colors text-sm md:text-base">
                    contact@mathematics.edu
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Phone</h4>
                  <a href="tel:+1234567890" className="text-primary hover:text-accent transition-colors text-sm md:text-base">
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Location</h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Available for local and remote opportunities
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links Placeholder */}
            <div className="pt-4 md:pt-0">
              <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Connect On Social Media</h4>
              <div className="flex gap-2 md:gap-3">
                {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-xs md:text-sm font-semibold"
                    aria-label={social}
                  >
                    {social[0]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-4 md:p-8 bg-card rounded-lg border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can I help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Message sent! ✓
                  </motion.span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border text-center"
      >
        <p className="text-xs md:text-sm text-muted-foreground">
          &copy; 2024 Mathematics Education Portfolio. All rights reserved.
        </p>
      </motion.div>
    </section>
  )
}
