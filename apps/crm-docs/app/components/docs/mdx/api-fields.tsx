import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface ParamFieldProps {
  body?: string
  query?: string
  type?: string
  required?: boolean
  default?: string
  children?: ReactNode
}

interface ResponseFieldProps {
  name: string
  type?: string
  children?: ReactNode
}

interface ExpandableProps {
  title: string
  children?: ReactNode
}

export function CodeGroup({ children }: { children?: ReactNode }) {
  return <div className="my-6 space-y-4">{children}</div>
}

export function ParamField({
  body,
  query,
  type,
  required,
  default: defaultValue,
  children,
}: ParamFieldProps) {
  const fieldName = body ?? query ?? 'param'
  const location = body ? 'body' : query ? 'query' : 'param'

  return (
    <div className="my-3 rounded-lg border border-border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <code className="text-sm font-semibold text-foreground">{fieldName}</code>
        {type && <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">{type}</span>}
        <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">{location}</span>
        {required && <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300">required</span>}
        {defaultValue && (
          <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            default: {defaultValue}
          </span>
        )}
      </div>
      {children && <div className="mt-3 text-sm text-muted-foreground">{children}</div>}
    </div>
  )
}

export function ResponseField({ name, type, children }: ResponseFieldProps) {
  return (
    <div className="my-3 rounded-lg border border-border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <code className="text-sm font-semibold text-foreground">{name}</code>
        {type && <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">{type}</span>}
      </div>
      {children && <div className="mt-3 text-sm text-muted-foreground">{children}</div>}
    </div>
  )
}

export function Expandable({ title, children }: ExpandableProps) {
  return (
    <details className={cn('my-3 rounded-lg border border-border p-4')}>
      <summary className="cursor-pointer list-none text-sm font-medium text-foreground">{title}</summary>
      <div className="mt-3">{children}</div>
    </details>
  )
}
