import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// root-reducer (combined reducer) => new file

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) return next(action);
//   console.log("type: ", action.type);
//   console.log(`Payload: ${action.payload}`);
//   console.log("Current State:", store.getState());

//   next(action);
//   console.log("Next State:", store.getState());
// };

const middlewares = [logger];
const composedEnchaners = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnchaners);
