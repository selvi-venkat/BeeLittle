import React, {useEffect} from 'react';
import ProductsList from '../ProductsList';
import useFetch from '../../customHook/useFetch';

function ClothingList() {
    const BASE_URL = '/clothing';
    const {requestData,data,error,loading} = useFetch(BASE_URL);  
    useEffect(()=>requestData(),[]); 
    return(
        <div>
            {loading && <h3>Loading....</h3>}
            {error && <h3>Error : Something went wrong !!!</h3>}
            <div>
                <ProductsList products={data} entity='clothing'/>
            </div>
        </div>
    )
}

export default ClothingList;
