import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductDetails from '../Components/ProductDetails';
import Navbar from '../Components/Navbar';
import AddCart from '../Components/AddCart';

function ShoppingRouter() {
    return (
        <div>
        <BrowserRouter>
           <Navbar/>
           <Routes>
                <Route exact path="/" element={<ProductList/>}/>
                <Route exact path ="/productDetails/:id" element={<ProductDetails/>}/>
                <Route exact path='/addcart' element = {<AddCart/>}/>
           </Routes>
        
        </BrowserRouter>
            
        </div>
    )
}

export default ShoppingRouter;
