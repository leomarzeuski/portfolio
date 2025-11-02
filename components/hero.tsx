'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Silk from './Silk'
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react'

interface HeroProps {
  dict: {
    greeting: string
    name: string
    title: string
    skills: string
    location: string
    description: string
    cta: {
      contact: string
      viewWork: string
    }
  }
}

export function Hero({ dict }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 pt-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Silk speed={5} scale={1} noiseIntensity={1.5} rotation={0} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container z-10 mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-lg font-medium text-white/80 md:text-xl">
            {dict.greeting}
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.name}
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-white/90 sm:text-3xl md:text-4xl">
            {dict.title}
          </h2>

          <div className="mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm font-medium text-white md:text-base">
              {dict.skills}
            </p>
          </div>

          <p className="mb-8 flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4" />
            {dict.location}
          </p>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {dict.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="group border border-transparent bg-white text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                {dict.cta.contact}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
            >
              <a href="#projects">
                {dict.cta.viewWork}
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/leomarzeuski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/leonardo-marzeuski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:leonardo@example.com"
              className="text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex cursor-pointer flex-col items-center gap-1"
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth',
            })
          }
        >
          <span className="text-xs font-medium text-white/80">Scroll</span>
          <ArrowDown className="h-5 w-5 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}
