import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import all reducers
import categoriesReducer from "./Categories/reducers";

const persistConfig = {
  key: "root",
  blacklist: ["auth", "categories"],
  storage
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    categories: categoriesReducer
  })
);

export default rootReducer;
