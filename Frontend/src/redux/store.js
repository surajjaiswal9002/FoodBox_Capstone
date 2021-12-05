import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducer 
import { cartReducer } from './reducers/cartReducer'
import { getProductDetailsReducer, getProductsReducer, getSearchProductReducer } from './reducers/productReducer'

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getSearchProducts: getSearchProductReducer,


})

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;