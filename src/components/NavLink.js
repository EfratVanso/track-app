import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import Spacer from './Spacer'

export default withNavigation(function NavLink({navigation, text, routeName}) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>
          {text}
          </Text>
        </Spacer>
      </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    link: {
        color: "blue",
      },
})
