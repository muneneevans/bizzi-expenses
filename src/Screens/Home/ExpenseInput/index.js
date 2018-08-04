import React from "react";
import Icon from "react-native-vector-icons/dist/Ionicons";

import { View, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  expenseInputContainer: {    
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

const ExpenseInput = ({theme}) => {
  let {
    expenseInputContainer,
    textInputContainer,
    input,
    completeButtonContainer,
    categoryButtonContainer
  } = styles;
  return (
    <View style={expenseInputContainer}>
      <View
        style={[
          categoryButtonContainer,
          { backgroundColor: theme.primaryBackgroundColor }
        ]}
      >
        <Icon name="ios-basket" size={18} />
      </View>

      <View style={textInputContainer}>
        <TextInput
          style={[
            input,
            {
              backgroundColor: theme.primaryTextInputBackgroundColor,
              color: theme.primaryTextInputColor
            }
          ]}
          placeholder="0$"
        />
      </View>

      <View
        style={[
          completeButtonContainer,
          { backgroundColor: theme.secondaryColor }
        ]}
      >
        <Icon name="md-checkmark" size={24} />
      </View>
    </View>
  );
};
export default ExpenseInput;
