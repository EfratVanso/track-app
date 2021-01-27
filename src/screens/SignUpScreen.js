import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

export default function SignUpScreen({ navigation }) {
  const { state, signup, clearErrorMsg, tryLocalSignin } = useContext(AuthContext);

  //when open the app,check if there is signin details saved before
  useEffect(()=>{
    tryLocalSignin();
  },[]);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMsg} />
      <AuthForm
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        // OnSubmit={({email,password})=>signup({email,password})}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
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
