import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context";
import useFetch from "../../Hooks/useFetch";

export default function Products({ cartItems, addToCart }) {
  const url = "https://dummyjson.com/products";
  const { products, loading, error } = useFetch(url);
  console.log(products.products);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-10">
      {products?.products?.map((product) => (
        <li
          key={product.id}
          className="rounded-lg p-8 w-full bg-white shadow-md flex flex-col gap-3 justify-between relative"
        >
          {product.stock <= 5 && (
            <p className="absolute top-0 left-0  rounded-br-lg rounded-tl-lg font-bold  bg-red-300 p-3">
              {product.stock} in stock
            </p>
          )}
          {product.stock === 0 && (
            <p className="absolute top-0 left-0 rounded-br-lg rounded-tl-lg font-bold  bg-yellow-300 p-5">
              Out of stock
            </p>
          )}
          <div className="flex items-center justify-center w-full h-[500px] bg-white overflow-hidden">
            <img
              src={product?.images[0]}
              alt={product.title}
              className="w-full object-cover scale-100"
            />
          </div>
          <div className=" flex flex-col gap-5">
            <h2 className="text-2xl font-bold line-clamp-1">{product.title}</h2>
            <div className="flex justify-between items-center ">
              <p>Price: ${product.price}</p>
              {cartItems?.some((item) => item.id === product.id) ? (
                <p className="text-xl text-green-700">In Cart</p>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
