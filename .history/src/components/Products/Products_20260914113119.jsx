import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeart, FaShoppingCart, FaStar, FaTruck, FaShieldAlt, FaHeadset, FaBolt } from 'react-icons/fa';

import ProductImage1 from '../../assets/product/p-1.jpg';
import ProductImage2 from '../../assets/product/p-2.jpg';
import ProductImage3 from '../../assets/product/p-3.jpg';
import ProductImage4 from '../../assets/product/p-4.jpg';
import ProductImage5 from '../../assets/product/p-5.jpg';
import ProductImage6 from '../../assets/product/p-7.jpg';
 

export const products = [
  {
    id: 1,
    name: 'Noise Cancelling Headset',
    category: 'Audio',
    description: 'Immersive wireless sound with long battery life and smart touch controls.',
    price: 189,
    oldPrice: 249,
    image: ProductImage1,
    tag: 'Hot Deal',
    rating: 4.8,
    stock: 'In Stock',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    category: 'Wearables',
    description: 'Track workouts, heart rate, and sleep with a stylish modern design.',
    price: 149,
    oldPrice: 199,
    image: ProductImage2,
    tag: 'New',
    rating: 4.7,
    stock: 'In Stock',
  },
  {
    id: 3,
    name: 'Premium Wireless Earbuds',
    category: 'Audio',
    description: 'Compact power with clear calls, deep bass, and a pocket-friendly case.',
    price: 129,
    oldPrice: 169,
    image: ProductImage3,
    tag: 'Popular',
    rating: 4.9,
    stock: 'Limited',
  },
  {
    id: 4,
    name: 'Gaming Mechanical Keyboard',
    category: 'Accessories',
    description: 'Responsive keys and durable build for gamers and creators alike.',
    price: 99,
    oldPrice: 139,
    image: ProductImage4,
    tag: 'Trending',
    rating: 4.6,
    stock: 'In Stock',
  },
  {
    id: 5,
    name: 'Ultra-Slim Laptop 14"',
    category: 'Computing',
    description: 'Lightweight performance for work, study, and everyday multitasking.',
    price: 899,
    oldPrice: 1099,
    image: ProductImage5,
    tag: 'Featured',
    rating: 4.8,
    stock: 'In Stock',
  },
  {
    id: 6,
    name: 'Portable Bluetooth Speaker',
    category: 'Audio',
    description: 'Rich sound, deep bass, and splash-resistant design for any space.',
    price: 74,
    oldPrice: 109,
    image: ProductImage6,
    tag: 'Best Value',
    rating: 4.5,
    stock: 'In Stock',
  },

];

const features = [
  {
    icon: <FaTruck className="text-xl text-red-500" />,
    title: 'Free Shipping',
    text: 'Fast delivery on all orders above $50.',
  },
  {
    icon: <FaShieldAlt className="text-xl text-red-500" />,
    title: 'Secure Checkout',
    text: 'Protected payment options and buyer safety.',
  },
  {
    icon: <FaHeadset className="text-xl text-red-500" />,
    title: '24/7 Support',
    text: 'Friendly help whenever you need it.',
  },
  {
    icon: <FaBolt className="text-xl text-red-500" />,
    title: 'Instant Updates',
    text: 'Get the latest deals and product notifications.',
  },
];

const ProductCard = ({ product, wishlistIds, onAddToCart, onToggleWishlist }) => {
  const isWishlisted = wishlistIds.includes(product.id);

  return (
    <article
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] dark:border-gray-700 dark:bg-gray-900"
      data-aos="fade-up"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
            isWishlisted
              ? 'border-red-500 bg-red-500 text-white'
              : 'border-white/80 bg-white/90 text-gray-600 hover:border-red-500 hover:text-red-500'
          }`}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        >
          <FaHeart className={isWishlisted ? 'fill-current' : ''} />
        </button>

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {product.tag}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-amber-400">
            <FaStar className="text-[11px]" />
            {product.rating}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{product.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-gray-900 dark:text-white">${product.price}</span>
              <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
            </div>
            <span className="mt-1 inline-block text-xs font-medium text-green-600 dark:text-green-400">
              {product.stock}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/product/${product.id}`}
              className="inline-flex items-center rounded-full border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-200"
            >
              Details
            </Link>

            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/30 active:scale-95"
            >
              <FaShoppingCart className="text-xs" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const Products = ({ products: productList, wishlistIds = [], onAddToCart, onToggleWishlist }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      <section className="bg-gray-50 py-14 dark:bg-gray-950 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Featured collection</p>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">Popular products</h2>
            </div>

            <button
              type="button"
              className="w-fit rounded-full border border-red-500 px-5 py-2.5 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              View all products
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                wishlistIds={wishlistIds}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 dark:bg-gray-900 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Why shop with us</p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">Everything you need in one place</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl dark:bg-red-500/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
