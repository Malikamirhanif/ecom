import React from 'react'
import Image from 'next/image'
import L1 from '/public/Logo.webp'
import {Twitter,Instagram,Facebook, Copyright} from 'lucide-react'
import Link from 'next/link'
//import Bottom from './Bottom'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-start gap-10 mt-20 text-gray-800 mb-16'>
        {/* First Div */}
        <div className='basis-1/4 '>
          <div>
            <Image height={150} width={150} src={L1} alt='Logo'></Image>
            <p>Lorem ipsum, dolor sit avoluptatem molestias my paragraph  ea tempora it is very nice paragraph</p>
             
             <div className='flex gap-5 '>
                <Link href={'/'}><Twitter></Twitter></Link>
                <Link href={'/'}><Facebook></Facebook></Link>
                <Link href={'/'}><Instagram></Instagram></Link>
             </div>
          </div>
        </div>
        {/* Second div */}
        <div className='flex flex-col basis-1/4'>
            <h6 className='text-xl font-bold'>Company</h6>
            <Link href={"/"} >About</Link>
            <Link href={"/"} >Term of use</Link>
            <Link href={"/"} >Privacy pollicy</Link>
            <Link href={"/"} >How it Works</Link>
            <Link href={"/"} >Contact Us</Link>
        </div>
        {/* Third div */}
        <div className='flex  flex-col basis-1/4'>
            <h6 className='text-xl font-bold'>Support</h6>
            <Link href={"/"} >Support Carrer</Link>
            <Link href={"/"} >24h Service</Link>
            <Link href={"/"} >Quick Chat</Link>
        </div>
        {/* Fourth div */}
        <div className='flex flex-col basis-1/4'>
            <h6 className='text-xl font-bold'>Contact</h6>
             <Link href={"/"} >Whatsapp</Link>
            <Link href={"/"} >support 24h</Link>

        </div>

    </div>
  )
}

export default Footer