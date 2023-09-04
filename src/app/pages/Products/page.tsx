import BASE_PATH_URL from '@/compoents/shared/Basepath';
import { oneProductType } from '@/components/utils/SanityProductsTypes';
import ProductCarousel from '@/views/ProductCarousel';

import React from 'react'
  async function fetching(){
    let url=`${BASE_PATH_URL}/api/products`;
    let res=await fetch(url,{cache:"no-store",});
    // console.log(res.json())
    if (!res.ok)
    {
        throw new Error("Failed to Fetch");
    }
    else
    return res.json();

};

const Products =async () => {
  let ans:Array<oneProductType>=await fetching();
// console.log({ans})
  return (
    <div>
    <ProductCarousel res={ans}/>
    </div>
  )
}

export default Products