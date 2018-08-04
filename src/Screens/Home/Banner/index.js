import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

import ExpenseInput from "../ExpenseInput";

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25
  },
  bannerContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  bannerPrimaryText: { textAlign: "center" }
});
const Banner = ({ theme }) => {
  let { bannerContainer, bannerContent, bannerPrimaryText } = styles;
  return (
    <View
      style={[
        bannerContainer,
        { backgroundColor: theme ? theme.primaryColor : "" }
      ]}
    >
      <View style={bannerContent}>
        <Text
          style={[
            bannerPrimaryText,
            { color: theme.primaryTextColor, fontSize: theme.largeFontSize }
          ]}
        >
          Just spent
        </Text>

        <ExpenseInput theme={theme} />
      </View>
    </View>
  );
};

export default Banner;
