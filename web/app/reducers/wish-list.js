import {
  FETCH_WISH_LIST,
  FETCH_WISH_LIST_SUCCESS,
  FETCH_WISH_LIST_FAILURE,
  ADD_TO_WISH_LIST_SUCCESS,
  REMOVE_FROM_WISH_LIST
} from "../types/wish-list";

const initialState = {
  list: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISH_LIST:
      return {
        ...initialState
      };

    case FETCH_WISH_LIST_SUCCESS:
      return {
        ...initialState,
        list: action.products.map(product => {
          product.inWishList = true;

          return product;
        })
      };

    case FETCH_WISH_LIST_FAILURE:
      return {
        ...initialState,
        error: action.error
      };

    case ADD_TO_WISH_LIST_SUCCESS:
      state.list = [].concat(state.list, action.product);

      return {
        ...state,
        list: state.list
      };

    case REMOVE_FROM_WISH_LIST:
      const index = state.list.findIndex(product => product.id === action.productId);

      state.list.splice(index, 1);

      return {
        ...state,
        list: [].concat(state.list)
      };

    default:
      return state;
  }
};