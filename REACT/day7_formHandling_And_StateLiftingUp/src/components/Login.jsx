import React from 'react'

const Login = ({ setToggle }) => {
    return (
        <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
            <h1>Login</h1>
            <form action="#" className="flex flex-col  gap-3.5">
                <input required className=" border-2 border-gray-300 p-2 rounded" type="email" placeholder="Email" />
                <input required className="border-2 border-gray-300 p-2 rounded" type="password" placeholder="Password" />
                <button className="border-2 bg-blue-600 p-2 text-white rounded ">Login</button>
                <p>Don't have an Account ? <span onClick={() => setToggle((prev) => !prev)} className="text-blue-600 font-medium cursor-pointer">Register Here</span></p>
            </form>
        </div>
    )
}

export default Login