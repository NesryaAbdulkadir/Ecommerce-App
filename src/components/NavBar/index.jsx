import { ShoppingBag } from "lucide-react";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-full p-4 bg-gray-800 fixed top-0 z-50 left-0">
      <ul className="flex justify-between items-center w-8/12 mx-auto text-white text-xl font-bold">
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/cart">
            <ShoppingBag />
          </a>
        </li>
      </ul>
    </nav>
  );
}
