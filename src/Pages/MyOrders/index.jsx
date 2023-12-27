import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center relative justify-center w-80 h-8 my-6">
        <h1 className="text-2xl">My orders</h1>
      </div>
      <div className="flex flex-col items-center w-80">
        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard order={order} />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
