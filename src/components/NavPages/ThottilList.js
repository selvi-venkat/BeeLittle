import React, { useEffect } from 'react';
import useFetch from '../../customHook/useFetch';
import ProductsList from '../ProductsList';

function ThottilList() {
    const BASE_URL = '/thottil';
    const {requestData,data,error,loading} = useFetch(BASE_URL);  
    useEffect(()=>requestData(),[]);
    return(
        <div>
            {loading && <h3>Loading....</h3>}
            {error && <h3>Error : Something went wrong !!!</h3>}
            <div>
                <ProductsList products={data} entity='thottil'/>
            </div>
        </div>
    )
}

export default ThottilList;