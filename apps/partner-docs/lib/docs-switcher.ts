/**
 * Cross-link between Partner Portal docs and HeyZack CRM docs.
 *
 * Set NEXT_PUBLIC_DOCS_SITE to `partner` (this repo) or `crm` (CRM docs repo).
 * Point the sibling app with NEXT_PUBLIC_CRM_DOCS_URL / NEXT_PUBLIC_PARTNER_DOCS_URL.
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
    siteId: (process.env.NEXT_PUBLIC_DOCS_SITE as DocsSiteId) || 'partner',
    partnerLabel: 'Partner',
    crmLabel: 'CRM',
    partnerUrl:
      process.env.NEXT_PUBLIC_PARTNER_DOCS_URL || 'http://localhost:3000/docs',
    crmUrl: process.env.NEXT_PUBLIC_CRM_DOCS_URL || 'http://localhost:3001/docs',
  }
}
