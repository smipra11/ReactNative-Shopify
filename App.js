import React from 'react';
import {
  View,
  Text,
  
} from 'react-native';
import{createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import productReducer from "./Store/reducer/product"
import cartReducer from "./Store/reducer/cart"
import OrdersReducer from "./Store/reducer/order"
import ShopNavigator from "./navigations/ShopNavigator"

const rootReducer = combineReducers({
  products:productReducer,
  cart:cartReducer,
  orders:OrdersReducer
})

const store  = createStore(rootReducer)


const App =() =>{

  return(
    <Provider store={store}>

    
    <ShopNavigator/>
    </Provider>

  )
}

export default App