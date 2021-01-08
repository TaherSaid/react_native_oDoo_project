import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Axios from 'axios'
import { View, FlatList,StyleSheet,Text } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'



const DeliveryPartner = ({ navigation }) => {

  let ip="192.168.0.54"
  const [contact , setContact] = useState([]);

  const getContact =async()=> {
   await Axios.get('http://192.168.43.239/odoo_2/readAllLivraison.php', {
      headers:{
        "Content-Type" :"application/json"
      }
    }).then(response => {
      setContact(response.data.map(v => v));
      console.log('contact => ' , response.data)
    }).catch(error => {
      console.log("\n", error.response)
    });
  }
  
  useEffect(() => {
    getContact()
  }, []);
  
return (
  <Background>
        <View style={{flex: 1, flexDirection: 'column'}}>
        <View >

    
    <Header></Header>
        </View>
          <FlatList
        data={contact}
        renderItem={({item, index}) => { 
          return (
                <View style={styles.item}>
                <Text style={styles.title}>delivery Id : {item.id}</Text>
                <Text style={styles.title}>Name : {item.name}</Text>
                <Text style={styles.title}>scheduled date : {item.scheduled_date}</Text>
              </View>
           
        ) 
      }}
      />

      </View>
      <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      }
    >
      HOME
    </Button>
   </Background>
);
}
const styles = StyleSheet.create({
  item: {
  backgroundColor: '#D8E5E2',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  width: '200%'
  
},
title: {
  fontSize:15,
},
});
export default DeliveryPartner
