import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';

export  function Mycontact() {
  // const [mycon,setmycon]=useState()
  const [data,setdata]=useState({})
useEffect(() => {
  (async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      setdata  (await Contacts.getContactsAsync({}).then((res)=>{return res.data}))

      console.log(data)

      // if (data.length > 0) {
      //   for(let i=0 ;i<10;i++){
      //     setmycon(data[i].firstName)
      //     console.log(mycon)
      //   }
        
        
      // }
    }
  })();
}, []);

return (
<View style={styles.container}>
  <ScrollView>
{/* <Text>{mycon}</Text> */}
{data.map((item,index)=>{
   
  return(
   
    <Text
     key={index}
    >{item.firstName}    {item.phoneNumbers[0].number}</Text>
    
  
    
  )
})}
{/* <Text>{contact.phoneNumbers[0]}</Text> */}
</ScrollView>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
// alignItems: 'center',
justifyContent: 'center',
padding:30,
},
});
