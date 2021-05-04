import React from 'react';
import { StyleSheet,Image, Text, View ,TouchableOpacity } from 'react-native'

import colors from '../constants/colors';

export const Butoon = ({onPress, text}) => {
    return (
   <TouchableOpacity onPress={onPress} style={styles.button}>
       {/* <Image 
       source={require('../../assets/images/reverse.png')}
       style={styles.buttonIcon}
       resizeMode="contain" 
        /> */}

       <Text style = {styles.buttonText}>{text}</Text>
   </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button : {
        flexDirection:'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop:20,
    },
    buttonIcon :{
        width:30,
        height:30,
        marginRight:10,
    },
    buttonText:{
        color : colors.white,
        fontSize:16,
        }, 

})
