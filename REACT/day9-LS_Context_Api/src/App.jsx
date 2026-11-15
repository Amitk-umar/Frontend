import React, { useState } from 'react'
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Form from './components/Form';

const App = () => {

 

  const [toggle, setToggle] = useState(true)
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  console.log(users)
  const [editUser, setEditUser] = useState(null);

  const deleteUser = (id) => {
    let filteredUser = users.filter((val) => val.id !== id)
    localStorage.setItem("users", JSON.stringify(filteredUser))

    setUsers(filteredUser)

  }


  //localStorage - it is a permanent browser storage keeps data upto 5mb in the form of text/string. keeps data persistence
  // Data persistence is the ability of information to remain stored, intact, and accessible even after the application, process, or device that created it closes, restarts, or loses power.
  // localStorage.setItem("name", "Anurag Singh")
  // let uName = localStorage.getItem("name")
  // console.log(uName)

  // let obj = {
  //   name: "Raghav sharma",
  //   age: 22,
  //   address: "Himachal Pradesh"
  // }
  //JSON is a formator in which key and values both written in string
  // Douglas Crockford created and popularized JSON (JavaScript Object Notation) in the early 2000s. While working with Chip Morningstar at State Software, he specified the format in 2001 as a lightweight, stateless alternative to XML for browser-to-server communication.

  // localStorage.setItem("user", JSON.stringify(obj))
  // console.log(JSON.parse(localStorage.getItem("user")))


  return (
    <div className="p-4 h-screen flex flex-col gap-5">
      <Navbar setToggle={setToggle} />
      {
        toggle ? <div className="flex flex-wrap gap-4">
          {
            users.map((elem) => {
              return <UserCard key={elem.id} id={elem.id} deleteUser={deleteUser} user={elem} setToggle={setToggle} setEditUser={setEditUser} setUsers={setUsers} />
            })
          }
        </div> : <div className="h-[70%] flex justify-center items-center ">
          <Form users={users} setUsers={setUsers} setToggle={setToggle} editUser={editUser} setEditUser={setEditUser} />
        </div>
      }


    </div>
  )
}

export default App