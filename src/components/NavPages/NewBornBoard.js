import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {NavLink, Outlet} from 'react-router-dom';

const NewBornBoard = () => {
    const activeStyle = {color:'red',  
                        borderBottom: '3px solid red',
                        paddingBottom: '12px'};
     return (
        <div className='newborn-container container'>
            <Nav>
                <Nav.Item className='product-item' style={{paddingTop:0}}>
                    <NavLink className='product-link' to='newbornEssential' style={({isActive})=>isActive ? activeStyle : undefined}>NewBorn Essential Kit</NavLink>
                </Nav.Item>
                <Nav.Item className='product-item' style={{paddingTop:0}}>
                    <NavLink className='product-link' to='newbornHospital' style={({isActive})=>isActive ? activeStyle : undefined}>Hospital Kit</NavLink>
                </Nav.Item>
            </Nav>   
            <Outlet/>         
        </div>               
    );
    }

export default NewBornBoard;