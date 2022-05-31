import React from 'react'
import {Bars, Nav, NavIcon, NavLink } from './NavElements'

const Navbar = ({toggleSidebar}) => {
  return (
    <>
    <Nav>
        <NavLink to="/">
         FOOD House
        </NavLink>
        <NavIcon onClick={toggleSidebar}>
            <p>Menu</p>
            <Bars />
        </NavIcon>
    </Nav>
    </>
  )
}

export default Navbar