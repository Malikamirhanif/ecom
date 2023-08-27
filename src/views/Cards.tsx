import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {oneProductType} from '@/components/utils/SanityProductsTypes'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity/lib/client';

const builder = imageUrlBuilder(client);
function urlFor(source:any) {
  return builder.image(source)
}

const cards:FC<{singleProduct:oneProductType,}> = (singleProduct) => {
  // console.log(singleProduct)
  // console.log(singleProduct.singleProduct.slug.current)
  // console.log(singleProduct.singleProduct.image[0]);
  // console.log(singleProduct.singleProduct);
//  console.log(singleProduct.singleProduct.name);
  // console.log(urlFor(singleProduct.singleProduct.image[0]).width(500).url())
  
  
  
  
  
  return (
    <div>
        {
         
         <div className='max-w-sm min-w-[24rem] hover:scale-110 select-none'>
          <Link href={singleProduct.singleProduct.slug.current}>
           <div className=''> 
            <div className=''>
              <Image width={300} height={300} src={urlFor(singleProduct.singleProduct.image[0]).width(500).height(500).url()} alt="del"/>
            </div>
            <div>${singleProduct.singleProduct.price}</div>        
              <div>${singleProduct.singleProduct.name}</div>


          </div>
         </Link>
         </div>
          
         
          

        }
    </div>
  )
}

export default cards