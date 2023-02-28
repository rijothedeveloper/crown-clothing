import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  SET_CATEGORIES_MAP,
} from "./categories.action.types";

// export const setCategoriesAction = (categoriesMap) => ({
//   type: SET_CATEGORIES_MAP,
//   payload: categoriesMap,
// });

export const fetchCategoriesStart = () => ({
  type: FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesMap) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categoriesMap,
});

export const fetchCategoriesFailed = (error) => ({
  type: FETCH_CATEGORIES_FAILED,
  payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoryMap = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
