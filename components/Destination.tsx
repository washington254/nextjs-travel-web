'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import Button from './Button';

const destinationUrls = {
  'The Great Rift Valley': 'https://maps.app.goo.gl/U23nq2Xu6tPy6Lg77',
  'Giraffe Centre Nairobi': 'https://maps.app.goo.gl/xpoRnZmyq8wkWJLf6',
  'Menengai Crater View Point': 'https://maps.app.goo.gl/2eonfdnnNQF3MdeKA',
  'Mount Kenya': 'https://maps.app.goo.gl/yTeZfK8zCZJvbso78',
  'Pyramids of Giza': 'https://maps.app.goo.gl/VGoMEW1Upq9YTyJJA',
};



const Destination = () => {
  return (
    <section className='relative max-container padding-container flex flex-col gap-16 py-15 pt-4'>
      <Image className='absolute xs:bottom-[65%] xs:right-[5%] md:bottom-[70%] xl:right-0' src='/yellowx.png' alt='yellow object' width={100} height={100} />

      <div className='top'>
        <Title title='top destination' subtitle='OUR TOP DESTINATIONS' />
      </div>

      <div className='bottom flex items-center justify-between'>
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '@1.15': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '@1.60': {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide className='pb-12'>
            <DestinationCard
              img='/rift.jpg'
              place='The Great Rift Valley'
              country='Nairobi, Kenya'
              price='$550.16'
              rating='4.8'
              url={destinationUrls['The Great Rift Valley']} // Pass the URL here
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img='/2.jpg'
              place='Giraffe Centre Nairobi'
              country='Nairobi, Kenya'
              price='$20.99'
              rating='4.5'
              url={destinationUrls['Giraffe Centre Nairobi']} // Pass the URL here
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img='/crater.jpg'
              place='Menengai Crater View Point'
              country='Nakuru, Kenya'
              price='$150.99'
              rating='5.0'
              url={destinationUrls['Menengai Crater View Point']} // Pass the URL here
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img='/kenya.jpg'
              place='Mount Kenya'
              country='Central, Kenya'
              price='$750.00'
              rating='4.8'
              url={destinationUrls['Mount Kenya']} // Pass the URL here
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img='/9.jpg'
              place='Pyramids of Giza'
              country='Giza, Egypt'
              price='$670.50'
              rating='4.6'
              url={destinationUrls['Pyramids of Giza']} // Pass the URL here
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};


interface DestinationCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
  url: string; // Change from onClick to url
}

const DestinationCard = ({ img, place, country, price, rating, url }: DestinationCardProps) => {
  return (
    <div className='bg-white/5 h-[600px] w-[340px] pb-4 rounded-3xl shadow-2 flex flex-col gap-4'>
      <a href={url} className='h-2/3 rounded-t-3xl cursor-pointer'>
        <Image
          className='h-full w-full rounded-t-3xl'
          src={img}
          alt='img'
          width={150}
          height={150}
        />
      </a>

      <div className='h-1/3 px-6'>
        <div className='place-price flex justify-between'>
          <p className='font-bold text-lg w-1/2'>{place}</p>
          <p className='font-bold text-lg md:flex hidden'>{price}</p>
        </div>
        <p className='mt-3'>{country}</p>
        <div className='mt-6 flex gap-1 items-center'>
          <p className='text_orange font-bold'>{rating}</p>
          <Image className='h-full' src='/star.png' alt='star' width={20} height={5} />
        </div>
      </div>
    </div>
  );
};

export default Destination
