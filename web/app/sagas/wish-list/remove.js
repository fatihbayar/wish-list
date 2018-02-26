import { takeLatest, put } from 'redux-saga/effects';

import {
  removeFromWishListSuccess
} from '../../actions/wish-list';

import {
  removeFromWishList,
} from '../../services/wish-list';

import {
  REMOVE_FROM_WISH_LIST,
} from '../../types/wish-list';


export default function* watcher() {
  yield takeLatest(REMOVE_FROM_WISH_LIST, function* ({ productId }) {
    try {
      yield removeFromWishList(productId);

      yield put(removeFromWishListSuccess(productId));
    } catch (error) {
      return error;
    }
  });
}