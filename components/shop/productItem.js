import React from 'react'
import { Text, View ,StyleSheet,Image,Button,TouchableOpacity} from 'react-native'
import Color from "../../constants/Color"
const ProductItem = (props) => {
    return (
        <TouchableOpacity onPress ={props.onViewDetail}>
        <View style={styles.product}>
            <Image  style={styles.image} source={{uri: props.image}}/>
            
            <View style={styles.detail}>
            <Text style={styles.title}> {props.title}</Text>
    <Text style={styles.price}> ${props.price.toFixed(2)}</Text>
           </View>
        
        <View style={styles.actions}>
            <Button  color={Color.primary}title ="view details" onPress ={props.onViewDetail}/>
            <Button  color ={Color.primary}title =" to cart"  onPress = {props.onAddToCart}/>
        </View>
        </View>
        </TouchableOpacity>
)
}

const styles= StyleSheet.create({
    product:{
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:300,
        margin:20
        
    },
    image:{
        width:'100%',
        height:'60%',
        borderRadius:10
    },
    title:{
     fontSize:18,
     marginVertical:3
    },
    price:{
        fontSize:14,
        color:'#888'

    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'25%',
        paddingHorizontal:20
        
    },
    detail:{
        alignItems:'center',
        height:'15%',
        padding:10
    }
})

export default ProductItem