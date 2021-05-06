import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductDetails from './screens/ProductDetails'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Footer />
    </Router>
  )
}

export default App
