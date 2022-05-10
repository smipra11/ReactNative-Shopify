import React, { useState } from 'react'

import { View, Text, StyleSheet, Button } from 'react-native'
import CartItem from "./cartItem"

const OrderItem = (props) => {
    const [showDetail, setshowDetail] = useState(false)
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>


            </View>
            
        </View>
    )

}

export default OrderItem

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'

    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'

    },
    totalAmount: {
        fontSize: 16

    },
    date: {
        fontSize: 16,
        color: '#888'

    }

})
