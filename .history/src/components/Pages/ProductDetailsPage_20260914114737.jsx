import { Link, useParams } from 'react-router-dom'

import { products as initialProducts } from '../Products/Products'

const formatPrice = (value) => `$${value.toFixed(2)}`

const ProductDetailsPage = ({ wishlistIds, onAddToCart, onToggleWishlist }) => {
  const { id } = useParams()
  const product = initialProducts.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">Product not found</h1>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Back to home
          </Link>
        </div>
      </section>
    )
  }

  const isWishlisted = wishlistIds.includes(product.id)
  const relatedProducts = initialProducts.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-4xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-gray-100 p-4 dark:bg-gray-800">
              <img src={product.image} alt={product.name} className="h-full w-full rounded-[1.25rem] object-cover" />
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  {product.tag}
                </span>
                <button
                  type="button"
                  onClick={() => onToggleWishlist(product.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isWishlisted
                      ? 'bg-red-500 text-white'
                      : 'border border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200'
                  }`}
                >
                  {isWishlisted ? 'Added to wishlist' : 'Add to wishlist'}
                </button>
              </div>

              <h1 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">{product.name}</h1>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{product.category}</span>
                <span>•</span>
                <span>{product.stock}</span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-3xl font-black text-gray-900 dark:text-white">{formatPrice(product.price)}</span>
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
              </div>

              <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">{product.description}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Add to cart
                </button>

                <Link
                  to="/"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-black text-gray-900 dark:text-white">You may also like</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <img src={item.image} alt={item.name} className="h-52 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{formatPrice(item.price)}</p>

                  <Link
                    to={`/product/${item.id}`}
                    className="mt-4 inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsPage
