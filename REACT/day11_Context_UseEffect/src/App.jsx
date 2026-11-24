import React, { useEffect, useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import { useContext } from 'react';
import { ContextProvider, MyContext } from './context/Context';
import axios from 'axios';

const App = () => {

  // let { count, setCount } = useContext(MyContext);
  console.log("app is rendering...")
  // const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [apiData, setApiData] = useState(null)
    console.log(apiData);

  // useEffect(() => {
  //   console.log("app is rendering...");
  // }, []) //empty array means single time run
  //[count] - jab bhi count update hoga tab tab re - rendered hoga 
  // return ()=>{} - jab component unmount hoga to ye triggered hoga 


  let products = async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    setApiData(res)
  }


  useEffect(() => {
    products()
  }, [])

  return (
    <div className="p-4">
      {/* <h1>Count - {count}</h1> */}
      {/* <button className="px-3 py-2 rounded-xl cursor-pointer bg-orange-700 text-white" onClick={() => setCount(count + 1)}>Increment</button> */}


      {/* <ContextProvider>
        <Home />
        </ContextProvider> */}
      <button onClick={() => setToggle((prev) => !prev)} className="bg-blue-500 text-white px-3 py-2">Toggle component</button>
      {toggle ? <About /> : <Contact />}
    </div>
  )
}

export default App