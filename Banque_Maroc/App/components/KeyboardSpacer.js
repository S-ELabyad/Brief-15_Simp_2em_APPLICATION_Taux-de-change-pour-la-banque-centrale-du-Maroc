import React , {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Keyboard, Dimensions } from 'react-native'

export const KeyboardSpacer = ({onToggle}) => {
    const [keyboardSpace, setkeyboardSpace] = useState(0);

     useEffect(() => {
    
  const showListener= Keyboard.addListener('keyboardDidShow' , (event) => {
      const screenHight = Dimensions.get("window").height;
      const endY = event.endCoordinates.screenY;

      setkeyboardSpace(screenHight - endY * 20);
       onToggle(true);
        });
   const hideLidtener =  Keyboard.addListener('keyboardDidHide' , () => {
   
    setkeyboardSpace(0);
    onToggle(false);
    });

        return () => {
            showListener.remove();
            hideLidtener.remove();
        };
      
    }, [])

    return (
        <View style={[styles.container , {height:keyboardSpace}]}>
            <Text></Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container : {
        left :0,
        right : 0,
        bottom:0,
    }
})
