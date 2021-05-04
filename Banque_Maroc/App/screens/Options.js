import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet ,ScrollView , Linking, Alert} from 'react-native';
import colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import {RowItem, RowSeparatr} from '../components/RowItem';



// linking
const openUrl = (url) => {
    Linking.openURL(url).catch(() => {
        Alert.alert('Sorry' , 'Please');
    })
}


export default () => {
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <SafeAreaView style={{ flex:1}} >
            <ScrollView >

            <RowItem 
                text = "thems"
                onPress = {() => alert("todo!")}
                rightIcon ={
                    <Entypo name="chevron-right" size={20} color={colors.blue} />
                }
            />

            <RowSeparatr />

      

            <RowItem 
                text = "thems"
                onPress = {() => 
                 openUrl("https://www.linkedin.com/feed/")
                }
                rightIcon ={
                    <Entypo name="export" size={20} color={colors.blue} />
                }
            />

     
            <RowSeparatr />   
            <RowItem 
                text = "Example"
                onPress = {() =>
                     openUrl("https://github.com/S-ELabyad/Brief-15_Simp_2em_APPLICATION_Taux-de-change-pour-la-banque-centrale-du-Maroc")}
                rightIcon ={
                    <Entypo name="export" size={20} color={colors.blue} />
                }
            />
     
    

    </ScrollView>
        </SafeAreaView>
       </>

    )
}



const styles = StyleSheet.create({
  
})
