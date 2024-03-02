import React from 'react'
import {Button} from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recieve our
          best blah blah blah
        </p>
        <p className="footer-subscription-footer">
          You can unsub anytime
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your
            Email" className="footer-input"/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/information'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className='social-logo'>
              TRVL <i className='fab fa-typo3'/>
            </Link>
          </div>
          <small className='website-rights'>TRVL 2020</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
            to="/"
            target='_blank'
            aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'/>
            </Link>
            <Link className="social-icon-link instagram"
            to="/"
            target='_blank'
            aria-label='Instagram'
            >
              <i className='fab fa-instagram'/>
            </Link><Link className="social-icon-link facebook"
            to="/"
            target='_blank'
            aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'/>
            </Link>
            <Link className='social-icon-link instagram'
            to="/"
            target='_blank'
            aria-label='Instagram'
            >
              <i className='fab fa-instagram'/>
            </Link><Link className="social-icon-link facebook"
            to="/"
            target='_blank'
            aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'/>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
