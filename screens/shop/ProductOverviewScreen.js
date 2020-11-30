import React from 'react'
import { View, Text, FlatList ,Platform} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from "../../components/shop/productItem"
import * as cartActions from "../../Store/actions/cart"
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import HeaderButton from "../../components/UI/HeaderButton"
import  CartScreen from "../../screens/shop/CartScreen"

const ProductOverviewScreen = (props) => {
  

    const products = useSelector(state => state.products.availbleProduct)
    const dispatch = useDispatch()
    return (
        <FlatList data={products} keyExtractor={(item) => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail',
                            {
                                productId: itemData.item.id,
                                producttitle: itemData.item.title


                            })
                    }}
                    onAddToCart={() => {
                      dispatch(cartActions.addToCart(itemData.item));
                    }}


                />
            )} />
    )
}
ProductOverviewScreen.navigationOptions = navData => {
    return {
      headerTitle: 'All Product',
      headerLeft: () =>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress= {()=>{navData.navigation.toggleDrawer()}}
          />
        </HeaderButtons>

      ),
      headerRight: () =>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress= {()=>{navData.navigation.navigate('Cart')}}
          />
        </HeaderButtons>
      )
    };
  };
      

export default ProductOverviewScreen








