import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

//import screens
import Banner from "./Banner";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    
  },
  banner: {
    flex: 1,
    elevation:2
  },
  content: {
    flex: 2,
    backgroundColor: "white"
  }
});

const Home = () => {
  let { homeContainer, banner, content } = styles;
  return (
      <ScrollView contentContainerStyle={homeContainer}>
      <View style={banner}>
        <Banner />
      </View>
      <View style={content}>
        <Banner />
      </View>
    </ScrollView>
  );
};

export default Home;
