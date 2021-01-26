import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <AuthForm
            headerText="Sign In to Your Account"
            errorMessage=""
            onSubmit={()=>{}}
            submitButtonText="Sign In"
            />
            <NavLink text="Don't have an account? Sign up instead"
            routeName="Signup"
            />
        </View>
    )
}
SignInScreen.navigationOptions = () => {
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