import React, { useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export default function Map() {
  const {  state: { currentLocation } } = useContext(LocationContext);
  console.log(currentLocation);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        // latitude: 31.9434797,
        // longitude: 35.2287553,
        ...currentLocation.coords, //latitude &  longitude
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{ //move the map according to the changing current location
        ...currentLocation.coords, //latitude &  longitude
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    ></MapView>
  );
}
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
