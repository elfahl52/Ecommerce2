const PageShell = ({ eyebrow, title, description, children, actions }) => (
  <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
    <div className="container mx-auto px-4">
      <div className="mb-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{eyebrow}</p>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">{description}</p>
        {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
      </div>

      {children}
    </div>
  </section>
)

export default PageShell
