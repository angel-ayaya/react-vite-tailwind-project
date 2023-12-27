import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      {context.order.map( (order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard order={order} />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
