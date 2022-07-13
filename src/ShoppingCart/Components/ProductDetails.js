import React, {Fragment} from 'react';
import {useParams,Link} from 'react-router-dom';

import './CSS/ProductDetails.css';
import loading from './Images/loading.gif'
import {useSelector} from 'react-redux';


function ProductDetails() {
  
    let params = useParams();
    let {id} = params;
    let productLists = useSelector(state => {console.log(state); return state.allproducts.productlists});
    console.log(id);
    console.log('details of product:',productLists)
    let filterProduct = productLists.filter(product => product.id == id);
    console.log(filterProduct);
        
      
   
   
    let {image, title, price, description, category} = filterProduct[0];
   
  
   

    return (
        <div>
               {Object.keys(filterProduct[0]).length ==0? <img src={loading}/>:<Fragment>
               
               <div className='row' >
                
                    <div className='col-sm-8 col-md-8 col-xl-8 m-5'>
                        <div className='row'>
                            <div className='col-sm-6 image-part'>
                                <img src={image} className='img-thumbnail w-100 h-100' alt="not found"/>                       

                            </div>
                            <div className='col-sm-6 details-part'>
                                
                                <div id="title">
                                    <h4> Title : {title} </h4>
                                    

                                </div>
                                <div id="category">
                                    <h4>Category : {category} </h4>
                                    <h6></h6>
                                </div>
                                <div id="description" className = "text-center">
                                    <h4>Description</h4>
                                    <h6>{description}</h6>
                                </div>
                                <div id="price">
                                    <h4>Price : {price}</h4>
                                </div>
                                <div id="rate">
                                    
                                </div>


                            
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </Fragment>}
          
            
            <div className='text-center'>
                <Link to = "/" className = "btn btn-lg btn-warning">BACK</Link>
            </div>
             
        </div>
    )
}

export default ProductDetails
