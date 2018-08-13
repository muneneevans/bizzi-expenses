import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";

const initialState = {
  categories: [
    {
      name: "default",
      icon: "tv",
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
        _getCaategoriesProcess: { status: processTypes.PROCESSING }
      };

    case actionTypes.GET_CATEOGORIES_SUCCEEDED:
      return {
        ...state,
        _getCaategoriesProcess: {
          status: processTypes.SUCCESS
        },
        categories: action.payload.categories
      };

    default:
      return state;
  }
};

export default categoriesReducer;
