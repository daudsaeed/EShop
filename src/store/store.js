// import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./root-saga";

// root-reducer (combined reducer) => new file

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) return next(action);
//   console.log("type: ", action.type);
//   console.log(`Payload: ${action.payload}`);
//   console.log("Current State:", store.getState());

//   next(action);
//   console.log("Next State:", store.getState());
// };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistantReducer = persistReducer(persistConfig, rootReducer);
// const middleWares = [thunk, logger];

// const composedEnchaner =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION__) ||
//   compose;
// const composedEnchaners = composedEnchaner(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistantReducer,
//   undefined,
//   composedEnchaners
// );

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistantReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
