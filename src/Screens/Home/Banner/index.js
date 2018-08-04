import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  bannerPrimaryText: {textAlign:"center"},
  expenseInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 250,
    maxWidth: 500
  },
  categoryButtonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  textInputContainer: {
    flex: 5,
    height: 40
  },
  completeButtonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  input: {}
});
const Banner = ({ theme }) => {
  let {
    bannerContainer,
    bannerPrimaryText,
    expenseInputContainer,
    textInputContainer,
    input,
    completeButtonContainer,
    categoryButtonContainer
  } = styles;
  return <View style={[bannerContainer, { backgroundColor: theme ? theme.primaryColor : "" }]}>
      <View>
        <Text
          style={[
            bannerPrimaryText,
          { fontSize: theme.largeFontSize, color: theme.primaryTextColor }
          ]}
        >
          Just Spent
        </Text>

        <View style={expenseInputContainer}>
          <View style={[categoryButtonContainer, { backgroundColor: theme.primaryBackgroundColor }]}>
            <Icon name="ios-basket" size={18} />
          </View>

          <View style={textInputContainer}>
            <TextInput style={[input, { backgroundColor: theme.primaryTextInputBackgroundColor, color: theme.primaryTextInputColor }]} />
          </View>

          <View style={[completeButtonContainer, { backgroundColor: theme.secondaryColor }]}>
            <Icon name="md-checkmark" size={24} />
          </View>
        </View>
      </View>
    </View>;
};

export default Banner;
