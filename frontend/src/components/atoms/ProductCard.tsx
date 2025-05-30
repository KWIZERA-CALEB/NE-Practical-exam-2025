import React from 'react'
import { Link } from 'react-router-dom'

interface ProductCardTypesProps {
    productID?: string | number;
    productName: string;
    productPrice: number;
    productDescription: string;
    productImage?: string;
}

const ProductCard: React.FC<ProductCardTypesProps> = ({ productID, productName, productImage, productPrice, productDescription }) => {
    return (
        <div>
            <Link to={`/all/${productID}`}>
                <div className="rounded-[12px] h-[250px] shadow-sm bg-gray-400 cursor-pointer">
                    <img src={productImage} className='w-full h-full object-center object-cover rounded-[12px]' alt='cloth' />
                </div>
            </Link>
            <Link to={`/all/${productID}`}>
                <p className='font-bold cursor-pointer'>{productName}</p>
            </Link>
            <p className="text-gray-400 cursor-pointer">{productDescription}</p>
            <p className='font-bold cursor-pointer'>${productPrice}</p>
        </div>
    )
}

export default ProductCard