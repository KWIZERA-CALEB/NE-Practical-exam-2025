import { create } from 'zustand'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios';

interface ProductTypes {
    id: number;
    productName: string;
    productPrice: number;
    amountInStock: number;
    productDescription: string;
    productImage: string;
    productCategory: string;
}


interface useProductStoreTypes {
    isCreatingProduct: boolean;
    isFetchingProduct: boolean;
    isFetchingProducts: boolean;
    isUpdatingCart: boolean;
    currentlySelectedProduct: ProductTypes |  null;
    productsFetched: ProductTypes[] | null;
    currentCart: ProductTypes[] | null;
    fetchProducts: () => Promise<void>;
    fetchProduct: (id: number) => Promise<void>;
    addProductToCart: (data: { productName: string; productPrice: number; amountInStock: number; productDescription: string; productImage: string; }) => Promise<void>;
    createProduct: (data: { productName: string; productPrice: number; amountInStock: number; productDescription: string; productImage: string; }) => Promise<void>;
}


export const useProductStore = create<useProductStoreTypes>((set, get) => ({
    isCreatingProduct: false,
    isFetchingProducts: false,
    isFetchingProduct: false,
    productsFetched: [],
    currentlySelectedProduct: null,
    isUpdatingCart: false,
    currentCart: [],

    createProduct: async (data) => {
        set({  isCreatingProduct: true })

        try {
            const res = await axiosInstance.post("/create-product", data);
            toast.success(res.data.message, { 
                position: 'bottom-center',
                duration: 5000,            
                className: 'font-afacadFlux text-[12px] font-bold cursor-pointer',
                style: {
                    color: '#fff',        
                    backgroundColor: '#15B392',
                    padding: '6px 20px', 
                },
            });
        } catch(error) {
            console.log(`Error ${error}`)
        } finally {
            set({  isCreatingProduct: false })
        }

    },

    fetchProducts: async () => {
        set({  isFetchingProducts: true })

        try {
            const res = await axiosInstance.get("/products/all");
            toast.success(res.data.message, { 
                position: 'bottom-center',
                duration: 5000,            
                className: 'font-afacadFlux text-[12px] font-bold cursor-pointer',
                style: {
                    color: '#fff',        
                    backgroundColor: '#15B392',
                    padding: '6px 20px', 
                },
            });
            set({ productsFetched: res.data.products })
        } catch(error) {
            console.log(`Error ${error}`)
        } finally {
            set({  isFetchingProducts: false })
        }

    },

    fetchProduct: async (id) => {
        set({  isFetchingProduct: true })

        try {
            const res = await axiosInstance.get(`/products/${id}`);
            toast.success(res.data.message, { 
                position: 'bottom-center',
                duration: 5000,            
                className: 'font-afacadFlux text-[12px] font-bold cursor-pointer',
                style: {
                    color: '#fff',        
                    backgroundColor: '#15B392',
                    padding: '6px 20px', 
                },
            });
            console.log(res.data.product)
            set({ currentlySelectedProduct: res.data.product })
        } catch(error) {
            console.log(`Error ${error}`)
        } finally {
            set({  isFetchingProduct: false })
        }

    },

    addProductToCart: async (data) => {
        set({ isUpdatingCart: true })
        try {
            const currentCart = localStorage.getItem('cart') || []

            // const newCartProducts = await currentCart.push(data)

            await localStorage.setItem('cart', data)

            console.log(`Product added to cart ${currentCart}`)
        } catch(error) {
            console.log(`Error ${error}`)
        } finally {
            set({ isUpdatingCart: false })
        }
    }

}))