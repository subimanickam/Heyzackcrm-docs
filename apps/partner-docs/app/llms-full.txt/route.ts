import { partnerSource } from '@/lib/partner-source'
import { crmSource } from '@/lib/crm-source'
import { siteConfig, getSiteUrl } from '@/lib/theme-config'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

function stripMdxContent(content: string): string {
  return content
    .replace(/^---[\s\S]*?---\n*/m, '')
    .replace(/^import\s+.*$/gm, '')
    .replace(/<[A-Z][a-zA-Z]*[^>]*\/>/g, '')
    .replace(/<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g, '')
    .replace(/<\/?[A-Z][a-zA-Z]*[^>]*>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function appendPagesMarkdown(
  content: string,
  baseUrl: string,
  contentDir: string,
  pages: ReturnType<typeof partnerSource.getPages>
): string {
  let out = content
  for (const page of pages) {
    const title = page.data.title
    const description = page.data.description || ''
    const url = `${baseUrl}${page.url}`

    out += `## ${title}\n\n`
    out += `**URL:** ${url}\n`
    if (description) {
      out += `**Description:** ${description}\n`
    }
    out += `\n`

    const slugPath = page.slugs.join('/')
    const mdxPath = slugPath
      ? path.join(contentDir, `${slugPath}.mdx`)
      : path.join(contentDir, 'index.mdx')

    try {
      if (fs.existsSync(mdxPath)) {
        const rawContent = fs.readFileSync(mdxPath, 'utf-8')
        out += stripMdxContent(rawContent)
      }
    } catch {
      // Skip if file can't be read
    }

    out += `\n\n---\n\n`
  }
  return out
}

export async function GET() {
  const baseUrl = getSiteUrl()
  const cwd = process.cwd()
  const partnerDir = path.join(cwd, 'content', 'partner')
  const crmDir = path.join(cwd, 'content', 'crm')

  let content = `# ${siteConfig.name}

> ${siteConfig.description}

This document contains the full content of all documentation pages for AI consumption.

---

## Partner Portal documentation

`

  content = appendPagesMarkdown(content, baseUrl, partnerDir, partnerSource.getPages())

  content += `## HeyZack CRM documentation

`

  content = appendPagesMarkdown(content, baseUrl, crmDir, crmSource.getPages())

  const hasLinks = siteConfig.links.github || siteConfig.links.discord || siteConfig.links.support
  if (hasLinks) {
    content += `## Links

`
    if (siteConfig.links.github) {
      content += `- [GitHub](${siteConfig.links.github})\n`
    }
    if (siteConfig.links.discord) {
      content += `- [Discord](${siteConfig.links.discord})\n`
    }
    if (siteConfig.links.support) {
      content += `- [Support](${siteConfig.links.support})\n`
    }
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
