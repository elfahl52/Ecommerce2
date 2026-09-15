import { Link } from 'react-router-dom'

const formatPrice = (value) => `$${value.toFixed(2)}`

function WishlistPage({ wishlistItems, onAddToCart, onToggleWishlist }) {
  return (
    <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Saved items</p>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">Wishlist page</h1>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wishlistItems.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{item.category}</span>
                    <button
                      type="button"
                      onClick={() => onToggleWishlist(item.id)}
                      className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400"
                    >
                      Remove
                    </button>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">{formatPrice(item.price)}</p>
                      <p className="text-sm text-gray-500 line-through dark:text-gray-400">{formatPrice(item.oldPrice)}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/product/${item.id}`}
                        className="rounded-full border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200"
                      >
                        Details
                      </Link>
                      <button
                        type="button"
                        onClick={() => onAddToCart(item)}
                        className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">No saved items yet</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Save products you like from the home page to keep them here.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Explore products
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default WishlistPage
