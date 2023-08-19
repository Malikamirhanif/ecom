import React from 'react'
import {Input} from '@/components/ui/input'
import { Button } from "@/components/ui/button"

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6 h-[80vh]'>
        <h6 className=' text-center text-3xl font-bold'>Subscribe Our NewsLetter</h6>
        <p className='text-center'>Get the Latest News and Promo offers directly</p>
        <div className='flex items-center justify-center flex-col md:flex-row gap-4'>
         <Input className='border-2 placeholder:"Enter Email Address"'></Input>
         <Button className='bg-black text-white max-w-[10rem] gap-x-5 rounded-xl px-2 py-5  hover:bg-black'>Get Started</Button>

        </div>

    </div>
  )
}

export default NewsLetter