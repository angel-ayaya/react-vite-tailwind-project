import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const OrdersCard = ({ order }) => {
  return (
    <div className="flex items-center my-2 w-96 p-4 rounded-md shadow-xl border">
      <div id="images" className="  w-full">
       
        <div className="flex mb-2">

        {order.products.slice(0, 4).map((product, index) => (
            <div
            key={product.id}
            className="relative"
            style={{
                zIndex: 4 - index, // 4, 3, 2, 1 para z-index
                marginLeft: index === 0 ? 0 : -20, // desplaza cada imagen excepto la primera
            }}
            >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-16 h-16 object-cover rounded-md "
              />
          </div>
        ))}
        </div>
        <div>
        <span className="text-xl font-medium">Quantity: {order.totalProducts}</span>
            
        </div>
      </div>
      <p className="flex items-center ml-10">
        <span className="text-2xl font-medium">${order.totalPrice}</span>
        <ChevronDoubleRightIcon className="h-8 w-8 ml-4 text-black cursor-pointer" />
      </p>
    </div>
  );
};

export default OrdersCard;
