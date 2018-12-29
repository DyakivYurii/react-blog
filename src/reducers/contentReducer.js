import { CONTENT } from '../constans/typesAction';

const initialState = { listOfArticles: [], errorMessage: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTENT.GET_ARTICLES_REQUEST: {
      console.log(`CONTENT.GET_ARTICLES_REQUEST`);
      return { ...state, errorMessage: null };
    }
    case CONTENT.GET_ARTICLES_SUCCESS: {
      console.log(`CONTENT.GET_ARTICLES_SUCCESS`);
      return { ...state, listOfArticles: action.listOfArticles };
    }
    case CONTENT.GET_ARTICLES_FAILURE: {
      console.log(`CONTENT.GET_ARTICLES_FAILURE`);
      return { ...state, errorMessage: action.errorMessage };
    }
    default: {
      return state;
    }
  }
};
