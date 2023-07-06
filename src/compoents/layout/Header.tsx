"use client"
import React, { useState } from 'react'
import { navBarArray ,navItems} from '@/components/utils/navBarArrayAndDataTypes'
import Image from 'next/image'
import logo from '/public/Logo.webp'
import {ShoppingCart,ChevronDown, SearchIcon,MenuSquare,X} from 'lucide-react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"


const Header = () => {
      const [isNav,setisNav]=useState<boolean>(true)
  return (

    <div className='sticky top-0 bg-white flex justify-between px-14 py-5 lg:items-center gap-x-8'>
        <div className='flex-shrink-0 '><Image src={logo} alt='Logo'></Image></div>
       <div className='hidden lg:flex items-center flex-shrink-0 gap-x-20 xl:gap-x-36'>
         <div className='relative  lg:flex gap-x-1 lg:gap-x-6 '>
          {
            navBarArray.map((items,index)=>(
              <ul>
                <li className='flex group'><Link href={items.href}>{items.label}</Link>
              {items.isDropDown?<ChevronDown className='group-hover:rotate-180 duration-300'/>:"" }
              <div className='invisible group-hover:visible duration-300 absolute mt-6 '>
                {
                 items.isDropDown? items.dropDownItem?.map((items,index)=>
                  <ul>
                    <li><Link href={items.href}>{items.label}</Link></li>
                  </ul>
                  ):""
                }
              </div>
                </li>
                 
              </ul>
            ))
          }
        </div>
        <div className='flex items-center border rounded-xl'>
          <SearchIcon/>
          <Input className='placeholder:"Search in our store"'/>
          </div>
       
        <div className=' flex items-center justify-center  flex-shrink-0'><ShoppingCart/></div>
        </div>
        <div className='lg:hidden' onClick={()=>{setisNav(!isNav)}}>
         { isNav?<div>
            <MenuSquare/>
          </div>:
          <div className='flex justify-end '>
            <X/>
          </div>
          }
          {
            isNav?"":<div>
                        <div className=' lg:flex gap-x-1 lg:gap-x-6 '>
          {
            navBarArray.map((items,index)=>(
              <ul>
                <li className='flex group'><Link href={items.href}>{items.label}</Link>
              {items.isDropDown?<ChevronDown className='group-hover:rotate-180  duration-300'/>:"" }
              <div className='invisible group-hover:visible   duration-300  absolute mt-6 '>
                {
                 items.isDropDown? items.dropDownItem?.map((items,index)=>
                  <ul className=''>
                    <li><Link href={items.href}>{items.label}</Link></li>
                  </ul>
                  ):""
                }
              </div>
                </li>
                 
              </ul>
            ))
          }
        </div>

            </div>
          }
        </div>
    </div>
  )
}

export default Header