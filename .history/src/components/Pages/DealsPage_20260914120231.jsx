import { Link } from 'react-router-dom'

import { products as initialProducts } from '../Products/Products'
import PageShell from './PageShell'

const formatPrice = (value) => `$${value.toFixed(2)}`

const DealsPage = ({ products = initialProducts }) => (
  <PageShell
    eyebrow="Special offers"
    title="Deals worth checking out"
    description="Save more on featured products with limited-time promotions and hand-picked bundles."
  >
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products
        .filter((product) => product.oldPrice > product.price)
        .map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  {product.tag}
                </span>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">
                  Save {formatPrice(product.oldPrice - product.price)}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">{formatPrice(product.price)}</p>
                  <p className="text-sm text-gray-400 line-through">{formatPrice(product.oldPrice)}</p>
                </div>
                <Link
                  to={`/product/${product.id}`}
                  className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  View deal
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  </PageShell>
)

export default DealsPage
