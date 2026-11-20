import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/MyContext.jsx';
import TestComponents from './TestComponents.jsx';
import { WebShopContextProvider } from './context/MyWebsite.jsx';
createRoot(document.getElementById('root')).render(
    // <ContextProvider>
    //     <TestComponents />
    // </ContextProvider>

    <WebShopContextProvider>
        <App />
    </WebShopContextProvider>
)
