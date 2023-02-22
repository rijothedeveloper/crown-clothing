import { SET_CATEGORIES_MAP } from "./categories.types";

const INITIAL_STATE = {
  categoriesMap: {},
};
export const CategoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
