import { oneProductType } from '@/components/utils/SanityProductsTypes'
import React, { FC } from 'react'
import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import Link from 'next/link';


const builder = imageUrlBuilder(client);
function urlFor(source:any) {
  return builder.image(source)
}

const Allcards:FC<{proDataSingle:oneProductType}> = ({proDataSingle}) => {
    // console.log(proDataSingle);
  //  console.log(urlFor(proDataSingle.image[0]).width(500).height(500).url())
  return (
    <div>
        {
         
          <div>
         <Link href={proDataSingle.slug.current}  >
         <div className='h-80 w-96 '>
            <Image width={300} height={300} src={urlFor(proDataSingle.image[0]).width(500).height(500).url()} alt='del' />
          </div>
          <div>${proDataSingle.name}</div>
          <div>${proDataSingle.price}</div>
          </Link>
         </div>
         
  
         
        }
    </div>
  )
}

export default Allcards