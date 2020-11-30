import React from 'react'

import  {View,Text,StyleSheet,Button} from 'react-native'

const OrderItem = (props) =>{
    return(
        <View>
            <View>
                <Text>${props.amount.toFixed(2)}</Text>
                <Text>
                    {props.date
                    }
                </Text>
                
            </View>
            <Button title="Show Detail"/>s
        </View>
    )

}

export default OrderItem