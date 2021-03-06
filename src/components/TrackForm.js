import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";

export default function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length)
  return (
    <View>
      <Spacer>
        <Input
          value={name}
          onChangeText={null}
          placeholder="Enter Track Name"
          style={styles.placeholder}
        />
        {recording 
        ?<Button title="Stop" onPress={stopRecording} />
        :
          <Button title="Start Recording" onPress={startRecording} />
        }
      </Spacer>
    </View>
  );
}
const styles = StyleSheet.create({
  placeholder: {
    textAlign: "center",
  },
});
