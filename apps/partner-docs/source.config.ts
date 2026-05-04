import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import { rehypeCode } from 'fumadocs-core/mdx-plugins'

export const partner = defineDocs({
  dir: 'content/partner',
})

export const crm = defineDocs({
  dir: 'content/crm',
})

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [
      [
        rehypeCode,
        {
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        },
      ],
    ],
  },
})
