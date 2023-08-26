import {oneProductType} from '@/components/utils/SanityProductsTypes'
import React, { FC } from 'react'
import Cards from '@/views/Cards'
const ProductCarousel:FC<{res:Array<oneProductType>} > = ({res}) => {
//  console.log(res);
// console.log(res.length)
  return (
    <div className='flex gap-5'> 
       {
        res?.map((item:oneProductType,index:number)=>(
          <Cards key={index+4} singleProduct={item}/>
        ))
       }
  
    {/* {res.response[0].price } */}
    {/* {
      <Cards resp={res.response[0]}/>
    } */}
    </div>
  )
}

export default ProductCarousel