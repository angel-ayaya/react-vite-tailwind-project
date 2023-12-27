import { createContext, useState } from "react"


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart State - Count
  const [count, setCount] = useState(0)

  // Product Detail State - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu State - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail State - Product to show
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart State - Products
  const [carProducts, setCarProducts] = useState([])

  // Shopping Cart State - Order
  const [order, setOrder] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      carProducts,
      setCarProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder

    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}