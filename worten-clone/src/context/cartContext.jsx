import { createContext, useState, useContext } from "react"

// Criar o context com seus valores

const CartContext = createContext({
  cart: null,
  addCart: () => {},
  removerCart: () => {},
})

// Declara os valores no Provider do Context

export default function AuthContextProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    cartQuantity: 0,
    total: 0,
  })

  const addCart = (input) => {
    const carItem = cart.items.find((item) => item.id === input.id)

    if (carItem) {
      const newCartItems = cart.items.map((item) => {
        const quantity = item.id === input.id ? item.quantity + 1 : item.quantity

        return {
          ...item,
          quantity,
        }
      })
      setCart({
        items: newCartItems,
        cartQuantity: cart.cartQuantity + 1,
        total: cart.total + input.price,
      })
    } else {
      setCart({
        items: [{ ...input, quantity: 1 }, ...cart.items],
        cartQuantity: cart.cartQuantity + 1,
        total: cart.total + input.price,
      })
    }
  }

  const removeCart = (id) => {
    const filtredList = cart.items.filter((item) => item.id !== id)
    const selectedItem = cart.items.find((item) => item.id === id)

    setCart({
      ...cart,
      items: filtredList,
      cartQuantity: cart.cartQuantity - selectedItem.quantity,
      total: cart.total - selectedItem.quantity * selectedItem.price,
    })
  }

  return <CartContext.Provider value={{ cart, addCart, removeCart }}>{children}</CartContext.Provider>
}
// Lê os valores do context
export const useCartContext = () => useContext(CartContext)
