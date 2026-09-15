import PageShell from './PageShell'

const FAQPage = () => {
  const faqs = [
    {
      q: 'How long does delivery take?',
      a: 'Most orders are delivered within 3 to 6 business days depending on your location and the shipping method selected.',
    },
    {
      q: 'Can I change or cancel my order?',
      a: 'You can request changes or cancellation shortly after placing your order, as long as it has not been processed for shipment yet.',
    },
    {
      q: 'Do you offer free returns?',
      a: 'Yes, eligible products can be returned within 14 days of delivery under our return policy.',
    },
    {
      q: 'Is my payment information secure?',
      a: 'Absolutely. We use secure checkout systems designed to protect your payment details and personal information.',
    },
  ]

  return (
    <PageShell
      eyebrow="FAQ"
      title="Answers to common questions"
      description="Everything you need to know before placing an order or contacting our support team."
    >
      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{item.q}</h2>
            <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">{item.a}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

export default FAQPage
