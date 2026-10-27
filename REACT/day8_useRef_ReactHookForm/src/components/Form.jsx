import { React, useRef, useState } from 'react'
const Form = () => {

    console.log("form is rendering")
    const [product, setProduct] = useState({})
    let formRef = useRef({});   //useRef is used store the address/reference of any element .
    console.log(product)


    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            ProductName: formRef.current.ProductName.value,
            Price: formRef.current.Price.value,
            Category: formRef.current.Category.value,
            Image: formRef.current.Image.value
        }
        setProduct(obj);
    }

    return (
        <div  >
            <h1 className="text-red-700 bg-white w-60 rounded-xl p-2 mx-2">Fill this form</h1>
            <form
                onSubmit={handleSubmit}
                action="" className="flex flex-col bg-white gap-4 w-60 border-2 rounded-xl border-gray-100 p-4 m-2" >
                <input
                    ref={(e) => formRef.current.ProductName = e}
                    //  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="border-2 p-2 border-gray-400 rounded-xl" type="text" placeholder="Product name" />


                <input
                    ref={(e) => formRef.current.Price = e}
                    // onChange={(e) => setFormData({ ...formData, Price: e.target.value })}
                    className="border-2 p-2 border-gray-400 rounded-xl" type="number" placeholder="Price" />

                <span>Select Category : </span>
                <select
                    ref={(e) => formRef.current.Category = e}
                    // onChange={(e) => setFormData({ ...formData, Category: e.target.value })} 
                    className="p-2 border-2 border-gray-400 rounded-xl">
                    <option value="MEN">Men</option>
                    <option value="WOMEN">Women</option>
                    <option value="KIDS">Kids</option>
                </select>
                <input
                    ref={(e) => formRef.current.Image = e}
                    // onChange={(e) => setFormData({ ...formData, Image: e.target.value })}
                    className="border-2 p-2 border-gray-400 rounded-xl" type="url" placeholder="Image" />
                <button className="bg-blue-700 text-white p-2 rounded-xl">Create</button>
            </form>

            <h1>{product.ProductName}</h1>
            <h1>{product.Price}</h1>
            <h1>{product.Category}</h1>
            <h1>{product.Image}</h1>
        </div>
    )
}

export default Form