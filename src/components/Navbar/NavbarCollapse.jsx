import React from 'react'

import NavbarNav from './NavbarNav'

function NavbarCollapse (props) {
  const styles = ['collapse', 'navbar-collapse']

  if (props.active) styles.push('show')

  const className = styles.join(' ')

  return (
    <div className={className}>
      <NavbarNav />
    </div>
  )
}

export default NavbarCollapse
