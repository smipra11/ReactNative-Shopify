import React from 'react';
import {View,Text,StyleSheet,FlatList,Platform} from 'react-native'
import {useSelector} from "react-redux"
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import HeaderButton from "../../components/UI/HeaderButton"
import OrderItem from "../../components/shop/OrderItem"
const OrderScreen = () =>{
    const orders= useSelector(state => state.orders.orders)
    console.log(orders)

    return<FlatList data={orders} 
    keyExtractor ={item =>item.id}
renderItem ={itemData =><OrderItem amount={itemData.item.totalAmount} items={itemData.item} />}/>


}

OrderScreen.navigationOptions = navData =>{
    return{
        HeaderTitle: 'Your orders',
        headerLeft: () =>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress= {()=>{navData.navigation.toggleDrawer()}}
              />
            </HeaderButtons>
    
          ),

    }

}
export default OrderScreen