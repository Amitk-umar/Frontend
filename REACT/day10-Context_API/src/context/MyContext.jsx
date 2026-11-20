import { Children, createContext, useState } from "react";

//setting up a blank store
export const MyStore = createContext();

//making a provider that handle data and serve to the customers .
export const ContextProvider = ({ children }) => {
    const [centralValue, setCentralValue] = useState("me myContext se hu")
    const [cartItem, setCartItem] = useState([])

    return <MyStore.Provider value={{ centralValue, cartItem, setCartItem }}>{children}</MyStore.Provider>
}