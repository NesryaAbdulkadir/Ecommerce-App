import React, { useContext } from "react";
import { CartContext } from "../../Context";

export default function Cart() {
  const { cartItems, getCartTotal, clearCart, addToCart, removeFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1 className="text-7xl text-center p-10 font-bold">Your Cart</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7 p-10">
        <ul className="col-span-2 flex flex-col gap-5">
          {cartItems.length !== 0 ? (
            cartItems?.map((product) => (
              <li
                key={product.id}
                className="rounded-lg p-8 w-full bg-white shadow-md flex gap-5 items-center "
              >
                <img
                  src={product?.images[0]}
                  alt={product.name}
                  className="w-60 h-full object-cover "
                />
                <div className=" flex flex-col gap-5">
                  <h2 className="text-2xl font-bold line-clamp-1">
                    {product.title}
                  </h2>
                  <p>{product.description}</p>

                  <p>Quantity: {product.quantity}</p>

                  <div className="flex justify-start items-center gap-5">
                    <button
                      className="bg-blue-600 w-10 h-10  rounded-lg text-white text-2xl"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                    <p className="text-xl font-bold">Price: ${product.price}</p>
                    <button
                      className="bg-blue-600 w-10 h-10 rounded-lg text-white text-2xl"
                      onClick={() => removeFromCart(product)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="span-2 flex flex-col gap-5 justify-center items-center">
              <p className="text-center text-4xl font-bold">
                Your cart is empty
              </p>
              <p className="text-center text-2xl ">
                Check out our products and add to your cart
              </p>
              <a href="/" className="text-center text-blue-600 hover:underline">
                Go to Shop
              </a>
            </div>
          )}
        </ul>
        <div className="col-span-1 flex flex-col gap-5 p-10 smax-h-max">
          <p>You have {cartItems.length} items in your cart</p>
          <h2>Total: ${getCartTotal()}</h2>

          <button
            className={`text-black shadow-md bg-white px-4 py-2 rounded-lg max-w-max${
              cartItems?.length === 0 ? " opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
