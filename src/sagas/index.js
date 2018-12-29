import { fork } from 'redux-saga/effects';

import authSaga from './authSaga';
import contentSaga from './contentSaga';

export default function* rootSaga() {
  yield [fork(authSaga), fork(contentSaga)];
}
