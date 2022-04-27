
import React from 'react'
import '../../assets/style/Tools.scss';
import Account from './Account';
import Logo from './Logo';
import Modal from './Modal-Location';
import Search from './Search';

function Tools() {
  return (
    <div className='row'>
      <Logo />
      <Modal />
      <Search />
      <Account />
    </div>
  )
}

export default Tools
