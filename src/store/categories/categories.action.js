import { SET_CATEGORIES_MAP } from "./categories.types";

export const setCategoriesAction = (categoriesMap) => ({
  type: SET_CATEGORIES_MAP,
  payload: categoriesMap,
});
