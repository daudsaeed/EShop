import { USER_TYPE } from "./user-types";

const INITIAL_STATE = {
  currentUser: null,
};

// User function NOTE: each action have all the types now
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_TYPE.SET_CURRENT_USER:
      return { currentUser: payload };
    default:
      return state;
  }
};
