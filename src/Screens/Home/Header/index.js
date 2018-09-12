import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { theme } from "../../../Store/Configuration/theme";
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
  expenseInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  expenseTextInputBox: {
    fontFamily: theme.PRIMARY_FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MASSIVE + 15,
    padding: 0,
    color: theme.PRIMARY_COLOR,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  categoryContainer: {},
  chipsContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap"
  },
  chip: {
    margin: 3,
    borderRadius: 50,
    borderWidth: 1,
    minWidth: 50,
    padding: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderColor: "#858585",
    color: "#858585"
  }
});

const expenseValues = [10, 50, 150, 200, 250, 300, 400, 500];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 50
    };

    this.handleChipTap = this.handleChipTap.bind(this)
  }
  handleChipTap = amount => {
    this.setState({
      ...this.state,
      amount
    });
  };

  render() {
    return (
      <View style={styles.parentContainer}>
        <Text style={styles.labelText}>Just spent</Text>
        <View style={expenseInputStyles.parentContainer}>
          <View style={expenseInputStyles.expenseInputContainer}>
            <TextInput
              style={expenseInputStyles.expenseTextInputBox}
              placeholderTextColor={theme.PRIMARY_COLOR}
              keyboardType="number-pad"
            >
              {this.state.amount}
            </TextInput>
            <Text style={expenseInputStyles.expenseTextInputBox}>$</Text>
          </View>
          <View style={expenseInputStyles.chipsContainer}>
            {expenseValues.map((value, index) => (
              <TouchableOpacity style={expenseInputStyles.chip} key={index} onPress={()=>{this.handleChipTap(value)}}>
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  }
}

export default Header;
