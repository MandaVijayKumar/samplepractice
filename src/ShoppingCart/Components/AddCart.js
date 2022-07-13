import React, { Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeSelectedProduct} from '../ReduxState/AddCartActions.js'

function AddCart() {
   
    const selectedItems = useSelector(state => state.addcartitems.selectedItem);
    let dispatch = useDispatch();
    console.log(selectedItems);
    
         let totalAmount = 0 ;
          selectedItems.forEach(product => {
             totalAmount = totalAmount + product.price;
          
        
            })
    return (
        <div className='text-center'>
            <h4>Order Product Lists</h4>
            <table className='table table-striped table-warning'>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {
                        
                        selectedItems.length > 0?selectedItems.map((product,index)=>{
                            
                            return(<Fragment key= {product.id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{product.title}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td><button className='btn btn-sm btn-danger' onClick={()=>dispatch(removeSelectedProduct(product))}>Remove</button></td>
                                        </tr>
                                </Fragment>)
                        }):null
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td><h4>Total:</h4></td>
                        <td><h4>{totalAmount}</h4></td>
                        <td><button className="btn btn-success">Payment Process</button></td>
                    </tr>
                </tbody>
            </table>
                
        </div>
    )
}

export default AddCart
