import React, { useState } from 'react'
import Navbar from './components/Navbar';
import UserCard from './components/UserCard.jsx';
import Form from './components/Form';


const App = () => {

  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  return (
    <div className="p-4 h-screen flex flex-col gap-5">
      <Navbar setToggle={setToggle} />
      {
        toggle ? <div className="flex">
          {
            users.map((elem) => {
              return <UserCard key={elem.email} user={elem} setToggle={setToggle} setEditUser={setEditUser} setUsers={setUsers}/>
            })
          }
        </div> : <div className="h-[70%] flex justify-center items-center ">
          <Form setUsers={setUsers} setToggle={setToggle} editUser={editUser} setEditUser={setEditUser} />
        </div>
      }


    </div>
  )
}

export default App