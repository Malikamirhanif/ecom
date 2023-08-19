import React from 'react'
import Image from 'next/image'
import m1 from '/public/event3.webp'
import { Button } from '@/components/ui/button'

const Jewellery = () => {
  return (
    <div>
        {/* Top  */}
        <div className='flex justify-start md:justify-end'>
            <h3 className='text-2xl md:text-4xl md:max-w-sm font-extrabold text-left'>Unique and Authentic Vintage Desidiner Jewellery</h3>
        </div>
        {/* Bottom */}
        <div className='flex flex-col lg:flex-row items-start justify-center mt-6 gap-5'>
            {/* Left Div */}
            <div className='relative basis-1/2 grid grid-cols-2 grid-rows-2 gap-3 '>
                <div className='absolute -z-20 text-5xl md:text-9xl text-slate-100 font-extrabold'>Different From Others</div>
                
                    <div className='max-w-md md:max-w-[13rem] md:space-y-2' >
                        <h4 className='text-sm md:text-lg font-extrabold'>Using Good Quality Material</h4>
                        <p className='text-sm  leading-2 md:text-lg md:leading-5'>Lorem, ipsum dolor sit  adipisicing elit nxdjbx ndxdxdk.</p>
                    </div>
                    <div className='max-w-[13rem] md:space-y-2'>
                        <h4 className='text-sm md:text-lg font-extrabold'>Using Good Quality Material</h4>
                        <p className='text-sm leading-2 md:text-lg md:leading-5'>Lorem, ipsum dolor sit  adipisicing elit nxdjbx ndxdxdk.</p>
                    </div>
                    <div className='max-w-[13rem] md:space-y-2'>
                        <h4 className='text-sm md:text-lg font-extrabold'>Using Good Quality Material</h4>
                        <p className='text-sm leading-2 md:text-lg md:leading-5'>Lorem, ipsum dolor sit  adipisicing elit nxdjbx ndxdxdk.</p>
                    </div>
                    <div className='max-w-[13rem] md:space-y-2'>
                        <h4 className='text-sm md:text-lg font-extrabold'>Using Good Quality Material</h4>
                        <p className='text-sm leading-2 md:text-lg md:leading-5'>Lorem, ipsum dolor sit  adipisicing elit nxdjbx ndxdxdk.</p>
                    </div>
                

            </div>
            {/* Right Div */}
            <div className='flex flex-col space-y-5 md:flex-row  basis-1/2 '>
            <div className='basis-1/2'>
                 <Image src={m1} alt=''></Image>
            </div>
            <div className='basis-1/2'>
                <p className='h-[90%] lg:max-w-[15rem]'>Lorem ipsum dolor sit,Lorem,  in velit eveniet pariatur maxime, modi consequatur rem labore ea quaerat minima, molestias voluptatum!    sit  adipisicing elit. Praesentium facilis dicta maiores. Inventore ea corporis quaerat dicta, veniam praesentium est dignissimos dolorem animi ut modi aut consequuntur non incidunt ad?</p>
                <Button className='text-white bg-black hover:text-white hover:bg-black'>See All Products</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Jewellery