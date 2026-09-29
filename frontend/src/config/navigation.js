// Single source of truth for the app's top-level pages. The sidebar renders
// these links and the layout uses them to title the header. Add a page here
// (and its <Route> in App.jsx) to extend navigation.
export const navigationSections = [
  {
    label: 'Overview',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: 'dashboard',
        description: 'Everything important, in one place.',
      },
    ],
  },
  {
    label: 'Your vault',
    items: [
      {
        id: 'documents',
        label: 'Documents',
        path: '/documents',
        icon: 'documents',
        description: 'IDs, certificates, policies and records.',
      },
      {
        id: 'bills',
        label: 'Bills',
        path: '/bills',
        icon: 'bills',
        description: 'Recurring payments and due dates.',
      },
      {
        id: 'assets',
        label: 'Assets',
        path: '/assets',
        icon: 'assets',
        description: 'Property, vehicles and valuables.',
      },
      {
        id: 'reminders',
        label: 'Reminders',
        path: '/reminders',
        icon: 'reminders',
        description: 'Renewals, deadlines and follow-ups.',
      },
      {
        id: 'life-events',
        label: 'Life Events',
        path: '/life-events',
        icon: 'lifeEvents',
        description: 'Big moments and what they require.',
      },
    ],
  },
]

export const settingsItem = {
  id: 'settings',
  label: 'Settings',
  path: '/settings',
  icon: 'settings',
  description: 'Preferences for your vault.',
}

const allPages = [...navigationSections.flatMap((section) => section.items), settingsItem]

export function getPageByPath(pathname) {
  // Ignore a trailing slash so "/bills/" resolves like "/bills".
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return allPages.find((page) => page.path === normalized)
}
