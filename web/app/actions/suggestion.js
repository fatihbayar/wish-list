import {
  FETCH_SUGGESTIONS,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_FAILURE
} from "../types/suggestion";

export const fetchSuggestions = (searchValue) => {
  return {
    type: FETCH_SUGGESTIONS,
    searchValue
  };
};

export const fetchSuggestionsSuccess = (products) => {
  return {
    type: FETCH_SUGGESTIONS_SUCCESS,
    products
  };
};

export const fetchSuggestionsFailure = (error) => {
  return {
    type: FETCH_SUGGESTIONS_FAILURE,
    error: error
  };
};