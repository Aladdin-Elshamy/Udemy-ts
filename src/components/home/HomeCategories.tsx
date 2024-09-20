import React from 'react'
import img from "../../assets/home/images/lohp-category-design-v2.jpg"

const data = [
  { path: img, title: "Design" },
  { path: img, title: "Development" },
  { path: img, title: "Marketing" },
  { path: img, title: "Photography" },
  { path: img, title: "Music" },
  { path: img, title: "Business" },
  { path: img, title: "Health & Fitness" },
  { path: img, title: "Personal Development" }
]

const HomeCategories = () => {
  return (
    <div className='container py-12'>
      <h2 className='font-bold text-2xl md:text-3xl lg:text-start text-center '>Top Categories</h2>
      <div className='grid pt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {data.map((item, index) => (
          <div className='flex flex-col items-center gap-4' key={index}>
            <div className='w-full max-w-[300px] h-[300px] md:h-[300px]'>
              <img
                src={item.path}
                className='w-full h-full object-cover hover:scale-[1.1] hover:cursor-pointer transition-transform duration-500'
                alt={item.title}
              />
            </div>
            <h3 className='text-lg font-semibold'>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCategories
