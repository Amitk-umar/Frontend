import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="flex flex-col gap-4 p-5 border-gray-400 border rounded bg-white"> 
        <div className="w-60 h-60 rounded overflow-hidden">
            <img className="h-full w-full" src={user.image} alt="" />
        </div>
        <div>
            <h1>Name : {user.name} </h1>
            <h2>Email : {user.email} </h2>
        </div>
        <button className="bg-red-500 text-white p-2 rounded-lg">Delete</button>
    </div>
  )
}

export default UserCard