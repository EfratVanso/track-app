import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function TrackListScreen({navigation}) {
    return (
        <View>
            <Text>TrackListScreen</Text>
            <Button
            title="Go to track details"
            onPress={()=>{ navigation.navigate('TrackDetail')}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    
})

