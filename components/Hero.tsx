import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative max-container padding-container xs:py-12 sm:py-28 xs:gap-16 sm:gap-32 gap-0 flex flex-col xl:flex-row'>
      <div className='bg-hero h-screen w-screen xs:right-[5%] xs:top-[45%] sm:right-[5%] xl:top-[4%] xl:right-[-20%]'/>
      
      {/* LEFT  */}
      <div className='relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5'>
       
        <h1 className='sm:text-7xl xs:text-6xl font-semibold'>WELCOME <br />
        TO 
           <span className='text-[crimson]'> AFRICA</span>
          </h1>
        <p className='text-opacity-50 text-xl'>To the continent that prides itself from it's culture,heritage and people </p>
        <div className='btn-container flex gap-4'>
          <Button type='button' title='Top Destinations' variant='btn_purple shadow' />
        </div>
      </div>

      {/* RIGHT */}
      <div className='relative z-1 xl:w-3/5 flexCenter first-line:flex-1'>
      <div className='grid grid-cols-3  space-x-4 '>

        <Image src='/9.jpg' alt='frame' width={200} height={400} className='w-250 rounded-lg hover:scale-110 transition-all cursor-pointer'/>          
        <Image src='/19.jpg' alt='frame' width={200} height={400} className='w-250 rounded-lg hover:scale-110 transition-all cursor-pointer'/>          
        <Image src='/12.jpg' alt='frame' width={200} height={400} className='w-250 ml-1 rounded-lg hover:scale-110 transition-all cursor-pointer'/>          
      </div>
     
      </div>
    </section>
  )
}

export default Hero