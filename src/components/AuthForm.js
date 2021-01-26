import React,{useState}  from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from "react-native-elements";
import Spacer from './Spacer';

export default function AuthForm({headerText, errorMessage, onSubmit, submitButtonText}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return (
        <View>
            <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword} //same
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMsg}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
        </View>
    )
}
const styles = StyleSheet.create({
    
  errorMsg: {
    fontSize: 16,
    color: "red",
    marginHorizontal: 15,
    marginTop: 15,
  }
})
