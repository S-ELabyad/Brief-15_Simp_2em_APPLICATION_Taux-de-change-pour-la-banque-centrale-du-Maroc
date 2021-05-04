import React , {useState , useContext} from 'react';
import { StyleSheet, Text, View, StatusBar,Image, ScrollView ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import {format} from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
 
import {ConversionInput} from '../components/ConversionInput';
import {Butoon} from '../components/Butoon';
import {KeyboardSpacer} from '../components/KeyboardSpacer';
import {ConversionContext}  from '../util/ConversionContext';


export default  ({navigation}) => {

    const [value, setValue] = useState('100');
    const { baseCurrency, quoteCurrency,swapCurrency, date, rates,isLoading} = useContext(ConversionContext);
    
    
    const conversionRate =rates[quoteCurrency];
    

    const [scrollEnabled, setScrollEnabled] = useState(false);

  
    return (
        <View style={styles.container}>

          <ScrollView scrollEnabled={scrollEnabled} >

          <StatusBar barStyle="light-content"backgroundColor={colors.blue} />
         
            <SafeAreaView style={styles.header}>
               <TouchableOpacity onPress={() => navigation.push("Options") } >
                <Entypo name="cog" size={32} color={colors.white} />
               </TouchableOpacity> 
            </SafeAreaView>


          <View style={styles.content}>

          <View style={styles.logoContainer}>
            {/* <Image  source={require('../../assets/images/bank.png')} style={styles.logo} /> */}
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

        {isLoading ?(
            <ActivityIndicator color={colors.white} size="large" />
        ):(
            <>
              <ConversionInput 
              text ={baseCurrency}
              value={value}
              onButtonPress = {() => 
                  navigation.push('CurrencyList',
                   {
                      title : 'Base Currency',
                      isBaseCurrency : true,
                  })
              }
              onChangeText = {(text) => setValue(text)}
              keyboardType = "numeric"
          />
            <ConversionInput 
              text ={quoteCurrency}
              value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
              onButtonPress = {() =>
                   navigation.push('CurrencyList', 
                   {
                       title : 'Quote Currency' ,
                  
                      isBaseCurrency:false,
                  })
              }
              editable={false}
            
          />
  
              <Text style={styles.text}>
             { `  ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date && format(new Date(date), 'MMMM do ,yyyy')} .`}
              </Text>
  
              <Butoon  text="Reverse Currencies" onPress={()  => swapCurrency()} />
        </>
        )}

       
            
            <KeyboardSpacer 
            onToggle={(keyboardIsVisible) => 
            setScrollEnabled(keyboardIsVisible)} />

            </View>
            </ScrollView> 
        </View>
    );
};



const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.blue,
        flex:1,
        // justifyContent:'center',
      
       
    },
  
    logo :  {
        // marginBottom : 280,
        
    },
    logoContainer : {
        justifyContent:'center',
        alignItems:'center',
        
    },
    textHeader :{
        color:colors.white,
        fontWeight : 'bold',
        fontSize :25,
        marginVertical : 20,
        textAlign : 'center' 
   },
    text:{
        color:colors.white,
        textAlign : 'center' ,
        fontSize :13, 
    },
    header : {
        alignItems:'flex-end',
        marginHorizontal : 20,
    },
})
