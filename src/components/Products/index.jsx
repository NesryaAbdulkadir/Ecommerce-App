import React, { useEffect, useState } from "react";
import Sale from "../Sale";

export default function Products() {
  const [products, setProducts] = useState([]);
  const handleFetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="lg:w-10/12 md:w-11/12 w-full mx-auto p-5">
      <h1 className="text-center text-7xl font-bold p-10">Products</h1>
      <Sale />
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-10">
        {products?.map((product) => (
          <li
            key={product.id}
            className="rounded-lg p-8 w-full bg-white shadow-md flex flex-col gap-3"
          >
            <div className="flex items-center justify-center w-full h-[500px] bg-white overflow-hidden">
              <img
                src={product?.image}
                alt={product.name}
                className="w-full object-cover scale-50"
              />
            </div>
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p flo>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
