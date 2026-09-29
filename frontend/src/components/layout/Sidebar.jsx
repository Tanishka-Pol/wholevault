import { Link, NavLink } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { navigationSections, settingsItem } from '../../config/navigation.js'

// NavLink derives the active state from the current URL and sets
// aria-current="page" on the matching link. `end` keeps "/" from matching
// every route.
function SidebarLink({ item, onNavigate }) {
  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600',
          isActive
            ? 'bg-teal-50 text-teal-800'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? 'text-teal-700' : 'text-slate-400 group-hover:text-slate-600'}>
            <Icon name={item.icon} />
          </span>
          {item.label}
        </>
      )}
    </NavLink>
  )
}

function Sidebar({ isOpen = false, onClose, onNavigate }) {
  return (
    <aside
      id="app-sidebar"
      className={[
        'fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white',
        'transition-transform duration-200 lg:w-64 lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      ].join(' ')}
    >
      {/* Branding */}
      <div className="flex h-16 shrink-0 items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5" onClick={onNavigate}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-teal-300">
            <Icon name="vault" className="h-[18px] w-[18px]" />
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-slate-900">
            Whole<span className="text-teal-700">Vault</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          aria-label="Close navigation"
        >
          <Icon name="close" />
        </button>
      </div>

      {/* Primary navigation */}
      <nav aria-label="Main" className="flex-1 overflow-y-auto px-3 py-4">
        {navigationSections.map((section) => (
          <div key={section.label} className="mb-6 last:mb-0">
            <h2 className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
              {section.label}
            </h2>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.id}>
                  <SidebarLink item={item} onNavigate={onNavigate} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Secondary navigation */}
      <nav aria-label="Account" className="border-t border-slate-200 px-3 py-4">
        <ul>
          <li>
            <SidebarLink item={settingsItem} onNavigate={onNavigate} />
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
