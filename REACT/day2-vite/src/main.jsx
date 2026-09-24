
import { createRoot } from 'react-dom/client'
import {Greeting} from './App.jsx'

console.log("i am from main.jsx file");
createRoot(document.getElementById('root')).render(<Greeting />

)
