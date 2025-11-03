'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react'
import Silk from './Silk'

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
        <Silk speed={5} scale={1} noiseIntensity={1.5} rotation={0} color="#7B7481" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container z-10 mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-lg font-medium text-foreground/70 md:text-xl">
            {dict.greeting}
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.name}
          </h1>

          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl md:text-4xl">
            {dict.title}
          </h2>

          <div className="mb-4 rounded-full border border-border bg-muted px-4 py-2">
            <p className="text-sm font-medium text-foreground md:text-base">
              {dict.skills}
            </p>
          </div>

          <p className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {dict.location}
          </p>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {dict.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div>
              <Button
                size="lg"
                asChild
                className="group"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {dict.cta.contact}
                </a>
              </Button>
            </motion.div>
            <motion.div>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group"
              >
                <a href="#projects">
                  {dict.cta.viewWork}
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/leomarzeuski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
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
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:leonardo@example.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
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
          <span className="text-xs font-medium text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
