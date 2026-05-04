/**
 * Cross-link between Partner Portal docs and HeyZack CRM docs.
 *
 * This package is always the Partner docs site (`siteId` is fixed).
 * Set NEXT_PUBLIC_CRM_DOCS_URL / NEXT_PUBLIC_PARTNER_DOCS_URL so the inactive tab
 * points at the real sibling (defaults are localhost:3001 / :3000 for local dev).
 */

export type DocsSiteId = 'partner' | 'crm'

export interface DocsSwitcherConfig {
  siteId: DocsSiteId
  partnerLabel: string
  crmLabel: string
  partnerUrl: string
  crmUrl: string
}

export function getDocsSwitcherConfig(): DocsSwitcherConfig {
  return {
    siteId: 'partner',
    partnerLabel: 'Partner',
    crmLabel: 'CRM',
    partnerUrl:
      process.env.NEXT_PUBLIC_PARTNER_DOCS_URL || 'http://localhost:3000/docs',
    crmUrl: process.env.NEXT_PUBLIC_CRM_DOCS_URL || 'http://localhost:3001/docs',
  }
}
