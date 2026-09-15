import { useMemo, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products, { products as initialProducts } from './components/Products/Products'

const formatPrice = (value) => `$${value.toFixed(2)}`

const HomePage = ({
  products,
  wishlistIds,
  onAddToCart,
  onToggleWishlist,
}) => (
  <>
    <Hero />
    <Category />
    <Category2 />

    <Products
      products={products}
      wishlistIds={wishlistIds}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
    />
  </>
)

const CartPage = ({ cartItems, updateCartQuantity, removeFromCart, subtotal, cartCount }) => (
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

const WishlistPage = ({ wishlistItems, onAddToCart, onToggleWishlist }) => (
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

  const updateCartQuantity = (productId, change) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
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

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={initialProducts}
              wishlistIds={wishlistIds}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              cartItems={cartItems}
              wishlistItems={wishlistItems}
              subtotal={subtotal}
              cartCount={cartCount}
              wishlistCount={wishlistCount}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
              subtotal={subtotal}
              cartCount={cartCount}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlistItems={wishlistItems}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetailsPage wishlistIds={wishlistIds} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
