import { useEffect, useMemo, useState } from 'react'
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom'
import './App.css'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import CartPage from './components/CartPage/CartPage'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products, { products as initialProducts } from './components/Products/Products'
import WishlistPage from './components/WishlistPage/WishlistPage'

const formatPrice = (value) => `$${value.toFixed(2)}`

const HomePage = ({
  products,
  wishlistIds,
  onAddToCart,
  onToggleWishlist,
}) => (
  <>
    <Hero />

    <section className="bg-white py-14 dark:bg-gray-900 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Why choose us</p>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">Built for easier shopping</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Fast delivery',
              text: 'Same-day dispatch on select items and free express shipping above $50.',
            },
            {
              title: 'Trusted quality',
              text: 'Every product is carefully selected to give you great performance and reliability.',
            },
            {
              title: 'Helpful support',
              text: 'Our team is here to guide you before, during, and after your purchase.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-xl font-black text-red-500 dark:bg-red-500/10">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Category />
    <Category2 />

    <Products
      products={products}
      wishlistIds={wishlistIds}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
    />

    <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-[2rem] bg-gradient-to-r from-red-500 to-red-600 p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-100">Big savings</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Upgrade your setup this week</h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/deals"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-gray-100"
              >
                Explore deals
              </Link>
              <Link
                to="/shop"
                className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

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

const ShopPage = ({ products, wishlistIds, onAddToCart, onToggleWishlist }) => (
  <>
    <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Shop collection</p>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">Discover everything we offer</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            Explore the latest gadgets, accessories, and essentials designed to simplify everyday life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: 'Products', value: products.length },
            { label: 'Categories', value: '7+' },
            { label: 'Customer rating', value: '4.8/5' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{item.label}</p>
              <h2 className="mt-3 text-3xl font-black text-gray-900 dark:text-white">{item.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Products
      products={products}
      wishlistIds={wishlistIds}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
    />
  </>
)

const CategoriesPage = () => (
  <PageShell
    eyebrow="Browse categories"
    title="Find the right fit for your lifestyle"
    description="From audio and smart devices to everyday accessories, our categories make it easy to explore products that match your needs."
  >
    <div className="space-y-8">
      <Category />
      <Category2 />
    </div>
  </PageShell>
)

const DealsPage = ({ products }) => (
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

const SupportPage = () => (
  <PageShell
    eyebrow="Support"
    title="Helpful assistance when you need it"
    description="We’re committed to making your shopping experience smooth, informed, and stress-free."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {[
        ['Order help', 'Track your purchase, change delivery details, and review updates.', 'Learn more'],
        ['Technical support', 'Get guidance for setup, compatibility, and product use.', 'Contact team'],
        ['Account care', 'Update your profile, preferences, and saved items any time.', 'Manage account'],
      ].map(([title, text, action]) => (
        <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Support</p>
          <h2 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{text}</p>
          <button type="button" className="mt-5 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200">
            {action}
          </button>
        </div>
      ))}
    </div>
  </PageShell>
)

const PolicyPage = ({ title, description, items }) => (
  <PageShell eyebrow="Policies" title={title} description={description}>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h2>
          <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">{item.text}</p>
        </div>
      ))}
    </div>
  </PageShell>
)

const AboutPage = () => (
  <PageShell
    eyebrow="About us"
    title="A modern store built around customer trust"
    description="We focus on delivering an effortless shopping journey through quality products, honest pricing, and responsive service."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { value: '12k+', label: 'Happy customers' },
        { value: '4.8/5', label: 'Average rating' },
        { value: '99%', label: 'Repeat shoppers' },
      ].map((item) => (
        <div key={item.label} className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="text-3xl font-black text-gray-900 dark:text-white">{item.value}</div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{item.label}</p>
        </div>
      ))}
    </div>
  </PageShell>
)

