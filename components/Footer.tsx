import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative max-container bg-gray-950 text-white padding-container py-36 flex xs:gap-12 lg:gap-20 xs:flex-col lg:flex-row'>
      <Image className='absolute right-[-4%] xs:top-0 lg:top-[-20%] ' src='/footer-object.png' alt='object' width={100} height={100} />

      <div className='flex flex-col gap-12 lg:w-1/3'>
        {/* LOGO & TEXT */}
        <div className='flex flex-col gap-4'>
        <Link href='/' className='flex space-x-2' >
                <Image src='/africa.svg' alt='logo' width={40} height={40}/>
                <h2 className='font-bold text-lg'>AFRITOUR</h2>
            </Link>   
          <p className='opacity-70'>Consider liking and subscribing to the channel, thank you Shabrina Putri for the template
          </p>
        </div>

        {/* SOCIAL MEDIA */}
   
      </div>

      {/* LINK FOOTER */}
      <div className='right lg:w-2/3 flex xs:flex-col md:flex-row xs:gap-10 md:gap-0 md:justify-between'>
        <FooterCard title='Company' link1='About' link2='Career' link3='Mobile' />
        <FooterCard title='Contact' link1='Why Afritour?' link2='Partner with us' link3='FAQ’s' link4='Blog' />
        <FooterCard title='Meet Us' link1='+0 1234 56789' link2='info@afritour.com' link3='Grove street, los santos' />
      </div>
    </footer>
  )
}

interface FooterCardProps {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
}

const FooterCard = ({title, link1, link2, link3, link4} : FooterCardProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <ul className='flex flex-col gap-4 mt-4'>
        <Link className='opacity-70' href='/'>{link1}</Link>
        <Link className='opacity-70' href='/'>{link2}</Link>
        <Link className='opacity-70' href='/'>{link3}</Link> 
        {link4 && <Link className='opacity-70' href='/'>{link4}</Link>} 
      </ul>                  
    </div>  
  )
}

export default Footer