import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
const Banner = ({theme}) => {
  let { bannerContainer } = styles;
  return (
    <View style={[bannerContainer]}>
      <View>
        <Text>Banner</Text>
      </View>
    </View>
  );
};

export default Banner;
