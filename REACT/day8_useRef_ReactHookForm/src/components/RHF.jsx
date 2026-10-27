import React from 'react'
import { useForm } from 'react-hook-form';
const RHF = () => {

    let { register, handleSubmit, reset, formState: { errors }, } = useForm();
    console.log("RHF rendering")

    const formData = (data) => {
        console.log(data)
        reset();
    }
    return (
        <div  >
            <h1 className="text-red-700 bg-white w-60 rounded-xl p-2 mx-2">React Hook form</h1>
            <form onSubmit={handleSubmit(formData)} className="flex flex-col bg-white gap-4 w-60 border-2 rounded-xl border-gray-100 p-4 m-2" >
                <input {...register("productName")} className="border-2 p-2 border-gray-400 rounded-xl" type="text" placeholder="Product name" />
                <input {...register("Price")} className="border-2 p-2 border-gray-400 rounded-xl" type="number" placeholder="Price" />
                <input {...register("Category")} className="border-2 p-2 border-gray-400 rounded-xl" type="text" placeholder="Category" />
                <input {...register("Image")} className="border-2 p-2 border-gray-400 rounded-xl" type="url" placeholder="Image" />

                <button className="bg-blue-700 text-white p-2 rounded-xl">Create</button>
            </form>
        </div>
    )
}

export default RHF