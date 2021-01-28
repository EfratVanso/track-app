import React, {useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import {requestPermissionsAsync} from 'expo-location'

export default function TrackCreateScreen() {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
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
