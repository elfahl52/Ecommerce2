import PageShell from './PageShell'

const SupportPage = () => (
  <PageShell
    eyebrow="Support"
    title="Helpful assistance when you need it"
    description="We’re committed to making your shopping experience smooth, informed, and stress-free."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {[
        ['Order help', 'Track your purchase, change delivery details, and review updates.', 'Learn more'],
        ['Technical support', 'Get guidance for setup, compatibility, and product use.', 'Contact team'],
        ['Account care', 'Update your profile, preferences, and saved items any time.', 'Manage account'],
      ].map(([title, text, action]) => (
        <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Support</p>
          <h2 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{text}</p>
          <button type="button" className="mt-5 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200">
            {action}
          </button>
        </div>
      ))}
    </div>
  </PageShell>
)

export default SupportPage
