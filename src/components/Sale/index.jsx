import React, { useEffect, useState } from "react";

export default function Sale() {
  const [product, setProduct] = useState({});
  const handleFetch = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/10");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  //   console.log("product", product?.images[0]);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  items-center justify-center  bg-white p-10 shadow-md rounded-md m-8 max-w-max max-h-max relative">
      <p className="absolute top-0 left-0 text-3xl rounded-br-lg rounded-tl-lg font-bold  bg-yellow-300 p-5">
        50% OFF
      </p>
      {product?.images && (
        <img
          src={product?.images[0]}
          alt={product.name}
          className="scale-50 w-[600px] h-[500px] object-cover col-span-1"
        />
      )}
      <div className="col-span-1 ">
        <p className="text-7xl font-bold pb-2">Big Sales</p>
        <h2 className="text-4xl font-bold">{product?.title}</h2>
        <p>{product?.description}</p>
        <div className="">
          <p className="text-xl line-through text-red-700">
            Price: ${product?.price}
          </p>
          <p className="text-xl font-bold">Price: ${product?.price * 0.5}</p>
        </div>
      </div>
    </div>
  );
}
