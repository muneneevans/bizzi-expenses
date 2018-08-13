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
  bannerPrimaryText: { textAlign: "center", marginBottom: 20 },
  bannerSecondaryText: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center"
  }
});
const Banner = ({ theme, categories }) => {
  let {
    bannerContainer,
    bannerContent,
    bannerPrimaryText,
    bannerSecondaryText
  } = styles;
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
            {
              color: theme.primaryTextColor,
              fontSize: theme.mediumFontSize,
              fontFamily: theme.primaryFontFamily
            }
          ]}
        >
          Just spent
        </Text>

        <ExpenseInput theme={theme} categories={categories} />
        <Text
          style={[
            bannerSecondaryText,
            {
              fontSize: theme.tinyFontSize,
              color: theme.secondaryTextColor,
              fontFamily: theme.primaryFontFamily
            }
          ]}
        >
          quickly record any expense you have incurred
        </Text>
      </View>
    </View>
  );
};

export default Banner;
