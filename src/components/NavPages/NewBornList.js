import React, {useEffect} from 'react';
import useFetch from '../../customHook/useFetch';
import ProductsList from '../ProductsList';

const NewBornList = () => {    
        const BASE_URL = '/newborn';
        const {requestData,data,error,loading} = useFetch(BASE_URL);  
        useEffect(()=>requestData(),[]); 
        return(
            <div>
                {loading && <h3>Loading....</h3>}
                {error && <h3>Error : Something went wrong !!!</h3>}
                <div>
                    <ProductsList products={data} entity='newborn'/>
                </div>
            </div>
    )
}

export default NewBornList;