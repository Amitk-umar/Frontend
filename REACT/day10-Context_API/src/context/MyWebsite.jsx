import { createContext, useState } from "react";

export const WebShop = createContext();

export const WebShopContextProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);

    return (
        <WebShop.Provider
            value={{
                isCartOpen,
                setIsCartOpen,
                cartItem,
                setCartItem
            }}
        >
            {children}
        </WebShop.Provider>
    );
};