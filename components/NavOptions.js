import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import {Icon} from "react-native-elements"
import { useNavigation } from '@react-navigation/native';
import { navigate } from './../node_modules/@react-navigation/routers/src/CommonActions';

const data = [
  {
    id: 123,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 546,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
    const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.navOptionsStyle} onPress={()=> navigation.navigate(item.screen)} >
          <View >
           <Image
           style={{ width: 120, height: 120, resizeMode: 'contain' }}
            source={{
                uri: item.image
            }}
           />
           <Text style={{marginTop: 2, fontWeight: "bold"}}>{item.title}</Text>
           <Icon style={styles.iconStyle} name="arrowright" color="white" type="antdesign" />
          </View>
          
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
    navOptionsStyle: {
        padding: 2,
        paddingLeft: 6,
        paddingBottom: 8,
        paddingTop: 4,
        backgroundColor: "#d3d3d3",
        margin: 10,
        width: 170,
        height: 215,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    iconStyle: {
        width: 35,
        height: 35,
        backgroundColor: "black",
        borderRadius: 35/2,
        padding: 2,
        alignItems: "center",
        justifyContent: "center",

    }
});
