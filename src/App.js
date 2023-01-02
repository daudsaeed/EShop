import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import {
  onAuthStateChangedListener,
  getCurrentUser,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.util";
import { checkUserSession, setCurrentUser } from "./store/user/user-action";

import Navigation from "./components/navigation/navigation";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
function App() {
  const dispatch = useDispatch(); // but there is only one dispatch in redux so its
  // upto the team to put dispatch in the dependencies array
  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) createUserDocumentFromAuth(user);
    //   dispatch(setCurrentUser(user));
    // });

    dispatch(checkUserSession());

    // return unsubscribe;
  }, []);

  // How to show a fucking navbar now that display on every page
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
