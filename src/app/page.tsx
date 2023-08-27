import Jewellery from '@/views/Jewellery'
import Hero from '@/views/Hero'
import Promotions from '@/views/Promotions'
import NewsLetter from '@/views/NewsLetter'
import BASE_PATH_URL from '@/compoents/shared/Basepath'
import { NextResponse } from 'next/server'
import ProductCarousel from '@/views/ProductCarousel'
import {oneProductType} from '@/components/utils/SanityProductsTypes'
import { Root } from 'postcss'

 export  async function fetchProducts()
 {
  let url=`${BASE_PATH_URL}/api/products`;
  let res=await fetch(url,{cache:"no-store",});
  // console.log(res);
  if(!res.ok)
  {
    throw new Error('Failed to fetch');
  }
  return res.json();
  // return NextResponse.json({message:"hi"})
}

export default async function Home() {

  let resp:Array<oneProductType>=await fetchProducts();
 
// console.log({resp});

  return (
    <main>
      <Hero/>
      <Promotions/>
      <Jewellery/>
      <NewsLetter/>
      <ProductCarousel res={resp}/>
    </main>
  )
}
