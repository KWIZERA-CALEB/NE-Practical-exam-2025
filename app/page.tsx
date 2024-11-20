import Navigation from "@/components/ui/custom/Navigation";
import Banner from "@/components/ui/custom/Banner";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <div>
        <h3 className="cursor-pointer text-center text-[15px] font-bold select-none">Services we provide</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          <div className='border-[1px] border-solid border-gray-300'></div>
        </div>
      </div>
    </div>
   
  );
}
