import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
export  function HomePage({navigation}) {
  return (
    <View  style={styles.container}>
      <Text style={{textAlign:"center",fontSize:30 }}>welcome in home page</Text>
      <Button title='go to movie page'
      onPress={()=>{
        navigation.navigate("moviePage")
      }}
      
      />


      <Button title='go to camera'
      onPress={()=>{
        navigation.navigate("camera")
      }}
      
      />

<Button title='go to camera picker'
      onPress={()=>{
        navigation.navigate("imgPicker")
      }}
      
      />

<Button title='screen capture'
      onPress={()=>{
        navigation.navigate("screenCapture")
      }}
      
      />

<Button title='screen brightness'
      onPress={()=>{
        navigation.navigate("brightness")
      }}
      
      />
      <Button title='my contact'
      onPress={()=>{
        navigation.navigate("contact")
      }}
      
      />

<Button title='my location'
      onPress={()=>{
        navigation.navigate("location")
      }}
      
      />

<Button title='my calender'
      onPress={()=>{
        navigation.navigate("calender")
      }}
      
      />

<Button title='Battery information'
      onPress={()=>{
        navigation.navigate("battery")
      }}
      
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'space-around',
      padding:30,
      marginTop:0
    },
  });
