import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cart-reducer'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducerById,
} from './reducers/user-reducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrrderListReducer,
  orderListReducer,
  orderDeliverReducer,
} from './reducers/order-reducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  reviewReducer: productReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducerById,
  userDelete: userDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  myOrderList: myOrrderListReducer,
  orderList: orderListReducer,
})

const cartItemsFromStrorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStrorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStrorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const paymentMethodFromStrorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStrorage,
    shippingAddress: shippingAddressFromStrorage,
    paymentMethod: paymentMethodFromStrorage,
  },
  userLogin: { userInfo: userInfoFromStrorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
