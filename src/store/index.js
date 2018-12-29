import { createStore, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const initialState = {
  content: { listOfArticles: [], errorMessage: null },
  auth: {
    userId: null,
    email: '',
    firstName: '',
    secondName: '',
    errorMessage: null
  }
};

const sagaMiddelware = createSagaMiddelware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddelware)
);

sagaMiddelware.run(rootSaga);

export default store;
