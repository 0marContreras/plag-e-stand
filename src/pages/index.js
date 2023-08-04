import Image from 'next/image'
import Hero from '@/components/hero'
import Miss from '@/components/miss'
import Tech from '@/components/tech'
import Quote from '@/components/quote'
import Vision from '@/components/viss'
import Logos from '@/components/logos'


export default function Home() {
  return (
    <>
    <Hero />
    <Vision />
    <Miss />
    <Tech />
    <Quote />
    <Logos />

   </>
  )
}
