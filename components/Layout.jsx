import React from 'react'
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return <>
  <NavbarTop />
  <Navbar />
  {children}
  </>;
}

export default Layout