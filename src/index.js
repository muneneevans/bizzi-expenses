import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//import redux store
import store, { persistor } from "./Store/configureStore";

//import the routes
import Routes from "./Screens/App";

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default Application;
