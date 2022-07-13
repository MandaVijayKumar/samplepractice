import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { store } from './Store';
import {Provider} from 'react-redux';
import App from './Components/App'


function Index() {
  return (
    <div>
        <BrowserRouter>
        <Provider store={store}>
            <App/>
        

          


        </Provider>
        </BrowserRouter>

       
    </div>
  )
}

export default Index