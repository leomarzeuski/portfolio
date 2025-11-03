'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react'
import Silk from './react-bits/Silk'
import ShinyText from './react-bits/ShinyText'

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

      <div className="absolute inset-0 z-1 bg-linear-to-b from-transparent via-background/10 to-background/50" />

      <div className="absolute top-1/4 left-1/4 z-1 h-96 w-96 rounded-full bg-linear-to-br from-primary/20 to-transparent blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 z-1 h-96 w-96 rounded-full bg-linear-to-tl from-foreground/10 to-transparent blur-3xl animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container z-10 mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-lg font-medium text-foreground/70 md:text-xl"
          >
            {dict.greeting}
          </motion.p>

          <ShinyText
            text={dict.name}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            speed={4}
          />

          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl md:text-4xl">
            {dict.title}
          </h2>

          <div className="relative mb-6 rounded-2xl border-2 border-foreground/20 bg-linear-to-r from-background via-background/90 to-background/80 px-8 py-3 shadow-xl backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/5 via-transparent to-primary/5" />
            <p className="relative z-10 text-base font-semibold text-foreground md:text-lg">
              {dict.skills}
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 flex items-center gap-2 text-base text-foreground/70"
          >
            <MapPin className="h-5 w-5" />
            {dict.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl"
          >
            {dict.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-linear-to-r from-foreground to-foreground/90 px-8 py-6 text-lg font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <a href="#contact">
                <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-125 group-hover:rotate-12" />
                <span className="relative z-10">{dict.cta.contact}</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group relative overflow-hidden border-2 border-foreground/30 bg-background/50 px-8 py-6 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-2xl"
            >
              <a href="#projects">
                <span className="relative z-10">{dict.cta.viewWork}</span>
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-2 group-hover:scale-125" />
              </a>
            </Button>
          </motion.div>

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
              href="www.linkedin.com/in/leonardo-marzeuski-9148201b2"
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
              href="mailto:leomarzeuskii@gmail.com"
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
