import * as actionTypes from "./actionTypes";
import { categorySchema } from "./schemas";
import Realm from "realm";
import { isNull, isEmpty } from "../../lib/utils";

const config = {
  schema: [categorySchema],
  schemaVersion: 1
};

const fetchLocalCategories = () => {
  //read from the database
  return Realm.open(config)
    .then(realm => {
      let localCategories = realm.objects("Category");
      return localCategories;
    })
    .catch(error => {
      return error;
    });
};

export const getCategories = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_CATEOGORIES_REQUESTED
    });

    //TODO get categories from db or store
    fetchLocalCategories()
      .then(categories => {
        if (isEmpty(categories)) {
          categories = [
            {
              name: "default",
              icon: "tv",
              color: "red"
            }
          ];
        }
        dispatch({
          type: actionTypes.GET_CATEOGORIES_SUCCEEDED,
          payload: { categories }
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_CATEOGORIES_FAILED,
          payload: error
        });
      });
  };
};
