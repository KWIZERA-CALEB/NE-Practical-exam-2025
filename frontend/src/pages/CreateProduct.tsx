import Navigation from "../components/Navigation"
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'
import { Link } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useProductStore } from "../store/useProductStore"


interface CreateProductForm {
    productName: string;
    productPrice: number;
    amountInStock: number;
    productDescription: string;
    productImage: string;
}


const CreateProduct = () => {
    const { createProduct, isCreatingProduct } = useProductStore()
    const { control, handleSubmit, formState: { errors } } = useForm<CreateProductForm>({
        defaultValues: {
            productName: '',
            productPrice: 0,
            amountInStock: 0,
            productDescription: '',
            productImage: '',
        },
        mode: 'onChange'
    })
    const navigate = useNavigate()

    const onSubmit = async (data: CreateProductForm) => {
        try {
            await createProduct(data)
            navigate('/control')
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Navigation />
            <div className="mt-[50px] w-full">
                <p className='font-black text-center text-[32px]'>Create Product</p>
                <p className='text-center text-gray-400 cursor-pointer'>Our latest collection, where classic and contemporary styles converge in<br></br> a perfect harmony</p>
                <div className="flex justify-center mt-[20px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col items-center space-y-[6px]'>
                            <Controller 
                                name="productName"
                                control={control}
                                rules={{
                                    required: 'Product Name is required',
                                }}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange}  inputType='text' inputPlaceholder="Product Name" />
                                )}
                            />
                            {errors.productName && (
                                <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.productName.message}</p>
                            )} 
                            <Controller 
                                name="productPrice"
                                control={control}
                                rules={{
                                    required: 'Product Price is required',
                                }}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange}  inputType='number' inputPlaceholder="Product Price" />
                                )}
                            />
                            {errors.productPrice && (
                                <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.productPrice.message}</p>
                            )} 
                            <Controller 
                                name="amountInStock"
                                control={control}
                                rules={{
                                    required: 'Amount in stock is required',
                                }}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange}  inputType='number' inputPlaceholder="Amount In Stock" />
                                )}
                            />
                            {errors.amountInStock && (
                                <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.amountInStock.message}</p>
                            )}
                            <Controller 
                                name="productDescription"
                                control={control}
                                rules={{
                                    required: 'Product Description is required',
                                }}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange}  inputType='text' inputPlaceholder="Product Description" />
                                )}
                            />
                            {errors.productDescription && (
                                <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.productDescription.message}</p>
                            )} 
                             <Controller 
                                name="productImage"
                                control={control}
                                rules={{
                                    required: 'Product Image is required',
                                }}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange}  inputType='text' inputPlaceholder="Product Image" />
                                )}
                            />
                            {errors.productImage && (
                                <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.productImage.message}</p>
                            )} 
                            <Button isDisabled={isCreatingProduct &&  true} buttonText={isCreatingProduct ? 'Loading...' : 'Create Product'} buttonBG='bg-black' buttonTextColor='text-white' />
                        </div>
                    </form>
                </div>
                <p className='text-center text-gray-400 cursor-pointer'>Not Now? <Link to='/control' className='text-black'>Cancel</Link></p>
            </div>
        </div>
    )
}

export default CreateProduct