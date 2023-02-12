import React from 'react';
import { Outlet } from 'react-router-dom';

function ThottilBoard() {   
    return (
        <div className='thottil-container container'>            
            <Outlet/>
        </div>
    )
}

export default ThottilBoard;