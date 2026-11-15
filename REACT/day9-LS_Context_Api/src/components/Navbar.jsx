import React from 'react'

const Navbar = ({ setToggle }) => {
    return (
        <div className="p-4 flex justify-between items-center bg-black rounded-xl ">
            <div>
                <img width={40}
                    className=""
                    src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png" alt="profile image" />
            </div>
            <div className="flex gap-6 font-semibold text-white">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <button onClick={() => setToggle((prev) => !prev)} className="bg-blue-500 rounded-md px-4 py-2 text-white font-semibold cursor-pointer">Create user</button>
        </div>
    )
}

export default Navbar