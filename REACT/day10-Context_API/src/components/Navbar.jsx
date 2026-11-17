import React from 'react'

const Navbar = ({setIsCartOpen}) => {
  return (
    <div className="text-white flex justify-between gap-2 p-5 bg-black  rounded-xl items-center">
        
        <div>
            <h1 className="text-2xl">LOGO</h1>
        </div>
        <div className="flex gap-4 items-center justify-center text-lg" >
            <h1 className="cursor-pointer" onClick={()=>setIsCartOpen(false)}>Home</h1>
            <h1 className="cursor-pointer" onClick={()=>setIsCartOpen(true)}>Cart</h1>
        </div>
        <button className="bg-blue-600 py-2 px-8 rounded">Login</button>
    </div>
  )
}

export default Navbar