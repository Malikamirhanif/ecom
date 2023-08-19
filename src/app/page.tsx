import Jewellery from '@/views/Jewellery'
import Hero from '@/views/Hero'
import Promotions from '@/views/Promotions'
import NewsLetter from '@/views/NewsLetter'
import {Twitter,Instagram,Facebook} from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Promotions/>
      <Jewellery/>
      <NewsLetter/>
    </main>
  )
}
