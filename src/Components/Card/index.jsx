const Card = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <div className="relative m-10 flex w-full max-w-64 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-56 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover hover:scale-105 hover:blur-sm hover:brightness-98 transition-all duration-500 ease-in-out"
          src="https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {data.category.name}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="font-bold text-xl tracking-tight text-slate-900">
            Nike Air MX Super
          </h5>
        </a>
        <div className="mt-2  flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">$449</span>
          </p>
          <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add to cart
        </a>
        </div>
        
      </div>
    </div>
  );
};

export default Card;