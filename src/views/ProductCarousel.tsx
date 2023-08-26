import {oneProductType} from '@/components/utils/SanityProductsTypes'
import React, { FC } from 'react'
import Cards from '@/views/Cards'
const ProductCarousel:FC<{res:Array<oneProductType>} > = ({res}) => {
//  console.log(res);
// console.log("Length is "+res.length)

  return (
    <div className='flex gap-5'> 
       {
        
        
       res.length && res?.map((item:oneProductType,index:number)=>(
          <Cards key={index} singleProduct={item}/>
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