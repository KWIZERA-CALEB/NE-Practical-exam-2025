import React, { useState, useEffect } from 'react'
import Navigation from "../components/Navigation"
import ProductCard from "../components/atoms/ProductCard"
import Select from '../components/atoms/Select'
import Input from '../components/atoms/Input'
import { useProductStore } from "../store/useProductStore"

interface ProductsTypes {
    id: number;
    productName: string;
    productPrice: number;
    amountInStock: number;
    productDescription: string;
    productImage: string;
    productCategory: string;    
}


const AllListings = () => {
    const [productCategory, setProductCategory] = useState('shirts')
    const [productPrice, setProductPrice] = useState(50)
    const [applyFilters, setApplyFilters] = useState(false);
    const { fetchProducts, isFetchingProducts, productsFetched } = useProductStore()
    const [products, setProducts] = useState<ProductsTypes[]>([])
    
    const handleFetchProducts = async () => {
        try {
            await fetchProducts()
            setProducts(productsFetched || []);
        } catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
        handleFetchProducts()
        console.log(products)
    }, [])

    

    const filteredProducts: ProductsTypes[] = applyFilters ? products.filter((filteredProduct) => {
        let minPrice = 0;
        let maxPrice = productPrice;

        if (productPrice === 50) {
            minPrice = 0;
            maxPrice = 50;
        } else if (productPrice === 100) {
            minPrice = 50;
            maxPrice = 100;
        }
        return (
            filteredProduct.productCategory === productCategory &&
            filteredProduct.productPrice >= minPrice &&
            filteredProduct.productPrice <= maxPrice
        )

    }) : products;

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductCategory(e.target.value);
        setApplyFilters(true);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductPrice(parseInt(e.target.value, 10));
        setApplyFilters(true);
    };

    return (
        <div>
            <Navigation />
            <div className='pr-[40px] mt-[15px] pl-[40px]'>
                <p>Filters</p>
                <div className='flex flex-row items-center justify-between mt-[10px]'>
                    <div className='flex space-x-[10px] items-center flex-row'>
                        <Input  inputType='text' inputPlaceholder="Search" />
                        <Select handleSelectChange={handleCategoryChange} selectOptionTerm="Sort by category" options={['Pants', 'Shirts', 'Dresses', 'Coats', 'Others']} />
                        <select onChange={handlePriceChange} className='outline-0 border-[1px] border-solid border-gray-400 pl-[20px] pt-[10px] pb-[10px] pr-[20px] rounded-full'>
                            <option className='text-[14px] font-afacadFlux' value={0}>Sort by price</option>
                            <option className='text-[14px] font-afacadFlux' value={50}>$0 - $50</option>
                            <option className='text-[14px] font-afacadFlux' value={100}>$50 - $100</option>
                        </select>
                    </div>
                    <div>
                        <p>{filteredProducts.length} {filteredProducts.length == 1 ? 'Product' : 'Products'}</p>
                    </div>
                </div>
            </div>
            <div className='pr-[40px] mt-[15px] pl-[40px]'>
                {isFetchingProducts && 
                    <div>
                        <p>Loading ...</p>
                    </div>
                }
                {filteredProducts.length == 0 ? 
                    <div>
                        <p className='text-center'>No Products</p>
                    </div>
                : 
                    <div className='grid grid-cols-4 gap-4'>
                        {products.map((product) => (
                            <ProductCard key={product.id} productImage={product.productImage} productID={product.id} productName={product.productName} productPrice={product.productPrice} productDescription={product.productDescription} />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default AllListings