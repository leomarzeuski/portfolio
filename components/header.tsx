'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'

interface HeaderProps {
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

export function Header({ dict, lang }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: dict.nav.home, href: '#hero' },
    { label: dict.nav.about, href: '#about' },
    { label: dict.nav.projects, href: '#projects' },
    { label: dict.nav.contact, href: '#contact' },
  ]

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'pt' : 'en'
    window.location.href = `/${newLang}`
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-lg"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              LM
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Section - Theme, Language Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hidden text-white hover:text-white/80 md:flex"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm">{lang.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 space-y-2 pb-4 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-md px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="w-full justify-start"
              >
                <Globe className="h-5 w-5 mr-2" />
                {lang === 'en' ? 'Português' : 'English'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
