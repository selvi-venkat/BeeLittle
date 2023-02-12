import React from 'react';
import ProductsList from './ProductsList';
import useFetch from '../customHook/useFetch';

const BestSellers = function(){
    const BASE_URL = '/sale';
    const {data,error,loading} = useFetch(BASE_URL);  
    return(
        <>
            <h1 className='center' style={{paddingTop:'50px',textAlign:'center'}}>Best Sellers</h1>
            {loading && <h3>Loading....</h3>}
            {error && <h3>Error : Something went wrong !!!</h3>}
            <div className='container-products'>
                <ProductsList products={data}/>
            </div>            
        </>
    )
}
export default BestSellers;