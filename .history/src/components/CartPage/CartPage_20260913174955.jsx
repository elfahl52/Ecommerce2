import { Link } from 'react-router-dom'

const formatPrice = (value) => `$${value.toFixed(2)}`

function CartPage({ cartItems, updateCartQuantity, removeFromCart, subtotal, cartCount }) {
  return (
    <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Your basket</p>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">Cart page</h1>
          </div>
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">
            {cartCount} item{cartCount === 1 ? '' : 's'}
          </span>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:flex-row sm:items-center"
                >
                  <img src={item.image} alt={item.name} className="h-28 w-28 rounded-2xl object-cover" />

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                    <p className="mt-3 text-xl font-black text-gray-900 dark:text-white">{formatPrice(item.price)}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center overflow-hidden rounded-full border border-gray-300 dark:border-gray-700">
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="h-10 w-10 text-lg font-bold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                      >
                        −
                      </button>
                      <span className="min-w-10 text-center text-sm font-bold text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="h-10 w-10 text-lg font-bold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full border border-red-500 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">Order summary</h3>

              <div className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-gray-900 dark:text-white">Free</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Tax</span>
                  <span className="font-bold text-gray-900 dark:text-white">Calculated later</span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-5 dark:border-gray-700">
                <div className="flex items-center justify-between text-lg font-black text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Proceed to checkout
              </button>
            </aside>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Your cart is empty</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Add some products from the home page to start shopping.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Go to products
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartPage
