import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Platform, ScrollView } from 'react-native';
import * as Calendar from 'expo-calendar';

export  function Mycalender() {
  const [calender,setcalender]=useState([])
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
        .then((res)=>{return res})
        console.log('Here are all your calendars:');
        setcalender(calendars),
        console.log(calender);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
     {calender.map((item,index)=>{
      return( 
        <View key={index}>
          <Text style={{color:"red", fontSize:20,padding:10}} >Title of claender:</Text>
          <Text style={{ fontSize:15,padding:10}} > {item.title}</Text>
          <Text style={{color:"orange", fontSize:20,padding:10}} >OwnerAccount of claender:</Text>
          <Text style={{ fontSize:15,padding:10}}> {item.ownerAccount}</Text>
          
        </View>
      )
     })}
      <Button title="Create a new calendar" onPress={createCalendar} />
      </ScrollView>
    </View>
  );
}

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'created by eman',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'eman',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
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
