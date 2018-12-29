import { takeEvery, call, put } from 'redux-saga/effects';

import { AUTH } from '../constans/typesAction';
import {
  authSingInAsync,
  authSignOutAsync,
  authSignUpAsync,
  addUserExtraInfo,
  getUserExtraInfo
} from '../services/authService';

export default function* authSaga() {
  yield takeEvery(AUTH.SIGN_IN_REQUEST, signIn);
  yield takeEvery(AUTH.SIGN_UP_REQUEST, signUp);
}

function* signIn(action) {
  try {
    const result = yield call(authSingInAsync, action.info);
    const userExtraInfo = yield call(getUserExtraInfo, result.user.uid);
    yield localStorage.setItem('userId', result.user.uid);
    yield put({
      type: AUTH.SIGN_IN_SUCCESS,
      info: { userId: result.user.uid, ...userExtraInfo }
    });
  } catch (error) {
    yield localStorage.setItem('userId', null);
    yield put({
      type: AUTH.SIGN_IN_FAILURE,
      info: {
        errorMessage: error.message
      }
    });
  }
}

function* signUp(action) {
  try {
    const userResponceInfo = yield call(authSignUpAsync, action.info);
    yield call(addUserExtraInfo, userResponceInfo.user.uid, action.info);
  } catch (error) {
    yield put({
      type: AUTH.SIGN_UP_FAILURE,
      info: { errorMessage: error.message }
    });
  }
}
