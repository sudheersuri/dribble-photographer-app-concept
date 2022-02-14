import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import camera from '../assets/images/camera.png';
import { useNavigation } from '@react-navigation/native';
import buttonbackground from '../assets/images/buttonbackground.png';

export const WelcomeScreen = () => {
  const nav = useNavigation();
  return (
          <View style={styles.container}>
                <View style={styles.imageTextContainer}>
                  <Image
                  style={styles.cameraimage}
                  source={camera}>
                  </Image>
                  <Text style={[styles.textstyle,{fontSize:50,marginTop:30, opacity:0.9}]}>Capture every precious moment with us</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => nav.navigate("home")}>
                   <View style={styles.ball}></View>
                   <Text style={[styles.textstyle,{fontSize:30}]}>Get Started</Text></TouchableOpacity>
                </View>
          </View>);
}

const styles = StyleSheet.create({
  textstyle:{
  fontFamily:'branding-sf', 
  letterSpacing:2, 
  color:"white", 
  textAlign:"center",
  },
  ball:{
    position:"absolute",
    backgroundColor:"#FFD44A",
    left:100,
    top:-10,
    borderRadius:50,
    height:50,
    width:50
  },
  container: {
    flex:1,
    backgroundColor:"#57A2AF",
  },
  imageTextContainer:{
    flex:8, 
    marginTop:-150,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonContainer:{
    flex:1,
  }
});