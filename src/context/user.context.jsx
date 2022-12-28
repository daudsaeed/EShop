import { createContext, useReducer, useEffect } from "react";

import createAction from "../utils/reducer/reducer.util";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: "",
  setCurrentUser: () => null,
});

const USER_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// User function
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_TYPE.SET_CURRENT_USER:
      return { currentUser: payload };
    default:
      throw new Error(`USER TYPE NOT FOUND ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_TYPE.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
