import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";


//import screens
import Banner from "./Banner";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
  banner: {
    height: 200,
    elevation: 7,
    alignItems: "stretch"
  },
  content: {
    flex: 2,
    backgroundColor: "white"
  }
});

const Home = ({ screenProps }) => {
  let { homeContainer, banner, content } = styles;
  return (
    <ScrollView contentContainerStyle={homeContainer}>
      <View style={banner}>
        <Banner theme={screenProps.theme} />
      </View>
      <View style={content}>{/* <Banner theme={screenProps.theme} /> */}</View>
    </ScrollView>
  );
};

export default Home;
