import { combineReducers } from "redux";

import itemsReducer from "./items-reducer";
import cartReducer from "./cart-reducer";
import companiesReducer from "./companies-reducer";
import categoriesReducer from "./categories-reducer";
import categoryReducer from "./category-reducer";

export default combineReducers({
  itemsReducer,
  cartReducer,
  companiesReducer,
  categoriesReducer,
  categoryReducer,
});
