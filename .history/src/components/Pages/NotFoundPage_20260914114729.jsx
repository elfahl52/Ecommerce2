import { Link } from 'react-router-dom'

import PageShell from './PageShell'

const NotFoundPage = () => (
  <PageShell
    eyebrow="Page not found"
    title="This page doesn’t exist yet"
    description="The link you followed may be outdated or the page may have moved."
    actions={[
      <Link key="home" to="/" className="rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
        Back to home
      </Link>,
    ]}
  />
)

export default NotFoundPage
