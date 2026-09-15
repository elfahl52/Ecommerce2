 import { useMemo, useState } from 'react'
import './App.css'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products, { products as initialProducts } from './components/Products/Products'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [wishlistIds, setWishlistIds] = useState([])

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const toggleWishlist = (productId) => {
    setWishlistIds((currentWishlistIds) =>
      currentWishlistIds.includes(productId)
        ? currentWishlistIds.filter((id) => id !== productId)
        : [...currentWishlistIds, productId]
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  )

  const wishlistCount = wishlistIds.length

  const wishlistItems = useMemo(
    () => initialProducts.filter((product) => wishlistIds.includes(product.id)),
    [wishlistIds]
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  )

  return (
    <>
      <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
      <Hero />
      <Category />
      <Category2 />

      <Products
        products={initialProducts}
        wishlistIds={wishlistIds}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
      />

      <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 rounded-[2rem] bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-8 text-white shadow-xl sm:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                  Limited time offer
                </p>
                <h3 className="text-3xl font-black sm:text-4xl">Up to 30% off on selected gadgets</h3>
              </div>

              <button
                type="button"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-red-600 transition-all duration-300 hover:scale-105"
              >
                Shop the deals
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Wishlist</h3>
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  {wishlistCount} item{wishlistCount === 1 ? '' : 's'}
                </span>
              </div>

              {wishlistItems.length > 0 ? (
                <div className="space-y-4">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-gray-200 p-3 dark:border-gray-700">
                      <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className="rounded-full bg-red-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                      >
                        Add to cart
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your wishlist is empty. Save items you love from the product section.
                </p>
              )}
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Cart summary</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  {cartCount} item{cartCount === 1 ? '' : 's'}
                </span>
              </div>

              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 p-3 dark:border-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.quantity} x ${item.price}
                        </p>
                      </div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}

                  <div className="rounded-2xl bg-red-50 p-4 dark:bg-red-500/10">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>Subtotal</span>
                      <span className="font-bold text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-red-500 dark:hover:bg-red-600"
                  >
                    Proceed to checkout
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your cart is empty. Add some products to get started.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
