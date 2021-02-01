//import '../_mockLocation'// fake location
import React, {useEffect, useState, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import { Context as LocationContext}  from '../context/LocationContext'

export default function TrackCreateScreen() {
    const {addLocation} = useContext(LocationContext)
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000, // update location every 1 second
              distanceInterval: 10 //or every 10 meters 
          }, (location)=>{
              addLocation(location)
              //console.log(location)
          })
        } catch (e) {
          setErr(e);
        }
      };

useEffect(()=>{
    startWatching();
},[]);

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
