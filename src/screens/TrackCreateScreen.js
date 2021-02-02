import '../_mockLocation'// fake location
import React, { useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as LocationContext}  from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

export default function TrackCreateScreen() {
    const {addLocation} = useContext(LocationContext)
    const [err] = useLocation(addLocation);
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>create a Track</Text>
            <Map/>
            {err? <Text>Please Enable Location Services</Text> : null}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    
})
