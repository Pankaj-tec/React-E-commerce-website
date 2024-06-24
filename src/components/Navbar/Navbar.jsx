import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1272px] mx-auto px-[1rem]">
      <header className="flex items-center justify-between">
        <div>
          <Link to="/">
            Pankaj<span className="text-red-400">Shop</span>
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-[1.5rem]">
            <li className="px-[1rem] py-[8px]">
              <Link to="/">Home</Link>
            </li>
            <li className="px-[1rem] py-[8px]">
              <Link to="">Link Product</Link>
            </li>
            <li className="px-[1rem] py-[8px]">
              <Link to="">Mens</Link>
            </li>
            <li className="px-[1rem] py-[8px]">
              <Link to="">Kids</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-[1.5rem]">
          <Link
            to="./login"
            className="px-[1.5rem] py-[6px] text-white bg-red-400"
          >
            Login
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={24} />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
