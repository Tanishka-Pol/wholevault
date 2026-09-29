import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar.jsx'
import Header from '../components/layout/Header.jsx'

function DashboardLayout({ title, description, activeItem = 'dashboard', children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Sidebar
        activeItem={activeItem}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={() => setIsSidebarOpen(false)}
      />

      {/* Backdrop for the mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="flex min-h-screen flex-col lg:pl-64">
        <Header
          title={title}
          description={description}
          onMenuClick={() => setIsSidebarOpen(true)}
          isMenuOpen={isSidebarOpen}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
