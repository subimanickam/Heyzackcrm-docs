import { crmSource } from '@/lib/crm-source'
import { DocsShell } from '../../../components/docs/docs-shell'

export default function CrmDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tree = crmSource.pageTree

  return <DocsShell tree={tree} searchApi="/api/search/crm">{children}</DocsShell>
}
