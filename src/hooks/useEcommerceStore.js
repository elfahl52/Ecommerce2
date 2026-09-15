import { useEffect, useMemo, useState } from 'react'

import { products as initialProducts } from '../components/Products/Products'

export function useEcommerceStore() {
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

  return {
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
  }
}
