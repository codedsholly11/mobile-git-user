
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import "./global.css"
import { useState } from 'react';

export default function App() {

  const [user, setUser] = useState('')
  const [username, setUsername] = useState('')
   async function fetchApi() {
    const baseurl = 'https://api.github.com/users'
    try {
      const response = await fetch(`${baseurl}/${username}`)
    .then((res)=>res.json())
    if(response){
      setUser(response)
    }
    } catch (error) {
      console.log(error)
      
    }

   }
  return (
    <View style={styles.all}>
      <View style={styles.container}>
      <Text>GITHUB USER</Text>
      <TextInput onChangeText={setUsername} value={username} style={styles.me}  placeholder='Enter username'/>
      <Pressable onPress={fetchApi} style={styles.but}>
        <Text >Fetch User</Text>
      </Pressable>

      {user &&
        <View style={styles.result}>
        <View style={styles.box}>
          <Image source={{Uri:user.avatar_url}}/>
        </View>
        <Text>{user.followers}</Text>
        <Text>{user.id}</Text>
        <Text>{user.location}</Text>
      </View>
      }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  me:{
    backgroundColor: '#dfdfdf',
    width:250,
    height:40,
    borderColor:'gray', 
    padding:7

  },

  all:{
    flex:1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:20,
    justifyContent:'center',
    
  },
   but:{
    backgroundColor:'#60e3d9',
    borderRadius:10,
    width:100,
    height:30,
    alignItems:'center',
    justifyContent:'center'
    
   },

   box:{
    width:200
   },

    result:{
      borderWidth:1,
      borderRadius:4,
      width:250,
      padding:15

    },

    container:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      borderWidth:2,
      gap:30,
      width:320,
      height:450,
      borderRadius:10,
      paddingTop:20

    }





})


