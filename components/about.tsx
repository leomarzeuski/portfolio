'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Code2,
  Database,
  Zap,
  Target,
  BookOpen,
  Briefcase,
} from 'lucide-react'

interface AboutProps {
  dict: {
    title: string
    summary: string
    education: {
      title: string
      degree: string
      institution: string
      period: string
    }
    passion: string
    experience: {
      title: string
      current: {
        company: string
        role: string
        period: string
        highlights: string[]
      }
    }
    skills: {
      title: string
      frontend: string[]
      backend: string[]
      database: string[]
      tools: string[]
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

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export function About({ dict }: AboutProps) {
  const skillCategories = [
    { title: 'Frontend', skills: dict.skills.frontend, icon: Code2 },
    { title: 'Backend', skills: dict.skills.backend, icon: Database },
    { title: 'Database', skills: dict.skills.database, icon: Zap },
    { title: 'Tools', skills: dict.skills.tools, icon: Briefcase },
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-transparent via-black/20 to-transparent px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {dict.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </motion.div>

        {/* Summary Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-white/80">
                {dict.summary}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education & Experience Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Education */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all hover:border-white/20">
              <CardHeader>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-2 inline-block rounded-lg bg-primary/10 p-3"
                >
                  <BookOpen className="h-6 w-6 text-primary" />
                </motion.div>
                <CardTitle className="text-white">
                  {dict.education.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-white">
                    {dict.education.degree}
                  </p>
                  <p className="text-sm text-white/70">
                    {dict.education.institution}
                  </p>
                </div>
                <div className="inline-block rounded-full bg-primary/20 px-3 py-1">
                  <span className="text-xs font-medium text-primary">
                    {dict.education.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Current Experience */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all hover:border-white/20">
              <CardHeader>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-2 inline-block rounded-lg bg-accent/10 p-3"
                >
                  <Briefcase className="h-6 w-6 text-accent" />
                </motion.div>
                <CardTitle className="text-white">
                  {dict.experience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-white">
                    {dict.experience.current.role}
                  </p>
                  <p className="text-sm text-white/70">
                    {dict.experience.current.company}
                  </p>
                </div>
                <div className="inline-block rounded-full bg-accent/20 px-3 py-1">
                  <span className="text-xs font-medium text-accent">
                    {dict.experience.current.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Experience Highlights */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border border-white/10 bg-white/5 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Key Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {dict.experience.current.highlights.map(
                  (highlight, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex gap-3 text-white/80"
                    >
                      <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </motion.li>
                  ),
                )}
              </motion.ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-2xl font-bold text-white">
            {dict.skills.title}
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div key={category.title} variants={itemVariants}>
                  <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                    <CardHeader>
                      <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-2 inline-block rounded-lg bg-primary/10 p-3"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="text-sm text-white">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                      >
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-white/10 text-white hover:bg-white/20"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Passion Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 p-8 text-center backdrop-blur-sm"
        >
          <Target className="mx-auto mb-4 h-8 w-8 text-primary" />
          <p className="text-lg text-white/80">{dict.passion}</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
