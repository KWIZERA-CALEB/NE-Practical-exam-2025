import { Link } from 'react-router-dom'
import { BiCart } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'

const Navigation = () => {
    return (
        <div className="h-[90px] w-full">
            <div className='bg-black w-full h-[30px] flex justify-center items-center'>
                <p className="text-white cursor-pointer">Get 25% Off This Summer Sole, Grab It Fast!! <span className="font-bold">15H:45M:37S</span></p>
            </div>
            <div className="h-[60px] pr-[40px] pl-[40px] w-full flex justify-between items-center">
                <div className='flex flex-row space-x-[15px] items-center'>
                    <div><Link to='/men'>Men</Link></div>
                    <div><Link to='/women'>Women</Link></div>
                    <div><Link to='/kids'>Kids</Link></div>
                    <div><Link to='/new-featuring'>New & Featured</Link></div>
                </div>
                <div><p className='font-black text-[25px] cursor-pointer uppercase'><Link to='/'>TULOS SHOP</Link></p></div>
                <div className='flex flex-row space-x-[20px] items-center'>
                    <div className='cursor-pointer'>
                        <Link to='/search'>
                            <BiSearch />
                        </Link>
                    </div>
                    <div className='cursor-pointer'>
                        <Link to='/cart'>
                            <BiCart />
                        </Link>
                    </div>
                    <div><Link to='/login'>Login</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navigation