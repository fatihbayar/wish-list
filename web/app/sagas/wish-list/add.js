import { takeLatest, put } from 'redux-saga/effects';

import {
  addToWishListSuccess
} from '../../actions/wish-list';

import {
  addToWishList,
} from '../../services/wish-list';

import {
  ADD_TO_WISH_LIST,
} from '../../types/wish-list';


export default function* watcher() {
  yield takeLatest(ADD_TO_WISH_LIST, function* ({ product }) {
    try {
      const newProduct = yield addToWishList(product);

      yield put(addToWishListSuccess(newProduct));
    } catch (error) {
      return error;
    }
  });
}