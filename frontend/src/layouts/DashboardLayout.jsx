import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar.jsx'
import Header from '../components/layout/Header.jsx'
import { getPageByPath } from '../config/navigation.js'

function DashboardLayout() {
  const { pathname } = useLocation()
  const page = getPageByPath(pathname)

  // The mobile drawer remembers the path it was opened on, so any navigation
  // (a link click or the browser's back button) closes it automatically.
  const [drawerOpenedAt, setDrawerOpenedAt] = useState(null)
  const isSidebarOpen = drawerOpenedAt === pathname
  const closeSidebar = () => setDrawerOpenedAt(null)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} onNavigate={closeSidebar} />

      {/* Backdrop for the mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <div className="flex min-h-screen flex-col lg:pl-64">
        <Header
          title={page?.label ?? 'Page not found'}
          description={page?.description}
          onMenuClick={() => setDrawerOpenedAt(pathname)}
          isMenuOpen={isSidebarOpen}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
