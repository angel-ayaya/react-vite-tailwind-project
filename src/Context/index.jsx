import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart State - Count


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
  const [searchByCategory, setSearchByCategory] = useState("");

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

  const filterItemsByCategory = (items, searchByCategory) => {
    const searchLower = searchByCategory.toLowerCase();
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchLower)
    );
  };

  const filterBy = (searchType, items, search, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      console.log();
      return filterItemsByName(items, search);
      // return console.log("BY_TITLE");
    }
    if (searchType === "BY_CATEGORY") {

      console.log("BY_CATEGORY");
      console.log(filterItemsByCategory(items, searchByCategory));
      return (filterItemsByCategory(items, searchByCategory))  
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filterItemsByCategory(
        filterItemsByName(items, search),
        searchByCategory
      );
    }
    if (searchType === null) {
      return items;
    }
  };

  useEffect(() => {
   
      if (search && !searchByCategory) {
        setFilteredItems(filterBy("BY_TITLE", items, search, searchByCategory));
      }
      if (searchByCategory && !search) {
        setFilteredItems(
          filterBy("BY_CATEGORY", items, search, searchByCategory)
        )
      }
      if (search && searchByCategory) {
        setFilteredItems(
          filterBy("BY_TITLE_AND_CATEGORY", items, search, searchByCategory)
        );
      }
      if (!search && !searchByCategory) {
        setFilteredItems(filterBy(null, items, search, searchByCategory))

      }
      


    
  }, [items, search, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
