import React, { useState } from 'react'
import Login from './components/Login';
import Register from './components/Register';
import UserCard from './components/UserCard';

const App = () => {
  // const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([])

  return (
    <div className="bg-gray-400 h-screen flex justify-center items-center">
      <Register setUsers={setUsers}  />
      <div className="flex gap-4">
        {users.map((elem) =>(
        <UserCard user={elem} />
))}
      </div>
    </div>
  )
}

export default App