import React, { Component } from "react";
import Icon from "react-native-vector-icons/dist/Ionicons";

import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

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

class ExpenseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        category: "default",
        amount: 0
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleSubmit = () => {
    alert(this.state.expense.amount);
  };

  handleCategoryClick = () => {
    alert("Categopry");
  };

  onAmountChanged = (amount) =>{
    this.setState({
      ...this.state,
      expense: {
        ...this.state.expense,
        amount: amount
      }
    });
  }

  render() {
    let {
      expenseInputContainer,
      textInputContainer,
      input,
      completeButtonContainer,
      categoryButtonContainer
    } = styles;
    let { theme } = this.props;
    return (
      <View style={expenseInputContainer}>
        <TouchableOpacity
          style={[
            categoryButtonContainer,
            { backgroundColor: theme.primaryBackgroundColor }
          ]}
          onPress={this.handleCategoryClick}
        >
          <Icon name="ios-basket" size={18} />
        </TouchableOpacity>

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
            keyboardType="number-pad"
            onChangeText={this.onAmountChanged}
          />
        </View>

        <TouchableOpacity
          style={[
            completeButtonContainer,
            { backgroundColor: theme.secondaryColor }
          ]}
          onPress={this.handleSubmit}
        >
          <Icon name="md-checkmark" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
}
({ theme }) => {};
export default ExpenseInput;
