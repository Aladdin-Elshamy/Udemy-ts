import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { text } from '../../utilities';
import HomeSliderCard from './HomeSliderCard';
import { IoStarSharp } from 'react-icons/io5';

const data = [
  {
    title: 'The Complete Node.js Developer Course (3rd Edition)',
    path: 'https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg',
    author: 'Rayan hungel',
    rating: 5,
    price: 200,
    oldPrice: 200,
  },
  {
    title: 'The Complete Node.js Developer Course (3rd Edition)',
    path: 'https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg',
    author: 'Rayan hungel',
    rating: 5,
    price: 200,
    oldPrice: 200,
  },
  {
    title: 'The Complete Node.js Developer Course (3rd Edition)',
    path: 'https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg',
    author: 'Rayan hungel',
    rating: 5,
    price: 200,
    oldPrice: 200,
  },
  {
    title: 'The Complete Node.js Developer Course (3rd Edition)',
    path: 'https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg',
    author: 'Rayan hungel',
    rating: 5,
    price: 200,
    oldPrice: 200,
  },
  {
    title: 'The Complete Node.js Developer Course (3rd Edition)',
    path: 'https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg',
    author: 'Rayan hungel',
    rating: 5,
    price: 200,
    oldPrice: 200,
  },
  {
    title: 'The Complete Node.js Developer Course (3rd Edition)',
    path: 'https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg',
    author: 'Rayan hungel',
    rating: 5,
    price: 200,
    oldPrice: 200,
  },
  // More data items...
];

export default function HomeSlider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleMouseEnter = (index:number) => {
    setHoveredIndex(index); // Set the index of the hovered card
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hover state when mouse leaves
  };
  


  return (
    <section className='container py-12 min-h-1/2 w-full'>
      <div className='prSlider relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: '.slideprev',
            prevEl: '.slidenext',
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className='mySwiper'
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}     className='relative z-10 py-10'        onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
              <div>
                <img src={item.path} alt='' className='' />
                <h3 className='font-bold'>{text(item.title, 50)}</h3>
                <small>{item.author}</small>
                <div className='flex gap-3'>
                  <span className='font-bold'>{item.rating}</span>
                <div className='flex gap-1 items-center'>
                <IoStarSharp className='text-yellow-500' />
                  <IoStarSharp className='text-yellow-500' />
                  <IoStarSharp className='text-yellow-500' />
                </div>
                  <span>(5k)</span>
                </div>
                <div className='flex gap-3'>
                  <span className='font-bold'>{item.price}</span>
                  <span className='line-through'>{item.oldPrice}</span>
                </div>
              {hoveredIndex === index && (
                      <div className='absolute z-50 left-0 w-full h-full bg-white shadow-lg top-0 '>
                        <HomeSliderCard />
                      </div>
                    )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className='swiper-button-prev slidenext absolute top-1/3 left-[-10px] bg-[url("./assets/home/icons/prev.png")] bg-cover w-10 h-10 z-10'
        />
        <div
          className='swiper-button-next slideprev absolute top-1/3 right-[-10px] bg-[url("./assets/home/icons/next.png")] bg-cover w-10 h-10 z-10'
        />
      </div>
    </section>
  );
}


