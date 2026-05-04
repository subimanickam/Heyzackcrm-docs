import { partnerSource } from '@/lib/partner-source'
import { crmSource } from '@/lib/crm-source'
import { siteConfig, getSiteUrl } from '@/lib/theme-config'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = getSiteUrl()
  const partnerPages = partnerSource.getPages()
  const crmPages = crmSource.getPages()

  let content = `# ${siteConfig.name}

> ${siteConfig.description}

## Partner Portal documentation

`

  for (const page of partnerPages) {
    const title = page.data.title
    const description = page.data.description || ''
    const url = `${baseUrl}${page.url}`

    if (description) {
      content += `- [${title}](${url}): ${description}\n`
    } else {
      content += `- [${title}](${url})\n`
    }
  }

  content += `
## HeyZack CRM documentation

`

  for (const page of crmPages) {
    const title = page.data.title
    const description = page.data.description || ''
    const url = `${baseUrl}${page.url}`

    if (description) {
      content += `- [${title}](${url}): ${description}\n`
    } else {
      content += `- [${title}](${url})\n`
    }
  }

  const hasLinks = siteConfig.links.github || siteConfig.links.discord || siteConfig.links.support
  if (hasLinks) {
    content += `
## Links

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
