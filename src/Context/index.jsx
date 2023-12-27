import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart State - Count
  const [count, setCount] = useState(0);

  // Product Detail State - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu State - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail State - Product to show
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart State - Products
  const [carProducts, setCarProducts] = useState([]);

  // Shopping Cart State - Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Search
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filterItemsByName = (items, searchName) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchName.toLowerCase())
    );
  };
  const filterItemsByCategory = (items, searchCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
  }

  useEffect(() => {
    if (search) {
      setFilteredItems(filterItemsByName(items, search));
    }
  }, [items, search]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        setOrder,
        items,
        setItems,
        search,
        setSearch,
        filteredItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
