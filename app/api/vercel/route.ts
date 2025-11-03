import { NextResponse } from 'next/server'

const VERCEL_API_TOKEN = process.env.NEXT_PUBLIC_VERCEL_API_TOKEN

export async function GET() {
    try {
        const headers = {
            Authorization: `Bearer ${VERCEL_API_TOKEN}`,
        }

        const url = 'https://api.vercel.com/v9/projects'

        const response = await fetch(url, {
            headers,
            next: { revalidate: 3600 } // Cache for 1 hour
        })

        if (!response.ok) {
            throw new Error('Failed to fetch Vercel projects')
        }

        const data = await response.json()

        // Filter and sanitize project data - only return safe, public information
        const sanitizedProjects = data.projects.slice(0, 6).map((project: any) => ({
            id: project.id,
            name: project.name,
            framework: project.framework,
            createdAt: project.createdAt,
            updatedAt: project.updatedAt,
            link: project.link ? {
                org: project.link.org,
                repo: project.link.repo,
            } : null,
            targets: project.targets?.production ? {
                production: {
                    alias: project.targets.production.alias,
                }
            } : null,
            latestDeployments: project.latestDeployments?.slice(0, 1).map((deployment: any) => ({
                alias: deployment.alias,
                url: deployment.url,
                readyState: deployment.readyState,
            })) || []
        }))

        return NextResponse.json(sanitizedProjects, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        })
    } catch (error) {
        console.error('Error fetching Vercel projects:', error)
        return NextResponse.json(
            { error: 'Failed to fetch projects' },
            { status: 500 }
        )
    }
}