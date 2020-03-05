import React from 'react'

import NavbarNavItem from './NavbarNavItem'

function NavbarNav () {
  return (
    <ul className='navbar-nav ml-auto'>
      <NavbarNavItem
        text='Home'
        to='/home'
        active
      />

      <NavbarNavItem
        text='New post'
        to='/new-post'
      />

      <NavbarNavItem
        text='About'
        to='/about'
      />
    </ul>
  )
}

export default NavbarNav
