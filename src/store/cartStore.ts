import { create } from 'zustand'

type CartItem = {
  id: string
  title: string
  basePrice: number
  sellingPrice: number
  quantity: number
  image: string
}

type CartState = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  increaseQty: (id: string) => void
  decreaseQty: (id: string) => void
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item) => {
    const cart = get().cart
    const exists = cart.find((i) => i.id === item.id)
    if (exists) {
      set({
        cart: cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      })
    } else {
      set({ cart: [...cart, { ...item, quantity: 1 }] })
    }
  },

  removeFromCart: (id) =>
    set({ cart: get().cart.filter((item) => item.id !== id) }),

  clearCart: () => set({ cart: [] }),

  increaseQty: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }),

  decreaseQty: (id) =>
    set({
      cart: get().cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }),
}))
