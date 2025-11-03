'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import ShinyText from '@/components/react-bits/ShinyText'
import DecryptedText from '@/components/react-bits/DecryptedText'
import ScrollReveal from '@/components/react-bits/ScrollReveal'
import LiquidEther from '@/components/react-bits/LiquidEther'

interface AboutProps {
    dict: {
        title: string
        subtitle: string
        intro: string
        description: string
        education: {
            title: string
            degree: string
            institution: string
            period: string
        }
        experience: {
            title: string
            years: string
            description: string
        }
        passion: string
        skills: {
            title: string
            items: string[]
        }
    }
}

export function About({ dict }: AboutProps) {
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
        hidden: { opacity: 0, y: 20 },
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
            id="about"
            className="relative py-16 px-4 overflow-hidden bg-stone-950"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <LiquidEther
                    colors={['#625C68', '#ffffff', '#ffffff']}
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

            <div className="container relative z-10 mx-auto max-w-5xl">
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {/* Introduction Card */}
                    <motion.div variants={itemVariants}>
                        <Card className="group relative h-full overflow-hidden border-2 border-foreground/10 bg-linear-to-br from-background via-background/95 to-background/80 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                            <div className="absolute inset-0 bg-linear-to-br from-transparent via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <CardContent className="relative z-10 p-6">
                                <h3 className="mb-3 text-xl font-bold bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                    <DecryptedText text={dict.title} speed={50} />
                                </h3>
                                <p className="mb-3 text-foreground/80 leading-relaxed text-sm">
                                    {dict.intro}
                                </p>
                                <p className="text-foreground/70 leading-relaxed text-sm">
                                    {dict.description}
                                </p>
                                <div className="absolute bottom-0 right-0 h-24 w-24 bg-linear-to-tl from-primary/20 to-transparent blur-2xl" />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        {/* Education */}
                        <Card className="group relative overflow-hidden border-2 border-foreground/10 bg-linear-to-br from-background via-background/95 to-background/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-foreground/30 hover:shadow-2xl hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <CardContent className="relative z-10 flex items-start gap-3 p-4">
                                <div className="rounded-xl bg-linear-to-br from-primary to-primary/60 p-3 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-1 text-base font-bold">{dict.education.title}</h4>
                                    <p className="text-sm font-semibold text-foreground/90">
                                        {dict.education.degree}
                                    </p>
                                    <p className="text-xs text-foreground/70">
                                        {dict.education.institution}
                                    </p>
                                    <p className="text-xs text-foreground/50 mt-1 font-mono">
                                        {dict.education.period}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Experience */}
                        <Card className="group relative overflow-hidden border-2 border-foreground/10 bg-linear-to-br from-background via-background/95 to-background/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-foreground/30 hover:shadow-2xl hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-linear-to-l from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <CardContent className="relative z-10 flex items-start gap-3 p-4">
                                <div className="rounded-xl bg-linear-to-br from-foreground to-foreground/60 p-3 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                                    <Briefcase className="h-5 w-5 text-background" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-1 text-base font-bold">{dict.experience.title}</h4>
                                    <p className="text-sm font-semibold text-foreground/90">
                                        {dict.experience.years}
                                    </p>
                                    <p className="text-xs text-foreground/70">
                                        {dict.experience.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Skills */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <Card className="group relative overflow-hidden border-2 border-foreground/10 bg-linear-to-br from-background via-background/95 to-background/80 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-foreground/30">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                            <CardContent className="relative z-10 p-6">
                                <h3 className="mb-4 text-xl font-bold bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">{dict.skills.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {dict.skills.items.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05, type: "spring" }}
                                            whileHover={{ scale: 1.1, rotate: 2 }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="px-4 py-2 text-sm font-semibold border-2 border-foreground/20 bg-linear-to-r from-background to-background/80 shadow-lg transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-xl"
                                            >
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
