import React from 'react'
import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

export default function TrackCreateScreen() {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>create a Track</Text>
            <Map/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    
})
