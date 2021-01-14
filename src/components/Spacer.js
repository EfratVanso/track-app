import React from 'react'
import { View, StyleSheet } from 'react-native'
import SignUpScreen from '../screens/SignUpScreen'

export default function Spacer({children}) {
    return (
        <View style={styles.spacer}>
           {children}
        </View>
    )
};

const styles = StyleSheet.create({
    spacer:{
        margin:15
    }
})
