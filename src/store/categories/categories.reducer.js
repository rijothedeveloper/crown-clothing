import {
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  SET_CATEGORIES_MAP,
} from "./categories.action.types";

const INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};
export const CategoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesMap: payload,
        isLoading: false,
      };
    case FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
