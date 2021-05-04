import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity , TextInput} from 'react-native'
import colors from '../constants/colors';


export const ConversionInput = ({text, onButtonPress , ...props }) => {
    const containerStyles = [styles.container];

    if(props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
         <TouchableOpacity onPress={onButtonPress} style={styles.button}>
             <Text style={styles.buttonText}>{text}</Text>
         </TouchableOpacity>

         <TextInput 
            style={styles.input} {...props} />


        </View>

     
    )
}


const styles = StyleSheet.create({
    container :{
        backgroundColor: colors.white,
        marginHorizontal:20,
        marginVertical:10,
        borderRadius: 5, 
        flexDirection:'row',     
    },
    containerDisabled : {
        // backgroundColor : colors.offWhite,
        backgroundColor : 'red',
    },
    button :{
        backgroundColor : colors.white,
        padding: 15,
        borderRightColor:colors.border,
        borderRightWidth: 1,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
    },
    buttonText :{
        fontSize:18,
        color:colors.black,
        fontWeight: 'bold',
        
    },
    input:{
        // backgroundColor: colors.pink,
        flex:1,
        padding:10,
        color : colors.textLight
    },
})
