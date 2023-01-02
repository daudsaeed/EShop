import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { CATEGORIES_ACTION_TYPE } from "./categories-types";
import createAction from "../../utils/reducer/reducer.util";

// export const setCategories = (categoryArray) =>
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoryArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     console.log("RAN >>>");
//     try {
//       const categoriesArray = await getCategoriesAndDocuments("categories");
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };
