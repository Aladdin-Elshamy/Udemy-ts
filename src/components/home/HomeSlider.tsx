import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import HomeSliderCard from './HomeSliderCard';
import ProductCard from '../../ui/ProductCard';
import { productSliderData } from '../../data';

export default function HomeSlider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
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
          {productSliderData.map((item, index) => (
            <SwiperSlide key={index} className='relative z-10 py-10' onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <div>
                <ProductCard
                  title={item.title}
                  author={item.author}
                  rating={item.rating}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  image={item.path}
                />

                {hoveredIndex === index && (
                  <div className='absolute h-auto z-50 w-full p-4 shadow-md bg-white top-0 left-0 '>
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


