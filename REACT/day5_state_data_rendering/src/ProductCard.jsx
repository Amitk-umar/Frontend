import React from 'react'

const ProductCard = ({ product, del }) => {


    return (
        <div className=" p-4 border-2 rounded-xl flex flex-col gap-4">
            <div className="w-60 h-70">
                <img className="rounded-lg" src={product.image} alt="butterfly" />
            </div>

            <div>
                <h3 className="text-green-400">Product Name : <span className="text-white">{product.title.substring(0, 15)}</span> </h3>
                <h2 className="text-sm text-yellow-400">Category : <span className="text-white">{product.category}</span> </h2>
                <h3 className="text-sky-400">price : <span className="text-white">{product.price}</span></h3>
            </div>
            <button className="p-2 bg-red-500 rounded-lg" onClick={() => del(product.id)}>Delete</button>
        </div>
    )
}

export default ProductCard;