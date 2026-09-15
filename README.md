# 🛍️ eShop - React Ecommerce Frontend

A modern ecommerce storefront built with React, Vite, and Tailwind CSS. The project includes a responsive landing page, product catalog, cart, wishlist, product details, and various informational pages.

## ✨ Features

- Responsive ecommerce homepage with hero section
- Shop, categories, deals, blog, contact, FAQ, and support pages
- Product cards with wishlist and add-to-cart actions
- Cart page with quantity updates and subtotal summary
- Wishlist page with remove and add-to-cart actions
- Product details page for each item
- Toast notifications for cart and wishlist updates
- Mobile menu and dark mode toggle
- Page transition and scroll reset behavior across routes
- Reusable page layout and organized component structure

## 🧰 Tech Stack

- React 19
- Vite 8
- React Router DOM
- Tailwind CSS
- AOS
- Swiper
- React Icons
- ESLint

## 📁 Project Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
│   ├── blogs/
│   ├── brand/
│   ├── category/
│   ├── hero/
│   ├── product/
│   └── website/
├── components/
│   ├── CartPage/
│   ├── Category/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── Pages/
│   ├── Products/
│   ├── Toast/
│   └── WishlistPage/
├── hooks/
│   └── useEcommerceStore.js
└── ...
```

## 📄 Main Files

- `src/App.jsx` - main routing and app layout
- `src/hooks/useEcommerceStore.js` - cart, wishlist, toast, and derived state logic
- `src/components/Pages/` - page-specific components for home, shop, blog, about, support, policy, etc.
- `src/components/Products/Products.jsx` - product data and product card UI
- `src/components/CartPage/CartPage.jsx` - cart page
- `src/components/WishlistPage/WishlistPage.jsx` - wishlist page
- `src/components/Navbar/Navbar.jsx` - main navigation and mobile menu
- `src/components/Toast/Toast.jsx` - toast notification UI

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## 🧪 Available Scripts

- `npm run dev` - starts Vite development server
- `npm run build` - creates production bundle
- `npm run preview` - previews the production build locally
- `npm run lint` - runs ESLint

## Notes

- The app uses local assets stored in `src/assets`.
- State management for cart and wishlist is centralized in `useEcommerceStore`.
- The project has been organized into reusable page and component files to make future updates easier.

## ✅ Project Status

This project is a frontend ecommerce demo with reusable components, routing, responsive UI, and shopping interaction flows.
