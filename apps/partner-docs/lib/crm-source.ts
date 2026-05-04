import { crm } from '../.source/server'
import { loader } from 'fumadocs-core/source'

export const crmSource = loader({
  baseUrl: '/docs/crm',
  source: crm.toFumadocsSource(),
})
