import React, { useContext } from 'react'
import { MyContext } from '../context/Context';

const Home = () => {
  let { count, setCount } = useContext(MyContext)
  console.log("home is rendering...");
  return (
    <div>
      <h1>home</h1>
      <h1>Count is  - {count}</h1>
      <button onClick={()=> setCount(count+1)}>increment</button>
    </div>
  )
}

export default Home
