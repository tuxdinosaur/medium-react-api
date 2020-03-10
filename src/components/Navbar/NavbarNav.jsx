import React from 'react'

import NavbarNavItem from './NavbarNavItem'

import styles from './index.module.css'

function NavbarNav () {
  return (
    <ul className='navbar-nav ml-auto'>
      <NavbarNavItem
        className={`ml-3 ${styles.logoutColor}`}
        text='Sign out'
        to='/logout'
      />
      <NavbarNavItem
        className={`text-light ml-3 ${styles.newPost}`}
        text='New story'
        to='/post'
      />
    </ul>
  )
}

export default NavbarNav
