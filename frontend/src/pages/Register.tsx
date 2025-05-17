import Navigation from "../components/Navigation"
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'
import { Link } from "react-router-dom"


const Register = () => {
    return (
        <div>
            <Navigation />
            <div className="mt-[50px] w-full">
                <p className='font-black text-center text-[32px]'>Register</p>
                <p className='text-center text-gray-400 cursor-pointer'>Our latest collection, where classic and contemporary styles converge in<br></br> a perfect harmony</p>
                <div className="flex justify-center mt-[20px]">
                    <div className='flex flex-col items-center space-y-[6px]'>
                        <Input  inputType='text' inputPlaceholder="Full Name" />
                        <Input  inputType='email' inputPlaceholder="Email Address" />
                        <Input  inputType='password' inputPlaceholder="Password" />
                        <Button buttonText='Sign In' buttonBG='bg-black' buttonTextColor='text-white' />
                    </div>
                </div>
                <p className='text-center text-gray-400 cursor-pointer'>Already Tenant? <Link to='/login' className='text-black'>Login</Link></p>
            </div>
        </div>
    )
}

export default Register