import React from 'react'
import { Link } from 'react-router-dom'

function NavbarNavItem (props) {
  return (
    <li className={`nav-item ${props.className}`}>
      <Link
        className='nav-link text-light'
        to={props.to}
      >
        {props.text}
      </Link>
    </li>
  )
}

export default NavbarNavItem
