import { CATEGORIES_ACTION_TYPE } from "./categories-types";

const INTIAL_STATE = {
  categories: [],
};

export const categoriesMapReducer = (state = INTIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return {
        categories: payload,
      };

    default:
      return state;
  }
};
