import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Men from "./components/Men/Man";
import Women from "./components/Women/Women";
import Shop from "./components/Shop/Shop";
import Lookbook from "./components/Lookbook/Lookbook";
import SaleSection from "./components/SaleSection/SaleSection";
import OurStory from "./components/OurStory/OurStory";
import Contact from "./components/Contact/Contact";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Viewcart from "./components/Cart/Viewcart";
import Checkout from "./components/Cart/Checkout";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Auth/Logout";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import MyOrders from "./components/Orders/MyOrders";
import AdminOrders from "./components/Admin/AdminOrders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:page" element={<Shop />} />

      <Route path="/lookbook" element={<Lookbook />} />
      <Route path="/salesection" element={<SaleSection />} />
      <Route path="/ourstory" element={<OurStory />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/product" element={<ProductDetails />} />

      <Route path="/viewcart" element={<Viewcart />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/orders" element={<AdminOrders />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/logout" element={<Logout />} />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>404 – Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
