import React from 'react'
import {View,Text,StyleSheet,Button,Image,ScrollView}from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import Color from "../../constants/Color"
import * as cartActions from "../../Store/actions/cart"




const ProductDetailScreen = (props) =>{
    const productId =  props.navigation.getParam('productId')
    console.log(productId)

    const Selectedproducts  = useSelector(state=>
        state.products.availbleProduct.find(prod => prod.id === productId)
    )
    const dispatch =  useDispatch()
    return(
        <ScrollView>
            <Image  style={styles.image}source ={{uri: Selectedproducts.imageUrl}}/>
            <View style={styles.actions}>
            
            <Button color={Color.primary} title="Add to cart"
            onPress= {()=>{dispatch(cartActions.addToCart(Selectedproducts))}}
            />
            </View>
             <Text style={styles.title}> {Selectedproducts.title}</Text>
            <Text style={styles.price}>
            {Selectedproducts.price}
            </Text>
    <Text style={styles.desc}>{Selectedproducts.description}</Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    image:{
        width: '100%',
        height:200
    },
    price:{
        textAlign:'center',
        marginVertical: 10,
        fontSize:18,
        color:"#888"
    },
    title:{
        fontSize:20,
        textAlign:'center',
        color:'#888'

    },
    actions:{
        marginVertical:10,
        alignItems:'center'
    },
    desc:{
        fontSize:18,
        alignItems:'center',
        marginHorizontal:10
    }

})

export default ProductDetailScreen