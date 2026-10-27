import React, { useState } from 'react'
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Form from './components/Form';


const App = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div className="p-4 h-screen flex flex-col gap-5">
      <Navbar setToggle={setToggle} />

      {
        toggle ? <div className="flex">
          <UserCard />
        </div> : <div className="h-[70%] flex justify-center items-center ">
          <Form />
        </div>
      }


    </div>
  )
}

export default App