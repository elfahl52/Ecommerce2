import { Link } from 'react-router-dom'

import Category from '../Category/Category'
import Category2 from '../Category/Category2'
import Hero from '../Hero/Hero'
import Products, { products as initialProducts } from '../Products/Products'

const HomePage = ({
  products = initialProducts,
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

export default HomePage
