import React from 'react'
import Title from './Title'
import Image from 'next/image'

const TravelPoint = () => {
  return (
    <section className='relative max-container padding-container py-20 flex xs:flex-col md:flex-row items-end'>
      <Image className='absolute z-30 xs:bottom-[60%] md:bottom-[5%] md:left-[-5%] lg:left-[5%] xs:w-[500px] xs:h-[500px] md:w-[570px] md:h-[570px] lg:w-[650px] lg:h-[650px]' src='/person.png' alt='person' width={650} height={700}/>
      
      {/* LEFT */}
      <div className='sm:w-[65%] xs:h-[500px] xs:w-full'>
        <div className='absolute z-20 bg-[#FF5722] rounded-[50%] blur-sm w-[30px] h-[30px] xs:right-[30%] xs:bottom-[70%] sm:right-[20%] md:right-[60%] md:bottom-[25%] lg:right-[55%] lg:bottom-[30%] xl:bottom-0 xl:right-[55%] xl:top-[65%]' />
        <div className='absolute z-20 bg-[#FF5722] rounded-[50%] blur-sm w-[20px] h-[20px] xs:left-[60%] xs:bottom-[83%] sm:bottom-[81%] sm:left-[65%] md:left-[35%] md:bottom-[40%] lg:bottom-[50%] xl:bottom-0 xl:left-[37%] xl:top-[45%]' />
        <div className='absolute  rounded-[50%] scale-90 md:w-[55%] xs:w-[90%] xs:h-[400px] md:h-[500px] bg-[crimson]' />
     
      </div>

      {/* RIGHT */}
      <div className='relative md:w-[35%] xs:w-full flex flex-col gap-12'>
        <div className='top flex flex-col gap-8'>
          <Title title='Afritour' subtitle='We helping you find your dream location' />
          <p className='text-lg opacity-50'>We have an amaizing collection of hotels and accomodations too</p>   
        </div>
        <div className='bottom grid grid-cols-2 gap-8'>
          <TravelPointCard title='500+' subtitle='Holiday Packages' />
          <TravelPointCard title='100' subtitle='Luxury Hotels' />
          <TravelPointCard title='7' subtitle='Premium Airlines' />
          <TravelPointCard title='2k+' subtitle='Happy Customers' />
        </div>
      </div>
    </section>
  )
}

interface TravelPointCardProps {
  title: string;
  subtitle: string;
}

const TravelPointCard = ({title, subtitle} : TravelPointCardProps) => {
  return (
    <div className='border border-red-600 py-6 px-4 rounded-3xl flexCenter flex-col gap-2'>
      <h3 className=' text-3xl font-bold'>{title}</h3>
      <p className='font-semibold text-center'>{subtitle}</p>
    </div>
  )
}

export default TravelPoint