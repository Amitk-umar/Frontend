
import React, { useContext } from "react";
import { ShoppingCart, Star, Eye, Plus, Minus } from "lucide-react";
import { WebShop } from "../context/MyWebsite";

const ProductCard = ({ products, }) => {

    let { cartItem, setCartItem } = useContext(WebShop)


    // Check whether product already exists in cart
    const cartProduct = cartItem.find(
        (item) => item.id === products.id
    );

    // Get current quantity
    const quantity = cartProduct?.quantity || 0;


    // Add product to cart
    const handleAddToCart = () => {
        setCartItem((prev) => [
            ...prev,
            { ...products, quantity: 1 }
        ]);
    };


    // Increase quantity
    const handleIncrease = () => {
        setCartItem((prev) =>
            prev.map((item) =>
                item.id === products.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };


    // Decrease quantity
    const handleDecrease = () => {
        setCartItem((prev) =>
            prev
                .map((item) =>
                    item.id === products.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };




    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Product Image */}
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gray-50 p-6 sm:h-60 md:h-64">

                <span className="absolute left-3 top-3 z-10 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700 sm:left-4 sm:top-4">
                    {products.category}
                </span>

                <img
                    src={products.image}
                    alt={products.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                <button
                    className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-600 shadow-md transition hover:bg-indigo-600 hover:text-white sm:right-4 sm:top-4"
                    aria-label="View product"
                >
                    <Eye size={18} />
                </button>
            </div>

            {/* Product Details */}
            <div className="p-4 sm:p-5">

                <h2 className="mb-2 line-clamp-2 min-h-12 text-base font-bold text-gray-800 sm:text-lg">
                    {products.title}
                </h2>

                <p className="mb-3 line-clamp-2 text-xs leading-5 text-gray-500 sm:mb-4 sm:text-sm sm:leading-6">
                    {products.description}
                </p>

                {/* Rating */}
                <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-semibold text-gray-800">
                            {products.rating.rate}
                        </span>
                    </div>

                    <span className="text-xs text-gray-400 sm:text-sm">
                        ({products.rating.count} reviews)
                    </span>
                </div>

                {/* Price and Cart */}
                <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">

                    <div>
                        <p className="text-xs text-gray-400">Price</p>

                        <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                            ${products.price.toFixed(2)}
                        </h3>
                    </div>

                    {quantity === 0 ? (

                        <button
                            onClick={handleAddToCart}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95 min-[400px]:w-auto sm:px-4"
                        >
                            <ShoppingCart size={18} />
                            Add to Cart
                        </button>

                    ) : (

                        <div className="flex items-center justify-between gap-4 rounded-xl border border-indigo-200 bg-indigo-50 p-2">

                            <button
                                onClick={handleDecrease}
                                className="rounded-lg bg-white p-2 text-indigo-600 shadow-sm hover:bg-indigo-100"
                            >
                                <Minus size={18} />
                            </button>

                            <span className="font-bold text-indigo-700">
                                {quantity}
                            </span>

                            <button
                                onClick={handleIncrease}
                                className="rounded-lg bg-white p-2 text-indigo-600 shadow-sm hover:bg-indigo-100"
                            >
                                <Plus size={18} />
                            </button>

                        </div>

                    )}

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
