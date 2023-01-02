import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categories-action";
import { CATEGORIES_ACTION_TYPE } from "./categories-types";

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     console.log("RAN >>>");

//   };
// };

export function* fetchCategoriesStartAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesStartAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
