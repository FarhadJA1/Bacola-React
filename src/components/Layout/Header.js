import React from 'react'
import Categories from './Categories'

import Navigation from './Navigation'
import Tools from './Tools'
import Top from './Top'

function Header() {
    return (
        <div>
            <Top />
            <div className='container'>
                <Navigation />
                <Tools/>
                <Categories/>
            </div>
        </div>
    )
}

export default Header
