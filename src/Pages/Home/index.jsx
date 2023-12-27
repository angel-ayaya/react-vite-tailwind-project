import { useContext } from "react";

import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    // Verificar si hay elementos filtrados
    if (context.filteredItems?.length > 0) {
      return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
         { context.filteredItems.map((item) => (
          <Card key={item.id} data={item} />
          ))}
        </div>
      );
    } else if (context.filteredItems?.length === 0) {
      // Caso cuando la búsqueda por filtro no devuelve resultados
      return (
        <div className="text-wrap mt-12">
          <h1 className="text-6xl">There are not products to show :(</h1>
        </div>
      );
    } else if (context.items?.length > 0) {
      // Mostrar todos los elementos si no hay filtro
      return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
         {
           context.items.map((item) => <Card key={item.id} data={item} />
           )
         }
        </div>
      );
    } else {
      // Caso cuando no hay elementos para mostrar
      return <p>Cargando productos...</p>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center relative justify-center w-80 h-8 my-6">
        <h1 className="text-2xl">Home</h1>
      </div>
      <input
        type="text"
        name=""
        onChange={(e) => {
          context.setSearch(e.target.value);
        }}
        placeholder="Search a product"
        className="border border-black rounded-md p-4 w-80 h-10 mb-4 focus:outline-none focus:ring"
      />

      {renderView()}
      <ProductDetail />
    </Layout>
  );
}

export default Home;
