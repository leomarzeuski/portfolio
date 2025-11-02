'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Github,
  ExternalLink,
  Code2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  link?: string
  featured?: boolean
}

interface ProjectsProps {
  dict: {
    title: string
    subtitle: string
    projects: Project[]
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Projects({ dict }: ProjectsProps) {
  const featuredProjects = dict.projects.filter((p) => p.featured)
  const otherProjects = dict.projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
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
          className="mb-4 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Projects</span>
          </div>
        </motion.div>

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
          <p className="text-lg text-white/60">{dict.subtitle}</p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 space-y-6"
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={`featured-${index}`} variants={itemVariants}>
                <Card className="group border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-md transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-primary" />
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            Featured
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl text-white">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                          >
                            <Github className="h-5 w-5 text-white/70" />
                          </motion.a>
                        )}
                        {project.link && (
                          <motion.a
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                          >
                            <ExternalLink className="h-5 w-5 text-white/70" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base leading-relaxed text-white/80">
                      {project.description}
                    </p>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tags.map((tag) => (
                        <motion.div
                          key={tag}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {otherProjects.map((project, index) => (
            <motion.div key={`project-${index}`} variants={itemVariants}>
              <Card className="group h-full border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                <CardHeader>
                  <div className="mb-4 flex items-start justify-between">
                    <CardTitle className="flex-1 text-xl text-white">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-1">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-white/10 p-1 transition-colors hover:bg-white/20"
                        >
                          <Github className="h-4 w-4 text-white/70" />
                        </motion.a>
                      )}
                      {project.link && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-white/10 p-1 transition-colors hover:bg-white/20"
                        >
                          <ExternalLink className="h-4 w-4 text-white/70" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <motion.div
                        key={tag}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-8 text-center backdrop-blur-sm"
        >
          <h3 className="mb-4 text-2xl font-bold text-white">
            Want to see more?
          </h3>
          <p className="mb-6 text-white/70">
            Check out my GitHub profile for more projects and contributions
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              asChild
              className="group bg-primary text-white hover:bg-primary/90"
            >
              <a
                href="https://github.com/leomarzeuski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Visit GitHub
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
