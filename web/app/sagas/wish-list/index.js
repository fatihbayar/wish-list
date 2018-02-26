import { all, fork } from 'redux-saga/effects';

import fetch from './fetch';
import add from './add';
import remove from './remove';

export default function* () {
  yield all([
    fork(fetch),
    fork(add),
    fork(remove)
  ]);
}