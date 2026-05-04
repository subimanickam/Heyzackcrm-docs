import { partnerSource } from '@/lib/partner-source'
import { DocsShell } from '../../components/docs/docs-shell'

export default function PartnerDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tree = partnerSource.pageTree

  return <DocsShell tree={tree} searchApi="/api/search">{children}</DocsShell>
}
