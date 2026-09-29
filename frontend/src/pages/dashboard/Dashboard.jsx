import Icon from '../../components/ui/Icon.jsx'

// Vault areas and how they relate. Counts are intentionally absent: nothing is
// stored yet, so every area renders its empty state until data exists.
// Tailwind class strings are written in full so they are picked up at build time.
const vaultAreas = [
  {
    id: 'documents',
    label: 'Documents',
    icon: 'documents',
    description: 'IDs, certificates, policies and records.',
    linksWith: ['Assets', 'Life Events'],
    tint: 'bg-sky-50 text-sky-700 ring-sky-100',
  },
  {
    id: 'bills',
    label: 'Bills',
    icon: 'bills',
    description: 'Recurring payments and due dates.',
    linksWith: ['Reminders', 'Assets'],
    tint: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  {
    id: 'assets',
    label: 'Assets',
    icon: 'assets',
    description: 'Property, vehicles and valuables.',
    linksWith: ['Documents', 'Bills'],
    tint: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  {
    id: 'reminders',
    label: 'Reminders',
    icon: 'reminders',
    description: 'Renewals, deadlines and follow-ups.',
    linksWith: ['Bills', 'Documents'],
    tint: 'bg-violet-50 text-violet-700 ring-violet-100',
  },
  {
    id: 'life-events',
    label: 'Life Events',
    icon: 'lifeEvents',
    description: 'Big moments and what they require.',
    linksWith: ['Documents', 'Reminders'],
    tint: 'bg-rose-50 text-rose-700 ring-rose-100',
  },
]

const attentionSignals = [
  'Documents about to expire',
  'Bills due in the next 7 days',
  'Overdue reminders',
  'Gaps before a life event',
]

// Illustrative only: shows the shape of readiness checks, not the user's data.
const exampleLifeEvents = [
  { label: 'Moving home', needs: 'Lease, utility bills, address proofs' },
  { label: 'International travel', needs: 'Passport, visa, travel insurance' },
  { label: 'Buying a vehicle', needs: 'Loan papers, insurance, registration' },
]

function Card({ as: Component = 'section', className = '', children, ...props }) {
  return (
    <Component
      className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/[0.03] ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

function SectionHeading({ id, title, description, aside }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 id={id} className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>
      {aside}
    </div>
  )
}

function Badge({ children, className = 'bg-slate-100 text-slate-600' }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

function WelcomeHero() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-8 text-white sm:px-10 sm:py-10"
    >
      {/* Soft brand glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-teal-300">Your personal vault</p>
          <h2 id="welcome-heading" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome to WholeVault
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            Keep your documents, bills, assets, reminders and life events in one place, connected
            to each other, so the important things surface before they become urgent.
          </p>
        </div>

        {/* Vault connections: every area starts empty */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">Vault setup</p>
            <p className="text-sm text-slate-400">0 of {vaultAreas.length} areas</p>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full w-0 rounded-full bg-teal-400" />
          </div>
          <ul className="mt-5 grid grid-cols-5 gap-2">
            {vaultAreas.map((area) => (
              <li key={area.id} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-dashed border-white/20 text-slate-300">
                  <Icon name={area.icon} />
                </span>
                <span className="text-[11px] leading-tight text-slate-400">{area.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function NeedsAttention() {
  return (
    <Card aria-labelledby="attention-heading" className="p-6 sm:p-7">
      <SectionHeading
        id="attention-heading"
        title="Needs attention"
        description="The things that need you, pulled from across your vault."
        aside={<Badge className="bg-amber-50 text-amber-700">0 items</Badge>}
      />

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <Icon name="shieldCheck" />
          </span>
          <div>
            <p className="font-medium text-slate-900">Nothing needs your attention</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">
              Your vault is empty, so there is nothing to flag yet. Items will appear here as soon
              as something needs action.
            </p>
          </div>
        </div>

        <div className="hidden h-full w-px bg-slate-200 md:block" aria-hidden="true" />

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            WholeVault will watch for
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {attentionSignals.map((signal) => (
              <li
                key={signal}
                className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-sm text-slate-600 ring-1 ring-slate-200/70"
              >
                <Icon name="alert" className="h-3.5 w-3.5 text-amber-600" />
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

function VaultOverview() {
  return (
    <section aria-labelledby="vault-heading">
      <SectionHeading
        id="vault-heading"
        title="Your vault"
        description="Each area connects to the others. That is what makes the vault whole."
      />
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {vaultAreas.map((area) => (
          <Card as="li" key={area.id} className="flex flex-col p-5">
            <div className="flex items-center justify-between">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${area.tint}`}>
                <Icon name={area.icon} />
              </span>
              <span className="text-2xl font-semibold tracking-tight text-slate-300">0</span>
            </div>
            <h3 className="mt-4 font-medium text-slate-900">{area.label}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">{area.description}</p>
            <div className="mt-auto flex items-center gap-1.5 border-t border-slate-100 pt-3 text-xs text-slate-400">
              <Icon name="link" className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">Links with {area.linksWith.join(' & ')}</span>
            </div>
          </Card>
        ))}
      </ul>
    </section>
  )
}

function UpcomingItems() {
  return (
    <Card aria-labelledby="upcoming-heading" className="flex flex-col p-6 sm:p-7">
      <SectionHeading
        id="upcoming-heading"
        title="Upcoming"
        description="Due dates, renewals and reminders in date order."
        aside={<Badge>Next 30 days</Badge>}
      />
      <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 px-6 py-10 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <Icon name="clock" />
        </span>
        <p className="mt-4 font-medium text-slate-900">Nothing scheduled yet</p>
        <p className="mt-1 max-w-xs text-sm leading-relaxed text-slate-500">
          Add a bill or a reminder and it will appear here on a single timeline.
        </p>
      </div>
    </Card>
  )
}

function LifeEventReadiness() {
  return (
    <Card aria-labelledby="readiness-heading" className="p-6 sm:p-7">
      <SectionHeading
        id="readiness-heading"
        title="Life-event readiness"
        description="Check whether you have everything a big moment will ask for."
        aside={<Badge className="bg-rose-50 text-rose-700">Examples</Badge>}
      />
      <ul className="mt-6 space-y-3">
        {exampleLifeEvents.map((event) => (
          <li key={event.label} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-slate-900">{event.label}</p>
              <span className="text-xs font-medium text-slate-400">Not started</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">Needs: {event.needs}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
              <div className="h-full w-0 rounded-full bg-rose-500" />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-slate-400">
        These are illustrations of how readiness will work, not information from your vault.
      </p>
    </Card>
  )
}

function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeHero />
      <NeedsAttention />
      <VaultOverview />
      <div className="grid gap-6 lg:grid-cols-2">
        <UpcomingItems />
        <LifeEventReadiness />
      </div>
    </div>
  )
}

export default Dashboard
