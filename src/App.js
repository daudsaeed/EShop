import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
function App() {
  // How to show a fucking navbar now that display on every page
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
