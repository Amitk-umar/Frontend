import React, { useState } from 'react'

const Register = ({ setToggle, setUsers }) => {

    const [formData, setFormData] = useState({
        name: "Amit kumar",
        email: "amit6871806@gmail.com",
        password: "123@amit",
        image: ""
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        // console.log(e.target.value)
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev, formData])

        setFormData(
            {
                name: "", email: "", password: "",
                image: ""
            }
        )
    }
    return (
        <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col  gap-3.5">
                {/* //two way binding -  value is used to tell react */}

                <input value={formData.name} required name="name" onChange={handleChange} className=" border-2 border-gray-300 p-2 rounded" type="text" placeholder="Name" />
                <input value={formData.email} required name="email" onChange={handleChange} className=" border-2 border-gray-300 p-2 rounded" type="email" placeholder="Email" />
                <input value={formData.password} required name="password" onChange={handleChange} className="border-2 border-gray-300 p-2 rounded" type="password" placeholder="Password" />

                <input value={formData.image} required name="image" onChange={handleChange} className="border-2 border-gray-300 p-2 rounded" type="url" placeholder="ImageUrl" />



                <button className="border-2 bg-blue-600 p-2 text-white rounded ">Register</button>
                <p>Already have an Account ? <span className="text-blue-600 font-medium cursor-pointer" onClick={() => setToggle(prev => !prev)}>Login</span></p>
            </form>
        </div>
    )
}

export default Register