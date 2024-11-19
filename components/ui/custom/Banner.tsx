import { Button } from "../button"

const Banner = () => {
  return (
    <div className='w-full bg-white pl-[30px] pr-[30px] flex flex-col md:flex-row items-center justify-between'>
      <div className='w-[50%]'>
        <div><h3 className="cursor-pointer text-start text-[32px] font-bold select-none">Empowering you with <span className='text-sky-500'>Knowledge</span> for a brighter future</h3></div>
        <div className='mt-[15px]'><p className='text-start text-[14px] select-none cursor-pointer'>At CRAFTY, we believe that knowledge is the key to a brighter future. Our mission is to provide you with the tools and resources you need to succeed. From our comprehensive FAQ section to our Resources page, 
            we're committed to helping you every step of the way.</p>
        </div>
        <div className='mt-[20px]'>
            <p className='text-start text-[14px] select-none cursor-pointer font-bold'>Unlock your potential with our expert guidance</p>
            <div className='mt-[8px]'>
                <Button className='rounded-full'>Try Premium</Button>
            </div>
        </div>
      </div>
      <div className='w-[50%]'>
        <img src="/images/banner.jpg" alt="Banner Image" />
      </div>
    </div>
  )
}

export default Banner
