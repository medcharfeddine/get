import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default Layout