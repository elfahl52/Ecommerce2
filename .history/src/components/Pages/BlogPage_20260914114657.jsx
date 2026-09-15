import PageShell from './PageShell'

const BlogPage = () => (
  <PageShell
    eyebrow="Latest updates"
    title="Tips, trends, and product inspiration"
    description="Stay in the loop with articles that cover smart gadgets, shopping advice, and the best ways to enjoy modern tech at home."
  >
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: 'How to build a better home workspace',
          text: 'Create a setup that feels comfortable, efficient, and ready for long workdays.',
        },
        {
          title: 'Top audio gadgets for everyday listening',
          text: 'Explore headphones and speakers that deliver clean sound without the clutter.',
        },
        {
          title: 'The best smart upgrades for your home',
          text: 'Simple automation ideas that help you save time and make life more convenient.',
        },
      ].map((article) => (
        <article key={article.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-red-100 via-white to-red-200 dark:from-red-500/20 dark:via-gray-800 dark:to-red-500/10" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Article</p>
          <h2 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{article.title}</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{article.text}</p>
          <button
            type="button"
            className="mt-5 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200"
          >
            Read article
          </button>
        </article>
      ))}
    </div>
  </PageShell>
)

export default BlogPage
