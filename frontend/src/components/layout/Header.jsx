import Icon from '../ui/Icon.jsx'

function Header({ title, description, onMenuClick, isMenuOpen = false }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-10">
        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={onMenuClick}
          className="-ml-1.5 rounded-md p-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          aria-label="Open navigation"
          aria-controls="app-sidebar"
          aria-expanded={isMenuOpen}
        >
          <Icon name="menu" />
        </button>

        {/* Page title */}
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-semibold tracking-tight text-slate-900">{title}</h1>
          {description && (
            <p className="hidden truncate text-sm text-slate-500 sm:block">{description}</p>
          )}
        </div>

        {/* Actions: placeholders for notifications and user profile */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Notifications"
          >
            <Icon name="reminders" />
          </button>

          <div className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" aria-hidden="true" />

          <button
            type="button"
            className="flex items-center gap-2 rounded-full p-1 hover:bg-slate-100 sm:pr-3"
            aria-label="Account menu"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-500">
              <Icon name="user" className="h-[18px] w-[18px]" />
            </span>
            <span className="hidden text-sm font-medium text-slate-700 sm:inline">Account</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
