import React from 'react'
import ShoppingRouter from '../Router/ShoppingRouter'
import {Provider} from 'react-redux';
import {store} from '../ReduxState/Store.js'


function ShoppingApp() {
    return (
        <div>
            <Provider store={store}>
                <ShoppingRouter/>
            </Provider>
            
        </div>
    )
}

export default ShoppingApp
