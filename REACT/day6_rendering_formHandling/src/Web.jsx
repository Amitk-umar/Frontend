import React, { useState } from 'react';

const Web = () => {


    //Brute force approach  - Jitne inputs utne useState
    //Better Approach  - useState me Object ka use karo(1 UseState me done )
    //optimise  Approach -  


    // const [name, setName] = useState("")
    // const [email,setEmail] = useState("")
    // const[password,setPassword] = useState("")


    const [formData, setFormData] = useState({
        // name: "",
        // email: "",
        // password: ""
    })

    const handleInput = (e) => {
        let {name,value} = e.target;
        // setFormData({ ...formData, [e.target.name]: e.target.value })
        setFormData({ ...formData, [name]: value }) //more optimize way
    }
    return (
        <div className="min-h-screen flex flex-col gap-3 bg-gray-400 w-full p-4">

            <form action="">
                {/* <input onChange={(e) => setName(e.target.value) } className="border-2" type="text" placeholder="Name" />
                    <input onChange={(e)=> setEmail(e.target.value)} className="border-2" type="email" placeholder="Email" />
                    <input onChange={(e)=> setPassword(e.target.value)} className="border-2" type="password" placeholder="password" /> */}
                {/* <h1>Name : {name}</h1>
                    <h1>Email : {email}</h1>
                    <h1>Password : {password}</h1> */}
                {/* <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border-2" type="text" placeholder="Name" />
                <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-2" type="email" placeholder="Email" />
                <input onChange={(e) =>setFormData({...formData, password : e.target.value})} className="border-2" type="password" placeholder="password" /> */}
                <input name="name" onChange={handleInput} className="border-2" type="text" placeholder="Name" />
                <input name="email" onChange={handleInput} className="border-2" type="email" placeholder="Email" />
                <input name="password" onChange={handleInput} className="border-2" type="password" placeholder="password" />
                <button className="bg-amber-700 text-white">Submit</button>
                <h1>Name : {formData.name}</h1>
                <h1>Email : {formData.email}</h1>
                <h1>Password : {formData.password}</h1>
            </form>
        </div>
    )
}

export default Web