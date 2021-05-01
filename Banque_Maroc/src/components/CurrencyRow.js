import React, { useState } from 'react'
import ModalDropdown from 'react-native-modal-dropdown';
import SelectBox from 'react-native-multi-selectbox'
import RNPickerSelect from 'react-native-picker-select';
import { Picker, StyleSheet, Text, TextInput, View,} from 'react-native'

const CurrencyRow = (props) => {
    
    
    return (
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
    )
}

export default CurrencyRow

const styles = StyleSheet.create({
    container:{
       
       flex:1,
        justifyContent:'center',
        alignItems:'center',
        // marginVertical:'10%',
        minHeight:'6%',
      
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
