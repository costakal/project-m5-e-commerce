import { combineReducers } from "redux";

import itemsReducer from "./items-reducer";
import cartReducer from './cart-reducer';
import companiesReducer from './companies-reducer';

export default combineReducers({ itemsReducer, cartReducer, companiesReducer });
