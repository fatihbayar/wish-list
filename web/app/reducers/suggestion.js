import {
  FETCH_SUGGESTIONS,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_FAILURE
} from "../types/suggestion";

const initialState = {
  list: [],
  fetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUGGESTIONS:
      return {
        ...initialState,
        fetching: true
      };

    case FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...initialState,
        list: action.products.map(product => {
          product.id = product.url.match(/(?=\w+\.\w{3,4}$).+/)[0].replace('.html', '');

          return product;
        }),
        fetching: false
      };

    case FETCH_SUGGESTIONS_FAILURE:
      return {
        ...initialState,
        fetching: false,
        error: action.error
      };

    default:
      return state;
  }
};