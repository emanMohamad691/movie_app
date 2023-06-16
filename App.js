import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './component/homePage';
import { MoviePage } from './component/moviePage';
import { MyCamera } from './component/MyCamera';

// import {HomePage} from './component/homePage';
import { MyImgePicker } from './component/myImgePicker';
import { Myscreencapture } from './component/myscreencapture';
import { MyAppbrightness } from './component/myAPPbrightness';
import { Mycontact } from './component/mycontact';
import { Mylocation } from './component/mylocation';
import { Mycalender } from './component/mycalender';
import {  MyBattery } from './component/battery';
import { Details } from './component/details';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="moviePage" component={MoviePage} />
          <Stack.Screen name="camera" component={MyCamera} />
          <Stack.Screen name="imgPicker" component={MyImgePicker} />
          <Stack.Screen name="screenCapture" component={Myscreencapture} />
          <Stack.Screen name="brightness" component={MyAppbrightness} />
          <Stack.Screen name="contact" component={Mycontact} />
          <Stack.Screen name="location" component={Mylocation} />
          <Stack.Screen name="calender" component={Mycalender} />
          <Stack.Screen name="battery" component={MyBattery} />
          <Stack.Screen name="details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
     




   
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
