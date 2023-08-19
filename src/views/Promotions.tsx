import React from 'react'
import Image from 'next/image'
import m1 from '/public/event1.webp'
import m2 from '/public/event2.webp'
import m3 from '/public/event3.webp'
import { Button } from "@/components/ui/button"


const Promotions = () => {
  return (
   <div className='px-2 py-16'>
    <div className='text-center space-y-3'>
            <p className='text-blue-800'>PROMOTIONS</p>
            <h3 className='text-3xl font-semibold text-gray-800'>Our Promotions Events</h3>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 mt-8'>
       
        {/* First Grid */}

        <div className='w-full flex flex-col items-center md:flex-row justify-between lg:flex-row col-span-1 md:col-span-2 bg-cat1 px-12'>
            <div className='max-w[13rem] py-8'>
             <h2 className='text-4xl font-bold'>GET UP TO 60%</h2>
             <p className='text-xl'>For the summer season</p>
            </div>
            <div className='w-64'><Image height={1000} width={1000} src={m1} alt=''></Image></div>
        </div>

        {/* Second Grid */}

        <div className='w-full h-full row-span-1 md:row-span-2  bg-cat3'>
         <div>
            <div className='p-4'>
            <div><p>Flex Sweatshirt</p></div>
            <div className='flex gap-2'>
                <del>$100.00</del>
                <p className='font-bold'>$75.00</p>
            </div>
            </div>
         </div>
         <div className='flex justify-center' ><Image src={m2} alt=''></Image></div>
        </div>

        {/* Third Grid */}

        <div className='w-full h-full row-span-1 md:row-span-2 bg-cat4'>
        <div>
            <div className='p-4'>
            <div><p>Flex Push Button Bomber</p></div>
            <div className='flex gap-2'>
                <del>$225.00</del>
                <p className='font-bold'>$190.00</p>
            </div>
            </div>
         </div>
         <div className='flex justify-center'><Image src={m3} alt=''></Image></div>
        </div>

        {/* Fourth Grid */}

        <div className='col-auto md:col-span-2 flex flex-col justify-center items-center w-full py-9  bg-cat2 '>
            <h2 className='text-white text-cente mt-8 text-4xl font-bold'>GET 30% Off</h2>
            <p className='text-[#FFFFFF] text-center text-sm mt-1'>USE PROMO CODE</p>
            <Button className='text-center text-[#FFFFFF] bg-[#595959] rounded-2xl md:mb-8 md:px-14 md:py-1'>DINE WEEK END SALE</Button>
        </div>
    

        
        



    </div>
   </div>
  )
}

export default Promotions