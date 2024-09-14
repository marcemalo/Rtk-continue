import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
       <div className="containner">
        <div className="nav__wrapper">
            <NavLink to='/'><h1 className='nav__links'>Home</h1></NavLink>
            <NavLink to='/auth/login'><h1 className='nav__links'>Login</h1></NavLink>
            <NavLink to='/auth/signup'><h1 className='nav__links'>Signup</h1></NavLink>
        </div>
       </div>
    </div>
  )
}

export default Nav