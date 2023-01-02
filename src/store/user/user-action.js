import createAction from "../../utils/reducer/reducer.util";
import { USER_ACTION_TYPES } from "./user-types";

// export const USER_ACTION_TYPES = {
//   CHECK_USER_SESSION: "USER/CHECK_USER_SESSION",
//   SIGN_IN_SUCCESS: "USER/SIGN_IN_SUCCESS",
//   SIGN_IN_FAILED: "USER/SIGN_IN_FAILED",
//   GOOGLE_SIGN_IN_START: "USER/GOOGLE_SIGN_IN_START",
//   EMAIL_SIGN_IN_START: "USER/EMAIL_SIGN_IN_START",
// };
//

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const googleSignIn = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignIn = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signOut = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

export const signUp = (displayName, email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    displayName,
    email,
    password,
  });

export const signUpSuccess = (user, additionalData) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalData });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
