import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { set } from "react-native-reanimated";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize= "none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword} //same 
        autoCapitalize= "none"
        autoCorrect={false}
      />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
}
SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
