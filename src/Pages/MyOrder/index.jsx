import Layout from "../../Components/Layout";
import CartCard from "../../Components/CartCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") {
    index = context.order.length - 1;
  }
  const content = context.order
    ?.[index]
    ?.products?.map((product) => (
      <CartCard key={product.id} product={product} />
    )) || (
    <div className="text-wrap mt-12">
      <h1 className="text-6xl">You don&apos;t have any order yet.</h1>
      <p className="mt-12 text-2xl">
        Please go to the
        <a href="/" className="font-bold">
          {" "}Home page{" "}
        </a>
        and add some products to your cart.
      </p>
    </div>
  );

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 h-8 my-6">
        <Link to="/my-orders" className="h-full absolute left-0">
        <ChevronLeftIcon className="h-full  text-black cursor-pointer" />
        </Link>
          <h1 className="text-2xl">My orders</h1>
      </div>
      <div className="flex flex-col">{content}</div>
    </Layout>
  );
}

export default MyOrder;
