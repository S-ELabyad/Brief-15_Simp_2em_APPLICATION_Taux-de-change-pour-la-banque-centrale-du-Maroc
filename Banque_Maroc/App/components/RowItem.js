import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constants/colors';

export const RowItem = ({rightIcon, text, onPress}) => {
    return (
        
        <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {rightIcon}
       </TouchableOpacity>
    );
};

export const RowSeparatr = () =>  <View  style={ styles.separator} />


const styles = StyleSheet.create({
    row : {
        paddingHorizontal:20,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent : 'space-between',
      
        
    },
    text : {
        fontSize: 16,
        color: colors.text,
    },
    separator : {
        backgroundColor : colors.border ,
        height :StyleSheet.hairlineWidth,
        marginLeft : 20,

    },
})
