import React from 'react';
const UserCard = ({ user, setToggle, setEditUser, deleteUser, id }) => {


    return (

        <div className=" p-2 border border-black rounded flex flex-col gap-2">
            <div className="h-60 w-50">
                <img className="object-fit h-full w-full rounded-md" src={user.image} alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <h1>{user.name}</h1>
                <p className="text-sm">{user.email}</p>
                <p className="text-sm">{user.contact}</p>
            </div>
            <div className="flex justify-between w-full">
                <button onClick={() => {
                    setEditUser(user);
                    setToggle(false);
                }
                } className=" py-2 px-3 bg-amber-600 text-white rounded">update</button>
                <button onClick={() => {
                    deleteUser(user.id)

                }} className=" py-2 px-3 bg-red-600 text-white rounded">delete</button>
            </div>
        </div>
    )
}
export default UserCard