import Jewellery from '@/views/Jewellery'
import Hero from '@/views/Hero'
import Promotions from '@/views/Promotions'
import NewsLetter from '@/views/NewsLetter'
import BASE_PATH_URL from '@/compoents/shared/Basepath'
import { NextResponse } from 'next/server'

 async function fetchProducts()
 {
  // let res=await fetch(`${BASE_PATH_URL}/api/products`);
  // if(!res.ok)
  // {
  //   throw new Error('Failed to fetch');
  // }
  // return res.json();
  return NextResponse.json({message:"hi"})
}

export default async function Home() {

  // let response=await fetchProducts();
  // console.log({"response":response});
  return (
    <main>
      {/* <Hero/>
      <Promotions/>
      <Jewellery/>
      <NewsLetter/> */}
    </main>
  )
}
