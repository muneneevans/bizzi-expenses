import * as actionTypes from "./actionTypes";

export const getCategories = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_CATEOGORIES_REQUESTED
    });

    //TODO get categories from db or store
  };
};
