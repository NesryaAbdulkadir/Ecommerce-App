import React, { useContext, useState } from "react";
import Products from "../../components/Products";
import Sale from "../../components/Sale";
import { CartContext } from "../../Context";

export default function Home() {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <div className="lg:w-10/12 md:w-11/12 w-full mx-auto p-5 ">
      <Sale cartItems={cartItems} addToCart={addToCart} />
      <Products cartItems={cartItems} addToCart={addToCart} />
    </div>
  );
}