const NotFoundPage = () => (
  <PageShell
    eyebrow="Page not found"
    title="This page doesn’t exist yet"
    description="The link you followed may be outdated or the page may have moved."
    actions={[
      <Link key="home" to="/" className="rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
        Back to home
      </Link>,
    ]}
  />
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

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

function App() {
  const [cartItems, setCartItems] = useState([])
  const [wishlistIds, setWishlistIds] = useState([])
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return

    const timer = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(timer)
  }, [toast])

  const showToast = (message) => {
    setToast(message)
  }

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        const updatedItems = currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )

        showToast(`${product.name} quantity updated in cart.`)
        return updatedItems
      }

      showToast(`${product.name} added to cart successfully.`)
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const updateCartQuantity = (productId, change) => {
    setCartItems((currentItems) => {
      const itemToUpdate = currentItems.find((item) => item.id === productId)

      if (!itemToUpdate) return currentItems

      const updatedItems = currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)

      if (itemToUpdate.quantity + change <= 0) {
        showToast(`${itemToUpdate.name} removed from cart.`)
      } else {
        showToast(`${itemToUpdate.name} quantity updated in cart.`)
      }

      return updatedItems
    })
  }

  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find((item) => item.id === productId)

    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))

    if (itemToRemove) {
      showToast(`${itemToRemove.name} removed from cart.`)
    }
  }

  const toggleWishlist = (productId) => {
    setWishlistIds((currentWishlistIds) => {
      const isAlreadySaved = currentWishlistIds.includes(productId)
      const product = initialProducts.find((item) => item.id === productId)

      if (isAlreadySaved) {
        showToast(`${product?.name || 'Item'} removed from wishlist.`)
        return currentWishlistIds.filter((id) => id !== productId)
      }

      showToast(`${product?.name || 'Item'} added to wishlist successfully.`)
      return [...currentWishlistIds, productId]
    })
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

  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />

      {toast && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl dark:bg-white dark:text-gray-900">
          {toast}
        </div>
      )}

      <div key={location.pathname} className="page-transition">
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
          path="/shop"
          element={
            <ShopPage
              products={initialProducts}
              wishlistIds={wishlistIds}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
            />
          }
        />

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/deals" element={<DealsPage products={initialProducts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/shipping" element={<PolicyPage title="Shipping information" description="We make delivery simple and transparent across all supported locations." items={[
          { title: 'Delivery windows', text: 'Orders usually ship within 24 hours and arrive in 3 to 6 business days depending on your region.' },
          { title: 'Tracking updates', text: 'Once your package is dispatched, you will receive a tracking number and status updates by email.' },
          { title: 'Free delivery', text: 'Free delivery is available on orders above $50, and express shipping is available at checkout for eligible destinations.' },
        ]} />} />
        <Route path="/returns" element={<PolicyPage title="Returns and exchanges" description="Our return process is designed to help you shop with confidence." items={[
          { title: 'Return window', text: 'You can request a return or exchange within 14 days of receiving your order, provided the item is unused and in its original condition.' },
          { title: 'Easy steps', text: 'Contact our support team, receive a return label, and send the item back using the provided instructions.' },
          { title: 'Refund timing', text: 'Approved refunds are usually processed within 5 to 7 business days after the returned item is received.' },
        ]} />} />
        <Route path="/privacy" element={<PolicyPage title="Privacy policy" description="We collect only the information needed to deliver a better and safer shopping experience." items={[
          { title: 'How we use your data', text: 'We use your information to process orders, improve support, personalize product recommendations, and prevent fraud.' },
          { title: 'Your control', text: 'You can manage your communication preferences, account settings, and stored data from your profile at any time.' },
          { title: 'Security', text: 'We use secure systems and access controls to help protect your personal information from unauthorized use.' },
        ]} />} />
        <Route path="/terms" element={<PolicyPage title="Terms of service" description="These terms explain how our store works and how you can use our services responsibly." items={[
          { title: 'Ordering', text: 'By placing an order, you agree to provide accurate details and make payment for the items selected.' },
          { title: 'Product availability', text: 'Products are subject to availability and can be updated or discontinued at any time without notice.' },
          { title: 'Use of site', text: 'The site should be used for lawful, personal, and non-commercial purposes in accordance with these terms.' },
        ]} />} />

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

        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
