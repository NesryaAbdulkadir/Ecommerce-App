import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";

export default function Sale({ cartItems, addToCart }) {
  const url = "https://dummyjson.com/products";
  const { products, loading, error } = useFetch(url);
  console.log(products);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {products?.discountPercentage > 0 && (
        <div className="grid md:grid-cols-2 grid-cols-1 bg-white items-center justify-center p-10 shadow-lg rounded-md m-8 max-w-max relative">
          <p className="absolute top-0 left-0 text-3xl rounded-br-lg rounded-tl-lg font-bold bg-yellow-300 p-5">
            {products?.discountPercentage}% OFF
          </p>

          {products?.images && products.images.length > 0 && (
            <img
              src={products.images[0]}
              alt={products.title} // Added alt attribute for accessibility
              className="scale-50 w-[600px] h-[500px] object-cover col-span-1"
            />
          )}

          <div className="col-span-1">
            <p className="text-7xl font-bold pb-2">Big Sales</p>
            <h2 className="text-4xl font-bold">{products.title}</h2>
            <p>{products.description}</p>
            <div>
              <p className="text-xl line-through text-red-700">
                Price: ${products.price}
              </p>
              <p className="text-xl font-bold">
                Price: ${products.price * 0.5}
              </p>
              {cartItems.some((item) => item.id === products.id) ? (
                <p className="text-xl text-green-700">In Cart</p>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                  onClick={() => addToCart(products)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
