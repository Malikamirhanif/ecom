import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {ShoppingCart} from 'lucide-react'
import Image from 'next/image'
import header from '/public/Header.webp'
import f1 from '/public/Featured1.webp'
import f2 from '/public/Featured2.webp'
import f3 from '/public/Featured3.webp'
import f4 from '/public/Featured4.webp'



const Hero = () => {
  return (
    <section className='flex flex-col gap-y-10 lg:flex-row'>
        {/*Left div */}
        <div className='flex-1'>
        <Badge className='px-6 py-2 rounded-lg bg-blue-200 text-blue-900 hover:bg-blue-200'>Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mt-8 lg:text-5xl">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className='bg-black text-white gap-x-5 rounded-lg py-5 mt-6 hover:bg-black'><ShoppingCart/>Start Shopping</Button>
       <ul className='flex gap-x-10 mt-8'>
        <li><Image src={f1} alt=''></Image></li>
        <li><Image src={f2} alt=''></Image></li>
        <li><Image src={f3} alt=''></Image></li>
        <li><Image src={f4} alt=''></Image></li>
       </ul>
        </div>
        {/*Right div */}
        <div className='flex flex-1 justify-center'>
            <div className='rounded-full bg-pink-100'>
            <Image src={header} alt='' height={450} width={400}></Image>
            </div>
          
       </div>
    </section>
  )
}

export default Hero