import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook,Instagram } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className='footer-layer'>
    <div className='row footer-content g-0'>
        <div className='col-3'>
            <h3>Company</h3>
            <ul className='list-unstyled'>
                <li><NavLink className='footer-links' to='about'>About us</NavLink></li>
                <li><NavLink className='footer-links' to='returnPolicy'>Return Policy</NavLink></li>
                {/* <li><NavLink className='footer-links' to='privacyPolicy'>Privacy Policy</NavLink></li>
                <li><NavLink className='footer-links' to='usageTerms'>Terms of use</NavLink></li> */}
            </ul>
        </div>
        <div className='col-3'>
            <h3>Need help?</h3>
            <ul className='list-unstyled'>
                <li>Track your order</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Account</li>
            </ul>
        </div>
        <div className='col-6 footer-address'>
            <div className='row'>
                <div className='col-6' style={{paddingTop:'30px',paddingLeft:'30px'}}>
                    <h4>Tirupur Branch</h4>
                    <ul className='list-unstyled' style={{color:'#7A7A7A'}}>
                        <li>34, First Floor, Maniam Street,</li>
                        <li>Valipalayam New Extn Opp to Sri Sakthi</li>
                        <li>Theatre, Tirupur – 641601</li>
                        <li>Call Us: +91 9943057577</li>
                    </ul>   
                </div>
                <div className='col-6' style={{paddingTop:'30px',paddingLeft:'30px'}}>
                    <h4>Coimbatore Branch</h4>
                    <ul className='list-unstyled' style={{color:'#7A7A7A'}}>
                        <li>443, Avinashi Rd, near Zibe Hotels,</li>
                        <li>Peelamedu, Coimbatore, Tamil Nadu</li>
                        <li>641004</li>
                        <li>Call Us: +91 9865210408</li>
                    </ul>   
                </div>
            </div>
            <div className='row'>
                <h4 className='d-flex justify-content-end align-items-center'>CONNECT WITH US:
                    <Facebook className='footer-media'/>
                    <Instagram className='footer-media'/>
                </h4>
            </div>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'>&#169;  BeeLittle 2015 — 2022</p>
    </div>
  )
}

export default Footer;