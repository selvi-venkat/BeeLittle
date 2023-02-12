import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link,useLocation} from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const renderValue = pathName === '/' ? false : true;
    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .map((crumb,index) => {            
            currentLink = crumb === '' ? '/' : currentLink+`${crumb}`;       
            const chkActiveCrumb = (index) => {
               return index === (location.pathname.split('/')).length-1 ? true : false;
            }
            return (
                <>
                {chkActiveCrumb(index) ? <Breadcrumb.Item key={index} active>{crumb}</Breadcrumb.Item>:                
                <Breadcrumb.Item key={index} 
                linkAs={Link} linkProps={{to :`${currentLink}`}}>
                    {crumb === '' ? 'Home' : crumb}
                </Breadcrumb.Item> }
                </>
            )
        })
   
    return (
        <div className='productNav-Container container'>
            {renderValue &&   
                <Breadcrumb>   
                    {crumbs}
                </Breadcrumb>}
        </div>
    );
}

export default BreadCrumbs;