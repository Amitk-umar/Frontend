import React, { useState } from 'react'

const App = () => {
  console.log("App is rendering...")
  const [count, setCount] = useState(0) //premitive data
  const [user, setUser] = useState({
    name: "Raghav sharma" // here object is reference data type
  })

  return (
    <div>
      <h1>User Name : {user.name} </h1>
      <h1>Count :{count} </h1>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <button onClick={() => {
       setUser({name:"Ankit"})

      }
      }>Change Name</button>
    </div>
  )
}

export default App;