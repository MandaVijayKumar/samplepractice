import axios from 'axios'
import {ALL_PRODUCTS_FAILURE, ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS} from './ActionTypes.js'
let allProductRequest = ()=>{
    return {
        type: ALL_PRODUCTS_REQUEST,
        
    }
}

//  All product on success
let allProductSuccess = (products)=>{
    return {
        type: ALL_PRODUCTS_SUCCESS,
        payload: products
        
    }
} 
//All products on failure
let allProductFailure = (errors)=>{
    return {
        type:ALL_PRODUCTS_FAILURE,
        payload:errors
    }
}
//asynchrnous call to get all product list 
let allProductList = ()=>{
    return (dispatch)=> {
        dispatch(allProductRequest());
        axios.get('https://fakestoreapi.com/products').then((response)=>{
            dispatch(allProductSuccess(response.data));

        }).catch((error)=> {
            dispatch(allProductFailure(error))
        })
    }
}
export {allProductList}