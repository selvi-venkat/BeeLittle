import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Cart, Heart, Person} from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import {NavLink} from 'react-router-dom';

function Header(){   
    return( 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#" className='brand-header'><img className='logo-placer' alt='BeeLittle' src='../images/beelittle-logo.webp'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto header-links">                                
                                <NavLink to='login' className='login-menus'>                                                                        
                                    <Person color='#7bdcb5' size='30'/>                                       
                                </NavLink>                                
                                <NavLink className='login-menus' style={{position:'relative'}}>
                                    <Heart color='#7bdcb5' size='30' />
                                    <Badge bg='danger' style={{position:'absolute',top:'12px',left:'0px'}}>0</Badge>
                                </NavLink>
                                <NavLink className='login-menus' style={{position:'relative'}}>
                                    <Cart color='#7bdcb5' size='30'/>
                                    <Badge bg='danger' style={{position:'absolute',top:'7px',left:'40px'}}>0</Badge>
                                </NavLink>                      
                            </Nav>  
                        </Navbar.Collapse>  
            </Navbar>   
    )
}

export default Header;