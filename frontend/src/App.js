import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminScreens from "./screens/AdminScreens";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import CollectionScreen from "./screens/CollectionScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/orders/:id" component={OrderScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/adim/userlist" component={AdminScreens} />
      <Route path="/admin/user/:id/edit" component={UserEditScreen} />
      <Route path="/admin/productlist" component={ProductListScreen} exact />
      <Route
        path="/admin/productlist/:pageNumber"
        component={ProductListScreen}
        exact
      />
      <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
      <Route path="/admin/orderlist" component={OrderListScreen} />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/search/:keyword" component={HomeScreen} exact />
      <Route path="/page/:pageNumber" component={HomeScreen} exact />
      <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} />
      <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} />
      <Route path="/collections/:value" component={CollectionScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
