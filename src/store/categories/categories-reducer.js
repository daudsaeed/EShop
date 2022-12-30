import { CATEGORIES_ACTION_TYPE } from "./categories-types";

const INTIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesMapReducer = (state = INTIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
