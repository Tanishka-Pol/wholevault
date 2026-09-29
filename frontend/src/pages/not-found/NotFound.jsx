import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'

function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white px-6 py-16 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        <Icon name="alert" className="h-6 w-6" />
      </span>
      <h2 id="not-found-heading" className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
        We couldn't find that page
      </h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
        The address may be mistyped, or the page may have moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      >
        Back to dashboard
      </Link>
    </section>
  )
}

export default NotFound
