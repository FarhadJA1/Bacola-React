import React from 'react'
import End from './End'
import FooterContact from './FooterContact'
import FooterNavigation from './FooterNavigation'
import Subscribe from './Subscribe'
import TextInfo from './TextInfo'

function Footer() {
  return (
    <div>
      <Subscribe/>
      <TextInfo/>
      <FooterNavigation/>
      <FooterContact/>
      <End/>
    </div>
  )
}

export default Footer
