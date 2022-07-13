import React,{useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';

import './CSS/ProductList.css';
import loading from './Images/loading.gif';
import {allProductList} from '../ReduxState/Actions.js';
import {addSelectedProduct} from '../ReduxState/AddCartActions.js'

import {useSelector, useDispatch} from 'react-redux'
import AddCart from './AddCart';


function ProductList() {
   
    let productLists = useSelector(state => state.allproducts.productlists);
    console.log(productLists)
    let addcartitems = useSelector(state => state.addcartitems.selectedItem);
    console.log(addcartitems);
    let  dispatch = useDispatch();
    useEffect(  ()=>{

       dispatch(allProductList());

        




    },[]);
    return (
        <Fragment>
            <div id="addcart-container">
                {
                    addcartitems.length > 0 ? <AddCart/>:null
                } 
            </div>
           
           
            
        
            
            <div className='row' id="prouduct-background">
            {
                productLists.length === 0?<img src={loading} alt="...loading"/>: productLists.map((product)=>{
                    return(<div key={product.id} className='col-sm-4 '>
                                <div className='card m-4'>
                                    <div className='card-header text-center'>
                                        <h4>{product.title}</h4>
                                    </div>
                                    <div className='card-body text-center'>
                                        <Link to={`/productDetails/${product.id}`} ><img src = {product.image} className='thuimg-thumbnail' alt='not found' /></Link>
                                        
                                    </div>
                                    <div className='card-footer footer'>
                                               <Link to={`/productDetails/${product.id}`} className='btn btn-primary'><h4>Details</h4></Link>
                                               <span><h4>Price : {product.price}</h4></span>                                            
                                               <button className='btn btn-success' onClick={()=>dispatch(addSelectedProduct(product))}><h4>ADD CART</h4></button>

                                    </div>

                                </div>
                        
                        
                        </div>);
                })
            }            
            </div>
            
       
            
            
        </Fragment>
    )
}

export default ProductList
