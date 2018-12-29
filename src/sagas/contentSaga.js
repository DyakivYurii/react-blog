import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { CONTENT } from '../constans/typesAction';

export default function* contentSaga() {
  yield takeLatest(CONTENT.GET_ARTICLES_REQUEST, getArticlesAsync);
}

const addArticle = (listOfArticles, newAricles) => {
  const newListOfArticles = listOfArticles.slice();
  newListOfArticles.push(...newAricles);
  return newListOfArticles;
};

function* getArticlesAsync(action) {
  try {
    yield delay(1000);
    const result = addArticle(action.listOfArticles, [
      { id: 2, text: `Some text` }
    ]);
    yield put({
      type: CONTENT.GET_ARTICLES_SUCCESS,
      listOfArticles: result
    });
  } catch (error) {
    yield put({
      type: CONTENT.GET_ARTICLES_FAILURE,
      errorMessage: error.message
    });
  }
}
