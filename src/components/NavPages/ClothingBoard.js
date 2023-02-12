import React from 'react';
import { Outlet } from 'react-router-dom';

function ClothingBoard() {
    return (
        <div className='clothing-container container'>
            <Outlet/>
        </div>
    )
}

export default ClothingBoard;