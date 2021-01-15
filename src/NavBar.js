import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const NavBar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 9
  },
  text: {
    color: "white",
    fontSize: 18
  }
})