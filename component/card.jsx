import { Avatar } from '@react-native-material/core';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.container}>

      {/* create movie image */}
      <Avatar image={{ uri: props.imageLink }} />


      {/* create movie text */}
      <Text style={{ padding: 10 }}>{props.mvName}</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    marginTop: 10,
    padding: 10

  }
})