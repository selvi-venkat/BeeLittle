import React, { useEffect } from 'react';
import ProductsList from '../ProductsList';
import useFetch from '../../customHook/useFetch';

function NewBornEssential() {
    const BASE_URL = '/newbornEssential';
    const {requestData,data,error,loading} = useFetch(BASE_URL);  
    useEffect(()=>requestData(),[]);
    return(
        <div>
            {loading && <h3>Loading....</h3>}
            {error && <h3>Error : Something went wrong !!!</h3>}
            <div>
                <ProductsList products={data} entity='newbornEssential'/>
            </div>
        </div>
    )
}

export default NewBornEssential;