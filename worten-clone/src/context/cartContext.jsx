import { createContext, useState, useContext } from "react"

// Criar o context com seus valores

const CartContext = createContext({
  cart: null,
  addCart: () => {},
  removerCart: () => {},
})

// Declara os valores no Provider do Context

export default function AuthContextProvider({ children }) {
  const [cart, setCart] = useState({ items: [{ id: 1, name: "produto 1", price: 19.8 }] })

  const addCart = (input) => {
    setCart({
      ...cart,
      items: [input, ...cart.items],
    })
  }

  const removeCart = (id) => {
    setCart({
      ...cart,
      items: [id, ...cart.items],
    })
  }

  return <CartContext.Provider value={{ cart, addCart, removeCart }}>{children}</CartContext.Provider>
}

// Lê os valores do context
export const useCartContext = () => useContext(CartContext)
