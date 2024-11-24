import { Button } from "../button"

const Navigation = () => {
  return (
    <div className='h-[80px] w-full flex flex-row justify-between items-center bg-[#e9f3f4] pl-[30px] pr-[30px] border-b-[1px] border-solid'>
      <div className='flex flex-row space-x-[40px]'>
        <div><h3 className="cursor-pointer">CRAFTY</h3></div>
        <ul className='flex flex-row space-x-[15px]'>
            <li className='text-[14px] cursor-pointer hover:text-sky-500'>Home</li>
            <li className='text-[14px] cursor-pointer hover:text-sky-500'>FAQ</li>
            <li className='text-[14px] cursor-pointer hover:text-sky-500'>Resources</li>
            <li className='text-[14px] cursor-pointer hover:text-sky-500'>Contact</li>
            <li className='text-[14px] cursor-pointer hover:text-sky-500'>Ask Project</li>
        </ul>
      </div>

      <div>
        <Button className='rounded-full'>Try Premium</Button>
      </div>
    </div>
  )
}

export default Navigation
