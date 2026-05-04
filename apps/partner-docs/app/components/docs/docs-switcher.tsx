'use client'

import { cn } from '@/lib/utils'
import { getDocsSwitcherConfig } from '@/lib/docs-switcher'

interface DocsSwitcherProps {
  className?: string
  /** Wider labels on desktop */
  variant?: 'header' | 'mobile'
}

/**
 * Switch between Partner Portal docs and HeyZack CRM docs (separate deployments or local ports).
 */
export function DocsSwitcher({ className, variant = 'header' }: DocsSwitcherProps) {
  const { siteId, partnerLabel, crmLabel, partnerUrl, crmUrl } = getDocsSwitcherConfig()
  const isPartner = siteId === 'partner'

  const partnerText = variant === 'mobile' ? 'Partner Portal' : partnerLabel
  const crmText = variant === 'mobile' ? 'HeyZack CRM' : crmLabel

  const base =
    'flex items-center rounded-md border border-border bg-muted/40 p-0.5 text-xs sm:text-sm'
  const inactive =
    'px-2.5 py-1.5 rounded sm:px-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
  const active = 'px-2.5 py-1.5 rounded sm:px-3 font-medium bg-background text-foreground shadow-sm'

  return (
    <nav
      className={cn(base, className)}
      aria-label="Switch documentation site"
    >
      {isPartner ? (
        <span className={active} title="Partner Portal documentation">
          {partnerText}
        </span>
      ) : (
        <a href={partnerUrl} className={inactive} title="Open Partner Portal documentation">
          {partnerText}
        </a>
      )}
      <span className="text-muted-foreground/50 px-0.5 select-none" aria-hidden>
        |
      </span>
      {!isPartner ? (
        <span className={active} title="HeyZack CRM documentation">
          {crmText}
        </span>
      ) : (
        <a href={crmUrl} className={inactive} title="Open HeyZack CRM documentation">
          {crmText}
        </a>
      )}
    </nav>
  )
}
