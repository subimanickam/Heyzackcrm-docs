import { crmSource } from '@/lib/crm-source'
import { createFromSource } from 'fumadocs-core/search/server'

export const { GET } = createFromSource(crmSource, {
  language: 'english',
})
