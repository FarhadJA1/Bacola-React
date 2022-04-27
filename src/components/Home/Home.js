import React from 'react'
import QuickCategories from './QuickCategories'
import Slider from './Slider'
import TimerDiscount from './TimerDiscount'
import WeekendDiscount from './WeekendDiscount'

function Home() {
  return (
    <div>
      <Slider/>
      <QuickCategories/>
      <TimerDiscount/>
      <WeekendDiscount/>
    </div>
  )
}

export default Home
