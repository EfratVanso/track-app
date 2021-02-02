import React from "react";
import { View , StyleSheet} from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

export default function TrackForm() {
  return (
    <View>
      <Spacer>
        <Input placeholder="Enter Track Name" style={styles.placeholder}/>
        <Button title="Start Recording" />
      </Spacer>
    </View>
  );
}
const styles = StyleSheet.create({
    placeholder:{
        textAlign:'center'
    }
})
