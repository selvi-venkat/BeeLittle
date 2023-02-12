import api from '../api/axios';
import { useReducer, useEffect } from 'react';

const ACTIONS = {
    API_REQUEST : 'api-request',
    POST_REQUEST : 'api-post',
    FETCH_REQUEST : 'fetch-request',
    ERROR : 'error'
}

const reducer = (state,{type,payload}) => {
    switch(type){
        case ACTIONS.API_REQUEST:
            return {...state,data : [],loading:true};
        case ACTIONS.POST_REQUEST:
            return {...state,data: payload,loading:false};
        case ACTIONS.FETCH_REQUEST : 
            return {...state, data : payload, loading : false}
        case ACTIONS.ERROR : 
            return {...state,error : payload, data : [],loading:false}
        default : 
            return state;
    }
}

const useFetch = (url) => {    
    const requestData = () => {
        dispatch({type:ACTIONS.API_REQUEST});      
        api.get(url).then(response => {
            dispatch({type : ACTIONS.FETCH_REQUEST, payload : response.data});
        }).catch(e=>{
            dispatch({type:ACTIONS.ERROR,payload:e.error})
        }) 
    }   
    const postData = (formDataRetrieve) => {
        console.log('postData function');
        console.log(formDataRetrieve);
        dispatch({type:ACTIONS.API_REQUEST});       
        api.post(url,formDataRetrieve).then(response => {               
                     console.log(response);
                     dispatch({type : ACTIONS.POST_REQUEST, payload : 'Registered Successfully ! Welcome to BeeLittle !!'});
                }).catch(e=>{
                    dispatch({type:ACTIONS.ERROR,payload:'something went wrong'})
                })
    }
    const initialState = {
        requestData : requestData,
        postData : postData,
        data : [],
        error : null,
        loading :false
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    // useEffect(()=>{
    //     console.log('in useeffect');
    //     dispatch({type:ACTIONS.API_REQUEST});      
    //     api.get(url).then(response => {
    //         dispatch({type : ACTIONS.FETCH_REQUEST, payload : response.data});
    //     }).catch(e=>{
    //         dispatch({type:ACTIONS.ERROR,payload:e.error})
    //     })           
    // },[]);

    return state;
}

export default useFetch;