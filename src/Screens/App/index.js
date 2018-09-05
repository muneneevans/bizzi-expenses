import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";

//import screens
import Home from "../Home";

export const theme = {
  primaryColor: "#c32727",
  secondaryColor: "#FFD600",

  primaryFontFamily: "VarelaRound-Regular",

  primaryBackgroundColor: "#ffffff",
  secondaryBackgroundColor: "#000000",

  primaryTextBackgroundColor: "#ffffff",
  secondaryTextBackgroundColor: "#000000",
  primaryTextColor: "#000000",
  secondaryTextColor: "#ffffff",

  primaryTextInputBackgroundColor: "#ffffff",
  secondaryTextInputBackgroundColor: "#000000",
  primaryTextInputColor: "#000000",
  secondaryTextInputColor: "#ffffff",

  massiveFontSize: 54,
  largeFontSize: 44,
  mediumFontSize: 34,
  defaultFontSize: 24,
  smallFontSize: 24,
  tinyFontSize: 12
};



export const colorOptions = {
  orange: {
    faint: "#FFF3E0",
    light: "#FFB74D",
    medium: "#FF9800",
    bold: "#EF6C00"
  },
  red: {
    faint: "#FFEBEE",
    light: "#E57373",
    medium: "#F44336",
    bold: "#C62828"
  },
  blue: {
    faint: "#E3F2FD",
    light: "#64B5F6",
    medium: "#2196F3",
    bold: "#1565C0"
  },
  cyan: {
    faint: "#E0F7FA",
    light: "#4DD0E1",
    medium: "#00BCD4",
    bold: "#00838F"
  },
  teal: {
    faint: "#E0F2F1",
    light: "#4DB6AC",
    medium: "#009688",
    bold: "#00695C"
  },
  gray: {
    faint: "#FAFAFA",
    light: "#E0E0E0",
    medium: "#9E9E9E",
    bold: "#424242"
  }
};


const HomeRoute = createStackNavigator({
  Home: {
    screen: Home,
    header: null,
    navigationOptions: {
      header: null
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeRoute screenProps={{ theme , colorOptions}} />;
  }
}

export default App;
