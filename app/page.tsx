import Navigation from "@/components/ui/custom/Navigation";
import Banner from "@/components/ui/custom/Banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className='pr-[30px] pl-[30px] mb-[40px]'>
        <h3 className="cursor-pointer text-center text-[15px] font-bold select-none">Services we provide</h3>
        <div className="grid grid-cols-1 mt-[15px] sm:grid-cols-2 gap-[4px] md:grid-cols-3 lg:grid-cols-4 w-full">
            <div className='border-[1px] shadow-sm p-[20px] rounded-[15px] border-solid borderr-[#e9f3f4]'>
              <div className='rounded-full w-[40px] h-[40px] p-[15px] bg-[#000]'></div>
              <div className='mt-[20px]'>
                <h3 className="cursor-pointer text-start text-[15px] font-bold select-none">Website Development</h3>
                <p className='text-start text-[14px] select-none cursor-pointer'>
                Create multiple applications under one single pricing plan
                </p>
              </div>
            </div>
            <div className='border-[1px] shadow-sm p-[20px] rounded-[15px] border-solid borderr-[#e9f3f4]'>
              <div className='rounded-full w-[40px] h-[40px] p-[15px] bg-[#000]'></div>
              <div className='mt-[20px]'>
                <h3 className="cursor-pointer text-start text-[15px] font-bold select-none">Website Maintenance</h3>
                <p className='text-start text-[14px] select-none cursor-pointer'>
                Create multiple applications under one single pricing plan
                </p>
              </div>
            </div>
            <div className='border-[1px] shadow-sm p-[20px] rounded-[15px] border-solid borderr-[#e9f3f4]'>
              <div className='rounded-full w-[40px] h-[40px] p-[15px] bg-[#000]'></div>
              <div className='mt-[20px]'>
                <h3 className="cursor-pointer text-start text-[15px] font-bold select-none">Large Systems Developement</h3>
                <p className='text-start text-[14px] select-none cursor-pointer'>
                Create multiple applications under one single pricing plan
                </p>
              </div>
            </div>
            <div className='border-[1px] shadow-sm p-[20px] rounded-[15px] border-solid borderr-[#e9f3f4]'>
              <div className='rounded-full w-[40px] h-[40px] p-[15px] bg-[#000]'></div>
              <div className='mt-[20px]'>
                <h3 className="cursor-pointer text-start text-[15px] font-bold select-none">Website Templates and SEO</h3>
                <p className='text-start text-[14px] select-none cursor-pointer'>
                Create multiple applications under one single pricing plan
                </p>
              </div>
            </div>
        </div>
      </div>

      <div className='pr-[30px] pl-[30px] mb-[40px]'>
        <h3 className="cursor-pointer text-center text-[15px] font-bold select-none">Why work with us</h3>
        <p className='text-center text-[14px] select-none cursor-pointer'>
            Create multiple applications under one single pricing plan
        </p>
        
        <div className='w-full mt-[15px] flex flex-row justify-between'>
          <div className='w-[60%]'>
            <div className='flex flex-row items-center space-x-[12px]'>
              <div className='rounded-full w-[40px] h-[40px] p-[15px] bg-[#000]'></div>
              <div>
                <h3 className="cursor-pointer text-center text-[15px] font-bold select-none">3 MONTHS HELP</h3>
              </div>
            </div>
            <div className='mt-[15px]'>
              <p className='text-start text-[14px] select-none cursor-pointer'>
                At CRAFTY, we believe that knowledge is the key to a brighter future. Our mission is to provide you with the tools and resources you need to succeed. From our comprehensive FAQ section to our Resources page, 
                we're committed to helping you every step of the way.
                At CRAFTY, we believe that knowledge is the key to a brighter future. Our mission is to provide you with the tools and resources you need to succeed. From our comprehensive FAQ section to our Resources page, 
                we're committed to helping you every step of the way.
              </p>
            </div>
          </div>
          <div className='w-[40%]'></div>
        </div>

        <div className='w-full mt-[20px] flex flex-row justify-between'>
          <div className='w-[40%]'></div>
          <div className='w-[60%]'>
            <div className='flex flex-row items-center space-x-[12px]'>
              <div className='rounded-full w-[40px] h-[40px] p-[15px] bg-[#000]'></div>
              <div>
                <h3 className="cursor-pointer text-center text-[15px] font-bold select-none">3 MONTHS HELP</h3>
              </div>
            </div>
            <div className='mt-[15px]'>
              <p className='text-start text-[14px] select-none cursor-pointer'>
                At CRAFTY, we believe that knowledge is the key to a brighter future. Our mission is to provide you with the tools and resources you need to succeed. From our comprehensive FAQ section to our Resources page, 
                we're committed to helping you every step of the way.
                At CRAFTY, we believe that knowledge is the key to a brighter future. Our mission is to provide you with the tools and resources you need to succeed. From our comprehensive FAQ section to our Resources page, 
                we're committed to helping you every step of the way.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='pr-[30px] pl-[30px] mb-[40px]'>
        <h3 className="cursor-pointer text-center text-[15px] font-bold select-none">Commonly Asked Questions</h3>
        <p className='text-center text-[14px] select-none cursor-pointer'>
            Create multiple applications under one single pricing plan
        </p>
        <div className='w-full flex justify-center'>
          <div className='w-[80%]'>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </div>

    </div>

   
  );
}
