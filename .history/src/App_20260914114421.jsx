import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import CartPage from './components/CartPage/CartPage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { products as initialProducts } from './components/Products/Products'
import {
  AboutPage,
  BlogPage,
  CategoriesPage,
  ContactPage,
  DealsPage,
  FAQPage,
  HomePage,
  NotFoundPage,
  PolicyPage,
  ProductDetailsPage,
  ShopPage,
  SupportPage,
} from './components/Pages/StorePages'
import Toast from './components/Toast/Toast'
import WishlistPage from './components/WishlistPage/WishlistPage'
import { useEcommerceStore } from './hooks/useEcommerceStore'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

function App() {
  const {
    cartItems,
    wishlistIds,
    toast,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    toggleWishlist,
    cartCount,
    wishlistCount,
    wishlistItems,
    subtotal,
  } = useEcommerceStore()

  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />

      <Toast message={toast} />

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
