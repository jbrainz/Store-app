import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductDetails from './screens/ProductDetails'
import CartScreen from './screens/CartScreen'
import RegisterScreen from './screens/Register'
import LoginScreen from './screens/Login'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/" component={HomeScreen} exact />
      <Footer />
    </Router>
  )
}

export default App
