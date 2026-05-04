import type { Root, Node } from 'fumadocs-core/page-tree'

/** Walk the page tree to find the separator label before the current page. */
export function findSectionName(tree: Root, pageUrl: string, fallback = 'Documentation'): string {
  let lastSeparator = fallback

  function traverse(nodes: Node[]): string | null {
    for (const node of nodes) {
      if (node.type === 'separator') {
        lastSeparator = typeof node.name === 'string' ? node.name : fallback
      } else if (node.type === 'page' && node.url === pageUrl) {
        return lastSeparator
      } else if (node.type === 'folder' && node.children) {
        const result = traverse(node.children)
        if (result) return result
      }
    }
    return null
  }

  return traverse(tree.children) || lastSeparator
}
