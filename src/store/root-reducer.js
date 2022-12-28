import { combineReducers } from "redux";
import { categoriesMapReducer } from "./categories/categories-reducer";

import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesMapReducer,
  cart: cartReducer,
});
