import React from 'react'
import { TbWorld } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className='bg-[#2d2f31] text-white py-12'>
      <div className='grid grid-cols-1 justify-items-center md:grid-cols-4 lg:justify-start gap-4 md:gap-6 max-w-6xl mx-auto text-center md:text-start'>
        <ul className='flex flex-col gap-2'>
          <li><a href=''>Udemy Business</a></li>
          <li><a href=''>Teach at Udemy</a></li>
          <li><a href=''>Get the App</a></li>
          <li><a href=''>About Us</a></li>
        </ul>
        <ul className='flex flex-col gap-2'>
          <li><a href=''>Careers</a></li>
          <li><a href=''>Blog</a></li>
          <li><a href=''>Help and Support</a></li>
          <li><a href=''>Investors</a></li>
        </ul>
        <ul className='flex flex-col gap-2'>
          <li><a href=''>Terms</a></li>
          <li><a href=''>Privacy Policy</a></li>
          <li><a href=''>Sitemap</a></li>
          <li><a href=''>Cookie Settings</a></li>
        </ul>
        <div className='mt-4 md:mt-0'>
          <button className='flex items-center justify-center md:justify-start gap-2 border p-4 w-full md:w-auto'>
            <TbWorld />
            English
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
