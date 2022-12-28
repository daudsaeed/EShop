import createAction from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPE } from "./categories-types";

export const setCategories = (categoryArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoryArray);
