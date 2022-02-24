import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";

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
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.navOptionsStyle} >
          <View>
           <Image
           style={{ width: 120, height: 120, resizeMode: 'contain' }}
            source={{
                uri: item.image
            }}
           />
           <Text style={{marginTop: 2, fontWeight: "bold"}}>{item.title}</Text>
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
        margin: 2,
        width: 175,
        height: 175
    }
});
