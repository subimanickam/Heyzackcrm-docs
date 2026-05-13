/** True when viewing French partner or CRM doc routes. */
export function isFrenchDocsPath(pathname: string): boolean {
  return pathname.startsWith('/docs/fr') || pathname.startsWith('/docs/crm/fr')
}

/** Partner or CRM docs home for the current locale (matches language switcher paths). */
export function getDocsHomeHref(pathname: string): string {
  if (pathname.startsWith('/docs/crm/fr')) return '/docs/crm/fr'
  if (pathname.startsWith('/docs/crm')) return '/docs/crm'
  if (pathname.startsWith('/docs/fr')) return '/docs/fr'
  return '/docs'
}

/** Quick-link labels in the docs sidebar / mobile drawer. */
export function getDocsQuickNavLabels(pathname: string): {
  documentation: string
  support: string
  docsHomeHref: string
} {
  const fr = isFrenchDocsPath(pathname)
  return {
    documentation: 'Documentation',
    support: fr ? 'Assistance' : 'Support',
    docsHomeHref: getDocsHomeHref(pathname),
  }
}

/** Right-rail TOC heading (in-page outline). */
export function getOnThisPageLabel(pathname: string): string {
  return isFrenchDocsPath(pathname) ? 'Sur cette page' : 'On this page'
}

export type DocsSearchUiCopy = {
  triggerPlaceholder: string
  dialogTitle: string
  inputAriaLabel: string
  inputPlaceholder: string
  startTyping: string
  searching: string
  noResults: (query: string) => string
  resultsAriaLabel: string
  breadcrumbRoot: string
  breadcrumbSep: string
  navigateHint: string
  selectHint: string
  closeHint: string
}

/** Search modal / trigger copy for English vs French doc routes. */
export function getDocsSearchUiCopy(pathname: string): DocsSearchUiCopy {
  const fr = isFrenchDocsPath(pathname)
  if (fr) {
    return {
      triggerPlaceholder: 'Rechercher dans la documentation…',
      dialogTitle: 'Rechercher dans la documentation',
      inputAriaLabel: 'Rechercher dans la documentation',
      inputPlaceholder: 'Rechercher…',
      startTyping: 'Commencez à saisir pour rechercher…',
      searching: 'Recherche en cours…',
      noResults: (query) => `Aucun résultat pour « ${query} »`,
      resultsAriaLabel: 'Résultats de recherche',
      breadcrumbRoot: 'Documentation',
      breadcrumbSep: ' › ',
      navigateHint: 'pour naviguer',
      selectHint: 'pour sélectionner',
      closeHint: 'pour fermer',
    }
  }
  return {
    triggerPlaceholder: 'Search documentation...',
    dialogTitle: 'Search documentation',
    inputAriaLabel: 'Search documentation',
    inputPlaceholder: 'Search...',
    startTyping: 'Start typing to search...',
    searching: 'Searching...',
    noResults: (query) => `No results found for "${query}"`,
    resultsAriaLabel: 'Search results',
    breadcrumbRoot: 'Documentation',
    breadcrumbSep: ' > ',
    navigateHint: 'to navigate',
    selectHint: 'to select',
    closeHint: 'to close',
  }
}
