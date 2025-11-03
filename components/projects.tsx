'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Star, GitFork, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ShinyText from '@/components/react-bits/ShinyText'
import DecryptedText from '@/components/react-bits/DecryptedText'
import ScrollReveal from '@/components/react-bits/ScrollReveal'
import LiquidEther from '@/components/react-bits/LiquidEther'
import { GET } from '@/app/api/vercel/route'

interface ProjectsProps {
    dict: {
        title: string
        subtitle: string
        viewLive: string
        viewCode: string
        loading: string
        error: string
        noProjects: string
        technologies: string
    }
}

interface VercelProject {
    id: string
    name: string
    framework: string | null
    createdAt?: number
    updatedAt?: number
    link?: {
        type: string
        org: string
        repo: string
        repoId?: number
        productionBranch?: string
    }
    targets?: {
        production?: {
            alias?: string[]
            url?: string
        }
    }
    latestDeployments?: Array<{
        alias?: string[]
        url?: string
        readyState?: string
        createdAt?: number
    }>
}

export function Projects({ dict }: ProjectsProps) {
    const [projects, setProjects] = useState<VercelProject[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // Helper function to format dates
    const formatDate = (timestamp?: number) => {
        if (!timestamp) return null
        const date = new Date(timestamp)
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).format(date)
    }

    // Helper function to calculate time ago
    const timeAgo = (timestamp?: number) => {
        if (!timestamp) return null
        const now = Date.now()
        const diff = now - timestamp
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))

        if (days === 0) return 'Hoje'
        if (days === 1) return 'Ontem'
        if (days < 7) return `${days} dias atrás`
        if (days < 30) return `${Math.floor(days / 7)} semanas atrás`
        if (days < 365) return `${Math.floor(days / 30)} meses atrás`
        return `${Math.floor(days / 365)} anos atrás`
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await GET()
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
                }
                const data = await response.json()

                const filtered = data
                    .filter((project: VercelProject) => {
                        return project.latestDeployments && project.latestDeployments.length > 0
                    })
                setProjects(filtered)
            } catch (err) {
                setError(true)
                console.error('Error fetching projects:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section
            id="projects"
            className="relative py-16 px-4 overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0 bg-stone-950"
            >
                <LiquidEther
                    colors={['#625C68', '#ffffff', '#fffffff']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </motion.div>

            <div className="absolute top-10 left-10 z-1 h-48 w-48 rounded-full bg-linear-to-br from-primary/30 to-transparent blur-3xl" />
            <div className="absolute bottom-10 right-10 z-1 h-64 w-64 rounded-full bg-linear-to-tl from-primary/20 to-transparent blur-3xl" />            <div className="container relative z-10 mx-auto max-w-6xl">
                <ScrollReveal>
                    <div className="mb-10 text-center">
                        <ShinyText
                            text={dict.title}
                            className="mb-3 text-3xl font-bold sm:text-4xl md:text-5xl"
                            speed={3}
                        />
                        <DecryptedText
                            text={dict.subtitle}
                            className="text-base text-muted-foreground md:text-lg"
                        />
                    </div>
                </ScrollReveal>

                {loading && (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto mb-4"></div>
                            <p className="text-foreground/70">{dict.loading}</p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <p className="text-destructive">{dict.error}</p>
                    </div>
                )}

                {!loading && !error && projects.length === 0 && (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <p className="text-foreground/70">{dict.noProjects}</p>
                    </div>
                )}

                {!loading && !error && projects.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {projects.map((project) => {
                            // Get production URL from latest deployment or targets
                            const latestDeployment = project.latestDeployments?.[0]
                            const productionAlias = latestDeployment?.alias?.[0] ||
                                project.targets?.production?.alias?.[0]

                            const productionUrl = productionAlias || latestDeployment?.url

                            const githubUrl = project.link ?
                                `https://github.com/${project.link.org}/${project.link.repo}` :
                                null

                            return (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="group relative h-full overflow-hidden border-2 border-foreground/10 bg-linear-to-br from-background via-background/95 to-background/80 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                                        <div className="absolute inset-0 bg-linear-to-br from-transparent via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                        <CardContent className="relative z-10 p-6 flex flex-col h-full">
                                            <div className="mb-4">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="rounded-xl bg-linear-to-br from-primary to-primary/60 p-3 shadow-lg">
                                                        <Code2 className="h-6 w-6 text-primary-foreground" />
                                                    </div>
                                                    {productionUrl && (
                                                        <Badge
                                                            variant="secondary"
                                                            className="px-2 py-1 text-xs border border-green-500/20 bg-green-500/10 text-green-500"
                                                        >
                                                            <Eye className="mr-1 h-3 w-3" />
                                                            Live
                                                        </Badge>
                                                    )}
                                                </div>

                                                <h3 className="text-xl font-bold mb-1 bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                                    {project.name}
                                                </h3>

                                                {project.link?.repo && (
                                                    <p className="text-sm text-foreground/50 mb-2 font-mono">
                                                        {project.link.org}/{project.link.repo}
                                                    </p>
                                                )}

                                                <p className="text-sm text-foreground/70 mb-3">
                                                    {project.framework ?
                                                        `Projeto desenvolvido com ${project.framework}` :
                                                        'Deploy hospedado na Vercel'}
                                                </p>

                                                {/* Date Information */}
                                                <div className="space-y-1 mb-3">
                                                    {project.createdAt && (
                                                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                                                            <span className="font-semibold">Criado:</span>
                                                            <span>{formatDate(project.createdAt)}</span>
                                                        </div>
                                                    )}
                                                    {project.updatedAt && (
                                                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                                                            <span className="font-semibold">Atualizado:</span>
                                                            <span>{timeAgo(project.updatedAt)}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Framework */}
                                            {project.framework && (
                                                <div className="mb-4">
                                                    <Badge
                                                        className="px-3 py-1 text-xs font-semibold bg-linear-to-r from-primary/80 to-primary/60 text-primary-foreground border-none"
                                                    >
                                                        {project.framework}
                                                    </Badge>
                                                </div>
                                            )}

                                            {/* Actions */}
                                            <div className="flex gap-2 mt-auto">
                                                {productionUrl && (
                                                    <Button
                                                        asChild
                                                        size="sm"
                                                        className="flex-1 group/btn bg-linear-to-r from-foreground to-foreground/90 transition-all hover:scale-105"
                                                    >
                                                        <a
                                                            href={`https://${productionUrl}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Eye className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                                                            {dict.viewLive}
                                                        </a>
                                                    </Button>
                                                )}
                                                {githubUrl && (
                                                    <Button
                                                        asChild
                                                        size="sm"
                                                        variant="outline"
                                                        className={`${productionUrl ? 'flex-1' : 'w-full'} border-2 border-foreground/30 transition-all hover:border-foreground hover:bg-foreground hover:text-background`}
                                                    >
                                                        <a
                                                            href={githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github className="mr-2 h-4 w-4" />
                                                            {dict.viewCode}
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>

                                        {/* Decorative blob */}
                                        <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-linear-to-tl from-primary/20 to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                )}

                {/* View All Projects Link */}
                {!loading && !error && projects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="group border-2 border-foreground/30 bg-background/50 px-8 py-6 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-2xl"
                        >
                            <a
                                href="https://github.com/leomarzeuski?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-5 w-5" />
                                Ver Todos os Projetos no GitHub
                                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
