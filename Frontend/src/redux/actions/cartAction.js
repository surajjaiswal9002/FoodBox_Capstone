import * as actionTypes from "../Constants/cartConstant";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) =>{
    const {data} = await axios.get(`http://localhost:8080/products/searchbyid/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
          product: data.id,
          name: data.name,
          image: data.image,
          price: data.price,
          categories: data.categories,
          stocks: data.stocks,
          qty,
        },
      });
    
      localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));

};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };


  export const searchFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.SEARCH_FROM_CART,
      payload: id,
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };

  