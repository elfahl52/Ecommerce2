import PageShell from './PageShell'

const PolicyPage = ({ title, description, items }) => (
  <PageShell eyebrow="Policies" title={title} description={description}>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h2>
          <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">{item.text}</p>
        </div>
      ))}
    </div>
  </PageShell>
)

export default PolicyPage
