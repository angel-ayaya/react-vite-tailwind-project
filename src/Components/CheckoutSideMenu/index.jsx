import "./styles.css";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CartCard from "../CartCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.carProducts.filter(
      (product) => product.id !== id
    );
    context.setCarProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      products: context.carProducts,
      totalProducts: context.carProducts.length,
      totalPrice: totalPrice(context.carProducts),
    };
    
    context.setOrder([...context.order, orderToAdd]);
    context.setCarProducts([]);
    context.setSearch(null)

    context.closeCheckoutSideMenu();
   
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 bg-white border-l shadow-2xl border-slate-100 shadow-gray-800`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XCircleIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="cart-container flex-grow overflow-y-auto">
        {context.carProducts.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="inset-x-0 bottom-0 h-20 p-6 flex justify-between items-center shadow-sm">
        <h1 className="font-medium text-xl">Total:</h1>
        <h1 className="font-medium text-xl">
          ${totalPrice(context.carProducts)}
        </h1>
      </div>
      <div className="flex place-content-center p-6 h-20 ">
        <Link to='/my-orders/last'>
          <button
            className="flex items-center justify-center rounded-md bg-slate-900  px-32 py-2.5 text-center text-sm font-medium cursor-pointer text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 h-10"
            onClick={() => handleCheckout()}
          >
            <h1>Checkout</h1>
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
