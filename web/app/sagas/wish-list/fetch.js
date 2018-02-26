import { takeLatest, put } from 'redux-saga/effects';

import {
  fetchWishListSuccess,
  fetchWishListFailure
} from '../../actions/wish-list';

import {
  fetchWishList,
} from '../../services/wish-list';

import {
  FETCH_WISH_LIST,
} from '../../types/wish-list';


export default function* watcher() {
  yield takeLatest(FETCH_WISH_LIST, function* () {
    try {
      const list = yield fetchWishList();

      yield put(fetchWishListSuccess(list));
    } catch (error) {
      yield put(fetchWishListFailure(error));
    }
  });
}