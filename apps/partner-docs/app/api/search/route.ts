import { partnerSource } from '@/lib/partner-source'
import { createFromSource } from 'fumadocs-core/search/server'

export const { GET } = createFromSource(partnerSource, {
  language: 'english',
})
