import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={{padding: 10}}>
           <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      source={{
        uri: 'https://links.papareact.com/gzs'
      }}
       />
     </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop:30,
    }
});
