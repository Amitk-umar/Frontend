
import React, { useContext } from 'react';
import { WebShop } from '../context/MyWebsite';

const Navbar = () => {

  const { setIsCartOpen } = useContext(WebShop);

  return (
    <nav className="w-full rounded-xl bg-black px-4 py-4 text-white sm:px-6 sm:py-5">

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">

        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">
            LOGO
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base md:text-lg">

          <button
            onClick={() => setIsCartOpen(false)}
            className="cursor-pointer transition-colors hover:text-indigo-400"
          >
            Home
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="cursor-pointer transition-colors hover:text-indigo-400"
          >
            Cart
          </button>

        </div>

        {/* Login Button */}
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-700 sm:px-7 sm:text-base">
          Login
        </button>

      </div>

    </nav>
  );
};

export default Navbar;
