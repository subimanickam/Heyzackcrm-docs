/**
 * Unmint Theme Configuration
 *
 * Customize your documentation's look and feel by modifying this file.
 * All colors, branding, and styling can be adjusted here.
 */

export const siteConfig = {
  // Site metadata
  name: 'HeyZack Partner Portal',
  description: 'Documentation for the HeyZack Partner Portal smart home operations platform.',
  url: 'https://docs.heyzack.ai',

  // Logo configuration
  logo: {
    src: 'https://partner.heyzack.ai/assets/logo/heyzackdark.png',
    alt: 'HeyZack',
    width: 40,
    height: 40,
  },

  // Navigation links
  links: {
    github: '',
    discord: '',
    twitter: '',
    support: 'mailto:heyzackai@gmail.com',
  },

  // Footer configuration
  footer: {
    copyright: '© 2026 HeyZack. All rights reserved.',
    links: [{ label: 'Website', href: 'https://heyzack.ai' }],
  },
}

export const themeConfig = {
  // Primary accent color - used for active states, links, highlights
  colors: {
    // Light mode
    light: {
      accent: '#e55b6b',        // Primary accent color
      accentForeground: '#ffffff',
      accentMuted: 'rgba(229, 91, 107, 0.12)',
    },
    // Dark mode
    dark: {
      accent: '#e55b6b',
      accentForeground: '#0c0c0c',
      accentMuted: 'rgba(229, 91, 107, 0.18)',
    },
  },

  // Code block styling
  codeBlock: {
    light: {
      background: '#fafafa',
      titleBar: '#f3f4f6',
    },
    dark: {
      background: '#1a1a1f',
      titleBar: '#1f2937',
    },
  },

  // OG Image generation settings
  ogImage: {
    // Gradient background (CSS gradient string)
    gradient: 'linear-gradient(135deg, #ffffff 0%, #e0f7fa 50%, #67e8f9 100%)',
    // Text colors
    titleColor: '#0f172a',
    sectionColor: '#e55b6b',
    // Logo URL (absolute URL required for OG images)
    logoUrl: 'https://partner.heyzack.ai/assets/logo/heyzackdark.png',
  },
}

// Export CSS variable values for use in Tailwind
export function getCSSVariables(mode: 'light' | 'dark') {
  const colors = themeConfig.colors[mode]
  return {
    '--accent': colors.accent,
    '--accent-foreground': colors.accentForeground,
    '--accent-muted': colors.accentMuted,
  }
}

/**
 * Get the site URL dynamically
 * Priority: NEXT_PUBLIC_SITE_URL > VERCEL_PROJECT_PRODUCTION_URL > VERCEL_URL > siteConfig.url
 * This allows OG images to work automatically on Vercel without configuration
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  // Use production URL if available (custom domain)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  // Fallback to deployment URL for preview deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return siteConfig.url
}
