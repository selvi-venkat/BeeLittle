import React,{ useState} from 'react';
import {Nav,Dropdown,NavItem} from 'react-bootstrap';
import {NavLink, Outlet} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

function ProductLayouts(){
    const [showMenus,setshowMenus] = useState(+false);   
    const activeStyle = {color:'red',  
    borderBottom: '3px solid red',
    paddingBottom: '12px'};
    return(    
    <>    
        <div className='product-layout'>
            <Nav className='product-nav'>
                <Nav.Item className='product-item'>
                    <NavLink className='product-link' to="sale" style={({isActive})=>isActive ? activeStyle : undefined}>SALE!</NavLink>
                </Nav.Item>
                <Dropdown className='product-item' as={NavItem} show={showMenus}
                onMouseEnter={()=>setshowMenus(+true)} onMouseLeave={()=>setshowMenus(+false)} onClick={()=>setshowMenus(+false)}>
                    <Dropdown.Toggle as={NavLink} className='product-link' show={showMenus} 
                    to='/newborn' style={({isActive})=>isActive ? activeStyle : undefined}>
                     NewBorn Kits and Gifts
                    </Dropdown.Toggle>                    
                   <Dropdown.Menu className='newborn-submenu' renderOnMount={true} show={showMenus}>
                        <Dropdown.Item as={NavLink} className='sub-details' to='newborn/newbornEssential'>NewBorn Essential Kit</Dropdown.Item>
                        <Dropdown.Item as={NavLink} className='sub-details' to='newborn/newbornHospital'>Hospital Kit</Dropdown.Item>
                    </Dropdown.Menu>                 
                </Dropdown>
                <Nav.Item className='product-item'>
                    <NavLink className='product-link' to='clothing' style={({isActive})=>isActive ? activeStyle : undefined}>Clothing</NavLink>
                </Nav.Item>
                <Nav.Item className='product-item'>
                    <NavLink className='product-link' to='thottil' style={({isActive})=>isActive ? activeStyle : undefined}>Thottil/ Jhula</NavLink>
                </Nav.Item>
            </Nav>
        </div>
        <div className='inner-layout'>
            <BreadCrumbs/>
            <Outlet/>
        </div>  
    </>      
    )
}

export default ProductLayouts;