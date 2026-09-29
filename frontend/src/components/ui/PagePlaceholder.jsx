import Icon from './Icon.jsx'

// Temporary body for pages whose features have not been built yet.
function PagePlaceholder({ icon, title, description }) {
  return (
    <section
      aria-labelledby="placeholder-heading"
      className="flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h2 id="placeholder-heading" className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">{description}</p>
      <span className="mt-5 inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
        Coming soon
      </span>
    </section>
  )
}

export default PagePlaceholder
