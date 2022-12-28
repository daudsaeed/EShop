import createAction from "../../utils/reducer/reducer.util";
import { USER_TYPE } from "./user-types";

export const setCurrentUser = (user) =>
  createAction(USER_TYPE.SET_CURRENT_USER, user);
