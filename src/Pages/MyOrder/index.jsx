import Layout from "../../Components/Layout";
import CartCard from "../../Components/CartCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const content = context.order
    ?.slice(-1)[0]
    ?.products?.map((product) => (
      <CartCard key={product.id} product={product} />
    )) || (
    <div className="text-wrap mt-12">
      <h1 className="text-6xl	">You don't have any order yet.</h1>
      <p className="mt-12 text-2xl">
        Please go to the
        <a href="/" className="font-bold"> Home page </a>
        and add some products to your cart.
      </p>
    </div>
  );

  return (
    <Layout>
      <div className="flex flex-col">
        {content}
      </div>
    </Layout>
  );
}

export default MyOrder;
