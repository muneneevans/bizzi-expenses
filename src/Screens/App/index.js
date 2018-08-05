import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";

//import screens
import Home from "../Home";

const theme = {
  primaryColor: "#4CAF50",
  secondaryColor: "#FFD600",

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
    return <HomeRoute screenProps={{theme}} />;
  }
}

export default App;
