import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";

//import screens
import Home from "../Home";

const theme = {
  primaryColor: "#4CAF50",
  scondaryColor: "#FFD600"
};

const HomeRoute = createStackNavigator({
  Home: {
    screen: Home,
    header: null,
    navigationOptions: {
      theme: theme,
      header: null
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeRoute  />;
  }
}

export default App;
