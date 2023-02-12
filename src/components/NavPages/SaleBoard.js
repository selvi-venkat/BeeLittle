import React from 'react';
import { Outlet } from 'react-router-dom';

const SaleBoard = () => { 
    return (
        <div className='sale-container container'>            
            <Outlet/>
        </div>               
    );
}

export default SaleBoard;