import { all, fork } from 'redux-saga/effects';

import suggestion from './suggestion';
import wishList from './wish-list';

export default function* () {
  yield all([
    fork(suggestion),
    fork(wishList)
  ]);
}