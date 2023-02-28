import React from 'react'
import './Footer.css'
import {BsApple } from 'react-icons/bs';
import {IoLogoGooglePlaystore } from 'react-icons/io5';

const Footer = () => {
  return (
  <>
  <div className='Footer-Flex'>
    <div className='Section-1'>
    <h1>ACCOMMODATION</h1>
    <p>Group requests</p>
    <p>reservation guarantee</p>
    <p>Flights</p>
    </div>
    <div className='Section-2'>
        <h1>LINKS</h1>
        <p>Career</p>
        <p>Hostel registration</p>
        <p>Affiliate program</p>
    </div>
    <div className='Section-3'>
        <h1>ABOUT</h1>
        <p>Personal data protection notice</p>
        <p>Terms and Conditions</p>
        <p>Testing</p>
    </div>
    <div>
        <div className='Icon-1-Box'>
        <BsApple className='Icon-1'/>
        <h3>Available on the Apple Store</h3>
        </div>
        <div className='Icon-1-Box'>
        <IoLogoGooglePlaystore className='Icon-2'/>
        <h3>Available App on Google Play</h3>
        </div>
    </div>
  </div>
  </>
  )
}

export default Footer