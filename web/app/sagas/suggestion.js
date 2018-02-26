import { takeLatest, put } from 'redux-saga/effects';

import {
  getSuggestions
} from '../services/suggestion';

import {
  FETCH_SUGGESTIONS
} from '../types/suggestion';

import {
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure
} from "../actions/suggestion";

export default function* watcher() {
  yield takeLatest(FETCH_SUGGESTIONS, function* ({ searchValue }) {
    try {
      const products = yield getSuggestions(searchValue);

      yield put(fetchSuggestionsSuccess(products));
    } catch (error) {
      yield put(fetchSuggestionsFailure(error));
    }
  });
}