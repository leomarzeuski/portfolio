'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
} from 'lucide-react'
import { useState } from 'react'

interface ContactProps {
  dict: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      message: string
      submit: string
      sending: string
    }
    info: {
      email: string
      location: string
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Contact({ dict }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('https://formspree.io/f/xyzqwert', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        e.currentTarget.reset()
        alert('Message sent successfully!')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-transparent via-black/20 to-transparent px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {dict.title}
          </h2>
          <p className="text-lg text-white/60">{dict.subtitle}</p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-1"
          >
            {/* Email */}
            <motion.div variants={itemVariants}>
              <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all hover:border-white/20">
                <CardHeader>
                  <motion.div
                    className="mb-2 inline-block rounded-lg bg-primary/10 p-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-white">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.a
                    href={`mailto:${dict.info.email}`}
                    whileHover={{ x: 5 }}
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {dict.info.email}
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all hover:border-white/20">
                <CardHeader>
                  <motion.div
                    className="mb-2 inline-block rounded-lg bg-accent/10 p-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="h-6 w-6 text-accent" />
                  </motion.div>
                  <CardTitle className="text-white">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{dict.info.location}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all hover:border-white/20">
                <CardHeader>
                  <motion.div
                    className="mb-2 inline-block rounded-lg bg-primary/10 p-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-white">Connect</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/leomarzeuski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                  >
                    <Github className="h-5 w-5 text-white/70" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/leonardo-marzeuski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                  >
                    <Linkedin className="h-5 w-5 text-white/70" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:leonardo@example.com"
                    className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                  >
                    <Mail className="h-5 w-5 text-white/70" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      {dict.form.name}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-primary/50"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      {dict.form.email}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-primary/50"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      {dict.form.message}
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-primary/50 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? dict.form.sending : dict.form.submit}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
