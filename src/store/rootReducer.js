import { combineReducers } from "redux";
import { CategoriesReducer } from "./categories/categories.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  category: CategoriesReducer,
});
