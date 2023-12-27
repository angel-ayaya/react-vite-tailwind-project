import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Card = (props) => {
  const { data } = props;
  const context = useContext(ShoppingCartContext);

  const cartFunction = (event, product) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCarProducts([...context.carProducts, product]);
    context.openCheckoutSideMenu();
  };

  const showProduct = (product) => {
    context.setProductToShow(product);
    context.openProductDetail();
  };

  const renderIcon = (product) => {
    const isInCard =
      context.carProducts.filter((product) => product.id === data.id).length >
      0;

    if (isInCard) {
      return <CheckCircleIcon className="w-8 h-8 " />;
    } else {
      return (
        <a
          onClick={(event) => cartFunction(event, data)}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium cursor-pointer text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 max-h-8"
        >
          Add to cart
        </a>
      );
    }
  };

  return (
    <div className="relative  flex w-full max-w-64 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="h-62 cursor-pointer" onClick={() => showProduct(data)}>
        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl min-h-60">
          <img
            className="object-cover hover:scale-105 h-62 hover:blur-sm hover:brightness-98 transition-all duration-500 ease-in-out"
            src={
              data.images[0]
                ? data.images[0]
                : "https://i.imgur.com/9LFjwpI.jpeg"
            }
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {data.category.name || "Category"}
          </span>
        </a>
      </div>
      <div className="mt-4 px-5 pb-5 ">
        <div className="min-h-14">
          <a onClick={() => showProduct(data)}>
            <h5 className="font-bold text-xl tracking-tight text-slate-900 cursor-pointer">
              {data.title || "Title"}
            </h5>
          </a>
        </div>
        <div className="mt-2  flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">
              {`$ ` + data.price}
            </span>
          </p>
          {renderIcon(data)}
        </div>
      </div>
    </div>
  );
};

export default Card;
