import Image from 'next/image'
import Hero from '@/components/hero'
import Miss from '@/components/miss'
import Tech from '@/components/tech'
import Quote from '@/components/quote'


export default function Home() {
  return (
    <>
    <Hero />
    <Quote />
    <Miss />
    <Tech />
   </>
  )
}
