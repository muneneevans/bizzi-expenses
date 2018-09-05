import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { theme, colorOptions } from "../../../Store/Configuration/theme";
import Icon from "react-native-vector-icons/dist/Feather";

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    paddingTop: 15,
    paddingBottom: 15,
    padding: 5,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  labelText: {
    fontFamily: theme.PRIMARY_FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MASSIVE + 15
  }
});

const expenseInputStyles = StyleSheet.create({
  parentContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  expenseTextInputBox: {
    fontFamily: theme.PRIMARY_FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MASSIVE + 15,
    padding: 0,
    color: theme.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryContainer: {}
});
const Header = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.labelText}>Just spent</Text>
      <View style={expenseInputStyles.parentContainer}>
        <TextInput
          style={expenseInputStyles.expenseTextInputBox}
          placeholderTextColor={theme.PRIMARY_COLOR}
          keyboardType="number-pad"
        >50</TextInput>
        <Text style={expenseInputStyles.expenseTextInputBox}>$</Text>
      </View>
      <Text style={styles.labelText}>on</Text>
      <View style={expenseInputStyles.parentContainer}>
        <Icon
          name={"film"}
          size={theme.FONT_SIZE_MASSIVE + 15}
          color={theme.PRIMARY_COLOR}
        />
        <Text style={expenseInputStyles.expenseTextInputBox}>coffee</Text>
      </View>
    </View>
  );
};

export default Header;
