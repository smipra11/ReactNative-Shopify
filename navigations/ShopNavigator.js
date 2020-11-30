import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from "../screens/shop/ProductDetailScreen"
import Color from "../constants/Color"
import { HeaderButton } from 'react-navigation-header-buttons';
import OrdersScreen from "../screens/shop/OrdersScreen"
import CartScreen from '../screens/shop/CartScreen';

const defaultNavOptions = {



    headerStyle: {
        backgroundColor: Color.primary
    },
    headerTintColor: 'white'

}

const ProductNavigator = createStackNavigator({
    ProductsOverView: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen

}, {
    defaultNavigationOptions: defaultNavOptions
})

const OrderNavigator = createStackNavigator({
    Orders: OrdersScreen

},{
    defaultNavigationOptions: defaultNavOptions

})

const ShopNavigator = createDrawerNavigator({
    Products:ProductNavigator,
    Orders:OrderNavigator
})

export default createAppContainer(ShopNavigator)