import React from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

export default function TrackForm() {
  return (
    <View>
      <Spacer>
        <Input placeholder="Enter Track Name" style={{textAlign:'center'}}/>
        <Button title="Start Recording" />
      </Spacer>
    </View>
  );
}
