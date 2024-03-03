import React from 'react'
import {Button} from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to='/'>Home</Link>
            <Link to='/information'>Information</Link>
            <Link to='/games'>Games</Link>
            <Link to='/websites'>Other Websites</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
