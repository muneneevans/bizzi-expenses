import React, { Component } from "react";
import Icon from "react-native-vector-icons/dist/Feather";

import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  expenseInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 250,
    maxWidth: 500,
    borderRadius: 100
  },
  categoryButtonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2
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
    height: 40,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2
  },
  input: {}
});
class ExpenseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        category: this.props.categories[0],
        amount: 0
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleSubmit = () => {
    alert(JSON.stringify(this.state.expense));
  };

  handleCategoryClick = text => {
    alert(text);
  };

  onAmountChanged = amount => {
    this.setState({
      ...this.state,
      expense: {
        ...this.state.expense,
        amount: amount
      }
    });
  };

  render() {
    let {
      expenseInputContainer,
      textInputContainer,
      input,
      completeButtonContainer,
      categoryButtonContainer
    } = styles;
    let { theme, categories } = this.props;
    let defaultCategory = categories[0];
    return (
      <View style={expenseInputContainer}>
        <TouchableOpacity
          style={[
            categoryButtonContainer,
            { backgroundColor: theme.primaryBackgroundColor }
          ]}
          onPress={() => {
            this.handleCategoryClick(defaultCategory.name);
          }}
        >
          <Icon
            name={defaultCategory.icon}
            size={18}
            color={defaultCategory.color}
          />
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
            onSubmitEditing={this.handleSubmit}
          />
        </View>

        <TouchableOpacity
          style={[
            completeButtonContainer,
            { backgroundColor: theme.secondaryColor }
          ]}
          onPress={this.handleSubmit}
        >
          <Icon name="check" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
}
({ theme }) => {};
export default ExpenseInput;
