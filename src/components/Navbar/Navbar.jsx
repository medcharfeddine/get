import React from 'react'
import Logo from '../../assets/logo blan.png'

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" />
        <ul className='ul'>
            <li><a href="facebook.com/GET.Fashion">Facebook</a></li>
            <li><a href="instagram.com/get.tunisie">Instagram</a></li>
            <li><a href="get.com.tn">Website</a></li>
        </ul>
    </nav>
  )
}

export default Navbar