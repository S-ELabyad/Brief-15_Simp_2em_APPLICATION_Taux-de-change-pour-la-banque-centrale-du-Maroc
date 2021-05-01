
import React , {useEffect, useState} from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import CurrencyRow from './src/components/CurrencyRow';

// import CurrencyRow from
const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=f53fe9471ba9196f2f4f84d030fd2c62';

const App = () => {

  const [currencyOptions, setcurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setcurrencyOptions([data.base, ...Object.keys(data.rates)])
    
    })
  }, []);

  return (
    <>
     <StatusBar barStyle="dark-content" />
    <View style ={styles.container}>
      <Text  style ={styles.text}>Welcom To our Banc to convert your Mony</Text>
    </View>
    <View style={styles.container}>
            <View>
            <TextInput 
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Number"
            />
            </View>
      
            <View  >
            <ModalDropdown 
            styles={styles.drop} 
            options={currencyOptions.map(data => data)}/>
            </View>
        </View>
     <View >
        <Text style={styles.equal} >=</Text>
        
      </View>  
      <View style={styles.container}>
            <View>
            <TextInput 
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Number"
            />
            </View>
      
            <View  >
            <ModalDropdown 
            styles={styles.drop} 
            options={['option 1', 'option 2']}/>
            </View>
        </View>

     </>

   
  )
}

export default App

const styles = StyleSheet.create({
 
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // marginVertical:'10%',
    minHeight:'6%',
    },
    text : {
      color : 'black',
      fontWeight:'bold',
      marginLeft : '15%',
      marginTop: '18%',
      fontSize : 25,
      color:'pink',
    

    },
    equal: {
      marginLeft:'50%',
      fontWeight:'bold',
      fontSize: 30,
     
      
    },
    input :{
      borderWidth:  2,
      borderStyle:  'solid',
      borderColor:  'black',
      borderRadius: 5,
      width:'45%',
      padding:9,
  },
  drop: {
   marginTop:12,
  }
})
