import { partner } from '../.source/server'
import { loader } from 'fumadocs-core/source'

export const partnerSource = loader({
  baseUrl: '/docs',
  source: partner.toFumadocsSource(),
})
