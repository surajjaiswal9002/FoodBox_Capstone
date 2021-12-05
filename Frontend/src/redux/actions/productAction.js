import * as actionTypes from "../Constants/productConstant";
import axios from "axios";

export const getProducts = () => async (dispatch) => {

  
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("http://localhost:8080/products/all");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const getProducts = () => async (dispatch , categories) => {
//   let url;
//   if(categories !== "all")
//   {
//     url='http://localhost:8080/products/searchbycategories/${categories}'
//   }
//   else{

//     url='http://localhost:8080/products/all'
//   }

  
//   try {
//     // dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

//     const  res  = await axios.get(url);

//     return  res.data
//     // dispatch({
//     //   type: actionTypes.GET_PRODUCTS_SUCCESS,
//     //   payload: data,
//     // });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_PRODUCTS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// }

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:8080/products/searchbyid/${id}`);

    dispatch({  
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};








export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};