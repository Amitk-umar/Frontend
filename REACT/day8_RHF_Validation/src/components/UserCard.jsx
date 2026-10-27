import React from 'react';
const UserCard = () => {
    return (

        <div className=" p-2 border border-black rounded flex flex-col gap-2">
            <div className="h-60 w-50">
                <img className="object-fit h-full w-full rounded-md" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <h1>Name</h1>
                <p className="text-sm">Email</p>
                <p className="text-sm">Contact</p>
            </div>
            <div className="flex justify-between w-full">
                <button className=" py-2 px-3 bg-amber-600 text-white rounded">update</button>
                <button className=" py-2 px-3 bg-red-600 text-white rounded">delete</button>
            </div>
        </div>
    )
}
export default UserCard