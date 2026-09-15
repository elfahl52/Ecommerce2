import PageShell from './PageShell'

const ContactPage = () => (
  <PageShell
    eyebrow="Contact us"
    title="We’re here to help"
    description="Send us a message and we’ll get back to you as quickly as possible with the right support."
  >
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
      <div className="space-y-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Reach us</p>
          <h2 className="mt-2 text-2xl font-black text-gray-900 dark:text-white">Support team</h2>
        </div>

        {[
          ['Email', 'support@eshop.example'],
          ['Phone', '+966 55 123 4567'],
          ['Hours', 'Mon - Sat, 9:00 AM - 8:00 PM'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{label}</p>
            <p className="mt-2 text-base font-semibold text-gray-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      <form className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
            Full name
            <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-red-500 dark:border-gray-700 dark:bg-gray-800" />
          </label>

          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
            Email address
            <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-red-500 dark:border-gray-700 dark:bg-gray-800" />
          </label>
        </div>

        <label className="mt-5 block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Subject
          <input type="text" placeholder="How can we help?" className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-red-500 dark:border-gray-700 dark:bg-gray-800" />
        </label>

        <label className="mt-5 block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Message
          <textarea rows="5" placeholder="Write your message here..." className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-red-500 dark:border-gray-700 dark:bg-gray-800" />
        </label>

        <button type="button" className="mt-6 rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
          Send message
        </button>
      </form>
    </div>
  </PageShell>
)

export default ContactPage
