import React from 'react'
import HomeSlider from '../../components/home/HomeSlider'
import HomeCategories from '../../components/home/HomeCategories'
import HomeInstructor from '../../components/home/HomeInstructor'

const HomePage = () => {
  return (
    <div>
      <HomeSlider/>
      <HomeCategories/>
      <HomeInstructor/>
    </div>
  )
}

export default HomePage
