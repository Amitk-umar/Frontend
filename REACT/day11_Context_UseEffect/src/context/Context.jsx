import { useState } from 'react';
import { createContext } from 'react'

//consumer
// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext();


//provider
export const ContextProvider = ({ children }) => {

    console.log("Context is rendering...");
    const [count, setCount] = useState(0)

    return (
        <MyContext.Provider value={{ count, setCount }}>{children}</MyContext.Provider>
    )
}