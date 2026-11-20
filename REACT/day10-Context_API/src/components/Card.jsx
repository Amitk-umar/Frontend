
import React, { useContext } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { WebShop } from '../context/MyWebsite';

const Card = () => {
  const { cartItem, setCartItem } = useContext(WebShop);


  const handleIncrease = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItem((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };



  const handleRemove = (id) => {
    setCartItem((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <ShoppingBag size={28} className="text-indigo-600" />

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-sm text-gray-500">
              {cartItem.reduce(
                (total, item) => total + item.quantity,
                0
              )} items in your cart
            </p>
          </div>
        </div>

        {/* Cart Products */}
        <div className="space-y-4">

          {cartItem.length > 0 ? (

            cartItem.map((product) => (

              <div
                key={product.id}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
              >

                {/* Product Image */}
                <div className="flex h-36 w-full items-center justify-center rounded-xl bg-gray-50 p-4 sm:h-28 sm:w-28 sm:shrink-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="min-w-0 flex-1">

                  <h2 className="line-clamp-2 text-base font-bold text-gray-800">
                    {product.title}
                  </h2>

                  <p className="mt-1 text-sm capitalize text-gray-500">
                    {product.category}
                  </p>

                  <p className="mt-2 text-lg font-bold text-indigo-600">
                    ${product.price.toFixed(2)}
                  </p>

                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">

                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-2">

                    <button onClick={() => handleDecrease(product.id)} className="text-gray-600 hover:text-indigo-600">
                      <Minus size={16} />
                    </button>

                    <span className="font-semibold">
                      {product.quantity}
                    </span>

                    <button onClick={() => handleIncrease(product.id)} className="text-gray-600 hover:text-indigo-600">
                      <Plus size={16} />
                    </button>

                  </div>

                  <button onClick={() => handleRemove(product.id)} className="flex items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-700">
                    <Trash2 size={17} />
                    Remove
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <ShoppingBag
                size={50}
                className="mx-auto mb-4 text-gray-300"
              />

              <h2 className="text-xl font-bold text-gray-800">
                Your cart is empty!
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Looks like you haven't added anything yet.
              </p>
            </div>

          )}

        </div>

        {/* Cart Summary */}
        {cartItem.length > 0 && (

          <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="flex justify-between text-gray-600">
              <span>Total Products</span>
              <span>{cartItem.reduce(
                (total, item) => total + item.quantity,
                0
              )}</span>
            </div>

            <div className="mt-3 flex justify-between text-xl font-bold text-gray-900">
              <span>Subtotal</span>

              <span className="text-indigo-600">
                ${cartItem.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ).toFixed(2)}
              </span>
            </div>

            <button className="mt-5 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
              Proceed to Checkout
            </button>

          </div>

        )}

      </div>
    </div>
  );
};

export default Card;
