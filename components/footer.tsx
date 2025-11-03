'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  dict: {
    nav: {
      home: string
      about: string
      projects: string
      contact: string
    }
  }
  lang: 'en' | 'pt'
}

const currentYear = new Date().getFullYear()

export function Footer({ dict, lang }: FooterProps) {
  const navItems = [
    { label: dict.nav.home, href: '#hero' },
    { label: dict.nav.about, href: '#about' },
    { label: dict.nav.projects, href: '#projects' },
    { label: dict.nav.contact, href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/leomarzeuski',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/leonardo-marzeuski',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:leonardo@example.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-linear-to-b from-transparent to-black/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${lang}`} className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                LM
              </motion.div>
            </Link>
            <p className="text-sm text-white/60">
              Building beautiful and efficient web experiences
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Navigation</h3>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="block text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                    title={link.label}
                  >
                    <Icon className="h-5 w-5 text-white/70" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="my-8 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-2 text-center text-sm text-white/60"
        >
          <div className="flex items-center gap-1">
            <span>© {currentYear} Leonardo Marzeuski. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 fill-primary text-primary" />
            </motion.div>
            <span>and React</span>
          </div>
          <p>All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
