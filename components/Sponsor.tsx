import React from 'react'
import Image from 'next/image'

const Sponsor = () => {
  return (
    <section className='relative bg-neutral-50/60 '>
        <div className='max-container padding-container py-14 md:flex  justify-between items-center xs:grid xs:grid-cols-3 xs:gap-8'>
            <Image src='/sponsor1.png' alt='tripadvisor' className=' ' width={140} height={40} />
            <Image src='/sponsor2.png' alt='expedia' width={120} height={40}  />
            <Image src='/sponsor3.png' alt='bookingcom' width={140} height={40}  />
            <Image src='/sponsor4.png' alt='airbnb' width={120} height={40}/>
            <Image src='/sponsor5.png' alt='orbitz' width={120} height={40} />
        </div>
    </section>
  )
}


export default Sponsor