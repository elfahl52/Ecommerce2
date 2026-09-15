import Products, { products as initialProducts } from '../Products/Products'

const ShopPage = ({
  products = initialProducts,
  wishlistIds,
  onAddToCart,
  onToggleWishlist,
}) => (
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

export default ShopPage
