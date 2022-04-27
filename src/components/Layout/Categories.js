import  Dropdown from './Dropdown'
import React from 'react'
import Pages from './Pages'
import HomeShop from './HomeShop'

function Categories() {
  return (
    <div className='A row mt-3'>
      <Dropdown/>
      <Pages/>
      <HomeShop/>
    </div>
  )
}

export default Categories
