import React from 'react'
import {useForm} from 'react-hook-form'
const Form = () => {
  let {register,handleSubmit,reset,formState:{errors}}=useForm();

  return (
    <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold font-Sans text-xl">Create User</h1>
            <form className="flex flex-col gap-6  bg-gray-100 w-70 rounded border-2 border-gray-400 p-5">
                <input {...register("name")}
                className=" outline-0 rounded border border-gray-400 p-2" type="text" placeholder="Name"/>
                <input {...register("email")} className=" outline-0 rounded border border-gray-400 p-2" type="email" placeholder="Email"/>
                <input {...register("mobile")} className=" outline-0 rounded border border-gray-400 p-2" type="tel" placeholder="Mobile Number"/>
                <input {...register("image")} className=" outline-0 rounded border border-gray-400 p-2" type="url" placeholder="Image"/>
                <button className="rounded bg-sky-600 text-white p-2">Add user</button>
            </form>
    </div>
  )
}

export default Form