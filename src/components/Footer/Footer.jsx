import React from 'react'
import Logo from '../../assets/logo blan.png'
// import './footer.css'

const Footer = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" />
        <p>Copyright &copy; GET Tunisie 2023</p>
        <ul className='ul'>
            <li><a href="facebook.com/GET.Fashion">Facebook</a></li>
            <li><a href="instagram.com/get.tunisie">Instagram</a></li>
            <li><a href="get.com.tn">Website</a></li>
        </ul>
    </nav>
  )
}

export default Footer