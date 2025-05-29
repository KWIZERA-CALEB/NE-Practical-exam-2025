import { create } from 'zustand'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios';

interface useProductStoreTypes {
    isCreatingProduct: boolean;
    isFetchingProducts: boolean;
    fetchProducts: () => Promise<void>;
    createProduct: (data: { productName: string; productPrice: number; amountInStock: number; productDescription: string; productImage: string; }) => Promise<void>;
}


export const useProductStore = create<useProductStoreTypes>((set, get) => ({
    isCreatingProduct: false,
    isFetchingProducts: false,

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
        } catch(error) {
            console.log(`Error ${error}`)
        } finally {
            set({  isFetchingProducts: false })
        }

    }

}))