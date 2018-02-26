import {
  FETCH_WISH_LIST,
  FETCH_WISH_LIST_SUCCESS,
  FETCH_WISH_LIST_FAILURE,
  ADD_TO_WISH_LIST,
  ADD_TO_WISH_LIST_SUCCESS,
  REMOVE_FROM_WISH_LIST,
  REMOVE_FROM_WISH_LIST_SUCCESS
} from "../types/wish-list";

export const fetchWishList = () => {
  return {
    type: FETCH_WISH_LIST
  };
};

export const fetchWishListSuccess = (products) => {
  return {
    type: FETCH_WISH_LIST_SUCCESS,
    products
  };
};

export const fetchWishListFailure = (error) => {
  return {
    type: FETCH_WISH_LIST_FAILURE,
    error
  };
};

export const addToWishList = (product) => {
  return {
    type: ADD_TO_WISH_LIST,
    product
  };
};

export const addToWishListSuccess = (product) => {
  return {
    type: ADD_TO_WISH_LIST_SUCCESS,
    product
  };
};

export const removeFromWishList = (productId) => {
  return {
    type: REMOVE_FROM_WISH_LIST,
    productId
  };
};

export const removeFromWishListSuccess = (productId) => {
  return {
    type: REMOVE_FROM_WISH_LIST_SUCCESS,
    productId
  };
};