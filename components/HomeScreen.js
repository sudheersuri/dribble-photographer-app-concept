import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity, FlatList} from 'react-native';
import qstudio from '../assets/images/qstudio.png';
import cover from '../assets/images/cover.png';
import couple from '../assets/images/couple.png';
import girl from '../assets/images/girl.png';
import cake from '../assets/images/cake.png';

const DATA = [
  {
    id: 1,
    name: "Wedding",
    backgroundColor:"#FFE6F1",
    imagesrc:couple
  },
  {
    id: 2,
    name: "Birthday",
    backgroundColor:"#DBE4FE",
    imagesrc:cake
  },
  {
    id: 3,
    name: "Fashion",
    backgroundColor:"#FFF3CE",
    imagesrc:girl
  },
];


export const HomeScreen = () => {
  const menuItem = ({ item }) => {
   
    return (
      <View style={{flexDirection:"row", backgroundColor:item.backgroundColor,alignItems:"center",marginBottom:15,borderRadius:10,padding:10}}>
          <Image
              style={{marginLeft:20}}
              source={item.imagesrc}>
          </Image>
          <Text style={[styles.textstyle,{fontSize:30,marginLeft:20}]}>{item.name}</Text>
      </View>
    );
  };
  return (
          <View style={styles.container}>
                <View style={styles.coverContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.coverImage}
                      source={qstudio}>
                    </Image>
                  </View>
                  <View style={{flex:3}}>
                    <Image
                      style={[styles.coverImage,{marginLeft:20}]}
                      source={cover}>
                    </Image>
                  </View>
                </View>
                <View style={styles.listContainer}>
                  <FlatList
                    data={DATA}
                    renderItem={menuItem}
                    keyExtractor={(item) => item.id}
                  />
                </View>
          </View>);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white"
  },
  imageContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  coverImage:{
    marginTop:50
  },
  textstyle:{
    fontFamily:'branding-sf', 
    letterSpacing:2, 
    textAlign:"center",
    opacity:0.7
  },
  coverContainer:{
    backgroundColor:"#E9F8FF",
    justifyContent:"space-between",
    flex:1,
    borderRadius:20,
    margin:10
  },
  listContainer:{
    flex:1,
    margin:10,
  }
});