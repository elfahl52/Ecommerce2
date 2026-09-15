import PageShell from './PageShell'

const AboutPage = () => (
  <PageShell
    eyebrow="About us"
    title="A modern store built around customer trust"
    description="We focus on delivering an effortless shopping journey through quality products, honest pricing, and responsive service."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { value: '12k+', label: 'Happy customers' },
        { value: '4.8/5', label: 'Average rating' },
        { value: '99%', label: 'Repeat shoppers' },
      ].map((item) => (
        <div key={item.label} className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="text-3xl font-black text-gray-900 dark:text-white">{item.value}</div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{item.label}</p>
        </div>
      ))}
    </div>
  </PageShell>
)

export default AboutPage
