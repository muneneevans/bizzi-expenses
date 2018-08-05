import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";

const initialState = {
  categories: [
    {
      name: "default",
      icon: "truck",
      color: "red"
    }
  ],
  _getCaategoriesProcess: { status: processTypes.IDLE }
};

export const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CATEOGORIES_REQUESTED:
      return {
        ...state,
        _getCaategoriesProcess: { status: processTypes.SUCCESS }
      };

    default:
      return state;
  }
};

export default categoriesReducer;
