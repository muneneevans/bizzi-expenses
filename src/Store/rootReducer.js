import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import all reducers


const persistConfig = {
  key: "root",
  blacklist: ["auth", "orders", "outlet"],
  storage
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({

  })
);

export default rootReducer;
