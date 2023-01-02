import { USER_ACTION_TYPES, USER_TYPE } from "./user-types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// User function NOTE: each action have all the types now
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.CHECK_USER_SESSION:
      return { ...state, isLoading: true };

    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, isLoading: false, currentUser: payload };

    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return { ...state, isLoading: false, error: null };

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, isLoading: false, currentUser: null };
    default:
      return state;
  }
};
