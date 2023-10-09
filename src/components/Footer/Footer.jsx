import React from 'react'
import Logo from '../../assets/logo blan.png'
// import './footer.css'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaGlobeAfrica} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <img className='image' style={{width:"60px"}} src={Logo} alt="Logo" />
        <p className='copyright'>Copyright &copy; GET Tunisie 2023</p>
        <ul className='ul'>
            <li><a href="https://facebook.com/GET.Fashion" target='_blank'><BiLogoFacebookSquare /></a></li>
            <li><a href="https://instagram.com/get.tunisie" target='_blank'><BiLogoInstagramAlt/></a></li>
            <li><a href="https://get.com.tn" target='_blank'><FaGlobeAfrica/></a></li>
        </ul>
    </div>
  )
}

export default Footer