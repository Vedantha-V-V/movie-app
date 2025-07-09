import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (<header className="flex justify-between items-center sm:px-16 px-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
          <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="text-gradient">MD</p>
          </NavLink>
          <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/" className={({isActive}) => isActive?"text-blue-500 cursor-pointer":"text-white cursor-pointer"}>
              Home
            </NavLink>
            {/* <NavLink to="/" className={({isActive}) => isActive?'text-blue-500':'text-white'}>
              Projects
            </NavLink> */}
        </nav>
    </header>
  )
}

export default Header